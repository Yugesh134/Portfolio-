const SkillCard = ({ name, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-3 hover:border-amber-400/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-br from-amber-400/10 via-transparent to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-zinc-900/80 text-4xl text-amber-400 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        <h3 className="mt-6 text-xl font-bold tracking-tight text-white transition group-hover:text-amber-300">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-zinc-500">
          Building modern and scalable applications using {name}.
        </p>

        <div className="mt-6 h-0.5 w-0 rounded-full bg-linear-to-r from-amber-400 to-transparent transition-all duration-700 group-hover:w-full"></div>
      </div>

      <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-amber-400/20"></div>
    </div>
  );
};

export default SkillCard;
