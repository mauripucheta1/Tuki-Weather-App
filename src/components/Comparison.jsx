import { useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);
import { Bar } from "react-chartjs-2"; 

export const Comparison = () => {

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

    // Datos para Chart.js
    const chartData = {
        labels: cities.map(city => city.name),
        datasets: [
            {
                label: "Temperatura ºC",
                data: cities.map(city => city.temp),
                backgroundColor: "#007aff",
                borderRadius: 8,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
            },
            scales: {
            y: {
                beginAtZero: true,
            }, 
            x: {
                ticks: {
                    display: false, 
                },
                grid: {
                    drawTicks: false,
                },
            },
        },
    };

    return (

        <section className="w-full bg-gray-200 rounded-xl mt-6 px-4 md:px-10 py-4 md:py-6">
          
            <div className="w-full h-auto flex flex-col gap-4">

                <div className="w-full flex justify-center md:justify-start items-center text-center">

                    <h3 className="md:text-xl font-medium text-gray-500">Temperature Comparison & Statistics</h3>

                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5">

                    <div className="h-auto md:h-[400px] w-full md:w-1/2">

                        <Bar data={chartData} options={chartOptions} />

                    </div>

                    <div className="h-[400px] max-h-[400px] overflow-y-auto w-full md:w-1/2 p-4 flex flex-col gap-4">

                        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                            <p className="text-gray-500 font-medium text-sm md:text-base">Max Temperature</p>
                            <h2 className="font-medium">{Math.max(...cities.map(c => c.temp))}°C</h2>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                            <p className="text-gray-500 font-medium text-sm md:text-base">Min Temperature</p>
                            <h2 className="font-medium">{Math.min(...cities.map(c => c.temp))}°C</h2>
                        </div>

                        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                            <p className="text-gray-500 font-medium text-sm md:text-base md:hidden">Average Temp...</p>
                            <p className="text-gray-500 font-medium text-sm md:text-base hidden md:flex">Average Temperature</p>
                            <h2 className="font-medium">{Math.round(cities.reduce((a,b) => a + b.temp, 0)/cities.length)}°C</h2>
                        </div>

                        {Object.entries(cities.reduce((acc, city) => {
                            acc[city.condition] = (acc[city.condition] || 0) + 1;
                            return acc;
                        }, {})).map(([condition, count]) => (
                            <div key={condition} className="bg-white p-4 rounded-xl shadow flex justify-between font-medium text-gray-500 text-sm md:text-base">
                                <span>{condition}</span>
                                <span className="text-black font-medium">{count} city(s)</span>
                            </div>
                        ))}

                    </div>

                </div>
                
            </div>

        </section>

    )

}
