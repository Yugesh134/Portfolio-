import { ArrowUp } from "lucide-react";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-zinc-950">
      <div className="absolute left-0 bottom-0 w-72 h-72 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Yugesh <span className="text-amber-400">Kumar</span>
          </h2>

          <p className="text-zinc-500 mt-5 max-w-2xl leading-relaxed text-lg">
            Full Stack Developer crafting modern, scalable and visually
            immersive web experiences with React, Tailwind and MERN Stack.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {["Home", "Skills", "Projects", "About", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-zinc-400 hover:text-amber-400 transition duration-300 group"
                >
                  {item}

                  <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ),
            )}
          </div>

          <div className="flex gap-5 mt-12">
            <a
              href="https://github.com/Yugesh134"
              className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-amber-400 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
            >
              <FaGithubSquare
                size={38}
                className="group-hover:text-amber-400 transition"
              />
            </a>

            <a
              href="#"
              className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-amber-400 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
            >
              <FaLinkedin
                size={38}
                className="group-hover:text-amber-400 transition"
              />
            </a>
          </div>

          <div className="w-full h-px bg-white/10 my-12"></div>

          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-zinc-500 text-sm">
              © Copyrights {currentYear} Yugesh Kumar. All rights reserved.
            </p>

            <a
              href="#home"
              className="group flex items-center gap-3 text-sm text-zinc-400 hover:text-amber-400 transition"
            >
              Back To Top
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all duration-300">
                <ArrowUp size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
