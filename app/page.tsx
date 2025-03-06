import Link from 'next/link';

export const metadata = {
  title: 'Home | James Daw',
};

export default function Home() {
  return (
    <div className="container">
      {/* INTRODUCTION */}
      <section className="mb-20 mt-10">
        <h1 className="text-4xl font-bold">James Daw</h1>
        <p className="mt-8 text-lg">
          Hey, I&apos;m <span className="font-bold">Jadday</span>, also known as{" "}
          <span className="font-bold">JDY</span>.
        </p>
        <p className="mt-4 text-lg">
          Whenever I find free time, I love to make things. Whether it&apos;s {" "}
          <Link href="/" className="text-terminalRed body-link">cybersecurity tools</Link>, <Link href="/" className="text-terminalRed body-link">AI Projects</Link>,{" "}
          <Link href="/" className="text-terminalRed body-link">games</Link>, <Link href="/" className="text-terminalRed body-link">music</Link>, or anything else, I always
          have new ideas that I can&apos;t wait to bring to life. I also like to <Link href="/" className="text-terminalRed body-link">break things</Link>, if I&apos;m feeling mischievous (and if I have permission, obviously).
        </p>
        <p className="mt-4 text-lg">
          This website is my way of sharing that portfolio with the world. Enjoy your stay :)
        </p>

      </section>

      <section className="terminal-box">
        <h2 className="text-3xl font-bold mb-6">Learn About Me</h2>
        <p className="text-lg">
          Take a look at my experience, skills, certifications and more.
        </p>
        <Link href="/about" className="text-terminalRed body-link text-lg mt-2 inline-block">
            [ About Me ]
         </Link>
      </section>

      <section className="terminal-box">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <p className="text-lg">
          Try out the projects I&apos;ve worked on, from games to security tools.
        </p>
        <Link href="/projects" className="text-terminalRed body-link text-lg mt-2 inline-block">
            [ My Projects ]
         </Link>
      </section>

      <section className="terminal-box">
        <h2 className="text-3xl font-bold mb-6">Read the Blog</h2>
        <p className="text-lg">
          Read articles about what I&apos;ve been up to lately.
        </p>
        <Link href="/blog" className="text-terminalRed body-link text-lg mt-2 inline-block">
            [ Blog ]
         </Link>
      </section>
    </div>
  );
}