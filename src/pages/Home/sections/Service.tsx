import ProjectBox from '../../../components/ProjectBox'
import { ProjectList, TextBoxList } from '../../../constants/data'
import { TextBoxType } from '../../../types'

const TextBox = ({ content }: { content: TextBoxType }) => {
    return (
        <div>
            <h1 className='font-inter text-5xl text-red-500'>{content.count}+</h1>
            <p className='font-inter text-lg uppercase'>{content.text}</p>
        </div>
    )
}

const Service = () => {
    return (
        <div className='flex max-w-1440 m-auto p-5 lg:p-28 flex-col md:flex-row justify-start gap-6 lg:gap-36'>
            <div className='flex flex-col gap-6'>
                {ProjectList.map(project => {
                    return <ProjectBox project={project} key={project.title} />
                })}
            </div>
            <div className='flex flex-col gap-3 md:gap-6 pr-5 md:pr-48'>
                <h2 className='font-inter text-4xl'>What do I help you ?</h2>
                <p className='font-inter text-2x1'>
                    Lorem ipsum dolor sit amet consectetur. Nunc lacus elit elmentum aligquet Lorem ipsum dolor ist amet
                    coectetur. Nnc lacus elit elmentum aliquet
                </p>
                <p className='font-inter text-2x1'>
                    Lorem ipsum dolor sit amet consectetur. Nunc lacus elit elmentum aligquet Lorem ipsum dolor ist amet
                    coectetur.
                </p>
                <div className='flex flex-col gap-5 md:flex-row justify-start md:gap-10'>
                    {TextBoxList.map(content => {
                        return <TextBox content={content} key={content.text} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service
