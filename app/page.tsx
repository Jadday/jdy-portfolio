import Link from 'next/link';

export const metadata = {
  title: 'Home | James Daw',
};

export default function Home() {
  return (
    <div className="container">
      {/* INTRODUCTION */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold">James Daw</h1>
        <p className="mt-4 text-lg">
          Hey, I&apos;m <span className="font-bold">Jadday</span>, also known as{" "}
          <span className="font-bold">JDY</span>.
        </p>
        <p className="mt-4 text-lg">
          Whenever I find free time, I love to make things. Whether it&apos;s {" "}
          <Link href="/" className="text-terminalRed body-link">cybersecurity tools</Link>, <Link href="/" className="text-terminalRed body-link">AI Projects</Link>,{" "}
          <Link href="/" className="text-terminalRed body-link">games</Link>, <Link href="/" className="text-terminalRed body-link">music</Link>, or anything else, I always
          have new ideas that I can&apos;t wait to bring to life.
        </p>
        <p className="mt-4 text-lg">
          I also like to <Link href="/" className="text-terminalRed body-link">break things</Link>, if I&apos;m feeling mischievous (and if I have permission, obviously).
        </p>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="terminal-box">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <ul className="space-y-8">
          {/* Project 1 */}
          <li>
            <h3 className="text-2xl font-bold text-terminalRed">Beacons (Unity Game)</h3>
            <p className="mt-2 text-lg">
              A 3D open-world platform fighter inspired by Smash Bros, Genshin
              Impact, and Fortnite. Features <strong>true 3D exploration, state-based
              combat, and custom movement mechanics</strong>.
            </p>
            <Link href="#" className="text-terminalRed body-link text-lg mt-2 inline-block">
              [ Learn More ]
            </Link>
          </li>

          {/* Project 2 */}
          <li>
            <h3 className="text-2xl font-bold text-terminalRed">AI-Powered Playlist Generator</h3>
            <p className="mt-2 text-lg">
              Uses <strong>Spotify API & LLMs</strong> to generate <strong>custom playlists based on
              mood, genre, or existing tracks</strong>. Built with LangChain & Spotipy.
            </p>
            <Link href="#" className="text-terminalRed body-link text-lg mt-2 inline-block">
              [ GitHub Repo ]
            </Link>
          </li>

          {/* Project 3 */}
          <li>
            <h3 className="text-2xl font-bold text-terminalRed">Cybersecurity Recon Tool</h3>
            <p className="mt-2 text-lg">
              A <strong>Python-based network reconnaissance tool</strong> designed for
              <strong> ethical hacking & Red Team engagements</strong>. Gathers <strong>OSINT &
              maps attack surfaces</strong>.
            </p>
            <Link href="#" className="text-terminalRed body-link text-lg mt-2 inline-block">
              [ Coming Soon ]
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}