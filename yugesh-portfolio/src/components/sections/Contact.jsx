import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-amber-400 text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Let's Work <span className="text-amber-400">Together</span>
          </h2>

          <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-lg">
            Have a project idea or looking for a developer? Let's build
            something modern and amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400">
                  <Mail />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Email</h3>

                  <p className="text-zinc-500 mt-2">yugeshkr6201@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400">
                  <Phone />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Phone</h3>

                  <p className="text-zinc-500 mt-2">+91 9876543210</p>
                </div>
              </div>
            </div>

            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-amber-400">
                  <MapPin />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Location</h3>

                  <p className="text-zinc-500 mt-2">Bhopal, Madhya Pradesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-4">
              <a
                href="https://github.com/Yugesh134"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-2 transition-all duration-300"
              >
                <FaGithubSquare size={38} />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:-translate-y-2 transition-all duration-300"
              >
                <FaLinkedin size={38} />
              </a>
            </div>
          </div>

          <div className="rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h3 className="text-3xl font-black mb-8">Send Message</h3>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-14 rounded-2xl bg-zinc-900/70 border border-white/10 px-5 outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full h-14 rounded-2xl bg-zinc-900/70 border border-white/10 px-5 outline-none focus:border-amber-400 transition"
                />
              </div>

              <div>
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full rounded-2xl bg-zinc-900/70 border border-white/10 px-5 py-4 outline-none focus:border-amber-400 transition resize-none"
                ></textarea>
              </div>

              <button className="group w-full h-14 rounded-2xl bg-amber-400 text-black font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
