import React from 'react'
import GitLife from '../assets/gitlife.png'
import FlashFacts from '../assets/flashfacts.png'
import CodeGame from '../assets/codegame.png'
import PgaTour from '../assets/pgatour.png'
import Sorenson from '../assets/sorenson2.png'
import Presidio from '../assets/presidio3.png'
import Fdc from '../assets/fdc2.png'
import Soonercon from '../assets/soonercon.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-gray-800'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#77DD77]'>Personal Projects</p>
                    <p className='py-6'>Check out some of my own projects, created with a team.</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${GitLife})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                React/MongoDB JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://git-your-life-together.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/JessicaIOrtega/Git-your-life-together-">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${FlashFacts})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Third Party API JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://stephentotten.github.io/flashcard-app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/StephenTotten/flashcard-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${CodeGame})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Front-End JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://stephentotten.github.io/UTA-BC4-QuizGame/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/StephenTotten/UTA-BC4-QuizGame">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='pb-8  py-6'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#77DD77]'>Professional Collaboration</p>
                    <p className='py-6'>These are some of the companies I have worked with.</p>
                </div>
                {/* Container */}
                <div className='w-full grid grid-rows-3 sm:grid-cols-3 gap-6 text-center'>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={Presidio} alt='node icon' />
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={PgaTour} alt='mongodb icon' />
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={Sorenson} alt='react icon' />
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={Fdc} alt='react icon' />
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-40 mx-auto' src={Soonercon} alt='react icon' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work