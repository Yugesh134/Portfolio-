import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";

import SkillCard from "../ui/SkillCard";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },

  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },

  {
    name: "JavaScript",
    icon: <FaJs />,
  },

  {
    name: "React",
    icon: <FaReact />,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },

  {
    name: "Express",
    icon: <SiExpress />,
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },

  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },

  {
    name: "Postman",
    icon: <SiPostman />,
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-32 px-6">
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[5px] text-amber-400">
            Expertise
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            My <span className="text-amber-400">Skills</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Technologies and tools I use to build scalable, modern and
            high-performance web applications.
          </p>
        </div>

        <div className="grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
