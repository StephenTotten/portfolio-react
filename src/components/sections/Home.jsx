import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import ScrollButton from '../ui/ScrollButton'

const Home = () => {
    return (
        <div name='home' className='w-full h-[75vh] bg-[#1e1e1e]'>

            {/* Container */}
            <div className='max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#fbfaf9]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#77DD77]'>Stephen Totten</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#fbfaf9]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#fbfaf9] py-4 max-w-[700px]'>If you need a website or web application, send me a message!</p>
                <div className='flex flex-row'>
                    <ScrollButton to='about'>
                        About Me
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </ScrollButton>
                    <ScrollButton to='work'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </ScrollButton>
                </div>
            </div>
        </div>
    )
}

export default Home