import Link from 'next/link';

// app/projects/page.tsx
export const metadata = {
    title: 'Projects | James Daw',
  };
  
  export default function ProjectsPage() {
      return (
        <div>
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