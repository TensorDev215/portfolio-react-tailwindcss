import { ComponentType } from 'react'
import { ProjectBoxType } from '../../types'
import * as Icons from 'lucide-react'

const ProjectBox = ({ project }: { project: ProjectBoxType }) => {
    const IconComponent = Icons[project.icon] as ComponentType<{ className?: string }>

    return (
        <div className='p-6 bg-white shadow-md rounded-lg flex items-center space-x-4'>
            <div className={`${project.color} rounded-full flex items-center justify-center text-2xl p-4 text-white`}>
                <IconComponent className='w-5 h-5' />
            </div>
            <div className='flex flex-col'>
                <h3 className='font-inter font-bold text-2xl'>{project.title}</h3>
                <p className='font-normal font-inter text-base text-gray-500'>{project.projectCount} Projects</p>
            </div>
        </div>
    )
}

export default ProjectBox
