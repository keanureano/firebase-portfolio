import { Outlet } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full h-full p-4 md:p-12 bg-black-900 text-white/90">
      <div className="flex flex-col justify-between w-full h-full p-4 md:p-12 border border-black-400 outline outline-[200px] outline-black-900">
        <Header />
        <Main />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="space-y-5">
      <div className="flex">
        <Link to="/">
          <h1>Keanu Reaño</h1>
          <h2>Full Stack Developer</h2>
          <h2>UI/UX Designer</h2>
        </Link>
      </div>
      <div className="flex">
        <nav className="flex flex-col font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="flex justify-end">
      <Outlet />
    </main>
  );
}
