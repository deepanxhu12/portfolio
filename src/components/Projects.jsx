import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "3D Portfolio",
    description: "Interactive 3D portfolio built with React, Three.js, and GSAP animations.",
    tags: ["React", "Three.js", "GSAP"],
    color: "from-purple-600 to-purple-400",
  },
  {
    title: "Creative Landing Page",
    description: "Animated landing page with smooth scroll effects and modern UI design.",
    tags: ["React", "GSAP", "Tailwind"],
    color: "from-blue-600 to-blue-400",
  },
  {
    title: "3D Product Showcase",
    description: "Interactive 3D product viewer with rotation and zoom capabilities.",
    tags: ["Three.js", "React", "JavaScript"],
    color: "from-pink-600 to-pink-400",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
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
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          My <span className="text-purple-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card opacity-0 bg-white/5 border border-purple-500/30 rounded-2xl overflow-hidden hover:border-purple-400 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />

              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;