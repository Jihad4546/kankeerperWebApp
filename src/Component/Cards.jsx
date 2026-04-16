'use client'
import React from 'react';
import { FaVideo } from 'react-icons/fa';
import { IoMdText } from 'react-icons/io';
import { MdWifiCalling2 } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cards = ({card}) => {

    const handleAction = (type) => {
        const newData = {
            name: card.name,
            type: type,
            date: new Date().toLocaleDateString()
        };
        const existing = JSON.parse(localStorage.getItem("timeline")) || [];

        existing.push(newData);

        if (type === 'call') {
            toast(`Call By ${card.name}`)
        }
        else if (type === 'text') {
            toast(`Text By ${card.name}`)
        }
        else {
            toast(`Video Call By ${card.name}`)
        }
        localStorage.setItem("timeline", JSON.stringify(existing));
        console.log(existing)
    };
    return (
        <div className='mt-5'>
            <h1>Quick Check-In</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-5'>

                <div
                    onClick={() => handleAction("call")}
                    className="card shadow min-h-20 lg:h-20 flex items-center justify-center bg-gray-200 cursor-pointer">
                    <div className="card-body text-center ">
                        <MdWifiCalling2 size={40} />
                        <p className="text-xs md:text-xl  text-gray-900">
                            Call
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => handleAction("text")}
                    className="card shadow min-h-20 lg:h-20 flex items-center justify-center bg-gray-200 cursor-pointer">
                    <div className="card-body text-center p-3">
                        <IoMdText size={40} />
                        <p className="text-xs md:text-sm text-gray-900">
                            text
                        </p>
                    </div>
                </div>
                <div
                    onClick={() => handleAction("video")}
                   className="card shadow min-h-20 lg:h-20 flex items-center justify-center bg-gray-200 cursor-pointer">
                    <div className="card-body text-center p-3">
                        <FaVideo size={40} />

                       <p className="text-xs md:text-sm text-gray-900">
                            Call
                        </p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Cards;