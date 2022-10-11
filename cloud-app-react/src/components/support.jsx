import React from 'react'
import supportImg from '../assets/support.jpg'
import { PhoneIcon, ArrowSmRightIcon, SupportIcon, ChipIcon } from '@heroicons/react/outline'
export default function Support() {
    return (
        <div name="support" className='w-full mt-24'>
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

                            <h3 className='font-bold text-2xl my-6'>Sales</h3>
                            <p className='text-gray-600 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                           

                        </div>
                    </div> 
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                                <SupportIcon className="w-16 h-15 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>

                            <h3 className='font-bold text-2xl my-6'>Technical Support</h3>
                            <p className='text-gray-600 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                           

                        </div>
                    </div> 
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                                <ChipIcon className="w-16 h-15 bg-indigo-600 text-white rounded-lg mt-[-4rem]"/>

                            <h3 className='font-bold text-2xl my-6'>Media Inquiries</h3>
                            <p className='text-gray-600 text-xl'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Contact Us <ArrowSmRightIcon className='w-5 ml-2'/></p>
                           

                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
