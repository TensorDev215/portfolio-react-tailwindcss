import { BlogType } from '../../types'

const BlogCard = ({ blog }: { blog: BlogType }) => {
    return (
        <div className='bg-[linear-gradient(180deg,#CCCCCC_43%,#BCBCBC_90%)] rounded-2xl shadow-md p-6 max-w-md mx-auto'>
            <div className='flex justify-center -mt-24'>
                <img src={blog.image} alt='Blog' className='w-28 h-28 rounded-full object-cover border border-black' />
            </div>

            <p className='mt-4 text-gray-700 font-inter text-base text-center'>{blog.content}</p>

            <div className='mt-4 mb-4 border border-gray-700 w-1/2 mx-auto'></div>

            <p className='flex justify-center gap-4 text-gray-500 text-sm font-inter'>
                <span>{blog.author}</span>
            </p>
            <p className='flex justify-center gap-4 text-gray-500 text-sm font-inter'>
                <span>{blog.date}</span>
            </p>
        </div>
    )
}

export default BlogCard
