import { useState } from "react";
import { ModalAddCity } from "./ModalAddCity";

export const CitiesWeather = () => {

    const [cities, setCities] = useState([
        { name: "Jesús María", temp: 27, condition: "Sunny ☀️", image: '/Sunny-Place.png', hour: '21:52:00', date: '2025/09/03'},
        { name: "Colonia Caroya", temp: 19, condition: "Foggy ☁️", image: '/Foggy-Place.png', hour: '21:52:00', date: '2025/09/03'},
        { name: "San Francisco", temp: 19, condition: "Rainy ☁️", image: '/Rainy-Place.png', hour: '21:12:00', date: '2025/09/03' },
        { name: "Sinsacate", temp: 19, condition: "Snowy ☁️", image: '/Snowy-Place.png', hour: '21:32:00', date: '2025/09/03' },
        { name: "Miramar", temp: 19, condition: "Windy ☁️", image: '/Windy-Place.png', hour: '21:42:00', date: '2025/09/03' },
        { name: "Jesús María", temp: 27, condition: "Sunny ☀️", image: '/Sunny-Place.png', hour: '21:52:00', date: '2025/09/03'},
        { name: "Colonia Caroya", temp: 19, condition: "Foggy ☁️", image: '/Foggy-Place.png', hour: '21:52:00', date: '2025/09/03'},
        { name: "San Francisco", temp: 19, condition: "Rainy ☁️", image: '/Rainy-Place.png', hour: '21:12:00', date: '2025/09/03' },
        { name: "Sinsacate", temp: 19, condition: "Snowy ☁️", image: '/Snowy-Place.png', hour: '21:32:00', date: '2025/09/03' },
        { name: "Miramar", temp: 19, condition: "Windy ☁️", image: '/Windy-Place.png', hour: '21:42:00', date: '2025/09/03' },
        { name: "Jesús María", temp: 27, condition: "Sunny ☀️", image: '/Sunny-Place.png', hour: '21:52:00', date: '2025/09/03'},
        { name: "Colonia Caroya", temp: 19, condition: "Foggy ☁️", image: '/Foggy-Place.png', hour: '21:52:00', date: '2025/09/03'},
        { name: "San Francisco", temp: 19, condition: "Rainy ☁️", image: '/Rainy-Place.png', hour: '21:12:00', date: '2025/09/03' },
        { name: "Sinsacate", temp: 19, condition: "Snowy ☁️", image: '/Snowy-Place.png', hour: '21:32:00', date: '2025/09/03' },
        { name: "Miramar", temp: 19, condition: "Windy ☁️", image: '/Windy-Place.png', hour: '21:42:00', date: '2025/09/03' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const addCity = () => {
        
        setCities([...cities, { name: "Nueva Ciudad", temp: 0, condition: "Cargando..." }]);
        setIsModalOpen(false);
    };

    return (

        <section className="bg-gray-200 rounded-xl px-4 md:px-10 py-4 md:py-6 flex flex-col gap-5">

            {/* Encabezado */}
            <div className="w-full h-auto flex justify-between items-center">

                <h2 className="text-lg md:text-xl font-medium text-gray-500">
                    Cities Forecastes
                </h2>

                <button onClick={() => setIsModalOpen(true)} className="w-[75px] bg-[#007aff] hover:bg-[#0051AA] transition-all ease-in hover:cursor-pointer text-white font-medium rounded-2xl flex flex-col justify-center items-center py-1">
                    Add
                </button>
                
            </div>

            {/* Tarjetas */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-h-[550px] max-h-[550px] overflow-y-auto px-5">

                {cities.map((city, idx) => (

                    <div key={idx} className="bg-white shadow-md rounded-xl flex flex-col items-center">

                        <div className="w-full h-[170px] rounded-t-xl relative">

                            <img src={city.image} alt="Place" className="w-full h-full object-cover rounded-t-xl brightness-75" />

                            <div className="absolute top-5 left-5 text-white font-medium flex flex-col">

                                <p className="text-4xl">{`${city.temp}º`}</p>
                                <p className="text-xl">{city.name}</p>
                                <p className="text-base">{city.condition}</p>

                            </div>

                            <div className="absolute top-3 right-3 hover:cursor-pointer hover:bg-red-500 rounded-full p-2">

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 7l16 0" />
                                    <path d="M10 11l0 6" />
                                    <path d="M14 11l0 6" />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>


                            </div>

                        </div>

                        <div className="w-full h-[50px] md:h-[60px] flex justify-between items-center px-5 text-gray-500">

                            <p className="text-sm md:text-lg lg:text-base font-medium">{city.hour}</p>
                            <p className="text-sm md:text-lg lg:text-base font-medium">{city.date}</p>

                        </div>

                    </div>

                ))}

            </div>

            {/* Modal */}
            <ModalAddCity isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={addCity} />

        </section>
    
    );

};