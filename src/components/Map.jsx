

export const Map = () => {

    return (

        <section className="w-full rounded-xl flex flex-col lg:flex-row justify-between gap-5 h-[700px] lg:h-[550px]">

            <div className="w-full lg:w-2/3 h-1/2 h:h-full rounded-xl">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.23899186002!2d-64.27661276758253!3d-31.399280322136224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmEsIEPDs3Jkb2JhIFByb3ZpbmNl!5e0!3m2!1sen!2sar!4v1757348118430!5m2!1sen!2sar" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>

            </div>

            <div className="w-full lg:w-1/3 h-1/2 lg:h-full rounded-xl bg-gray-200 flex flex-col justify-center items-center p-4 text-gray-500 font-medium gap-4 lg:gap-10">

                <div className="w-full h-auto flex flex-col justify-center items-center md:gap-10">

                    <p className="text-sm text-[#007aff]">Select a point</p>
                    <h2 className="text-xl lg:text-3xl">About <span className="text-black">Córdoba</span> </h2>

                </div>
                
                <div className="w-full h-auto flex flex-col gap-1 md:text-xl">

                    <div className="w-full h-auto flex justify-between px-3 md:px-6">

                        <p className="md:hidden flex">Maximum Temp...</p>
                        <p className="hidden md:flex">Maximum Temperature</p>
                        <p>...</p>


                    </div>
                    
                    <div className="w-full h-auto flex justify-between px-3 md:px-6">

                        <p className="md:hidden flex">Minimum Temp..</p>
                        <p className="hidden md:flex">Minimum Temperature</p>
                        <p>...</p>

                    </div>

                    <div className="w-full h-auto flex justify-between px-3 md:px-6">

                        <p>Chance of rain</p>
                        <p>...</p>

                    </div>
                    
                    <div className="w-full h-auto flex justify-between px-3 md:px-6">

                        <p>Wind</p>
                        <p>...</p>

                    </div>

                    <div className="w-full h-auto flex justify-between px-3 md:px-6">

                        <p>Humidity</p>
                        <p>...</p>

                    </div>
                    
                    <div className="w-full h-auto flex justify-between px-3 md:px-6">

                        <p>UV Index</p>
                        <p>...</p>


                    </div>
                    
                </div>

                <div className="w-full h-auto flex justify-center items-center text-white gap-5 md:gap-10">
            
                    <button type="button" className="bg-[#007aff] hover:bg-[#0051AA] transition-all ease-in px-3 py-1 md:p-3 rounded-xl hover:cursor-pointer w-[80px] md:w-[180px]">Refresh</button>

                    <button type="button" className="bg-red-500 hover:bg-red-600 transition-all ease-in px-3 py-1 md:p-3 rounded-xl hover:cursor-pointer w-[80px] md:w-[180px]">Clear</button>

                </div>

            </div>

            

        </section>

    )

}