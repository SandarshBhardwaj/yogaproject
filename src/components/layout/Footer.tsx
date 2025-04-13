import React from 'react';
import FancyBtn from '../common/FancyBtn';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaYoutube,
} from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';
import Divider from '../common/Divider';
import { Rajdhani } from 'next/font/google';
import { motion } from 'framer-motion';

const rajdhani = Rajdhani({
  weight: ['400', '700', '600'],
  subsets: ['latin'],
});

export default function Footer() {
  return (
    <footer className="md:sticky left-0 top-0 z-50">
      <section className="flex flex-wrap lg:flex-nowrap justify-center items-center py-20 px-5 gap-10">
        {/* Left Content */}
        <div className="xl:p-30 p-10 flex flex-col gap-6 justify-center items-start max-w-lg">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className={`${rajdhani.className} text-[#003342] text-5xl font-bold leading-tight`}
          >
            Our Latest Articles
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <FancyBtn href="#">View More</FancyBtn>
          </motion.div>
        </div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            backgroundImage:
              "url('https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/woman-doing-yoga-on-the-beach-e1681798498704.jpg')",
          }}
          className="relative flex text-white p-10 flex-col justify-end bg-cover bg-center m-5 min-h-[400px] w-full md:h-[70vh] md:w-[30vw] rounded-tr-4xl rounded-bl-4xl shadow-lg"
        >
          <p className="text-[#18CBE4] font-semibold tracking-wide">News</p>
          <p className={`${rajdhani.className} text-2xl font-bold hover:text-[#18CBE4]`}>
            The Science Behind Yoga: How It Affects Your Brain And Body
          </p>
          <p className="opacity-80">April 25, 2023</p>
        </motion.div>

        {/* Other Articles */}
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col gap-8"
        >
          {[
            {
              img: 'https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/portrait-of-attractive-blonde-hair-young-woman-exercise-yoga-outdoor--e1682387007214.jpg',
              title: 'The Science Behind Yoga: How It Affects Your Brain And Body',
              date: 'April 25, 2023',
            },
            {
              img: 'https://templatekit.jegtheme.com/yogafit/wp-content/uploads/sites/367/2023/04/shot-of-two-young-women-meditating-during-their-yoga-routine-on-the-beach-e1681977179490.jpg',
              title: 'Yoga Flow: Exploring the Benefits of Mindful Movement',
              date: 'April 20, 2023',
            },
          ].map((article, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-5 items-center p-6 rounded-lg"
            >
              <Image
                alt={`Thumbnail for ${article.title}`}
                width={300}
                height={300}
                src={article.img}
                className="rounded-tl-4xl rounded-br-4xl object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="w-[300px] flex flex-col gap-2">
                <p className="text-[#18CBE4] font-semibold tracking-wide">
                  News
                </p>
                <p
                  className={`${rajdhani.className} hover:text-[#18CBE4] text-[#003342] text-xl font-bold`}
                >
                  {article.title}
                </p>
                <p className="text-gray-500">{article.date}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="xl:p-20 m-5">
        <div
          style={{
            backgroundImage: 'url("/images/pattern.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}
          className="mx-auto rounded-tr-4xl rounded-bl-4xl flex flex-col items-center justify-center gap-12 p-10 xl:p-20 max-w-[900px] bg-teal-950 text-white"
        >
          <h1
            className={`${rajdhani.className} text-4xl max-w-[700px] mx-auto text-center`}
          >
            The Ultimate Resource For Yoga and Wellness. Subscribe Now!
          </h1>
          <div className="w-full flex justify-center">
            <input
              className="bg-white text-black p-4 rounded-bl-xl max-w-[400px] w-full"
              type="email"
              placeholder="Enter Your Email"
            />
            <button className="p-4 rounded-tr-xl cursor-pointer bg-[#18CBE4] transition-all duration-500 ease-in-out hover:shadow-2xl hover:bg-[#58b0bb]">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-between py-10 xl:px-32 px-5">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[#18CBE4]">Contact Us</p>
            <p className={`${rajdhani.className} text-[#003342] text-4xl font-bold`}>
              hello@yogafit.com
            </p>
            <div className="flex flex-wrap items-center gap-10">
              <p className="flex gap-2 items-center">
                <FaLocationDot className="text-[#18CBE4]" />
                <span className="text-[#33333391]">
                  Jalan Raya Ubud No. 99x Gianyar - Bali
                </span>
              </p>
              <p className="flex gap-2 items-center">
                <FaPhoneAlt className="text-[#18CBE4]" />
                <span className="text-[#33333391]">+123-456-7890</span>
              </p>
            </div>
          </div>
          <div>
            <Image
              className="min-w-[100px]"
              src="/images/logo.png"
              width={120}
              height={120}
              alt="YogaFit logo"
            />
          </div>
        </div>

        <div className="flex items-center py-10 xl:px-32 px-5">
          <p className="text-[#33333391] max-w-[280px]">
            Follow our social media
          </p>
          <Divider />
          <ul className="flex gap-2 text-xl ml-10 text-[#18CBE4]">
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaFacebookSquare />
            </li>
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaXTwitter />
            </li>
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaYoutube />
            </li>
            <li className="hover:text-[#4ba8b5] cursor-pointer">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </section>

      <section className="flex w-screen justify-between py-7 xl:px-32 px-5 text-xs xl:text-lg text-center bg-teal-950 text-white">
        <p>Copyright © 2025. All rights reserved.</p>
      </section>
    </footer>
  );
}
