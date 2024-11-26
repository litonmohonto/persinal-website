import React from 'react'

const About = () => {
          return (
                    <div id='about' className='dark:bg-slate-800 dark:text-white'>
                              <div className='container lg:h-[70] py-10 lg:py-20 ps-4'>
                                        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                                                  <div className='relative font-bold mb-20'>
                                                            <div className='text-center text-6xl font-bold text-black/5 dark:text-white/10'>ABOUT</div>
                                                            <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl'>About Me</h1>

                                                  </div>
                                                  <div>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, facere sint aliquam vel ipsa voluptatibus officia quae distinctio! Eaque vel rem, eum id accusamus cum optio, veritatis cupiditate sint molestias omnis dolores sapiente distinctio debitis. Minus temporibus asperiores natus tenetur repellendus numquam earum nam ex. Fuga quae odio quaerat reiciendis?</p> <br />
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dolor facere, natus harum neque fugiat architecto nisi delectus at possimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, atque. </p>
                                                            <a href="#" className='btn inline-block'>Download Resume</a>
                                                            <a href="#" className='bttn'>Contact</a>

                                                  </div>
                                        </div>
                              </div>

                    </div >
          )
}

export default About
