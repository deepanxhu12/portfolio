import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.fromTo("#contact-content", { opacity: 0, y: 60 }, {
      opacity: 1, y: 0, duration: 1, ease: "power3.out",
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative w-full min-h-screen flex items-center justify-center px-6 py-20">
      <div id="contact-content" className="max-w-2xl w-full opacity-0 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Looking for internship opportunities. Feel free to reach out!
        </p>

        {sent ? (
          <div className="bg-white/5 border border-purple-500/30 rounded-2xl p-10">
            <p className="text-purple-400 text-2xl font-bold">Message Sent! 🎉</p>
            <p className="text-gray-400 mt-2">I'll get back to you soon.</p>
          </div>
        ) : (
          <div className="bg-white/5 border border-purple-500/30 rounded-2xl p-8 flex flex-col gap-5 text-left">
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Your Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hi Deepanshu, I'd like to..."
                rows={5}
                className="w-full bg-white/10 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-purple-400 transition-colors resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Send Message 🚀
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;