"use client";

import { useState } from "react";
import Link from "next/link";
import navigationData from "@/data/navigation.json";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex h-10 w-10 items-center justify-center rounded-md"
      >
        {isOpen ? (
          // X icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 bg-white px-6 py-6 shadow-lg">
          <nav>
            <ul className="flex flex-col gap-5">
              {navigationData.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block text-base text-[#4D4D4D]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4 border-t pt-5">
              <button className="text-[#28CB8B]">
                Login
              </button>

              <button className="rounded-md bg-[#4CAF4F] px-5 py-2 text-white">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}