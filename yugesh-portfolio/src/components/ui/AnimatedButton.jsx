import { ArrowUpRight } from "lucide-react";

const AnimatedButton = ({ text = "View Projects" }) => {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] transition-all duration-500 hover:scale-105">
      <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#fbbf24_0%,#ffffff_50%,#fbbf24_100%)]"></span>

      <span className="relative inline-flex items-center gap-3 rounded-full bg-zinc-950 px-8 py-4 text-white backdrop-blur-xl transition-all duration-500 group-hover:bg-black">
        <span className="absolute inset-0 rounded-full bg-amber-400/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"></span>

        <span className="relative z-10 text-sm font-semibold tracking-[2px] uppercase group-hover:text-amber-300 transition">
          {text}
        </span>

        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-black transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
          <ArrowUpRight size={18} />
        </span>

        <span className="absolute -left-20 top-0 h-full w-16 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]"></span>
      </span>
    </button>
  );
};

export default AnimatedButton;
