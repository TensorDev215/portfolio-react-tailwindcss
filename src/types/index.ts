import { ReactNode } from 'react'
import * as Icons from 'lucide-react'

type IconName = keyof typeof Icons

export type Theme = 'light' | 'dark'

export interface ProjectBoxType {
    color: string
    icon: IconName
    title: string
    projectCount: number
}

export interface TextBoxType {
    count: number
    text: string
}

export interface BlogType {
    image: string
    content: string
    author: string
    date: string
}
