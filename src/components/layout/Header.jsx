import { Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio", match: (p) => p === "/" },
  { to: "/sobre-mi", label: "Sobre mí", match: (p) => p.startsWith("/sobre-mi") },
  { to: "/blog", label: "Blog", match: (p) => p.startsWith("/blog") },
  { to: "/contacto", label: "Contacto", match: (p) => p.startsWith("/contacto") },
];

export function Header() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between gap-3 px-4 py-3 md:px-0 animate-fade-in-down">
      <nav className="flex h-11 w-full items-center justify-between gap-4 rounded-default bg-primary-dark px-6 text-sm font-medium md:w-auto md:justify-start md:gap-8 md:px-10">
        <Link to="/" className="font-bold text-white">EO</Link>
        <span aria-hidden="true" className="text-gray-500">|</span>
        {links.map(({ to, label, match }) => {
          const active = match(pathname);
          return (
            <Link
              key={to}
              to={to}
              className={`whitespace-nowrap transition-colors ${
                active ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>

      <Link
        to="/contacto"
        className="hidden md:inline-flex items-center justify-center bg-primary-dark hover:opacity-90 transition cursor-pointer rounded-default h-11 px-5 font-semibold text-white text-sm"
      >
        Contactar
      </Link>
    </header>
  );
}
