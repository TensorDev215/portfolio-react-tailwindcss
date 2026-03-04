import Hero from './sections/Hero'
import Service from './sections/Service'

const Home = () => {
    return (
        <main className='w-full'>
            <section id='hero' className='min-h-screen'>
                <Hero />
            </section>
            <section id='service'>
                <Service />
            </section>
        </main>
    )
}

export default Home
