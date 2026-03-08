import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='p-5 lg:px-96 lg:py-20 flex flex-col gap-8'>
            <h2 className='font-inter font-bold text-3xl'>
                Let's get Work <span className='text-red-500'>Together.</span>
            </h2>
            <p className=' font-inter text-base font-normal text-gray-500'>
                Feel free to reach out ot discuss your ideas or projects, of if you have any inquiries. I'm here to help
                and collaborate with you!
            </p>
            <div className='flex flex-col gap-4 font-inter text-sm'>
                <a className='flex items-center gap-3'>
                    <Mail className='h-4 w-4' />
                    ansilrahman777@gmail.com
                </a>
                <a className='flex items-center gap-3'>
                    <Phone className='h-4 w-4' />
                    +1 123 456 7890
                </a>
                <a className='flex items-center gap-3'>
                    <MapPin className='h-4 w-4' />
                    United States
                </a>
            </div>
            <div className='flex gap-4'>
                <a>
                    <Github />
                </a>
                <a>
                    <Linkedin />
                </a>
                <a>
                    <Twitter />
                </a>
            </div>
        </footer>
    )
}

export default Footer
