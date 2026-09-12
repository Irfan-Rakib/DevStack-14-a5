import { useState, type FC } from "react";
import Logo from "../assets/logo-text.png";
const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = (): void => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-[72px] w-[92%] max-w-[1400px] items-center justify-between">
        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-slate-700 md:hidden"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Brand */}

        <a href="#home" className="flex items-center gap-2">
          <img src={Logo} alt="DevStack Logo" />
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-7 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-slate-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}

        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-slate-700">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}

      {menuOpen && (
        <nav className="absolute top-[72px] left-0 flex w-full flex-col gap-1 border-b border-slate-200 bg-white p-5 shadow-lg md:hidden">
          <a
            onClick={closeMenu}
            href="#home"
            className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
          >
            Home
          </a>

          <a
            onClick={closeMenu}
            href="#technologies"
            className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
          >
            Technologies
          </a>

          <a
            onClick={closeMenu}
            href="#projects"
            className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
          >
            Projects
          </a>

          <a
            onClick={closeMenu}
            href="#about"
            className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
          >
            About
          </a>

          <a
            onClick={closeMenu}
            href="#contact"
            className="rounded-lg px-4 py-3 text-slate-700 hover:bg-slate-100"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
