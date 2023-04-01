import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#1e1e1e]'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#fbfaf9]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#bbb4ab]'>Stephen Totten</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#fbfaf9]'>I'm a Full Stack Developer.</h2>
                <p className='text-[#fbfaf9] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, pariatur provident quia architecto quas ipsum numquam, neque, assumenda voluptates sequi error non velit nobis quo ad? Commodi quo rem modi!</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#bbb4ab] hover:border-[#bbb4ab]'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                    </span> 
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Home