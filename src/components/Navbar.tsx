import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between m-5 items-center border-2 border-blue-500">
        <li>
          <Link className="border-red-400 border-2" href="/">Link 1</Link>
        </li>
        <li>
          <Link className="border-red-400 border-2" href="/">Link 2</Link>
        </li>
        <li>
          <Link className="border-red-400 border-2" href="/">Link 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
