import { type Theme } from '../types'
import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'
import { useSessionStorage } from 'usehooks-ts'

interface ThemeContext {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useSessionStorage<Theme>('theme', 'light')

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html')?.classList.add('dark')
        } else {
            document.querySelector('html')?.classList.add('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = useMemo(
        () => ({
            theme,
            toggleTheme
        }),
        [theme]
    )

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider')
    }

    return context
}
