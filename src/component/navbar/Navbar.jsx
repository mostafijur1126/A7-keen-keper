import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
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
                            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li><Link href="/"><FaHome /> Home</Link></li>
                            <li><Link href="/"><MdOutlineWatchLater /> Timeline</Link></li>
                            <li><Link href="/"><TfiStatsUp /> Stats</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="font-bold text-xl md:text-2xl">
                        Keen<span className='text-green-800'>Keeper</span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">

                        <li>
                            <Link href="/" className='btn'>
                                <FaHome /> Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/" className='btn'>
                                <MdOutlineWatchLater /> Timeline
                            </Link>
                        </li>

                        <li>
                            <Link href="/" className='btn'>
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