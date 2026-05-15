import { GraduationCap, Code2, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-amber-400 text-sm mb-4">
            Introduction
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            About <span className="text-amber-400">Me</span>
          </h2>

          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-lg">
            Passionate full stack developer focused on building modern, scalable
            and high-performance web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-400/10 blur-3xl rounded-full"></div>

            <div className="relative rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden p-4">
              <img
                src="/yugesh-port.jpeg"
                alt="developer"
                className="rounded-[30px] w-full h-155 object-cover hover:scale-105 transition duration-700"
              />

              <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl">
                <h3 className="text-3xl font-black text-amber-400">5+</h3>

                <p className="text-zinc-300 text-sm mt-1">Projects Completed</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-5xl font-black leading-tight">
              Crafting immersive digital experiences with{" "}
              <span className="text-amber-400">modern technologies</span>
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed mt-8">
              I'm a passionate Full Stack Developer skilled in React,
              TypeScript, Node.js and MongoDB. I love building visually stunning
              interfaces combined with scalable backend systems.
            </p>

            <p className="text-zinc-500 leading-relaxed mt-6">
              My focus is on creating responsive, smooth and performance-driven
              applications that deliver exceptional user experiences.
            </p>

            <div className="grid sm:grid-cols-3 gap-5 mt-12">
              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400 text-2xl group-hover:rotate-6 transition">
                  <Code2 />
                </div>

                <h4 className="text-xl font-bold mt-5">Full Stack</h4>

                <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                  Building scalable MERN stack applications.
                </p>
              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400 text-2xl group-hover:rotate-6 transition">
                  <GraduationCap />
                </div>

                <h4 className="text-xl font-bold mt-5">Learning</h4>

                <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                  Continuously improving modern development skills.
                </p>
              </div>

              <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400 text-2xl group-hover:rotate-6 transition">
                  <Rocket />
                </div>

                <h4 className="text-xl font-bold mt-5">Performance</h4>

                <p className="text-zinc-500 text-sm mt-3 leading-relaxed">
                  Creating smooth and optimized web experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
