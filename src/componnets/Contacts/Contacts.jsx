import React from 'react'
import contactnpng from "../../assets/images/contact-us-removebg-preview.png"
import { SiMinutemailer } from "react-icons/si";

const Contacts = () => {
          return (
                    <section id='contact' className='bg-secondary dark:bg-stone-800 dark:text-white text-black'>
                              <div className='container py-10 lg:py-16 px-4'>
                                        <div className='text-center mb-10'>
                                                  <SiMinutemailer className='inline-block text-6xl' />
                                                  <h2 className='text-3xl lg:text-5xl font-bold mb-5 relative'>Contact Us</h2>
                                                  <p>Please fill this form in a decent manner</p>
                                        </div>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
                                                  <form className='text-center lg:text-left space-y-6 dark:text-black' >
                                                            <input type='text' placeholder='Your Name' className='inline-block w-full lg:w-2/3 h-12 p-4 rounded-lg' /> <br />
                                                            <input type='email' placeholder='Your Email' className='inline-blockblock w-full lg:w-2/3 h-12 p-4 rounded-lg' /> <br />
                                                            <textarea placeholder='Your Message' className='inline-blockblock w-full lg:w-2/3 h-24 p-4 rounded-lg resize-none  ' /><br />
                                                            <button type='submit' className='btn'>Submit</button><br />
                                                  </form>
                                                  <div className='mt-10 lg:-mt-10'>
                                                            <img src={contactnpng} alt="contact Photo" />
                                                  </div>

                                        </div>
                              </div>

                    </section>
          )
}

export default Contacts
