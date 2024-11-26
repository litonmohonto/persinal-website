import React from 'react'

const Footer = () => {
          return (
                    <div>
                              <footer className="dark:bg-slate-950  bg-secondary dark:text-white text-black py-10">
                                        <div className="container mx-auto text-center">
                                                  <p className="text-sm">
                                                            © 2024 <span className="font-semibold">Liton Wev Developer</span>. All Rights Reserved.
                                                  </p>
                                                  <div className="mt-2 flex justify-center space-x-4">
                                                            <a
                                                                      href="https://github.com/litonmohonto"
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="text-teal-400 hover:text-teal-300 transition duration-300"
                                                            >
                                                                      GitHub
                                                            </a>
                                                            <a
                                                                      href="https://linkedin.com/in/yourusername"
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="text-teal-400 hover:text-teal-300 transition duration-300"
                                                            >
                                                                      LinkedIn
                                                            </a>
                                                  </div>
                                        </div>
                              </footer>

                    </div>
          )
}

export default Footer
