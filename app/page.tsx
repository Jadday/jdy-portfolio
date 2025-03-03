export const metadata = {
  title: 'Home | James Daw',
};

export default function Home() {
  return (
    <div className="container">
      {/* INTRODUCTION */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-terminalGold">James Daw</h1>
        <p className="mt-4 text-lg">
          Hey, I'm <span className="text-terminalRed font-bold">JDY</span>. I build things.
        </p>
        <p className="mt-2 text-lg">
          From <span className="text-terminalRed">cybersecurity</span> to{" "}
          <span className="text-terminalRed">AI projects</span>, I enjoy exploring
          how technology works and bending it to my will. This site is a collection
          of things I've worked on.
        </p>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="terminal-box">
        <h2 className="text-3xl font-bold text-terminalRed mb-6">Projects</h2>

        <ul className="space-y-8">
          {/* Project 1 */}
          <li>
            <h3 className="text-2xl font-bold text-terminalRed">Beacons (Unity Game)</h3>
            <p className="mt-2 text-lg">
              A 3D open-world platform fighter inspired by Smash Bros, Genshin
              Impact, and Fortnite. Features <strong>true 3D exploration, state-based
              combat, and custom movement mechanics</strong>.
            </p>
            <a href="#" className="text-terminalRed text-lg font-bold mt-2 inline-block">
              [ Learn More ]
            </a>
          </li>

          {/* Project 2 */}
          <li>
            <h3 className="text-2xl font-bold text-terminalRed">AI-Powered Playlist Generator</h3>
            <p className="mt-2 text-lg">
              Uses <strong>Spotify API & LLMs</strong> to generate <strong>custom playlists based on
              mood, genre, or existing tracks</strong>. Built with LangChain & Spotipy.
            </p>
            <a href="#" className="text-terminalRed text-lg font-bold mt-2 inline-block">
              [ GitHub Repo ]
            </a>
          </li>

          {/* Project 3 */}
          <li>
            <h3 className="text-2xl font-bold text-terminalRed">Cybersecurity Recon Tool</h3>
            <p className="mt-2 text-lg">
              A <strong>Python-based network reconnaissance tool</strong> designed for
              <strong> ethical hacking & Red Team engagements</strong>. Gathers <strong>OSINT &
              maps attack surfaces</strong>.
            </p>
            <a href="#" className="text-terminalRed text-lg font-bold mt-2 inline-block">
              [ Coming Soon ]
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
