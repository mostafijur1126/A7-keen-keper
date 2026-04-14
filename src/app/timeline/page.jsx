'use client'
import { HistoryContext } from '@/context/ContactHistoryProvider';
import Image from 'next/image';
import React, { useContext } from 'react';
const TimelinePage = () => {
    const { friendInfo} = useContext(HistoryContext)
    console.log(friendInfo);
    return (
        <div className='bg-green-50'>
            <div className='max-w-7xl mx-auto py-20'>
                <div className='py-8 space-y-6'>
                    <h1 className='text-5xl font-bold'>Timeline</h1>
                    <input type="text" className='border' placeholder='Filter timeline' />
                </div>
                <div className='space-y-3'>
                    {
                        friendInfo.map((item, ind) => (
                            <div key={ind} className='bg-white p-5 flex items-center gap-5 rounded'>
                                <div>
                                    {item.type === "call" ? (<Image src="/call.png" alt='Call' width={40} height={40}></Image>) 
                                    : item.type === "text" ? (<Image src="/text.png" alt='Text' width={40} height={40}></Image>)
                                    : (<Image src="/video.png" alt='Video' width={40} height={40}></Image>)}
                                </div>
                                <div>
                                    <p>{item.type} with {item.name}</p>
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