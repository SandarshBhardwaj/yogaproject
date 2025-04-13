'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose, IoIosArrowDown } from 'react-icons/io'
import { AnimatePresence, motion } from 'framer-motion'
import { Rajdhani } from 'next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function Header(): JSX.Element {
  const [showNav, setShowNav] = useState(false)
  const [showPagesNav, setShowPagesNav] = useState(false)
  const [showBlogNav, setShowBlogNav] = useState(false)

  return (
    <header className={`${rajdhani.className} text-xl font-semibold`}>
      {/* Mobile Navigation */}
      <section className="xl:hidden flex items-center justify-between pt-5 px-5 mb-20">
        <div className="p-2">
          <Image src="/images/logo.png" width={60} height={60} alt="logo" />
        </div>
        <div onClick={() => setShowNav(!showNav)}>
          <GiHamburgerMenu className="text-3xl text-[#18CBE4] cursor-pointer" />
        </div>

        <AnimatePresence>
          {showNav && (
            <motion.div
              key="mobile-nav"
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed left-0 top-0 h-screen w-[320px] bg-white z-[999] shadow-2xl"
            >
              <div className="flex justify-between items-center p-5">
                <Image src="/images/logo.png" width={70} height={70} alt="logo" />
                <IoMdClose
                  className="text-3xl text-[#18CBE4] cursor-pointer"
                  onClick={() => setShowNav(false)}
                />
              </div>

              <ul className="flex flex-col justify-start items-start gap-7 p-7 text-xl">
                <li>
                  <a href="#" className="text-[#18CBE4] font-bold">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#18CBE4] transition-all duration-500">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Classes</a>
                </li>

                {/* Pages Dropdown */}
                <li className="relative">
                  <span
                    onClick={() => {
                      setShowPagesNav(!showPagesNav)
                      setShowBlogNav(false)
                    }}
                    className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                  >
                    <span className={showPagesNav ? 'text-[#18CBE4]' : ''}>Pages</span>
                    <IoIosArrowDown />
                  </span>
                  {showPagesNav && (
                    <ul className="flex flex-col gap-5 w-[200px] p-5 bg-white">
                      <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Pricing</a></li>
                      <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">FAQ</a></li>
                      <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">404 Page</a></li>
                    </ul>
                  )}
                </li>

                {/* Blog Dropdown */}
                <li className="relative">
                  <span
                    onClick={() => {
                      setShowBlogNav(!showBlogNav)
                      setShowPagesNav(false)
                    }}
                    className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
                  >
                    <span className={showBlogNav ? 'text-[#18CBE4]' : ''}>Blog</span>
                    <IoIosArrowDown />
                  </span>
                  {showBlogNav && (
                    <ul className="flex flex-col gap-5 w-[200px] p-5 bg-white">
                      <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Blog</a></li>
                      <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Single Post</a></li>
                    </ul>
                  )}
                </li>

                <li>
                  <a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Contact</a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Desktop Navigation */}
      <ul className="hidden xl:flex justify-center items-center gap-14 p-10">
        <li><a href="#" className="text-[#18CBE4] font-bold">Home</a></li>
        <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">About</a></li>
        <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Classes</a></li>

        <li className="text-center">
          <Image src="/images/logo.png" alt="Logo" width={100} height={40} className="mx-10" />
        </li>

        {/* Pages Dropdown */}
        <li className="relative">
          <span
            onMouseEnter={() => {
              setShowPagesNav(true)
              setShowBlogNav(false)
            }}
            className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
          >
            <span className={showPagesNav ? 'text-[#18CBE4]' : ''}>Pages</span>
            <IoIosArrowDown />
          </span>
          {showPagesNav && (
            <ul
              onMouseLeave={() => setShowPagesNav(false)}
              className="flex flex-col gap-5 shadow-2xl shadow-black w-[200px] p-5 absolute top-[60px] z-[100] bg-white rounded-tr-3xl rounded-bl-3xl"
            >
              <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Pricing</a></li>
              <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">FAQ</a></li>
              <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">404 Page</a></li>
            </ul>
          )}
        </li>

        {/* Blog Dropdown */}
        <li className="relative">
          <span
            onMouseEnter={() => {
              setShowBlogNav(true)
              setShowPagesNav(false)
            }}
            className="flex items-center gap-1 hover:text-[#18CBE4] transition-all duration-500 cursor-pointer"
          >
            <span className={showBlogNav ? 'text-[#18CBE4]' : ''}>Blog</span>
            <IoIosArrowDown />
          </span>
          {showBlogNav && (
            <ul
              onMouseLeave={() => setShowBlogNav(false)}
              className="flex flex-col gap-5 shadow-2xl shadow-black w-[200px] p-5 absolute top-[60px] z-[100] bg-white rounded-tr-3xl rounded-bl-3xl"
            >
              <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Blog</a></li>
              <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Single Post</a></li>
            </ul>
          )}
        </li>

        <li><a href="#" className="hover:text-[#18CBE4] transition-all duration-500">Contact</a></li>
      </ul>
    </header>
  )
}
