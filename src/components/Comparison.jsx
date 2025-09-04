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
        },
    };

    return (

        <section className="w-full bg-gray-200 rounded-xl mt-6 px-10 py-6 ">

                    
            <div className="w-full h-[300px] flex flex-row justify-between">

                <div className="h-full w-1/2">

                    <h3 className="text-xl font-medium text-gray-500">Temperature comparison</h3>
                    <Bar data={chartData} options={chartOptions} />

                </div>

                <div className="h-full w-1/2">

                    <Bar data={chartData} options={chartOptions} />

                </div>
                
            </div>

        </section>

    )

}
