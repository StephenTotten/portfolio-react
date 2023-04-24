import React from 'react'
import GitLife from '../assets/gitlife.png'
import FlashFacts from '../assets/flashfacts.png'
import BudgetBuddy from '../assets/budgetbuddy.png'
import TechBlog from '../assets/techblog.png'
import EmpTrack from '../assets/nodeemptrack.png'
import CodeGame from '../assets/codegame.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-gray-800'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#77DD77]'>Projects</p>
                    <p className='py-6'>Check out some of my recent projects.</p>
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
                        style={{ backgroundImage: `url(${BudgetBuddy})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Handlebars/MySQL JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://financial-planner-uta-bc.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Crothos/financial-planner">
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
                                <a href="https://crothos.github.io/flashcard-app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Crothos/flashcard-app">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${TechBlog})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Full-Stack JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://bc14-tech-blog.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Crothos/UTA-BC14-Tech-Blog">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${EmpTrack})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2x1 font-bold text-white tracking-wider'>
                                Node.js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/Crothos/UTA-BC12-EmployeeTracker/blob/main/README.md">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Crothos/UTA-BC12-EmployeeTracker">
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
                                <a href="https://crothos.github.io/UTA-BC4-QuizGame/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/Crothos/UTA-BC4-QuizGame">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work