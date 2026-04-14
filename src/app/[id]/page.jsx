import React from 'react';
import { Friends } from '@/component/homePage/friends/Friends';
import Image from 'next/image';
import { IoIosNotifications } from 'react-icons/io';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CallBtn from '@/component/homePage/friends/detailsButtonToggol/CallBtn';

const dataResponse = async () => {
    const res = await fetch('http://localhost:3000/data.json', {
        cache: "no-store"
    });
    const data = await res.json();
    return data;
}

const FriendDetailsPage = async ({ params }) => {
    const { id } = await (params);
    const friends = await dataResponse();
    const expectedFriend = friends.find(friend => friend.id == id);

    return (
        <div className='bg-green-50 px-4'>
            <div className='max-w-7xl mx-auto py-10 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='col-span-1'>
                    <div className=' bg-white p-5 md:p-8 rounded-xl shadow hover:shadow-lg transition duration-300'>
                        <div className='flex justify-center'>
                            <Image
                                src={expectedFriend.picture}
                                alt={expectedFriend.name}
                                width={100}
                                height={100}
                                className='w-20 h-20 md:w-24 md:h-24 object-cover rounded-full'
                            ></Image>
                        </div>
                        <div className='text-center space-y-2 mt-4'>
                            <h1 className='text-lg md:text-xl font-bold'>{expectedFriend.name}</h1>
                            <p className='bg-green-100 text-green-900 text-xs md:text-sm w-fit px-3 py-1 rounded-full uppercase font-semibold mx-auto'>{expectedFriend.tags[0] || "No Tag"}</p>
                            <p className={` text-white text-xs md:text-sm capitalize mx-auto font-semibold w-fit px-3 py-1 rounded-full
                                                             ${expectedFriend.status === "overdue" ? "bg-red-600"
                                    : expectedFriend.status === "almost due" ? "bg-amber-400"
                                        : "bg-green-950"
                                }`}>{expectedFriend.status}</p>
                            <p className='italic text-sm md:text-base'>{expectedFriend.bio}</p>
                            <p className='text-sm md:text-base break-all'>email: {expectedFriend.email}</p>
                        </div>
                    </div>
                    <div className='space-y-3 md:space-y-4 mt-5 md:mt-6'>
                        <button className='btn w-full bg-white rounded-md text-gray-600 font-bold'><IoIosNotifications />Snooze 2 weeks</button>
                        <button className='btn w-full bg-white rounded-md text-gray-600 font-bold'><FiArchive />Archive</button>
                        <button className='btn w-full bg-white rounded-md text-red-500 font-bold'><RiDeleteBin6Line />Delete</button>
                    </div>
                </div>
                <div className='col-span-1 lg:col-span-2 space-y-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5'>
                        <div className='bg-white p-5 md:p-6 text-center rounded shadow'>
                            <p className='text-3xl md:text-4xl font-bold text-green-900'>{expectedFriend.days_since_contact}</p>
                            <p className='text-gray-400 text-sm md:text-base'>Days Since Contact</p>
                        </div>
                        <div className='bg-white p-5 md:p-6 text-center rounded shadow'>
                            <p className='text-3xl md:text-4xl font-bold text-green-900'>{expectedFriend.goal}</p>
                            <p className='text-gray-400 text-sm md:text-base'>Goal (Days)</p>
                        </div>
                        <div className='bg-white p-5 md:p-6 text-center rounded shadow'>
                            <p className='text-3xl md:text-4xl font-bold text-green-900'>{expectedFriend.next_due_date}</p>
                            <p className='text-gray-400 text-sm md:text-base'>Next Due</p>
                        </div>
                    </div>
                    <div className='bg-white p-5 md:p-6 rounded shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4'>
                        <div>
                            <h1 className='text-xl md:text-2xl font-bold text-green-950'>Relationship Goal</h1>
                            <p className='text-gray-400 text-base md:text-xl'>Connect every <span className='text-xl md:text-2xl font-bold text-black'>{expectedFriend.goal} days</span></p>
                        </div>
                        <div>
                            <button className='btn w-full sm:w-auto bg-green-900 text-white'>Edit</button>
                        </div>
                    </div>
                    <div className='bg-white p-5 md:p-6 rounded shadow'>
                        <h1 className='text-xl md:text-2xl font-bold text-green-950 mb-3'>Quick Check-In</h1>
                        <div className=''>
                            <CallBtn expectedFriend={expectedFriend}></CallBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetailsPage;