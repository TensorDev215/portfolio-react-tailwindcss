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
    { href: '#workers', label: 'Workers' },
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
