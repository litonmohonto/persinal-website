import React from 'react'
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
          return (
                    <section className='bg-secondary dark:bg-slate-800 dark:text-white px-4 '>
                              <div className='container py-10 lg:py-16'>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                                                  <div className='space-y-10'>
                                                            <div className='text-center relative'>
                                                                      <div className='flex justify-between mb-2 '>
                                                                                <div>
                                                                                          <FaHtml5 className='text-2xl' />
                                                                                          <h1 className='uppercase text-lg'>HTML</h1>
                                                                                </div>
                                                                                <p>90%</p>

                                                                      </div>
                                                                      <div className='w-full h-3 bg-slate-300 rounded-md relative flex justify-center items-center'></div>
                                                                      <div className=' absolute w-[90%] h-3 bg-primary rounded-s-md flex justify-center items-center bottom-0'></div>
                                                            </div>
                                                            <div className='text-center relative my-5'>
                                                                      <div className='flex justify-between mb-2 '>
                                                                                <div>
                                                                                          <FaCss3 className='text-2xl' />
                                                                                          <h1 className='uppercase text-lg'>css</h1>
                                                                                </div>
                                                                                <p>70%</p>

                                                                      </div>
                                                                      <div className='w-full h-3 bg-slate-300 rounded-md relative flex justify-center items-center'></div>
                                                                      <div className=' absolute w-[70%] h-3 bg-primary rounded-s-md flex justify-center items-center bottom-0'></div>
                                                            </div>
                                                            <div className='text-center relative my-5'>
                                                                      <div className='flex justify-between mb-2 '>
                                                                                <div>
                                                                                          <FaJs className='text-2xl' />
                                                                                          <h1 className='uppercase text-lg'>Javascrip</h1>
                                                                                </div>
                                                                                <p>60%</p>

                                                                      </div>
                                                                      <div className='w-full h-3 bg-slate-300 rounded-md relative flex justify-center items-center'></div>
                                                                      <div className=' absolute w-[60%] h-3 bg-primary rounded-s-md flex justify-center items-center bottom-0'></div>
                                                            </div>
                                                            <div className='text-center relative my-5'>
                                                                      <div className='flex justify-between mb-2 '>
                                                                                <div>
                                                                                          <FaReact className='text-2xl' />
                                                                                          <h1 className='uppercase text-lg'>react</h1>
                                                                                </div>
                                                                                <p>85%</p>

                                                                      </div>
                                                                      <div className='w-full h-3 bg-slate-300 rounded-md relative flex justify-center items-center'></div>
                                                                      <div className=' absolute w-[85%] h-3 bg-primary rounded-s-md flex justify-center items-center bottom-0'></div>
                                                            </div>
                                                            <div className='text-center relative my-5'>
                                                                      <div className='flex justify-between  mb-2'>
                                                                                <div>
                                                                                          <SiTailwindcss className='text-2xl' />
                                                                                          <h1 className='uppercase text-lg'>Tailwind</h1>
                                                                                </div>
                                                                                <p>75%</p>

                                                                      </div>
                                                                      <div className='w-full h-3 bg-slate-300 rounded-md relative flex justify-center items-center'></div>
                                                                      <div className=' absolute w-[75%] h-3 bg-primary rounded-s-md flex justify-center items-center bottom-0'></div>
                                                            </div>

                                                  </div>
                                                  <div className='relative font-bold mt-20'>
                                                            <div className='text-center text-6xl font-bold text-black/5 dark:text-white/10'>SKILLS</div>
                                                            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl'>Skills</h1>

                                                  </div>
                                        </div>
                              </div>

                    </section>
          )
}

export default Skills
