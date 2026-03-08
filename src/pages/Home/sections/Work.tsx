import { useState } from 'react'
import { work_images } from '../../../constants/data'
import { ArrowRight, ArrowLeft } from 'lucide-react'

const Work = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const prevSlide = () => {
        setCurrentIndex(prev => {
            if (prev === 0) return prev
            return prev - 1
        })
    }
    const nextSlide = () => {
        setCurrentIndex(prev => {
            console.log(prev)
            if (prev === work_images.length - 1) return prev
            return prev + 1
        })
    }

    return (
        <div className='max-w-1440 mx-auto py-10 items-center'>
            <h1 className='font-inter font-bold text-3xl text-center'>My Latest Works</h1>
            <div className='text-right'>
                <a
                    href='https://github.com/TensorDev215'
                    target='_black'
                    className='font-inter font-normal text-base md:text-xl text-red-500 pr-24'
                >
                    Explore more Works
                </a>
            </div>
            <p className='font-inter font-normal text-sm md:text-base pl-24'>Lorem ipsum dolor sit amet</p>
            <div
                className='py-16 flex gap-8 transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
                {work_images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className='rounded-3xl border-solid border border-blue-900 w-full sm:w-1/2 md:w-1/3 aspect-square object-cover'
                    />
                ))}
            </div>
            <div className='flex gap-10 justify-center'>
                <a onClick={prevSlide} className='cursor-pointer'>
                    <ArrowLeft className='w-8 h-8 p-1 bg-purple-700 text-white rounded-full' />
                </a>
                <a onClick={nextSlide} className='cursor-pointer'>
                    <ArrowRight className='w-8 h-8 p-1 bg-purple-700 text-white rounded-full' />
                </a>
            </div>
        </div>
    )
}

export default Work
