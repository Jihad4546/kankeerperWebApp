import Link from 'next/link';

const CardPage = async () => {
    const res = await fetch('https://kenkeeper-webapp.vercel.app/data.json', { cache: "no-store" })
    const data = await res.json()
    return (
        <div>
            <div className='container mx-auto'>
                <h2 className='ml-3 py-5 text-xl md:text-2xl'>Your Friends</h2>
            </div>
            <div className='container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    data.map((a) => <Link key={a.id} href={`/Card/${a.id}`}>
                        <div className='shadow text-center space-y-2 p-4 md:p-6'>
                            <img className='w-24 h-24 mx-auto rounded-full' src={a.picture} alt={a.name} />
                            <h1>{a.name}</h1>
                            <p>{a.days_since_contact}d ago</p>
                            <p className='badge badge-warning'>{a.tags[0]}</p>
                            <br />
                            <p className={`badge 
                    ${a.status === "overdue"
                                    ? "text-white bg-red-600 px-2 py-1 rounded"
                                    : a.status === "almost due"
                                        ? "text-white text-[12px] md:text-xl bg-yellow-500 px-2 py-1 rounded"
                                        : a.status === "on-track"
                                            ? "text-white bg-green-900 px-2 py-1 rounded"
                                            : "text-gray-500"
                                }
                        `}>{a.status}</p>
                        </div></Link>)
                }
            </div>
        </div>
    );
};

export default CardPage;