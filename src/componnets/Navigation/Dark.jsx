import React, { useEffect, useState } from 'react'
import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

const Dark = () => {
          const [opne, setOpen] = useState();
          const ontoggol = () => {
                    setOpen(!opne)
          }
          const [theem, setTheem] = useState(localStorage.getItem('theem') ? localStorage.getItem('theem') : 'light')
          const element = document.documentElement;
          useEffect(() => {
                    if (theem === 'dark') {
                              element.classList.add('dark');
                              localStorage.setItem('theem', 'dark');
                    } else {
                              element.classList.remove('dark');
                              localStorage.setItem('theem', 'light');
                    }
          }, [theem])
          return (
                    <div onClick={ontoggol} >
                              <div onClick={() => { setTheem(theem === 'dark' ? 'light' : 'dark') }}>

                                        {opne ? <FaMoon className='text-xl ' /> : <LuSun className='text-xl ' />}
                              </div>

                    </div>
          )
}

export default Dark
