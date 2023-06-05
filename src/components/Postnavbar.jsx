import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logocolor, menu } from "../assets";

const Postnavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20  bg-primary`}
    >
      <div className='w-full flex justify-around items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logocolor} alt='cjlogo' className='w-11 h-11 object-contain rounded border-10px' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Chisom &nbsp;
            <span className='sm:block hidden'> | Julius</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Postnavbar;