'use client'
import { HistoryContext } from '@/context/ContactHistoryProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';


const TimelinePage = () => {
    const { friendInfo } = useContext(HistoryContext);
    const [isOpen, setIsOpen] = useState(false);
    const [searchType, setSearchType] = useState('all');
    const [searchText, setSearchText] = useState("");
    // console.log(searchText);

    const filteredFriends = friendInfo.filter(item => {
        const matchType = searchType === 'all' || item.type === searchType;
        const matchName = searchText === "" || item.name.toLowerCase().includes(searchText.toLowerCase());
        return matchType && matchName;
    });
    const options = ['all', 'call', 'text', 'video'];

    const handleSelect = (option) => {
        setSearchType(option);
        setIsOpen(false);
    };
    return (
        <div className='bg-green-50'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20'>
                <div className='py-4 sm:py-6 md:py-8 space-y-4 sm:space-y-6'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Timeline</h1>
                    <div className='flex justify-between'>
                        <div className="relative inline-block">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-900 text-white text-sm sm:text-base rounded-md hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-300">
                                {searchType} ▼
                            </button>
                            {isOpen && (
                                <div className="absolute mt-1 w-28 sm:w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                    {options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSelect(option)}
                                            className={`block w-full text-left px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base hover:bg-gray-100 ${searchType === option ? 'bg-blue-50 text-green-900' : ''
                                                }`}>
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="focus:outline-none input border border-gray-300 focus-within:border-green-600 focus-within:ring-green-200 transition">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input 
                                value={searchText}
                                onChange={(e)=> (setSearchText(e.target.value))}
                                type="search" 
                                required placeholder="Search by Name"
                                className="" />
                            </label>
                        </div>
                    </div>
                </div>
                {filteredFriends.length === 0 ?
                    (<div className='flex items-center justify-center flex-col bg-white rounded-xl shadow border border-gray-200 mt-6 sm:mt-10 px-4 sm:px-6 py-6 sm:py-10'>
                        <div className='w-full flex justify-center'>
                            <Image
                                src="/emptyList.png"
                                alt='Empty List'
                                width={300}
                                height={300}
                                className='opacity-40 w-40 sm:w-56 md:w-72 lg:w-80 h-auto'
                            >
                            </Image>
                        </div>
                        <div className='text-center mt-4 sm:mt-6 space-y-2 sm:space-y-3'>
                            <h3 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-500'>No timeline history found</h3>
                            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-400'>Start by adding a call, text, or video interaction</p>
                            <Link href="/"><button className='mt-3 sm:mt-4 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-green-900 text-white rounded-xl hover:bg-green-800 transition'>Go Home</button></Link>
                        </div>
                    </div>)
                    :
                    (<div className='space-y-3'>
                        {
                            filteredFriends.map((item, ind) => (
                                <div key={ind} className='bg-white p-4 sm:p-5 flex items-center gap-3 sm:gap-5 rounded shadow'>
                                    <div>
                                        {item.type === "call" ? (<Image src="/call.png" alt='Call' width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10"></Image>)
                                            : item.type === "text" ? (<Image src="/text.png" alt='Text' width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10"></Image>)
                                                : (<Image src="/video.png" alt='Video' width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10"></Image>)}
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <p><span className='capitalize font-semibold text-lg sm:text-xl'>{item.type}</span> with {item.name}</p>
                                        <p className='text-sm sm:text-base text-gray-600'>{item.Date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>)}


            </div>

        </div>
    );
};

export default TimelinePage;