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
        <IoIosPlay className="" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
      }}
    >
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
              alt="yoga girl in warrior pose indoor"
              className="mb-4"
            />
            <p>
              Get more than <strong>+30 videos</strong>
            </p>
          </div>
          <PlayButton />
          {/* <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center text-2xl p-2">
            <IoIosPlay />
          </div> */}
        </motion.div>

        <div className="relative">
          <Image
            src="/images/logo-big.png"
            width={300}
            height={300}
            alt="logo"
            className="mb-4"
          />
          <motion.img
            src="/images/young-woman-practicing-yoga.png"
            width={300}
            height={400}
            alt="young woman practicing yoga"
            initial={{ opacity: 0, y: 100 }} // Start from lower position
            animate={{ opacity: 1, y: 0 }} // Move up smoothly
            transition={{ duration: 1.5, ease: 'easeOut' }} // Smoother transition
            className="mb-4 absolute left-0 top-0 float-animation"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[400px]"
        >
          <div className="mb-10 mt-40 xl-mt-0">
            <p>
              A yoga and meditation teacher is a professional who has in-depth
              knowledge and training in the practices of yoga and meditation.
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <div className="relative">
              <FancyBtn href={'#'}>Book Class</FancyBtn>
              <Image
                src="/images/wavy-arrow.png"
                width={100}
                height={100}
                alt=""
                className="absolute top-20 right-20"
              />
            </div>
            <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
              <FaPhone />
              <FancyTxt>Contact Us</FancyTxt>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center flex-wrap justify-center gap-10 xl:py-40 text-center">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-[300px] flex justify-center items-center flex-col gap-5"
        >
          <div className="relative">
            <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
            <Image
              src="/images/yoga-meditation-retreat-1.png"
              width={200}
              height={300}
              alt="logo"
              className="absolute left-0 bottom-0 rounded-b-[400px]"
            />
          </div>
          <h3
            className={`${rajdhani.className} text-[#003342] font-bold text-2xl`}
          >
            Peace of Mind
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor.
          </p>
          <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
            <FancyTxt>Lear More</FancyTxt>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-[300px] flex justify-center items-center flex-col gap-5"
        >
          <div className="relative">
            <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
            <Image
              src="/images/yoga-meditation-retreat-2.png"
              width={200}
              height={300}
              alt="logo"
              className="absolute left-0 bottom-0 rounded-b-[400px]"
            />
          </div>
          <h3
            className={`${rajdhani.className} text-[#003342] font-bold text-2xl`}
          >
            Mental Health
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor.
          </p>
          <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
            <FancyTxt>Lear More</FancyTxt>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-[300px] flex justify-center items-center flex-col gap-5"
        >
          <div className="relative">
            <div className=" bg-[#d9acf59a] w-[120px] h-[120px] rounded-full"></div>
            <Image
              src="/images/yoga-meditation-retreat-3.png"
              width={200}
              height={300}
              alt="logo"
              className="absolute left-0 bottom-0 rounded-b-[400px]"
            />
          </div>
          <h3
            className={`${rajdhani.className} text-[#003342] font-bold text-2xl`}
          >
            Gain Flexability
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor.
          </p>
          <a href="#" className="text-[#18CBE4] flex items-center gap-2 ">
            <FancyTxt>Lear More</FancyTxt>
          </a>
        </motion.div>
      </div>
    </div>
  )
}
