export default function About() {
  return (
    <section className="mt-[80px] px-6" id="About">
      <div className="bg-gradient-to-r from-pink-100 to-pink-200 text-black w-full min-h-[400px] font-poppins rounded-lg p-6">
        <h1 className="flex justify-center items-center text-4xl font-bold mb-6">
          About Me
        </h1>

        <p className="text-base max-w-3xl mx-auto leading-relaxed mb-8">
          Hi! I’m Precious Adeola Komolafe, a front-end developer with a passion
          for crafting beautiful, intuitive, and user-friendly web experiences.
          <br /><br />
          With a background in Educational Technology and a love for clean design, I combine
          creativity with functionality to build responsive websites that not only look good
          but feel good to use.
          <br /><br />
          I enjoy learning new technologies, exploring UI/UX trends, and bringing digital ideas
          to life — especially for brands, small businesses, and creative entrepreneurs.
          <br /><br />
          When I’m not coding, you’ll find me experimenting with new design tools,
          sharing Bible facts on TikTok, or dreaming up my next tech-inspired business idea 💡✨
          <br /><br />
          Let’s build something beautiful together 💻💕
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          {['React', 'Next.js', 'HTML', 'TailwindCSS'].map((tech) => (
            <button
              key={tech}
              className="px-5 py-3 shadow-2xl rounded-xl bg-black text-white hover:bg-gray-800 transition"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
