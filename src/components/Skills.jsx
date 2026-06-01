import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "📜" },
  { name: "Three.js", icon: "🌐" },
  { name: "GSAP", icon: "⚡" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "HTML & CSS", icon: "🎯" },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
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
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-purple-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card opacity-0 bg-white/5 border border-purple-500/30 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-purple-400 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <span className="text-5xl">{skill.icon}</span>
              <span className="text-white font-semibold text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;