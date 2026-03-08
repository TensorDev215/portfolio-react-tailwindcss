import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Service from './sections/Service'
import Work from './sections/Work'

const Home = () => {
    return (
        <main className='w-full'>
            <section id='hero' className='min-h-screen'>
                <Hero />
            </section>
            <section id='services'>
                <Service />
            </section>
            <section id='experience'>
                <Experience />
            </section>
            <section id='workes'>
                <Work />
            </section>
            <section id='about'>
                <About />
            </section>
        </main>
    )
}

export default Home
