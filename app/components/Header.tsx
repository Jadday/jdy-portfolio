import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#800303] text-white p-4 border-b border-[#30363d]">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-terminalRed tracking-wide nav-link">
          James Daw
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg flex items-center">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/portfolio" className="nav-link">Projects</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/">
            <Image src="/navbar-icon3.png" alt="Description" width={40} height={40} className="navbar-icon-glow" />
          </Link>
        </div>
      </nav>
    </header>
  );
}