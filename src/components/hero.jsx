import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      "#hero-title",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      "#hero-subtitle",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power3.out" }
    );
    gsap.fromTo(
      "#hero-btn",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6">
      <h1
        id="hero-title"
        className="text-5xl md:text-7xl font-bold text-white opacity-0"
      >
        Hi, I'm{" "}
        <span className="text-purple-400">Deepanshu</span>
      </h1>

      <p
        id="hero-subtitle"
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl opacity-0"
      >
        Frontend Developer — React · Three.js · GSAP
      </p>

      <a
        id="hero-btn"
        href="#projects"
        className="mt-10 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-semibold transition-all duration-300 opacity-0"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;