'use client'
import { HistoryContext } from '@/context/ContactHistoryProvider';
import Image from 'next/image';
import React, { useContext, useState } from 'react';


const TimelinePage = () => {
    const { friendInfo } = useContext(HistoryContext);
    const [isOpen, setIsOpen] = useState(false);
    const [searchType, setSearchType] = useState('all');

    const filteredFriends = friendInfo.filter(item => {
        if (searchType === 'all') return true;
        return item.type === searchType;
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
                </div>
                <div className='space-y-3'>
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
                </div>
            </div>

        </div>
    );
};

export default TimelinePage;