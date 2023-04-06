import React from 'react';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1e1e1e] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#77DD77]'>Skills</p>
                <p className='py-4'>These are some of the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8'>
                <div className='shadowmd shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='html icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadowmd shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='css icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadowmd shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='javascript icon' />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadowmd shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='node icon' />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='shadowmd shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt='mongodb icon' />
                    <p className='my-4'>Mongo DB</p>
                </div>
                <div className='shadowmd shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='react icon' />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;