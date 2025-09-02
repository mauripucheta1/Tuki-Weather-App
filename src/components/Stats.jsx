

export const Stats = () => {

    return (

        <main className="w-[55%] h-full rounded-xl flex flex-col justify-start items-center gap-5">

            {/* Search Bar Container*/}
            <div className="w-full h-14 bg-gray-200 rounded-xl">

                <input className="w-full h-full rounded-xl px-4 focus:outline-none text-gray-700 font-medium text-lg" autoComplete="off" placeholder="Search for cities..."></input>

            </div>

            {/* Current City Container*/}
            <div className="w-full h-[33%] rounded-xl flex flex-row justify-between">

                <div className="w-1/2 h-full flex flex-col">

                    <div className="w-full h-1/2 flex flex-col justify-center items-start px-10 gap-1">

                        <h2 className="text-6xl font-semibold">Madrid</h2>
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

                    <p className="text-xl text-gray-500">Today's Forecast</p>

                </div>

                <div className="w-full h-2/3 flex justify-between items-center">

                    <div className="w-1/6 h-full border-r border-gray-500">
                        <p>1</p>
                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        <p>2</p>
                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        <p>3</p>
                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        <p>4</p>
                    </div>

                    <div className="w-1/6 h-full border-r border-gray-500">
                        <p>5</p>
                    </div>

                    <div className="w-1/6 h-full border-gray-500">
                        <p>6</p>
                    </div>
                

                </div>

            </div>

            {/* Air Condition Container*/}
            <div className="w-full h-[33%] bg-gray-200 rounded-xl">


            </div>

        </main>

    )

}