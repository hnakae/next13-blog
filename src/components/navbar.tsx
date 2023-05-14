import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex bg-slate-300 p-4 justify-center space-x-4 ">
        <li>
          <Link href="/">SearchReduxStore</Link>
        </li>
        <li>
          <Link href="/pureSSR">SSR</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
