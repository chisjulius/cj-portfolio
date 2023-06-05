import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { xavi } from '../assets/index'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='xavi'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
  


const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={xavi}
            alt='xavi'
            className='w-60 h-340 rounded  object-contain'
          />
        </div>
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
My name is Chisom Julius from Nigeria.
I'm a dedicated javascript full-stack developer with a keen eye for details, 
and a determination to deliver the very highest quality.
The main areas of my expertise are HTML(5), CSS(3), Javascript(react, jQuery, node js), 
and some cool collaborative tools like git and slack. 
I use Netlify and Heroku as my choice of deployments and my preferred CMS is sanity.io.
I try to build web apps to keep my skills and github as updated as possible,
 and in my free times you can find me reading medical books, playing football,
  watching movies, or hanging out with friends.
Previously, i worked with 3REEN an e-commerce marketplace with new ideas and insights that would make online 
shopping experience as close to physical shoppping as possible.
Interested in working with me? Get in touch and i'd be happy to talk to you.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
     </>
  );
};

export default SectionWrapper(About, "about");
