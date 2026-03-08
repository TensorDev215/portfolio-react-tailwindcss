import { ProjectBoxType, TextBoxType } from '../types'

export const ProjectList: ProjectBoxType[] = [
    { color: 'bg-[#0C3179]', icon: 'Monitor', title: 'Full-Stack', projectCount: 5 },
    { color: 'bg-[#733D96]', icon: 'Box', title: 'Backend Development', projectCount: 7 },
    { color: 'bg-[#72A0C3]', icon: 'Brain', title: 'AI Integration', projectCount: 12 }
]

export const hearderLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#workes', label: 'Workes' },
    { href: '#about', label: 'About Me' },
    { href: '#Information', label: 'Information' },
    { href: '#contact', label: 'Contact' }
]

export const TextBoxList: TextBoxType[] = [
    { count: 7, text: 'Years of experience' },
    { count: 25, text: 'Happy client' },
    { count: 78, text: 'Hours of support' },
    { count: 24, text: 'Projects' }
]

export const experiences = [
    {
        company: 'Ellipse Heath',
        title: 'Senior Full-Stack Developer',
        year: '03/2022 - Present',
        content:
            'Led the development of scalable web applications using React, Node.js, and PostgreSQL. Mentored junior developers and implemented CI/CD pipelines.'
    },
    {
        company: 'Bittensor',
        title: 'Frontend Developer',
        year: '10/2020 - 03/2022',
        content:
            'Built responsive, high-performance UI components using React and Tailwind CSS. Collaborated closely with designers to enhance UX/UI.'
    },
    {
        company: 'Net Solutions',
        title: 'Junior Developer',
        year: '4/2018 - 10/2020',
        content:
            'Developed dynamic web pages and maintained backend APIs using Node.js. Assisted in optimizing application performance.'
    }
]

export const blog_list = [
    {
        image: '/images/people/people_2.png',
        content:
            'Lorem ipsum dolor sit arn Lorem ipsum dolor sit maet consectetur. Habitant morbi scelerisque diam aliquet commoh dolor nisl ed dolor nisl sed.t',
        author: 'Tina Kirogjh',
        date: '2026-03-08'
    },
    {
        image: '/images/people/people_1.png',
        content:
            'Lorem ipsum dolor sit arn Lorem ipsum dolor sit maet consectetur. Habitant morbi scelerisque diam aliquet commoh dolor nisl ed dolor nisl sed.t',
        author: 'Tina Kirogjh',
        date: '2026-03-08'
    },
    {
        image: '/images/people/people_3.png',
        content:
            'Lorem ipsum dolor sit arn Lorem ipsum dolor sit maet consectetur. Habitant morbi scelerisque diam aliquet commoh dolor nisl ed dolor nisl sed.t',
        author: 'Tina Kirogjh',
        date: '2026-03-08'
    }
]

export const work_images = [
    '/images/work/work_1.png',
    '/images/work/work_2.png',
    '/images/work/work_3.png',
    '/images/work/work_4.png',
    '/images/work/work_5.png',
    '/images/work/work_1.png',
    '/images/work/work_2.png',
    '/images/work/work_3.png',
    '/images/work/work_4.png',
    '/images/work/work_5.png'
]
