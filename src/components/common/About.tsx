import Image from 'next/image'
import FancyBtn from './FancyBtn'
import { Rajdhani } from 'next/font/google'
import { motion } from 'framer-motion'

const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
})

export default function About() {
  return (
    <section className="xl:flex items-center flex-wrap lg:flex-nowrap justify-center">
      <div className=" xl:w-1/2 flex justify-center items-center">
        <div className="relative xl:scale-200">
          <Image
            src="/images/yoga-mandala.png"
            alt="yoga mandala"
            width={300}
            height={300}
            className=""
          />
          <Image
            src="/images/woman-practicing-yoga.png"
            alt="woman practicing yoga"
            width={500}
            height={500}
            className="absolute left-0 top-0 left-right-animation"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative xl:w-1/2 flex flex-col gap-6 justify-start items-start mt-[50px] m-10"
      >
        <h2
          className={`${rajdhani.className} text-[#003342] font-bold text-4xl`}
        >
          Connecting Mind, Body, and Spirit through
        </h2>
        <p className="max-w-[500px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo. Ligula eget dolor aenean massa cum sociis natoque.
        </p>
        <div className="flex flex-wrap items-center">
          <div className="flex gap-6 items-center p-5 w-[300px]">
            <div>
              <Image
                src="/images/yoga-expert-icon-1.png"
                alt="yoga expert"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3
                className={`${rajdhani.className} text-[#003342] font-bold text-xl`}
              >
                Expert Trainer
              </h3>
              <p>Lorem ipsum dolor amet, adipiscing.</p>
            </div>
          </div>
          <div className="flex gap-6 items-center p-5 w-[300px]">
            <div>
              <Image
                src="/images/yoga-place-icon-1.png"
                alt="yoga expert"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h3
                className={`${rajdhani.className} text-[#003342] font-bold text-xl`}
              >
                Comfort Place
              </h3>
              <p>Lorem ipsum dolor amet, adipiscing.</p>
            </div>
          </div>
        </div>
        <FancyBtn href={'#'}>About Us</FancyBtn>
      </motion.div>
    </section>
  )
}
