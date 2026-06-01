import { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo(
      "#navbar",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/50 backdrop-blur-md opacity-0"
    >
      <h1 className="text-white text-2xl font-bold">
        Deep<span className="text-purple-400">anshu</span>
      </h1>

      <ul className="flex gap-8 text-gray-300 font-medium">
        {["About", "Skills", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;