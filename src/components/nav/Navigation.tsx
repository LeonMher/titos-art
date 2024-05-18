import Link from 'next/link';

export const Navigation = () => {
  return (
    <>
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">

          <div id="navbar-default">
            <ul className="flex gap-large">
            <li>
                <Link
                  href="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutme"
                  // className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
