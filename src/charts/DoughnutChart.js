
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

export default function DoughnutChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const fetchData =  () => {
            try {
                const response =  axios.get(`http://localhost:8080/api/get-topics`, {
                    responseType: "json",
                  });
                const apiData = response.data; // Assuming the response is an array of objects

                const documentStyle = getComputedStyle(document.documentElement);

                const data = {
                    labels: apiData.map(item => item.topicNames),
                    datasets: [
                        {
                            data: apiData.map(item => item.topicCount),
                            backgroundColor: apiData.map((_, index) =>
                                documentStyle.getPropertyValue(`--color-${index + 1}`)
                            ),
                            hoverBackgroundColor: apiData.map((_, index) =>
                                documentStyle.getPropertyValue(`--hover-color-${index + 1}`)
                            ),
                        },
                    ],
                };

                const options = {
                    cutout: '60%',
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
        <div>
            <Chart type="doughnut" data={chartData} options={chartOptions}/>
        </div>
    )
}
        