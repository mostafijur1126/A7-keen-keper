import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {
    return (
        <div className='w-full bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto">
            <div className="flex-1">
                <Link href="/" className="font-bold text-xl">Keen<span className='text-green-800'>Keeper</span></Link>
            </div>
            <div className="flex gap-3">
                <Link href="/" className='btn'><FaHome /> Home</Link>
                <Link href="/" className='btn'> <MdOutlineWatchLater />Timeline</Link>
                <Link href="/"  className='btn'><TfiStatsUp /> Stats</Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;