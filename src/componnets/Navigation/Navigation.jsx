import React, { useState } from 'react'
import navlinks from '../../data'
import Dark from './Dark'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
navlinks

const Navigation = () => {
          const [opne, setOpen] = useState(false)
          const toggol = () => {
                    setOpen(!opne)
          }
          return (
                    <nav className='bg-secondary dark:bg-gray-700 dark:duration-300 dark:text-white text-black drop-shadow-md sticky top-0 z-50'>
                              <div className='container'>
                                        <div className='flex justify-between items-center py-2 lg:py-4 gap-6 px-2'>
                                                  <div>
                                                            <a href="#" className='text-2xl md:text-4xl font-bold text-primary'>Liton Developer</a>
                                                  </div>
                                                  <div className='hidden lg:block '>
                                                            <ul className='flex  space-x-8 items-center'>
                                                                      {navlinks.map((navLink) => {
                                                                                return (
                                                                                          <li key={navLink.id}>
                                                                                                    <a href={navLink.link} className='text-xl  hover:text-primary duration-300  font-semibold capitalize scroll-smooth' > {navLink.name}</a>
                                                                                          </li>
                                                                                )
                                                                      })}
                                                                      <Dark />
                                                            </ul>



                                                  </div>

                                                  <div className='block lg:hidden ms-24'>
                                                            <Dark />
                                                  </div>
                                                  <div onClick={toggol} className='block lg:hidden text-2xl font-semibold'>
                                                            {opne ?
                                                                      <IoMdClose /> : <RiMenu3Line />
                                                            }
                                                  </div>
                                        </div>
                                        {
                                                  opne && (
                                                            <div className=' z-20 absolute top-16 right-0 left-0 bg-secondary shadow-md rounded-b-xl py-10 dark:bg-gray-900 lg:hidden'>
                                                                      <ul className='flex flex-col items-center gap-6 '>
                                                                                {navlinks.map((navLink) => {
                                                                                          return (
                                                                                                    <li key={navLink.id}>
                                                                                                              <a href={navLink.link} className='text-xl hover:text-primary duration-300  font-semibold capitalize' > {navLink.name}</a>
                                                                                                    </li>
                                                                                          )
                                                                                })}

                                                                      </ul>

                                                            </div>
                                                  )
                                        }
                              </div>

                    </nav >
          )
}

export default Navigation
