

export const Map = () => {

    return (

        <section className="w-full rounded-xl flex justify-between gap-5 h-[550px]">

            <div className="w-2/3 h-full rounded-xl">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108977.23899186002!2d-64.27661276758253!3d-31.399280322136224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432985f478f5b69%3A0xb0a24f9a5366b092!2zQ8OzcmRvYmEsIEPDs3Jkb2JhIFByb3ZpbmNl!5e0!3m2!1sen!2sar!4v1757348118430!5m2!1sen!2sar" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl"></iframe>

            </div>

            <div className="w-1/3 h-full rounded-xl bg-gray-200 flex flex-col justify-center items-center p-4 text-gray-500 font-medium gap-10">

                <div className="w-full h-auto flex flex-col justify-center items-center gap-10">

                    <p className="text-sm text-[#007aff]">Select a point</p>
                    <h2 className="text-3xl">About <span className="text-black font-normal">Córdoba</span> </h2>

                </div>
                
                <div className="w-full h-auto flex flex-col gap-2 text-xl">

                    <div className="w-full h-auto flex justify-between px-6">

                        <p>Maximum Temperature</p>
                        <p>...</p>


                    </div>
                    
                    <div className="w-full h-auto flex justify-between px-6">

                        <p>Minimum Temperature</p>
                        <p>...</p>

                    </div>

                    <div className="w-full h-auto flex justify-between px-6">

                        <p>Chance of rain</p>
                        <p>...</p>

                    </div>
                    
                    <div className="w-full h-auto flex justify-between px-6">

                        <p>Wind</p>
                        <p>...</p>

                    </div>

                    <div className="w-full h-auto flex justify-between px-6">

                        <p>Humidity</p>
                        <p>...</p>

                    </div>
                    
                    <div className="w-full h-auto flex justify-between px-6">

                        <p>UV Index</p>
                        <p>...</p>


                    </div>
                    
                </div>

                <div className="w-full h-auto flex justify-center items-center text-white gap-10">
            
                    <button type="button" className="bg-[#007aff] hover:bg-[#0051AA] transition-all ease-in p-3 rounded-xl hover:cursor-pointer w-[180px]">Refresh</button>

                    <button type="button" className="bg-red-500 hover:bg-red-600 transition-all ease-in p-3 rounded-xl hover:cursor-pointer w-[180px]">Clear</button>

                </div>

            </div>

            

        </section>

    )

}