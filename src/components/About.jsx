import React from 'react'
import Stevo from '../assets/Me2Pro.png'

const About = () => {
    return (
        <div name='about' className='w-full h-[40rem] bg-gray-800 text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'> 
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#77DD77]'>About</p>
                    </div>
                </div>

                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 w-40 mx-auto border-4 border-[#77DD77]' src={Stevo} alt='self-portrait'></img>
                    </div>
                    <div>
                        <p className='font-bold'>Hi, I'm Stephen! Nice to meet you. I graduated from Full-Stack Flex Coding Bootcamp in March of 2023 from the University of Texas at Austin. I also have a Bachelor of Arts in Radio/TV/Film from the University of North Texas, graduated 2006. Media and accessibility are important to me, and I try to incorporate those thought processes into coding. After 14+ years working for a non-profit providing closed-captions for live TV, I decided to attend web dev bootcamp, where I fell in love with coding.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About