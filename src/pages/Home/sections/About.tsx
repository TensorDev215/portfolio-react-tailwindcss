import BlogCard from '../../../components/BlogCard'
import { blog_list } from '../../../constants/data'

const About = () => {
    return (
        <div className='bg-[#F8F7F1]'>
            <div className='max-w-1440 flex flex-col gap-11 mx-auto text-center py-6'>
                <h2 className='font-inter font-bold text-3xl'>People Talk About Me</h2>
                <p className='font-inter font-normal text-base tracking-wider px-10 lg:px-72 '>
                    Lorem ipsum dolor sit am Lorem ipsum dolor sit amet consectetur. Habitant morbi scelerisque diam
                    aliquet commoh dolor nisil sed. t
                </p>
                <div className='px-10 py-12 grid grid-cols-1 xl:grid-cols-3 items-start gap-x-16 gap-y-24'>
                    {blog_list.map((blog, index) => {
                        let marginTop = 'mt-0'
                        if (index % 3 === 0) marginTop = 'xl:mt-48'
                        if (index % 3 === 2) marginTop = 'xl:mt-48'

                        return (
                            <div key={index} className={`${marginTop} flex justify-center`}>
                                <BlogCard blog={blog} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About
