

export const Stats = () => {

    return (

        <main className="w-full h-full rounded-xl flex flex-col justify-start items-center gap-5">

            {/* Search Bar Container*/}
            <div className="w-full h-16 bg-gray-200 rounded-xl">

                <input className="w-full h-full rounded-xl px-4 focus:outline-none text-gray-700 font-medium text-lg" autoComplete="off" placeholder="Search for cities..."></input>

            </div>

            {/* Current City Container*/}
            <div className="w-full h-[33%] rounded-xl flex flex-row justify-between">

                <div className="w-1/2 h-full flex flex-col">

                    <div className="w-full h-1/2 flex flex-col justify-center items-start px-10 gap-1">

                        <h2 className="text-6xl font-semibold">Córdoba</h2>
                        <h4 className="text-xl text-gray-500">Chance of rain: 0%</h4>

                    </div>

                    <div className="w-full h-1/2 flex justify-start items-center px-10">

                        <h4 className="text-6xl font-semibold">31º</h4>

                    </div>

                </div>

                <div className="w-1/2 h-full flex justify-end items-center">

                    <img src="/Sun.png" className="h-full w-full object-contain"></img>

                </div>

            </div>

            {/* Forecast Container*/}
            <div className="w-full h-[33%] bg-gray-200 rounded-xl px-10 py-4">

                <div className="w-full h-1/3 flex justify-start items-center">

                    <p className="text-xl text-gray-500 font-medium">Today's Forecast</p>

                </div>

                <div className="w-full h-2/3 flex justify-between items-center">

                    <div className="w-1/6 h-full border-r border-gray-500 flex flex-col justify-between items-center">
                        
                        <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>6:00 A.M</p></div>

                        <div className="w-full h-[60%]"><img src="/Cloud.png" alt="Cloud Image" className="w-full h-full object-contain" /></div>

                        <div className="w-full h-[20%] flex justify-center items-center font-medium text-2xl"><p>25º</p></div>

                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        
                        <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>9:00 A.M</p></div>

                        <div className="w-full h-[60%]"><img src="/Cloud-and-Sun.png" alt="Cloud and Sun Image" className="w-full h-full object-contain" /></div>

                        <div className="w-full h-[20%] flex justify-center items-center font-medium text-2xl"><p>28º</p></div>

                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        
                        <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>12:00 P.M</p></div>

                        <div className="w-full h-[60%]"><img src="/Sun.png" alt="Sun Image" className="w-full h-full object-contain" /></div>

                        <div className="w-full h-[20%] flex justify-center items-center font-medium text-2xl"><p>33º</p></div>

                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        
                        <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>3:00 P.M</p></div>

                        <div className="w-full h-[60%]"><img src="/Sun.png" alt="Sun Image" className="w-full h-full object-contain" /></div>

                        <div className="w-full h-[20%] flex justify-center items-center font-medium text-2xl"><p>34º</p></div>

                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        
                        <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>6:00 P.M</p></div>

                        <div className="w-full h-[60%]"><img src="/Sun.png" alt="Sun Image" className="w-full h-full object-contain" /></div>

                        <div className="w-full h-[20%] flex justify-center items-center font-medium text-2xl"><p>32º</p></div>

                    </div>

                    <div className="w-1/6 h-full border-gray-500">
                        
                        <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>9:00 P.M</p></div>

                        <div className="w-full h-[60%]"><img src="/Cloud-and-Sun.png" alt="Cloud and Sun Image" className="w-full h-full object-contain" /></div>

                        <div className="w-full h-[20%] flex justify-center items-center font-medium text-2xl"><p>30º</p></div>

                    </div>

                </div>

            </div>

            {/* Air Condition Container*/}
            <div className="w-full h-[33%] bg-gray-200 rounded-xl px-10 py-4">

                <div className="w-full h-[30%] flex justify-between items-center">

                    <div>
                        <p className="text-xl font-medium text-gray-500">Air conditions</p>
                    </div>

                    <div>
                        <a href="#" className="font-medium text-white bg-[#007aff] rounded-xl px-3 py-1.5 hover:bg-[#0051AA] transition-all ease-in">See more</a>
                    </div>

                </div>

                <div className="w-full h-[70%] flex">

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                                    <path d="M10 9l4 0" />
                                </svg>

                            </div>

                            <div className="w-full flex justify-center items-end">
                                <p className="text-gray-500 font-medium text-xl">Real Feel</p>
                            </div>

                            <div className="w-full flex justify-center items-start">
                                <p className="text-3xl font-medium">30º</p>
                            </div>

                        </div>
            
                    </div>

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
                                </svg>

                            </div>

                            <div className="w-full flex justify-center items-end">
                            
                                <p className="text-xl text-gray-500 font-medium">Chance of rain</p>
                            
                            </div>

                            <div className="w-full flex justify-center items-start">
                            
                                <p className="text-3xl font-medium">0%</p>

                            </div>

                        </div>

                    </div>

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" >
                                    <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                                    <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                                    <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                                </svg>


                            </div>

                            <div className="w-full flex justify-center items-end">
                            
                                <p className="text-xl font-medium text-gray-500">Wind</p>

                            </div>

                            <div className="w-full flex justify-center items-start">
                            
                                <p className="text-3xl font-medium">0.2 km/h</p>

                            </div>

                        </div>

                    </div>

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" >
                                    <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                                    <path d="M6.343 17.657l-1.414 1.414" />
                                    <path d="M6.343 6.343l-1.414 -1.414" />
                                    <path d="M17.657 6.343l1.414 -1.414" />
                                    <path d="M17.657 17.657l1.414 1.414" />
                                    <path d="M4 12h-2" />
                                    <path d="M12 4v-2" />
                                    <path d="M20 12h2" />
                                    <path d="M12 20v2" />
                                </svg>

                            </div>

                            <div className="w-full flex justify-center items-end">
                            
                                <p className="text-xl text-gray-500 font-medium">UV Index</p>

                            </div>

                            <div className="w-full flex justify-center items-start">
                            
                                <p className="font-medium text-3xl">3</p>
                                    
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    )

}