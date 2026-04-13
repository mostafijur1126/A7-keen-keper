import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='w-full bg-[#244D3F]'>
            <footer className="max-w-7xl mx-auto text-center pt-18">
                <h1 className='text-5xl font-bold text-white'>KeenKeeper</h1>
                <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <p className='text-white'>Social Links</p>
                    <div className='flex justify-center items-center py-2 gap-2'>
                        <div className='bg-white p-2 rounded-full hover:text-white hover:bg-green-700'><Link href="/"><FaInstagram /></Link></div>
                        <div className='bg-white p-2 rounded-full hover:text-white hover:bg-green-700'><Link href="/"><FaSquareFacebook /></Link></div>
                        <div className='bg-white p-2 rounded-full hover:text-white hover:bg-green-700'><Link href="/"><FaXTwitter /></Link></div>
                    </div>
                </div>
                <div className='flex items-center justify-between py-5 border-t-1 mt-5 border-t-gray-600'>
                    <p className='text-gray-400'>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex gap-2 text-center text-gray-400'>
                        <Link href="">Privacy Policy</Link>
                        <Link href="">Terms of Service </Link>
                        <Link href="">Cookies</Link>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;