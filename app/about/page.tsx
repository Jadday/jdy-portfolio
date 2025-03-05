import Link from 'next/link';
import Image from 'next/image';

// app/about/page.tsx
export const metadata = {
  title: 'About | James Daw',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <Image src="/james-daw.jpg" alt="James Daw" width={150} height={150} className="responsive-image rounded-full mx-auto mb-6 mt-4" />        <p className="mt-4 text-lg">
        <strong>In the modern world,</strong> where technology makes almost anything possible,{" "} 
        <Link href="/" className="text-terminalRed body-link">self-improvement</Link> has reached a 
        new era. The potential for efficiently picking up new skills and excelling in them has never been higher.
        </p>
        <p className="mt-4 text-lg">
        So for someone like me, who wants to do 20 different things at once, this is where I can thrive.
        </p>
        <p className="mt-4 text-lg">
        An expert penetration tester. A machine learning engineer. A game developer, musician, language learner, 
        triathlete, artist. I constantly strive to meet my goals in every field, without giving up the quality of 
        work in any of them.        
        </p>
        <p className="mt-4 text-lg">
        There&apos;s a chance it isn&apos;t possible. <strong>But if it is, I&apos;m determined to do it.</strong>        
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="mt-4 text-lg">
        I&apos;m currently in the 3rd year of a <Link href="/" className="text-terminalRed body-link">degree apprenticeship</Link>, 
        working full-time in the Cyber Security team at <strong>JLR</strong>, while studying towards a BSc in Digital Technology Solutions 
        (Cyber Security) at <strong>Warwick University</strong>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="mt-4 text-lg">
          I&apos;ve become familiar with several technologies in my journey so far, such as:
        </p>
        <div className="flex flex-col md:flex-row md:space-x-10 justify-center">
          <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <div className="flex flex-col md:flex-row md:space-x-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl mt-4">Languages</h3>
                <ul className="list-disc list-inside text-lg">
                  <li>Python</li>
                  <li>C# and C++</li>
                  <li>HTML, CSS and JS</li>
                  <li>PowerShell</li>
                  <li>Japanese :)</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl mt-4">Software</h3>
                <ul className="list-disc list-inside text-lg">
                  <li>Kali Linux</li>
                  <li>Unity</li>
                  <li>SharePoint / Power Apps</li>
                  <li>GitHub</li>
                  <li>Ableton Live</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-lg">
        I also have a set of soft skills that allow me to follow this path effectively. I&apos;m someone who is incredibly dedicated 
        to subjects I enjoy, so with the right motivation, I can easily spend hours studying and experimenting. I learn new skills quickly, 
        and I have a good intuition for situations I&apos;ve never seen before.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Certifications</h2>
        <p className="mt-4 text-lg">
        Currently in progress... check back soon.
        </p>
      </section>
    </div>
  );
}
