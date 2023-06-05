import React from 'react';
import { SocialIcon } from 'react-social-icons';



const Footer = () =>{
    return (
        <div>
             <footer className=" w-full h-22 flex justify-center py-5  bottom-0 z-20  bg-red">
                    <div className="inline-flex py-3 px-3 my-6">
                        <SocialIcon url='https://twitter.com/ChisomJavi?s=08' className='mr-24' target='_blank' fgcolor='#fff' style={{height: 35, width: 35}} />
                        <SocialIcon url='https://www.linkedin.com/in/chisom-julius-68a156205/' className='mr-24' target='_blank' fgcolor='#fff' style={{height: 35, width: 35}} />
                        <SocialIcon url='https://www.facebook.com/chisom.julius'  target='_blank' fgcolor='#fff' style={{height: 35, width: 35}} />
                    </div>
                </footer>
        </div>
    )
}

export default Footer