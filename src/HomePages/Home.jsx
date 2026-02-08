import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Categories from "./Categories";
import HomeVideo from "./HomeVideo";


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);


  return (
    <div>
      <Hero />
      <Categories/>
      <HomeVideo/>
      <Features />
      <Testimonials />

    </div>
  );
};

export default Home;
