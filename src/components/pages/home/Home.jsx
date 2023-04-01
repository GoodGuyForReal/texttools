import React from 'react'
import Cta from './sections/cta/Cta'
import Feature from './sections/feature/Feature'
import Hero from './sections/hero/Hero'

const Home = () => {
    return (
        <div>
            <div className='HeroSection bg-slate-900'>
                <Hero />
                <Feature />
                <Cta />
            </div>
        </div>
    )
}

export default Home