import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      "#about-text",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      "#about-card",
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Text */}
        <div id="about-text" className="flex-1 opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Hi! I'm Deepanshu, a passionate Frontend Developer who loves building 
            beautiful and interactive web experiences.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            I specialize in React, Three.js, GSAP animations, and Tailwind CSS. 
            I love turning ideas into reality through clean code and creative design.
          </p>
        </div>

        {/* Right - Info Card */}
        <div
          id="about-card"
          className="flex-1 opacity-0 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8"
        >
          {[
            { label: "Name", value: "Deepanshu" },
            { label: "Role", value: "Frontend Developer" },
            { label: "Skills", value: "React, Three.js, GSAP, Tailwind" },
            { label: "Available", value: "Open to Internships ✅" },
          ].map((item) => (
            <div key={item.label} className="mb-5 border-b border-white/10 pb-4">
              <span className="text-purple-400 font-semibold">{item.label}: </span>
              <span className="text-gray-300">{item.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;