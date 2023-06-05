import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-[90vh] bg-[#1e1e1e]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#fbfaf9]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#77DD77]'>Stephen Totten</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#fbfaf9]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#fbfaf9] py-4 max-w-[700px]'>Currently seeking entry-level web developer positions where I can add value to a team!</p>
                <div className='flex flex-row'>
                <Link to="about" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 mx-5 my-2 flex items-center hover:bg-[#77DD77] hover:border-[#77DD77]'>About Me 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span> 
                    </button>
                </Link>
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#77DD77] hover:border-[#77DD77]'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span> 
                    </button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Home