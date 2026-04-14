'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className='w-full bg-base-100 shadow-sm px-4'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            ☰
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href="/" className={`${pathname === "/" ? "bg-green-900 text-white" : ""}`}><FaHome /> Home</Link></li>
                            <li><Link href="/timeline" className={`${pathname === "/timeline" ? "bg-green-900 text-white" : ""}`}><MdOutlineWatchLater /> Timeline</Link></li>
                            <li><Link href="/stats" className={`${pathname === "/stats" ? "bg-green-900 text-white" : ""}`}><TfiStatsUp /> Stats</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="font-bold text-xl md:text-2xl">
                        Keen<span className='text-green-800'>Keeper</span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">

                        <li>
                            <Link href="/" className={`${pathname === "/" ? "bg-green-900 text-white" : ""}`}>
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/timeline" className={`${pathname === "/timeline" ? "bg-green-900 text-white" : ""}`}>
                                <MdOutlineWatchLater /> Timeline
                            </Link>
                        </li>

                        <li>
                            <Link href="/stats" className={`${pathname === "/stats" ? "bg-green-900 text-white" : ""}`}>
                                <TfiStatsUp /> Stats
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;