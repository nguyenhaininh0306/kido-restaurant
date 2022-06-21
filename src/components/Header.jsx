import React from 'react'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
      {/* desktop and tablet */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to={'/'} className='flex items-center gap-2'>
          <img src={Logo} className='w-8 object-cover' alt='logo' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8 '>
            <li className='text-base text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:text-headingColor'>
              Home
            </li>
            <li className='text-base text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:text-headingColor'>
              Menu
            </li>
            <li className='text-base text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:text-headingColor'>
              About Us
            </li>
            <li className='text-base text-headingColor cursor-pointer duration-100 transition-all ease-in-out hover:text-headingColor'>
              Service
            </li>
          </ul>

          <div className='relative flex items-center justify-center'>
            <MdShoppingBasket className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center'>
              <p className='text-sm text-white font-semibold'>2</p>
            </div>
          </div>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            alt='userprofile'
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer'
          />
        </div>
      </div>

      {/* mobile */}
      <div className='flex md:hidden w-full h-full'></div>
    </header>
  )
}

export default Header
