import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import client from '../client';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";



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
    
  const PostCard = posts.length ?(
    posts.map(post =>(
      <div>
        <div className='relative w-full h-[230px]' key={post.slug.current}>
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
        </div>
    ))
) :(
    <div className="col s12">
      <h4 className="center white-text">No posts yet</h4>
   </div>
)

return (
  <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
    </motion.div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {PostCard}
    </div>
  </>
)

};

export default SectionWrapper(Blogs, "blogs");




