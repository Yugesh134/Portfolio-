import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Job Portal Platform",

    desc: "A modern MERN stack job portal with authentication, admin dashboard, filters and responsive UI.",

    tech: ["React", "Node.js", "MongoDB"],

    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    github: "#",

    live: "#",
  },

  {
    title: "AI Chat Application",

    desc: "Real-time AI powered chat application with beautiful UI, authentication and dark mode support.",

    tech: ["React", "Express", "Tailwind"],

    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    github: "#",

    live: "#",
  },

  {
    title: "E-Commerce Store",

    desc: "Full stack e-commerce application with cart, payment integration and admin management system.",

    tech: ["React", "MongoDB", "Node.js"],

    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",

    github: "#",

    live: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-32 px-6">
      <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-4 text-sm uppercase tracking-[5px] text-amber-400">
            Portfolio
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Featured <span className="text-amber-400">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-500">
            Some selected projects showcasing my expertise in full stack
            development and modern UI engineering.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              number={`0${index + 1}`}
              title={project.title}
              description={project.desc}
              image={project.image}
              tech={project.tech}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
