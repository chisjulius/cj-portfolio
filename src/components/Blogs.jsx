import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Tilt } from "react-tilt";
import client from '../client';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const PostCard = ({post, index}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
          src={post.mainImage.asset.url} alt={post.mainImage.alt}
          className='w-full h-full object-cover rounded-2xl'
          />
        </div>
        <Link to={'/' + post.slug.current}>
          <div className='mt-5'>
            <h3 className='text-[#915EFF] font-bold text-[18px] '>{post.title.slice(0,35)}...</h3>
            <p className='mt-2 text-secondary text-[14px]'>{post.publishedAt}</p>
          </div>
        </Link>
      </Tilt>
    </motion.div>
  );
};






const Blogs = () => {
  const [posts, setPosts] = useState([])
      useEffect(() =>{
        client.fetch(`*[_type == "post"] | order(publishedAt  desc){
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            publishedAt   
        }`)
        .then((data) =>{
            console.log(data)
            setPosts(data)
        })
        .catch(console.error);
    }, []);
    
return (
  <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
    </motion.div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {posts.length ?(
        posts.map((post, index) => (
          <PostCard key={`post-${index}`} index={index} post = {post} />
        ))
      ) :(
        <div>
           <h2 className={`${styles.sectionHeadText}`}>No post yet.....</h2>
        </div>
      )    
    }
    </div>
  </>
);
};

export default SectionWrapper(Blogs, "blogs");



