'use client'
import { HistoryContext } from '@/context/ContactHistoryProvider';
import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';




const CallBtn = ({ expectedFriend }) => {
    const { friendInfo, setFriendInfo } = useContext(HistoryContext)
    const handelCallInfo = (type) => {
        const updateFriendInfo = { ...expectedFriend, type }
        setFriendInfo([...friendInfo, updateFriendInfo]);
        let actionType = "";
        if(type === "call"){
            actionType = "Called";
        }else if(type === "text"){
            actionType = "Texted";
        }else if(type === "video"){
            actionType = "Video called"
        }
        toast.success(`${actionType} ${ expectedFriend.name} successfully`);
    }

    // console.log(updateFriendInfo)
    return (
        <div>
            <div className='grid grid-cols-3 gap-5 mt-6'>
                <div onClick={() => handelCallInfo("call")} >
                    <FiPhoneCall className='text-4xl md:text-5xl text-green-900     transition-colors duration-300 group-hover:text-white' />
                    <p className='text-lg md:text-xl font-semibold mt-2 text-green-900     transition-colors duration-300 group-hover:text-white'>Call</p>
                </div>
                <div onClick={() => handelCallInfo("text")} className='bg-green-50 p-5 flex items-center justify-center flex-col rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-green-900 group cursor-pointer'>
                    <MdOutlineTextsms className='text-4xl md:text-5xl text-green-900     transition-colors duration-300 group-hover:text-white' />
                    <p className='text-lg md:text-xl font-semibold mt-2 text-green-900     transition-colors duration-300 group-hover:text-white'>Text</p>
                </div>
                <div onClick={() => handelCallInfo("video")} className='bg-green-50 p-5 flex items-center justify-center flex-col rounded-xl transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 hover:bg-green-900 group cursor-pointer'>
                    <IoVideocamOutline className='text-4xl md:text-5xl text-green-900    transition-colors duration-300 group-hover:text-white' />
                    <p className='text-lg md:text-xl font-semibold mt-2 text-green-900   transition-colors duration-300 group-hover:text-white'>Video</p>
                </div>

            </div>
        </div>
    );
};

export default CallBtn;