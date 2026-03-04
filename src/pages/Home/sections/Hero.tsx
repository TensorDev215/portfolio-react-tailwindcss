const Hero = () => {
    return (
        <div className='h-screen hero-gradient'>
            <div className='relative max-w-1440 mx-auto px-5 md:px-28 text-white h-full'>
                <h2 className='absolute top-[310px] md:top-[210px] font-lemon text-[40px] sm:text-[80px] font-normal tracking-wider lg:w-1/2'>
                    Hey There
                    <br /> Iam Andrew
                </h2>
                <p className='absolute top-[70px] sm:top-[100px] lg:top-[166px] lg:right-[83px] font-inika text-2xl font-normal tracking-widest lg:w-96'>
                    Lorem ipsum dolor sit amet consecteur. Nunc lacus elit elelmtum aligquet
                </p>
                <div className='absolute top-[500px] sm:top-[550px] md:top-[651px] sm:left-[96px] flex gap-6'>
                    <h3 className='font-inter font-bold text-7xl -tracking-widest'>10</h3>
                    <p className='font-inter font-normal text-3xl'>
                        year
                        <br />
                        experiences
                    </p>
                </div>
                <img
                    src='/images/avatar-backeground-pink.png'
                    alt='back-pink'
                    className='absolute left-1/2 -translate-x-1/2 bottom-0 top-auto sm:right-36 sm:left-auto sm:translate-x-0  w-[55%]'
                />
                <img
                    src='/images/avatar-backeground-blue.png'
                    alt='back-blue'
                    className='absolute left-1/2 -translate-x-1/2 bottom-0 top-auto sm:right-40 sm:left-auto sm:translate-x-0  w-[55%]'
                />

                <img
                    src='/images/avatar.png'
                    alt='Avatar'
                    className='absolute left-1/2 -translate-x-1/2 bottom-0 top-auto sm:right-72 sm:left-auto sm:translate-x-0 w-[30%]'
                />
            </div>
        </div>
    )
}

export default Hero
