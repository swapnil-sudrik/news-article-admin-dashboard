
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import axios from 'axios';

export default function LineChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});


    const [chartData1, setChartData1] = useState({});
    
      useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('');
        const surfaceBorder = documentStyle.getPropertyValue('');
       
        const fetchData = () => {
        axios.get(`http://localhost:8080/api/get-count`, {
            responseType: "json",
          })
          .then(
            (response) => {
              const { labels, data } = response.data;
          setChartData1({
            labels: labels,
            datasets: [
              {
                label: [],
                data: data,
                tension: 0.4
              },
            ],
          });
       
            },
            (error) => {
              console.log("in error");
              console.log(error);
            }
          );

        const options = {
            maintainAspectRatio: false,
            aspectRatio:1,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
        setChartOptions(options);
    
     
        };
      
        fetchData();
      }, []); // Empty dependency array means this effect runs once after the initial render


      useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [
                {
                    label: 'Total Article by year',
                    data: [412, 249, 404, 338, 320, 382, 60],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--red-500'),
                    tension: 0.4
                },
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio:1,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    

    return (
        <div className='charts'>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
        