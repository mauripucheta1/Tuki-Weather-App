

export const Aside = () => {

    return (

        <aside className="w-[8%] h-[92%] bg-gray-200 rounded-xl flex flex-col justify-start items-center fixed top-1/2 -translate-y-1/2 z-10">

            <div className="w-full h-auto flex justify-center items-center mt-10">

                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#007aff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
                    <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
                    <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
                    <path d="M15 9l-3 5.196" />
                    <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
                </svg>

            </div> 

            <div className="w-full h-auto flex flex-col justify-center items-center mt-20 gap-5">
                
                {/* Weather Container */}
                <a href="#" className="h-auto flex flex-col justify-center items-center gap-1 text-gray-700 hover:text-[#007aff] transition-all ease-in">

                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 18.004h-5.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c.956 0 1.822 .39 2.449 1.02" />
                        <path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M19.001 15.5v1.5" />
                        <path d="M19.001 21v1.5" />
                        <path d="M22.032 17.25l-1.299 .75" />
                        <path d="M17.27 20l-1.3 .75" />
                        <path d="M15.97 17.25l1.3 .75" />
                        <path d="M20.733 20l1.3 .75" />
                    </svg>

                    <p className="font-medium">Weather</p>
                
                </a>

                {/* Cities Container */}
                <a href="" className="h-auto flex flex-col justify-center items-center gap-1 text-gray-700 hover:text-[#007aff] transition-all ease-in">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6l11 0" />
                        <path d="M9 12l11 0" />
                        <path d="M9 18l11 0" />
                        <path d="M5 6l0 .01" />
                        <path d="M5 12l0 .01" />
                        <path d="M5 18l0 .01" />
                    </svg>

                    <p className="font-medium">Cities</p>

                
                </a> 

                {/* Map Container */}
                <a href="#" className="h-auto flex flex-col justify-center items-center gap-1 text-gray-700 hover:text-[#007aff] transition-all ease-in">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" />
                        <path d="M9 4v13" />
                        <path d="M15 7v5.5" />
                        <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
                        <path d="M19 18v.01" />
                    </svg>

                    <p className="font-medium">Map</p>
                
                </a> 

                {/* Settings Container */}
                <a href="#" className="h-auto flex flex-col justify-center items-center gap-1 text-gray-700 hover:text-[#007aff] transition-all ease-in">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M4 6l8 0" />
                        <path d="M16 6l4 0" />
                        <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M4 12l2 0" />
                        <path d="M10 12l10 0" />
                        <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                        <path d="M4 18l11 0" />
                        <path d="M19 18l1 0" />
                    </svg>

                    <p className="font-medium">Settings</p>
                
                </a>   
                
            </div>    

        </aside>
        
    )

}