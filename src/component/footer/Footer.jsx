import Link from 'next/link';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='w-full bg-[#244D3F] px-4'>
            <footer className="max-w-7xl mx-auto text-center pt-12 md:pt-16">
                <h1 className='text-3xl md:text-5xl font-bold text-white'>KeenKeeper</h1>
                <p className='text-gray-400 mt-3 max-w-2xl mx-auto text-sm md:text-base'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='mt-6'>
                    <p className='text-white text-lg font-medium'>Social Links</p>
                    <div className='flex justify-center items-center py-3 gap-3 flex-wrap'>
                        <div className='bg-white p-2 rounded-full hover:text-white hover:bg-green-700 transition'>
                            <Link href="/"><FaInstagram /></Link>
                        </div>
                        <div className='bg-white p-2 rounded-full hover:text-white hover:bg-green-700 transition'>
                            <Link href="/"><FaSquareFacebook /></Link>
                        </div>
                        <div className='bg-white p-2 rounded-full hover:text-white hover:bg-green-700 transition'>
                            <Link href="/"><FaXTwitter /></Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-5 border-t mt-6 border-gray-600 text-sm md:text-base'>
                    <p className='text-gray-400 text-center md:text-left'>© 2026 KeenKeeper. All rights reserved.</p>
                    <ul className='flex flex-wrap justify-center gap-3 text-gray-400'>
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