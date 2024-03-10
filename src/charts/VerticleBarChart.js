
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

export default function VerticalBarChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/get-regions`, {
                    responseType: "json",
                  });
                const apiData = response.data; // Assuming the response is an array of objects

                const documentStyle = getComputedStyle(document.documentElement);
                const textColor = documentStyle.getPropertyValue('--text-color');
                const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
                const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

                const data = {
                    labels: apiData.map(item => item.regionName),
                    datasets: [
                        {
                            label: 'My First dataset',
                            backgroundColor: apiData.map((_, index) =>
                                documentStyle.getPropertyValue(`--color-${index + 1}`)
                            ),
                            borderColor: apiData.map((_, index) =>
                                documentStyle.getPropertyValue(`--color-${index + 1}`)
                            ),
                            data: apiData.map(item => item.regionCount),
                        },
                    ],
                };

                const options = {
                    maintainAspectRatio: false,
                    aspectRatio: 0.8,
                    plugins: {
                        legend: {
                            labels: {
                                fontColor: textColor,
                            },
                        },
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: textColorSecondary,
                                font: {
                                    weight: 500,
                                },
                            },
                            grid: {
                                display: false,
                                drawBorder: false,
                            },
                        },
                        y: {
                            ticks: {
                                color: textColorSecondary,
                            },
                            grid: {
                                color: surfaceBorder,
                                drawBorder: false,
                            },
                        },
                    },
                };

                setChartData(data);
                setChartOptions(options);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="charts">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        