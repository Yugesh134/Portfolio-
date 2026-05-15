import { motion } from "framer-motion";

import { FaGithubSquare, FaInstagram } from "react-icons/fa";
import AnimatedButton from "../ui/AnimatedButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-size-[6rem_6rem] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-[6px] text-amber-400 text-sm mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl xl:text-8xl font-black leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-amber-400 relative">
            Yugesh
            <span className="absolute left-0 bottom-2 w-full h-3 bg-amber-400/20 -z-10 rounded-full"></span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-zinc-400 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto"
        >
          Crafting scalable, high-performance and visually stunning web
          experiences using React, TypeScript, Tailwind and the MERN Stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <button className="group bg-amber-400 text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.35)]">
            <a href="#projects">
              <AnimatedButton text="View Projects" />
            </a>
          </button>

          <button className="border border-white/10 px-7 py-4 rounded-2xl font-semibold hover:border-amber-400 hover:text-amber-400 transition-all duration-300">
            Download Resume
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-5 mt-12"
        >
          <a
            href="https://github.com/Yugesh134"
            className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300"
          >
            {/* github icon */}
            <FaGithubSquare size={38} />
          </a>

          <a
            href="#"
            className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300"
          >
            {/* linkedin icons */}
            <FaInstagram size={38} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <p className="text-sm tracking-[4px] uppercase text-zinc-500">
          Scroll Down
        </p>

        <div className="w-7 h-12 rounded-full border-2 border-amber-400 flex justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-amber-400 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
