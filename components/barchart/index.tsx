import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const BarChart = () => {
    const [chartData, setChartData] = useState<any>({ datasets: [] });
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales',
                    data: [18127, 22201, 19404, 17938, 24182, 17842, 22475],
                    backgroundColor: 'rgba(53, 162, 235)',
                    borderColor: 'rgba(53, 162, 235, 0.4)',
                    // borderWidth: 1,
                },
            ]
        })
        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Daily Revenu',
                    color: 'rgba(53, 162, 235)',
                    font: {
                        size: 20,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context: any) {
                            return context.parsed.y + ' Sales';
                        }
                    }
                }
            },
        })


    }, [])


    return (
        <>
            <div className='w-full md:col-span-2 relative lg:h[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart