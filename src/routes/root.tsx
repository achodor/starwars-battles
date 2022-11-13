import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Root() {
  const { pathname } = useLocation();

  return (
    <>
      <header className="mt-10 bg-black">
        <h1 className="mb-10 text-center text-3xl font-extrabold uppercase text-yellow-500">SWB</h1>
        <nav className="flex items-center justify-center">
          <Link
            to="/starships"
            className={`border border-white py-2 px-3 text-lg font-semibold uppercase ${
              pathname.includes('starships') && 'text-yellow-400'
            }`}
          >
            Starships
          </Link>
          <Link
            to="/characters"
            className={`-ml-px border border-white py-2 px-3 text-lg font-semibold uppercase ${
              pathname.includes('characters') && 'text-yellow-400'
            }`}
          >
            Characters
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
