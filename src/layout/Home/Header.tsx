import { useState } from 'react'
import Logo from '../../components/Logo'
import { hearderLinks } from '../../constants/data'
import { Download } from 'lucide-react'
import { Menu } from 'lucide-react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='w-full fixed top-0 bg-transparent z-50'>
            <div className='max-w-1440 mx-auto px-5 md:px-28 py-4 flex items-center justify-between'>
                <a href='#hero'>
                    <Logo />
                </a>
                <nav className='hidden lg:flex gap-2 xl:gap-8 text-white font-medium'>
                    {hearderLinks.map(link => (
                        <a
                            href={link.href}
                            className='font-inter font-semibold text-white no-underline hover:text-blue-600 transition'
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className='hidden lg:block'>
                    <a
                        href='/resume/resume.pdf'
                        download
                        className='bg-black font-inter font-bold text-white text-sm no-underline px-4 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-3'
                    >
                        <Download className='w-5 h-5' />
                        Download CV
                    </a>
                </div>

                {/* Mobile Button */}
                <button className='lg:hidden text-white bg-transparent border-0' onClick={() => setIsOpen(!isOpen)}>
                    <Menu className='w-5 h-5' />
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='lg:hidden transition-all duration-300 bg-blue-900 h-screen px-6 pb-4 space-y-4 flex flex-col pt-5'>
                    {hearderLinks.map(link => (
                        <a
                            href={link.href}
                            className='font-inter font-semibold block py-5 text-center text-white hover:text-blue-600 transition hover:bg-white no-underline'
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href='/resume/resume.pdf'
                        download
                        className='bg-black font-inter font-bold text-white text-sm no-underline justify-center py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-3'
                    >
                        <Download className='w-5 h-5' />
                        Download CV
                    </a>
                </div>
            )}
        </header>
    )
}

export default Header
