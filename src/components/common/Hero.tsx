'use client'

import Image from 'next/image'
import { FaPhone } from 'react-icons/fa'
import { IoIosPlay } from 'react-icons/io'
import FancyBtn from './FancyBtn'
import FancyTxt from './FancyTxt'
import { Rajdhani } from 'next/font/google'
import { motion } from 'framer-motion'

const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

function PlayButton() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Wave Effect */}
      <motion.div
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
        className="absolute w-16 h-16 rounded-full bg-[#d9acf59a]"
      />
      {/* Play Button */}
      <div className="relative transition-all duration-500 fade-in-out cursor-pointer bg-white hover:bg-[#18CBE4] hover:text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl p-2 shadow-lg">
        <IoIosPlay />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      className="bg-cover bg-no-repeat bg-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-wrap md:flex-nowrap justify-around mb-30">
          <motion.div
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="bg-[#d9acf59a] w-full md:w-xs xl:h-40 xl:w-2xs m-5 p-3 rounded-tr-3xl rounded-bl-3xl flex items-center justify-center"
          >
            <div className="relative bottom-20 left-0">
              <Image
                src="/images/yoga-girl-in-warrior-pose-indoor.png"
                width={150}
                height={230}
                alt="Yoga girl in warrior pose"
                className="mb-4"
              />
              <p>
                Get more than <strong>+30 videos</strong>
              </p>
            </div>
            <PlayButton />
          </motion.div>

          <div className="relative">
            <Image
              src="/images/logo-big.png"
              width={300}
              height={300}
              alt="YogaFit logo"
              className="mb-4"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute left-0 top-0 float-animation"
            >
              <Image
                src="/images/young-woman-practicing-yoga.png"
                width={300}
                height={400}
                alt="Young woman practicing yoga"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-[400px]"
          >
            <div className="mb-10 mt-40 xl:mt-0">
              <p>
                A yoga and meditation teacher is a professional who has in-depth
                knowledge and training in the practices of yoga and meditation.
              </p>
            </div>
            <div className="flex gap-8 items-center">
              <div className="relative">
                <FancyBtn href="#">Book Class</FancyBtn>
                <Image
                  src="/images/wavy-arrow.png"
                  width={100}
                  height={100}
                  alt="Wavy arrow"
                  className="absolute top-20 right-20"
                />
              </div>
              <a href="#" className="text-[#18CBE4] flex items-center gap-2">
                <FaPhone />
                <FancyTxt>Contact Us</FancyTxt>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <div className="flex items-center flex-wrap justify-center gap-10 xl:py-40 text-center">
          {[
            {
              title: 'Peace of Mind',
              img: '/images/yoga-meditation-retreat-1.png',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.',
            },
            {
              title: 'Mental Health',
              img: '/images/yoga-meditation-retreat-2.png',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.',
            },
            {
              title: 'Gain Flexibility',
              img: '/images/yoga-meditation-retreat-3.png',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 + i * 0.3, ease: 'easeOut' }}
              className="w-[300px] flex justify-center items-center flex-col gap-5"
            >
              <div className="relative">
                <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
                <Image
                  src={item.img}
                  width={200}
                  height={300}
                  alt={item.title}
                  className="absolute left-0 bottom-0 rounded-b-[400px]"
                />
              </div>
              <h3
                className={`${rajdhani.className} text-[#003342] font-bold text-2xl`}
              >
                {item.title}
              </h3>
              <p>{item.desc}</p>
              <a href="#" className="text-[#18CBE4] flex items-center gap-2">
                <FancyTxt>Learn More</FancyTxt>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
