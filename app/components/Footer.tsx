export default function Footer() {
  return (
    <footer className="bg-[#800303] text-white py-6 text-center border-t border-[#30363d] text-sm">
      <p className="tracking-wide">
        © {new Date().getFullYear()} <span className="text-terminalRed">James Daw</span>. All rights reserved.
      </p>
    </footer>
  );
}
