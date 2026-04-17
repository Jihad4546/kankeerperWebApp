import React from 'react';
import { IoMdNotificationsOutline} from 'react-icons/io';
import { FaArchive } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Cards from '@/Component/Cards';


const cardDatailsPage = async ({ params }) => {
 const res = await fetch('https://kenkeeper-webapp.vercel.app/data.json',{cache:"no-store"})
 const data = await res.json()

    const { cardId } = await params;
    const card = data.find(item => item.id === Number(cardId));

    return (
        <div className='container mx-auto px-4 flex flex-col lg:flex-row gap-8 '>
            <div className="w-full lg:w-1/3">

                <div className='shadow text-center space-y-2  p-4 md:p-8 mt-6 md:mt-10'>
                    <img className='w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full' src={card.picture} />

                    <h1 className="text-lg md:text-xl font-semibold">{card.name}</h1>

                    <p className={`badge 
        ${card.status === "overdue"
                            ? "text-white bg-red-600"
                            : card.status === "almost due"
                                ? "text-white bg-yellow-500"
                                : "text-white bg-green-900"
                        }`}>
                        {card.status}
                    </p>

               <div>     <p className='badge badge-warning'>{card.tags[0]}</p>
                         <p className="text-sm text-gray-500">{card.bio}</p>
                         <p className="text-sm text-gray-500">{card.email}</p>
                         
                         </div>
                </div>


                <div className="space-y-3 mt-5 mb-2">

                    <div className="flex items-center gap-2 shadow w-full p-2 md:p-3 justify-center text-sm md:text-lg rounded-xl cursor-pointer">
                        <IoMdNotificationsOutline/>
                        Snooze 2 weeks
                    </div>

                    <div className="flex items-center gap-2 shadow w-full p-2 md:p-3 justify-center text-sm md:text-lg rounded-xl cursor-pointer">
                        <FaArchive />
                        Archive
                    </div>

                    <div className="flex items-center gap-2 shadow w-full p-2 mb-5 md:p-3 justify-center text-sm md:text-lg rounded-xl cursor-pointer
                     ">
                        <MdDelete />
                        Delete
                    </div>

                </div>

            </div>

            <div className='w-full lg:w-2/3 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-10'>

                    <div className="card shadow min-h-25 lg:h-36 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <h2 className="text-xl md:text-3xl font-semibold">
                                {card.days_since_contact}
                            </h2>
                            <p className="text-xs md:text-sm text-gray-400">
                                Days Since Contact
                            </p>
                        </div>
                    </div>

                    <div className="card shadow min-h-25 lg:h-36 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <h2 className="text-xl md:text-3xl font-semibold">{card.goal}</h2>
                            <p className="text-xs md:text-sm text-gray-400">Goal (Days)</p>
                        </div>
                    </div>

                    <div className="card shadow min-h-25 lg:h-36 flex items-center justify-center">
                        <div className="card-body text-center p-3">
                            <h2 className="text-xl md:text-3xl font-semibold">6</h2>
                            <p className="text-xs md:text-sm text-gray-400">{card.next_due_date}</p>
                        </div>
                    </div>


                </div>
                <div className='shadow mt-4 md:mt-5 p-4 md:p-5'>
                    <div className='flex justify-between items-center'>
                        <h1>Relationship Goal</h1>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every {card.goal} days</p>
                </div>
                <div>
                     <Cards card={card}>

                 </Cards>
                </div>
            </div>

        </div>
    );
};

export default cardDatailsPage;