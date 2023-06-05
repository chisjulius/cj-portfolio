import { Navbar, About, Contact, Experience, Blogs, Hero, Tech, Works, Footer, StarsCanvas } from "./components";

const Home = () => {
  return (
    <>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
      </div>
      <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Hero />
          </div>
              <Blogs />
              <About />
              <Experience />
              <Tech />
              <Works />
          <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
              <Footer/>
          </div>
      </div>
    </>
  );
}

export default Home;
