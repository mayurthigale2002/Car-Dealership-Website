import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeVideo = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!iframeRef.current) return;

        if (entry.isIntersecting) {
          iframeRef.current.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        } else {
          iframeRef.current.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      },
      { threshold: 0.6 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full min-h-[90vh] flex items-center justify-center bg-black relative overflow-hidden">
      
      {/* Soft Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Content */}
      <div 
        className="relative z-10 max-w-6xl w-full px-6"
        data-aos="fade-up"
      >
        
        <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl">

          <h2 
            className="text-center text-4xl md:text-5xl font-bold text-white mb-4"
            data-aos="fade-down"
          >
            Experience <span className="text-red-500">CarHub</span> in Motion
          </h2>

          <p 
            className="text-center text-gray-300 mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Power, performance, and passion — watch the drive come alive.
          </p>

          {/* Video */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <iframe
              ref={iframeRef}
              className="w-full h-full"
              src="https://www.youtube.com/embed/YFNSDdrElfc?enablejsapi=1&mute=1&rel=0"
              title="CarHub Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeVideo;