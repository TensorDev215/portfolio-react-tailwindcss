import { ThemeProvider } from './context/ThemeProvider'
import routes from './routes'
import { RouterProvider } from 'react-router-dom'

export default function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={routes} />
        </ThemeProvider>
    )
}
