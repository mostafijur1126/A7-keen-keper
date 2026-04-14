import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const dataResponse = async () => {
    const res = await fetch('http://localhost:3000/data.json',{
        cache:"no-store"
    });
    const data = await res.json();
    return data;
}

const Friends = async () => {
    const friends = await dataResponse()
    // console.log(friends);
    return (
        <div className='w-full bg-green-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pb-10'>

                    <div className='text-center p-6 md:p-10 bg-white rounded-xl shadow'>
                        <p className='text-2xl md:text-3xl font-bold'>{friends.length}</p>
                        <p className='text-gray-500 mt-1'>Total Friends</p>
                    </div>

                    <div className='text-center p-6 md:p-10 bg-white rounded-xl shadow'>
                        <p className='text-2xl md:text-3xl font-bold'>10</p>
                        <p className='text-gray-500 mt-1'>On Track</p>
                    </div>

                    <div className='text-center p-6 md:p-10 bg-white rounded-xl shadow'>
                        <p className='text-2xl md:text-3xl font-bold'>10</p>
                        <p className='text-gray-500 mt-1'>Need Attention</p>
                    </div>

                    <div className='text-center p-6 md:p-10 bg-white rounded-xl shadow'>
                        <p className='text-2xl md:text-3xl font-bold'>10</p>
                        <p className='text-gray-500 mt-1'>Interactions This Month</p>
                    </div>

                </div>
                <div className='py-10 px-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center md:text-left'>Your Friends</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {
                            friends.map(friend => {
                                return <Link href={`/${friend.id}`} key={friend.id} className='bg-white p-6 md:p-8 rounded-xl shadow hover:shadow-lg transition duration-300'>
                                    <div className='flex justify-center'>
                                        <Image
                                        src={friend.picture}
                                        alt={friend.name}
                                        width={100}
                                        height={100}
                                        className='w-20 h-20 md:w-24 md:h-24 object-cover rounded-full'
                                        ></Image>
                                    </div>
                                    <div className='text-center space-y-2 mt-4'>
                                        <h1 className='text-lg md:text-xl font-bold'>{friend.name}</h1>
                                        <p className='text-sm md:text-base text-gray-400 font-semibold'>{friend.days_since_contact}d ago</p>
                                        <p className='bg-green-100 text-green-900 text-xs md:text-sm w-fit px-3 py-1 rounded-full uppercase font-semibold mx-auto'>{friend.tags[0] || "No Tag"}</p>
                                        <p className={` text-white text-xs md:text-sm capitalize mx-auto font-semibold w-fit px-3 py-1 rounded-full
                                         ${friend.status === "overdue" ? "bg-red-600" 
                                            : friend.status === "almost due" ? "bg-amber-400" 
                                            : "bg-green-950"
                                            }`}>{friend.status}</p>
                                    </div>
                                </Link>
                            })
                        }
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Friends;