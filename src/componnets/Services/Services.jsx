import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaColumns } from "react-icons/fa";

const Services = () => {
          return (
                    <section id='services' className='bg-secondary dark:text-white dark:bg-slate-900'>
                              <div className='container py-10 lg:py-16 px-4'>
                                        <div className='text-center '>
                                                  <h2 className='text-3xl lg:text-5xl font-bold mb-5 relative'>SERVICES</h2>
                                                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, necessitatibus.</p>
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center mt-16 gap-10 text-center lg:text-left'>
                                                  <div className='dark:bg-blue-400 shadow-2xl py-16 px-10 rounded-xl'>
                                                            <MdPhoneIphone className='text-4xl mb-6 inline-block' />
                                                            <h1 className='text-3xl mb-4'>App Development</h1>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sed! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, alias!</p>

                                                  </div>
                                                  <div className='dark:bg-blue-400 shadow-2xl py-16 px-10 rounded-xl'>
                                                            <RiComputerLine className='text-4xl mb-6 inline-block' />
                                                            <h1 className='text-3xl mb-4'>Web App Development</h1>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sed! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, alias!</p>

                                                  </div>
                                                  <div className='dark:bg-blue-400 shadow-2xl py-16 px-10 rounded-xl'>
                                                            <MdOutlineSecurity className='text-4xl mb-6 inline-block' />
                                                            <h1 className='text-3xl mb-4'>Security</h1>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sed! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, alias!</p>

                                                  </div>
                                                  <div className='dark:bg-blue-400 shadow-2xl py-16 px-10 rounded-xl'>
                                                            <FaColumns className='text-4xl mb-6 inline-block' />
                                                            <h1 className='text-3xl mb-4'>UX Research</h1>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sed! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, alias!</p>

                                                  </div>
                                        </div>
                              </div>

                    </section>
          )
}

export default Services
