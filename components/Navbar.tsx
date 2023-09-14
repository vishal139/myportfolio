import Link from 'next/link'
import React, { useState } from 'react'

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {

  const [showSideMenu, setShowSideMenu] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const handleMenuClick = () => {
    console.log('clicked')
    setShowSideMenu((prev)=>!prev);
  }
  const hideMenu = () => {
    setShowSideMenu(false);
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[50] top-0 left-0' style={{ backgroundColor: `${navBg}` }}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <h2 className='cursor-pointer text-[#273c75]'>VISHAL</h2>
        <div>
          <ul className='hidden md:flex text-[#273c75]'>
            <Link href='#main_page'>
              <li className='ml-10 text-md uppercase hover:border-b-2'>Home</li>
            </Link>
            <Link href='#about_page'>
              <li className='ml-10 text-md uppercase hover:border-b-2'>About</li>
            </Link>
            <Link href='#skill_page'>
              <li className='ml-10 text-md uppercase hover:border-b-2'>Skills</li>
            </Link>
            <Link href='#experience_page'>
              <li className='ml-10 text-md uppercase hover:border-b-2'>Experience</li>
            </Link>
            <Link href='#project_page'>
              <li className='ml-10 text-md uppercase hover:border-b-2'>Projects</li>
            </Link>
          </ul>
          <div className='md:hidden' onClick={handleMenuClick}>
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>

      {/* mobile manu */}

      <div className={
        showSideMenu ? 'fixed left-0 top-0 w-full h-screen bg-black/50 md:hidden' : ''
      }>
        <div className={
          showSideMenu ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f5f6fa] p-10 ease-in duration-300'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-300'
        }>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-[#273c75]' onClick={hideMenu}>VISHAL</h2>
            <div className='rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2' onClick={handleMenuClick}>
              <AiOutlineClose />
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='#main_page' onClick={hideMenu}>
                <li className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='#about_page' onClick={hideMenu}>
                <li className='py-4 text-sm'>About</li>
              </Link>
              <Link href='#skill_page' onClick={hideMenu}>
                <li className='py-4 text-sm'>Skill</li>
              </Link>
              <Link href='#experience_page' onClick={hideMenu}>
                <li className='py-4 text-sm'>Experience</li>
              </Link>
              <Link href='#project_page' onClick={hideMenu}>
                <li className='py-4 text-sm'>Projects</li>
              </Link>
              {/* <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
              </Link> */}
            </ul>
            <div className='pt-40 '>
              <p className='uppercase tracking-widest text-[#273c75]'>Let's Connect</p>
              <div className='flex justify-between my-4 w-full '>
                <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link
                    href="https://www.linkedin.com/in/vishal-kachhap-5a0b1b19b/"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <Link href="https://github.com/vishal139" target="_blank">
                    <FaGithub />
                  </Link>
                </div>
                <div className='rounded-full shadow-lg p-3 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <a href="mailto: vishalkachhap62@gmail.com">
                    <AiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar