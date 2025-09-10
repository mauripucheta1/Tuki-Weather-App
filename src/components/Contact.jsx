
export const Contact = () => {

    return (

        <div className="w-full rounded-xl flex flex-col lg:flex-row justify-between gap-2 lg:gap-5 h-[900px] lg:h-[550px] bg-gray-200 p-6 lg:p-10">

            <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col justify-between">
            
                <div className="w-full h-1/2 flex flex-col justify-center md:gap-2 lg:px-5 items-center">

                    <div className="w-full h-auto flex justify-start items-center mb-2 md:mb-1">
                    
                        <p className="uppercase font-medium text-gray-500 text-sm sm:text-lg lg:text-xl 2xl:text-2xl">We're here to help you</p>

                    </div>

                    <div className="w-full h-auto text-lg sm:text-2xl md:text-4xl lg:text-3xl 2xl:text-5xl flex flex-col">
                    
                        <p className="font-normal text-gray-500"><span className="text-black font-bold">Discuss</span> your Software </p>
                        <p>Solution needs</p>

                    </div>

                    <div className="w-full h-auto text-sm sm:text-base md:text-lg 2xl:text-xl mt-3 lg:mt-0 2xl:mt-3">

                        <p className="font-medium text-gray-500">Are you looking for top-quality software solution tailored to your needs? Reach out to us.</p>

                    </div>

                </div>

                <div className="w-full h-1/2 flex flex-col justify-between lg:px-5">

                    <div className="w-full h-1/2 flex justify-start gap-2">
                    
                        <div className="w-auto h-full flex items-center">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[25px] sm:w-[35px] md:w-[45px] lg:w-[35px] 2xl:w-[45px] h-[25px] sm:h-[35px] md:h-[45px] lg:h-[35px] 2xl:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round"
                            strokeLinejoin="round">
                                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                <path d="M3 7l9 6l9 -6" />
                            </svg>

                        </div>

                        <div className="w-auto h-full flex flex-col text-gray-500 text-xl gap-1">
                            
                            <div className="w-auto h-1/2 flex flex-col justify-end items-start font-medium">

                                <p>E-mail</p>
            
                            </div>  

                            <div className="w-auto h-1/2 flex flex-col 2xl:flex-row justify-start items-start text-xs sm:text-base md:text-lg gap-1">

                                <a href="mailto:mauriciopucheta21@gmail.com">mauriciopucheta21@gmail.com</a>
                                <p className="hidden 2xl:flex">/</p>
                                <a href="mailto:abigailpicone31@gmail.com">abigailpicone31@gmail.com</a>

                            </div>   
                            
                        </div> 
                    
                    </div>

                    <div className="w-full h-1/2 flex justify-start gap-2">
                    
                        <div className="w-auto h-full flex items-center">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-[25px] sm:w-[35px] md:w-[45px] lg:w-[35px] 2xl:w-[45px] h-[25px] sm:h-[35px] md:h-[45px] lg:h-[35px] 2xl:h-[45px]" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                            </svg>

                        </div>

                        <div className="w-auto h-full flex flex-col text-gray-500 text-xl gap-1">
                            
                            <div className="w-auto h-1/2 flex flex-col justify-end items-start font-medium">

                                <p>Phone Number</p>
            
                            </div>  

                            <div className="w-auto h-1/2 flex flex-col sm:flex-row lg:flex-col 2xl:flex-row justify-start items-start text-xs sm:text-base md:text-lg gap-1">

                                <a href="https://wa.me/+5493525642046" target="_blank"> +54 9 3525 642046</a>
                                <p className="hidden sm:flex lg:hidden 2xl:flex">/</p>
                                <a href="https://wa.me/+5493512842779" target="_blank"> +54 9 351 2842779</a>

                            </div>

                        </div> 

                    </div>

                </div>
            
            </div>

            <div className="lg:w-1/2 w-full h-1/2 lg:h-full flex flex-col rounded-xl bg-white p-5 lg:p-10 md:mt-5">
            
                <form className="w-full h-full flex flex-col gap-5" id="formContact">

                    <div className="w-full h-auto flex flex-col gap-2">

                        <label className="text-gray-500 sm:text-lg md:text-xl font-medium">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name..." autoComplete="off" className="w-full bg-gray-200 p-2 md:p-3 rounded-xl font-medium focus:outline-none border-2 border-white focus:border-[#007aff]"></input>

                    </div>

                    <div className="w-full h-auto flex flex-col gap-2">

                        <label className="text-gray-500 sm:text-lg md:text-xl font-medium">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email..." autoComplete="off" className="w-full bg-gray-200 p-2 md:p-3 rounded-xl font-medium focus:outline-none border-2 border-white focus:border-[#007aff]"></input>

                    </div>

                    <div className="w-full h-auto flex flex-col gap-2">

                        <label className="text-gray-500 sm:text-lg md:text-xl font-medium">Message</label>
                        <textarea className="w-full rounded-xl bg-gray-200 p-2 md:p-3 font-medium focus:outline-none border-2 border-white focus:border-[#007aff]" placeholder="Introduce your message..."></textarea>

                    </div>

                    <div className="w-full h-auto flex justify-center md:justify-end items-center">

                        <button type="submit" form="formContact" className="rounded-xl bg-[#007aff] text-white p-2 sm:p-3 font-medium w-[180px] hover:cursor-pointer hover:bg-[#0051AA] transition-all ease-in">Submit</button>

                    </div>

                </form>

            </div>
        
        </div>

    )

}