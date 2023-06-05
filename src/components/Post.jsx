import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'
import serializers from './serializers'
import Postnavbar from './Postnavbar'






const Post =(props) =>{
    const [post, setPost] = useState(null)
   const {slug} = useParams();



   useEffect(() =>{
       client.fetch(`*[slug.current == "${slug}"]{
           title,
           _id,
           slug,
           mainImage{
               asset->{
                   _id,
                   url
               }
           },
           body,
           "name": author->name,
           "authorImage": author->image
       }`)
       .then((data) =>{
           console.log(data)
           setPost(data[0])
   })
       .catch(console.error);
   }, [slug]);

   const url = 'https://chisomjulius.com/'
   var disqus_config = function () {
       this.page.url = `${url + props.location.pathname}`;  // Replace PAGE_URL with your page's canonical URL variable
       this.page.identifier = post.slug.current; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
       };

       (function() { // DON'T EDIT BELOW THIS LINE
       var d = document, s = d.createElement('script');
       s.src = 'https://chisomjulius.disqus.com/embed.js';
       s.setAttribute('data-timestamp', +new Date());
       (d.head || d.body).appendChild(s);
       })();



   
   if(! post) return <div>Loading.....</div>

   return(
    <>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Postnavbar />
        </div>
        <main className='pt-24  bg-primary h-full relative'>
            <article className=''>
                <header className='flex flex-col  md:w-1/1  px-3.5 py-7  items-center'>
                    <img src={post.mainImage.asset.url} 
                    alt={post.mainImage.alt} 
                    className='w-1/1 rounded border-10px mb-5'
                    style = {{height: "400px"}}/>
                    <div className=''>
                        <div className=''>
                            <h1 className='text-[#915EFF] uppercase'>{post.title}</h1>
                        </div>
                    </div>
                </header>
                <div className='py-5 px-10 '><BlockContent blocks ={post.body} serializers={serializers} projectId="lxiy1ehs" dataset="production" /></div>
                <div className="disqus bg-primary" id="disqus_thread"></div>
            </article>
        </main>
    </>
 
   )
}

export default Post