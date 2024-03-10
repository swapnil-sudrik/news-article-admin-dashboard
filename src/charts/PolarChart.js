
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

export default function PolarChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const fetchData =  () => {
            try {
                const response =  axios.get(`http://localhost:8080/api/get-sectors`, {
                    responseType: "json",
                  });
                const apiData = response.data; // Assuming the response is an array of objects

                const documentStyle = getComputedStyle(document.documentElement);
                const textColor = documentStyle.getPropertyValue('--text-color');
                const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
                  console.log("sector data : ", apiData.map(item => item.sectorCount))
                const data = {
                    datasets: [
                        {
                            data: apiData.map(item => item.sectorCount),
                            backgroundColor: [
                                documentStyle.getPropertyValue('--red-500'),
                                documentStyle.getPropertyValue('--green-500'),
                                documentStyle.getPropertyValue('--yellow-500'),
                                documentStyle.getPropertyValue('--bluegray-500'),
                                documentStyle.getPropertyValue('--blue-500'),
                            ],
                            label: 'Top 10 Sectors',
                        },
                    ],
                    labels: apiData.map(item => item.sectorName),
                };

                const options = {
                    plugins: {
                        legend: {
                            labels: {
                                color: textColor,
                            },
                        },
                    },
                    scales: {
                        r: {
                            grid: {
                                color: surfaceBorder,
                            },
                        },
                    },
                };

                setChartData(data);
                setChartOptions(options);
                // setSectors(apiData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    


    return (
        <div className="charts">
            <Chart type="polarArea" data={chartData} options={chartOptions}  />
        </div>
    )
}
        