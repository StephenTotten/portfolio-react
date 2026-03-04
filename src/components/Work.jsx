import React from 'react'
import Aliciahb from '../assets/aliciahb.png'
import Dfwsps from '../assets/dfwsps.png'
import JonathonHammack from '../assets/jonathonhammack.png'
import PgaTour from '../assets/pgatour.png'
import Sorenson from '../assets/sorenson2.png'
import Presidio from '../assets/presidio3.png'
import Fdc from '../assets/fdc2.png'
import Soonercon from '../assets/soonercon.png'
import Wmata from '../assets/WMATA_Metro.png'
import BradfordHills from '../assets/bradfordhills.png'

const Work = () => {
    return (
        <div name='work' className='w-full text-gray-300 bg-gray-800'>
            <div className='max-w-[1200px] mx-auto p-4 flex flex-col w-full py-20'>
                <div className='flex flex-col md:flex-row gap-8'>
                    {/* Personal Projects Section */}
                    <div className='w-full md:w-1/2'>
                        <div className='pb-8'>
                            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#77DD77]'>Websites</p>
                            <p className='py-6 text-xl'>Check out some of the websites I've worked on or created.</p>
                        </div>
                        {/* Container */}
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <div
                                style={{ backgroundImage: `url(${Aliciahb})` }}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                <div className='opacity-0 group-hover:opacity-100 duration-300'>
                                    <span className='text-xl font-bold text-white tracking-wider'>
                                        Therapy Website
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href="https://aliciahb.com/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Visit
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{ backgroundImage: `url(${Dfwsps})` }}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                <div className='opacity-0 group-hover:opacity-100 duration-300'>
                                    <span className='text-xl font-bold text-white tracking-wider'>
                                        Business Website
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href="https://dfwsps.com">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Visit
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div
                                style={{ backgroundImage: `url(${JonathonHammack})` }}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                <div className='opacity-0 group-hover:opacity-100 duration-300'>
                                    <span className='text-xl font-bold text-white tracking-wider'>
                                        Portfolio Site
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href="https://jonathonhammack.com/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Visit
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{ backgroundImage: `url(${BradfordHills})` }}
                                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                                <div className='opacity-0 group-hover:opacity-100 duration-300'>
                                    <span className='text-xl font-bold text-white tracking-wider'>
                                        Apartment Website
                                    </span>
                                    <div className='pt-8 text-center'>
                                        <a href="https://www.bradford-hills.com/">
                                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                                Visit
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Collaboration Section */}
                    <div className='w-full md:w-1/2'>
                        <div className='pb-8'>
                            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#77DD77]'>Professional Collaboration</p>
                            <p className='py-6 text-xl'>These are some of the companies I have worked with.</p>
                        </div>
                        {/* Container */}
                        <div className='grid grid-cols-2 gap-6 text-center'>
                            <div className='hover:scale-110 duration-500'>
                                <img className='w-40 mx-auto' src={Presidio} alt='Presidio' />
                            </div>
                            <div className='hover:scale-110 duration-500'>
                                <img className='w-40 mx-auto' src={PgaTour} alt='PGA Tour' />
                            </div>
                            <div className='hover:scale-110 duration-500'>
                                <img className='w-40 mx-auto' src={Sorenson} alt='Sorenson' />
                            </div>
                            <div className='hover:scale-110 duration-500'>
                                <img className='w-40 mx-auto' src={Fdc} alt='FDC' />
                            </div>
                            <div className='hover:scale-110 duration-500'>
                                <img className='w-40 mx-auto' src={Soonercon} alt='Soonercon' />
                            </div>
                            <div className='hover:scale-110 duration-500'>
                                <img className='w-40 mx-auto max-h-[160px]' src={Wmata} alt='WMATA' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
