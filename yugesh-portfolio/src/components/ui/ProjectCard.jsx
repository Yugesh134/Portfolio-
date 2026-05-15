import { ExternalLink } from "lucide-react";

import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  github,
  live,
  number,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-amber-400/60 hover:shadow-[0_0_50px_rgba(251,191,36,0.12)]">
      <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>

      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

        <div className="absolute top-5 right-5 flex gap-3 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl hover:border-amber-400 hover:text-amber-400 transition"
          >
            <FaGithubSquare size={18} />
          </a>

          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl hover:border-amber-400 hover:text-amber-400 transition"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="absolute bottom-5 left-5 text-white/20 text-6xl font-black">
          {number}
        </div>
      </div>

      <div className="relative z-10 p-7">
        <h3 className="text-2xl font-black tracking-tight text-white transition group-hover:text-amber-300">
          {title}
        </h3>

        <p className="mt-4 text-zinc-400 leading-relaxed">{description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-white/10 bg-zinc-900/80 px-4 py-2 text-sm text-zinc-300 transition hover:border-amber-400 hover:text-amber-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 h-0.5 w-0 bg-linear-to-r from-amber-400 to-transparent transition-all duration-700 group-hover:w-full"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
