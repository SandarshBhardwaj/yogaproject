'use client'

import About from '@/components/common/About'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Hero from '@/components/common/Hero'
import SlideSections from '@/components/sections/SlideSections'
import YogaClasses from '@/components/sections/YogaClasses'
import { Rajdhani } from 'next/font/google'
import { motion } from 'framer-motion'

const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

export default function Home() {

  return (
    <div className="">
      <Header />
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
  <motion.h1
    initial={{ opacity: 0, y: 180 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className={`${rajdhani.className} text-[#003342] text-center text-5xl xl:text-6xl font-bold mb-20`}
  >
    The Transformative Powers of Yoga and Meditation
  </motion.h1>

  <Hero />
  <About />
  <YogaClasses />
  <SlideSections />
</main>


      <Footer />
    </div>
  )
}
