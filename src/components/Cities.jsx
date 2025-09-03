import { useState } from "react";

export const CitiesWeather = () => {

    const [cities, setCities] = useState([
        { name: "Buenos Aires", temp: 27, condition: "Soleado ☀️", image: '/Sunny-Place.png'},
        { name: "Madrid", temp: 19, condition: "Nublado ☁️", image: '/Cloudy-Place.png'},
        { name: "Madrid", temp: 19, condition: "Nublado ☁️" },
        { name: "Madrid", temp: 19, condition: "Nublado ☁️" },
        { name: "Madrid", temp: 19, condition: "Nublado ☁️" },
    ]);

    const addCity = () => {
        // ejemplo simple → podrías abrir un modal/input para ingresar ciudad
        setCities([...cities, { name: "Nueva Ciudad", temp: 0, condition: "Cargando..." }]);
    };

    return (

        <section className="bg-gray-200 rounded-xl px-10 py-6 flex flex-col gap-5">

            <h2 className="text-xl font-medium text-gray-500">
                Pronóstico de Ciudades
            </h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">

                {cities.map((city, idx) => (

                    <div key={idx} className="bg-white shadow-md rounded-xl flex flex-col items-center text-gray-500">

                        <div className="w-full h-[150px] rounded-t-xl">

                            <img src={city.image} alt="Place sunny" className="w-full h-full object-cover rounded-t-xl" />

                        </div>

                        <h3 className="text-lg font-semibold">{city.name}</h3>
                        <p className="text-3xl font-bold text-[#007aff]">{city.temp}°C</p>
                        <span className="text-sm mt-2">{city.condition}</span>

                    </div>
                    
                ))}

                {/* Tarjeta para agregar ciudad */}
                <button
                onClick={addCity}
                className="bg-[#007aff] hover:bg-blue-600 transition text-white rounded-2xl flex flex-col justify-center items-center p-6 shadow-md"
                >
                
                <span className="mt-2">Agregar ciudad</span>
                </button>
            </div>

        </section>
    );

};