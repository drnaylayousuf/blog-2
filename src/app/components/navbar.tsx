"use client";
// components/Navbar.js
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    // Define links with both name and href
    const links = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/#blogb" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-gray-500 bg-cover bg-center" style={{ backgroundImage: "url('/nav.jpg')" }}>
            {/* Left side space for logo or brand */}
            <div className="flex-1 md:flex-none"></div>

            {/* Centered "My Blog" title */}
            <div className="flex justify-center flex-1">
                <h1 className="text-2xl sm:text-3xl font-signature ml-2">
                    <Link href="/" className="text-blue-600 hover:text-gray-500 font-semibold link-underline link-underline-black ">My Blog</Link>
                </h1>
            </div>

            {/* Right side (hidden on mobile), nav links */}
            <div className="flex-1 md:flex-none">
                <ul className="hidden md:flex">
                    {links.map(({ name, href }) => (
                        <li key={name} className=" nav-links px-4 cursor-pointer capitalize  text-xl text-blue-600 hover:scale-105 hover:text-black duration-200">
                            <Link href={href}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Hamburger menu for small screens */}
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-blue-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {/* Dropdown menu for small screens */}
            {nav && (
                <div className="absolute top-20 left-0 w-full bg-blue-200 text-blue-400">
                    <ul className="flex flex-col items-center">
                        {links.map(({ name, href }) => (
                            <li key={name} className="py-2 text-xl hover:text-blue-950 transition duration-200">
                                <Link onClick={() => setNav(!nav)} href={href}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
