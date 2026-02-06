"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        <h1 className="text-2xl font-bold text-primary">
          Novoz Infinity
        </h1>

        <ul className="flex gap-8 list-none text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-primary transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}
