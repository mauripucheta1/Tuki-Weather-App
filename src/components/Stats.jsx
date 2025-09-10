

export const Stats = () => {

    return (

        <main className="w-full h-full rounded-xl flex flex-col justify-between items-center gap-5">

            {/* Search Bar Container*/}
            <div className="w-full h-[45px] md:h-16 bg-gray-200 rounded-xl">

                <input className="w-full h-full rounded-xl px-4 focus:outline-none text-gray-700 font-medium text-lg" autoComplete="off" placeholder="Search for cities..."></input>

            </div>

            {/* Current City Container*/}
            <div className="w-full md:h-[33%] rounded-xl flex flex-row justify-between">

                <div className="w-1/2 h-full flex flex-col">

                    <div className="w-full h-1/2 flex flex-col justify-center items-start md:px-10 gap-1">

                        <h2 className="text-3xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">Córdoba</h2>
                        <h4 className="text-base md:text-xl lg:text-2xl xl:text-xl 2xl:text-2xl text-gray-500">Chance of rain: 0%</h4>

                    </div>

                    <div className="w-full h-1/2 flex justify-start items-center md:px-10">

                        <h4 className="text-4xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-semibold">31º</h4>

                    </div>

                </div>

                <div className="w-1/2 h-full flex justify-end items-center">

                    <img src="/Sun.png" className="w-[70%] md:h-full w-[70%] md:w-full object-contain"></img>

                </div>

            </div>

            {/* Forecast Container*/}
            <div className="w-full h-[160px] md:h-[240px] bg-gray-200 rounded-xl px-4 md:px-10 py-2 md:py-4">

                <div className="w-full h-1/3 flex justify-start items-center">

                    <p className="md:text-xl text-gray-500 font-medium">Today's Forecast</p>

                </div>

                <div className="w-full h-2/3 flex md:justify-between items-center overflow-x-auto md:overflow-x-visible overflow-y-hidden scrollbar-hide">

                    <div className="flex flex-nowrap md:flex-wrap w-max md:w-full">

                        <div className="w-[80px] md:w-1/6 h-full border-r border-gray-500 flex flex-col justify-between items-center">
                        
                            <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500 flex-none"><p>6:00</p></div>

                            <div className="w-full h-[60%] flex justify-center items-center">
                                <img src="/Cloud.png" alt="Cloud Image" className="w-[40%] md:w-[75%] lg:w-[50%] 2xl:w-[40%] h-[40%] md:h-[75%] lg:h-[50%] 2xl:h-[40%] object-contain" />
                            </div>

                            <div className="w-full h-[20%] flex justify-center items-center font-medium text-xl md:text-2xl flex-none"><p>25º</p></div>

                        </div>

                        <div className="w-[80px] md:w-1/6 h-full border-r border-gray-500">
                            
                            <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500 flex-none"><p>9:00</p></div>

                            <div className="w-full h-[60%] flex justify-center items-center">
                                <img src="/Cloud-and-Sun.png" alt="Cloud and Sun Image" className="w-[40%] md:w-[75%] lg:w-[50%] 2xl:w-[40%] h-[40%] md:h-[75%] lg:h-[50%] 2xl:h-[40%] object-contain" />
                            </div>

                            <div className="w-full h-[20%] flex justify-center items-center font-medium text-xl md:text-2xl flex-none"><p>28º</p></div>

                        </div>

                        <div className="w-[80px] md:w-1/6 h-full border-r border-gray-500">
                            
                            <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500 flex-none"><p>12:00</p></div>

                            <div className="w-full h-[60%] flex justify-center items-center">
                                <img src="/Sun.png" alt="Sun Image" className="w-[40%] md:w-[75%] lg:w-[50%] 2xl:w-[40%] h-[40%] md:h-[75%] lg:h-[50%] 2xl:h-[40%] object-contain" />
                            </div>

                            <div className="w-full h-[20%] flex justify-center items-center font-medium text-xl md:text-2xl flex-none"><p>33º</p></div>

                        </div>

                        <div className="w-[80px] md:w-1/6 h-full border-r border-gray-500">
                            
                            <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500"><p>15:00</p></div>

                            <div className="w-full h-[60%] flex justify-center items-center">
                                <img src="/Sun.png" alt="Sun Image" className="w-[40%] md:w-[75%] lg:w-[50%] 2xl:w-[40%] h-[40%] md:h-[75%] lg:h-[50%] 2xl:h-[40%] object-contain" />
                            </div>

                            <div className="w-full h-[20%] flex justify-center items-center font-medium text-xl md:text-2xl flex-none"><p>34º</p></div>

                        </div>

                        <div className="w-[80px] md:w-1/6 h-full border-r border-gray-500">
                            
                            <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500 flex-none"><p>18:00</p></div>

                            <div className="w-full h-[60%] flex justify-center items-center">
                                <img src="/Sun.png" alt="Sun Image" className="w-[40%] md:w-[75%] lg:w-[50%] 2xl:w-[40%] h-[40%] md:h-[75%] lg:h-[50%] 2xl:h-[40%] object-contain" />
                            </div>

                            <div className="w-full h-[20%] flex justify-center items-center font-medium text-xl md:text-2xl flex-none"><p>32º</p></div>

                        </div>

                        <div className="w-[80px] md:w-1/6 h-full border-gray-500">
                            
                            <div className="w-full h-[20%] flex justify-center items-center text-lg text-gray-500 flex-none"><p>21:00</p></div>

                            <div className="w-full h-[60%] flex justify-center items-center">
                                <img src="/Cloud-and-Sun.png" alt="Cloud and Sun Image" className="w-[40%] md:w-[75%] lg:w-[50%] 2xl:w-[40%] h-[40%] md:h-[75%] lg:h-[50%] 2xl:h-[40%] object-contain" />
                            </div>

                            <div className="w-full h-[20%] flex justify-center items-center font-medium text-xl md:text-2xl flex-none"><p>30º</p></div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Air Condition Container*/}
            <div className="w-full h-[210px] bg-gray-200 rounded-xl px-4 md:px-10 py-2 md:py-4 flex flex-col gap-2">

                <div className="w-full h-[30%] flex justify-between items-center">

                    <div>
                        <p className="md:text-xl font-medium text-gray-500">Air conditions</p>
                    </div>

                    <div>
                        <a href="#" className="font-medium text-white bg-[#007aff] rounded-xl px-3 py-1.5 hover:bg-[#0051AA] transition-all ease-in">See more</a>
                    </div>

                </div>

                <div className="w-full h-[70%] flex">

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] md:w-[38px] lg:w-[45px] h-[30px] md:h-[38px] lg:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
                                    <path d="M10 9l4 0" />
                                </svg>

                            </div>

                            <div className="w-full flex justify-center items-end text-center">
                                <p className="text-gray-500 font-medium md:text-lg leading-tight">Real Feel</p>
                            </div>

                            <div className="w-full flex justify-center items-start text-center">
                                <p className="md:text-2xl text-lg font-medium">30º</p>
                            </div>

                        </div>
            
                    </div>

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] md:w-[38px] lg:w-[45px] h-[30px] md:h-[38px] lg:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
                                </svg>

                            </div>

                            <div className="w-full flex justify-center items-end text-center">
                            
                                <p className="text-gray-500 font-medium md:text-lg leading-tight">Chance of rain</p>
                            
                            </div>

                            <div className="w-full flex justify-center items-start text-center">
                            
                                <p className="md:text-2xl text-lg font-medium">0%</p>

                            </div>

                        </div>

                    </div>

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] md:w-[38px] lg:w-[45px] h-[30px] md:h-[38px] lg:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" >
                                    <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                                    <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                                    <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                                </svg>


                            </div>

                            <div className="w-full flex justify-center items-end text-center">
                            
                                <p className="text-gray-500 font-medium md:text-lg leading-tight">Wind km/h</p>

                            </div>

                            <div className="w-full flex justify-center items-start text-center">
                            
                                <p className="md:text-2xl text-lg font-medium">0.2</p>

                            </div>

                        </div>

                    </div>

                    <div className="w-1/4 h-full flex">

                        <div className="w-full h-full flex flex-col justify-between">

                            <div className="w-full flex justify-center items-center">

                                <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] md:w-[38px] lg:w-[45px] h-[30px] md:h-[38px] lg:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" >
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

                            <div className="w-full flex justify-center items-end text-center">
                            
                                <p className="text-gray-500 font-medium md:text-lg leading-tight">UV Index</p>

                            </div>

                            <div className="w-full flex justify-center items-start text-center">
                            
                                <p className="md:text-2xl text-lg font-medium">3</p>
                                    
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>

    )

}