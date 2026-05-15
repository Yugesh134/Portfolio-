export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Hi, I'm Yugesh
        </h1>

        <p className="text-zinc-400 text-lg md:text-2xl mb-6">
          Frontend Developer & Electronics Student
        </p>

        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          View Projects
        </button>
      </div>
    </section>
  )
}