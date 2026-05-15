export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-amber-400">
          Yugesh Kumar
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
          {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
