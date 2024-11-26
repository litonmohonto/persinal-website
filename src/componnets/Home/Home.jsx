import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import pmg from '../../assets/images/home.png'


const Home = () => {
          return (
                    <div className='bg-secondary dark:bg-gray-900 dark:text-white text-black '>
                              <div className='container h-full  lg:h-[800px]'>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20 py-16'>
                                                  <div className='text-center lg:text-left'>
                                                            <h1 className=' uppercase text-lg text-primary'>WellCome To My Word</h1>
                                                            <h2 className='text-3xl lg:text-5xl  font-bold  my-3'>Hi , I'm<span className='text-desingColor'>Liton Mohont</span></h2>
                                                            <TypeAnimation className='font-bold my-2 text-primary'
                                                                      sequence={[
                                                                                'Front End Developer',
                                                                                1000,
                                                                                'Web Developer',
                                                                                1000,
                                                                                'Back End Developer',
                                                                                1000,
                                                                                'Full Stack Developer',
                                                                                1000,

                                                                      ]}
                                                                      wrapper="span"
                                                                      speed={50}
                                                                      style={{ fontSize: '2em', display: 'inline-block' }}
                                                                      repeat={Infinity}
                                                            />
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloribus ab voluptatibus error repellat fugit ipsa adipisci id corrupti rem esse maxime laborum nostrum! Vel pariatur quod totam dolorem? Impedit.</p>
                                                            <button className='btn'>Click Me</button>


                                                  </div>
                                                  <div className='mx-auto  '>
                                                            {/* <div className='absolute top-16 right-30 w-[500px] h-[500px]  bg-primary z-0 rounded-xl '></div> */}
                                                            <img src={pmg} alt="photo" className='z-20' />

                                                  </div>
                                        </div>
                              </div>

                    </div>
          )
}

export default Home
