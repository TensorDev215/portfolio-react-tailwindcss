import { experiences } from '../../../constants/data'

const Experience = () => {
    return (
        <div className='bg-[#F8F7F1]'>
            <div className='max-w-1440 mx-auto px-4 py-16 '>
                <h2 className='font-inter text-3xl font-bold text-gray-800 mb-12 text-center'>My Work Experience</h2>

                <div className='relative'>
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full'></div>

                    {experiences.map((exp, index) => {
                        const isLeft = index % 2 === 0
                        return (
                            <div key={index} className='mb-12 flex flex-col md:flex-row items-center relative'>
                                <div className='w-6 h-6 bg-blue-500 rounded-full absolute z-10 left-1/2 transform -translate-x-1/2'></div>
                                <div
                                    className={`font-inter z-20 md:w-1/2 md:pr-8 ${
                                        isLeft ? 'text-right md:text-right' : 'md:order-2 md:pl-8 text-left'
                                    }`}
                                >
                                    <h3 className='font-semibold text-black text-lg'>{exp.company}</h3>
                                    <p className='text-gray-500 text-sm mt-2'>{exp.year}</p>
                                </div>
                                <div className={`md:w-1/2 mt-4 md:mt-0 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
                                    <div className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'>
                                        <h3 className='font-inter font-semibold text-black text-xl'>{exp.title}</h3>
                                        <p className='font-inter mt-2 text-gray-600 text-xs'>{exp.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience
