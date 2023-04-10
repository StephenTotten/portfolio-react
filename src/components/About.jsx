import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#1e1e1e] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#77DD77]'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Stephen. Nice to meet you! Take a look around and let's collaborate.</p>
                    </div>
                    <div>
                        <p className='font-bold'>I graduated from Full-Stack Flex Coding Bootcamp in March of 2023 from the University of Texas at Austin. I also have a Bachelor of Arts in Radio/TV/Film from the University of North Texas, graduated 2006. Media and accessibility are important to me, and I try to incorporate those thought processes into coding. After 14+ years working for a non-profit providing closed-captions for live TV, I decided to attend web dev bootcamp, where I fell in love with coding.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About