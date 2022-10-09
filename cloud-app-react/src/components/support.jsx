import React from 'react'
import supportImg from '../assets/support.jpg'
import { PhoneIcon, ArrowSmRightIcon, Adjustments } from '@heroicons/react/outline'
export default function Support() {
    return (
        <div className='w-full h-screen mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img src={supportImg} alt="" className='w-full h-full object-cover mix-blend-overlay'/>
            </div>
            <div className='max-width[1240px] mx-auto text-white relative'>
                
                <div className='px-4 py-12'>
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                                <PhoneIcon className="w-16 h-15 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>

                            <h3>Sales</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                        <div>
                            <p>Contact Us</p>
                           <ArrowSmRightIcon className='w-5 ml-2'/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
