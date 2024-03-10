import React from "react";
import '../../styles/analytics.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCaretDown, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import work from '../../at-work.svg';
import LineChart from "../../charts/LineChart";
import PolarChart from "../../charts/PolarChart";
import VerticalBarChart from "../../charts/VerticleBarChart";
import DoughnutChart from "../../charts/DoughnutChart";

const Analytics = () => {

    // Get current date
    const currentDate = new Date();

    // Define options for date formatting
    const options = { month: 'long', day: 'numeric', year: 'numeric' };

    // Format the date
    const formattedDate = currentDate.toLocaleString('en-US', options);
    //  setDate(formattedDate);
    return (
        <div>

            <div className="d-flex flex-wrap">
              
                <div className="analytics">
                    <div>
                        <h2 className="mt-4">
                            <FontAwesomeIcon icon={faChartSimple} /> Dashboard
                        </h2>
                        <p>Example dashboard overview and content summary</p>
                    </div>
                    <div className="position-absolute end-0  me-5 mt-5 align-items-center time">
                        <FontAwesomeIcon className="cal-icon" icon={faCalendarDays} />&nbsp;{formattedDate} &nbsp; <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>
            </div>

            <div className="part-one">
                <div className="flex-md-grow-1 p-3 m-2 sub-col">
                    <div className="para">
                        <h4>Welcome to TrendWise !</h4>
                        <p>
                            Browse our fully designed UI toolkit! Browse our prebuilt app pages, components, and utilites, and be sure to look at our full documentation!</p>
                    </div>
                    <div className="svg-icon-div">
                        <img alt="" src={work} className="svg-icon" />
                    </div>
                </div>



                <div className="flex-md-grow-1 p-3 m-2 sub-col">
                    <h5>Article Preview</h5>
                    <LineChart />
                </div>

                <div className="flex-md-grow-1 p-3 m-2 sub-col">
                    <h5>Top 5 Sectors</h5>
                    <PolarChart />
                </div>
            </div>
            <div className="part-two">

                <div className="flex-md-grow-1 p-3 m-2 sub-col">
                    <h6>Intensity</h6>
                    <VerticalBarChart />
                </div>
                <div className="flex-md-grow-1 p-3 m-2 sub-col">
                    <h6>Topics</h6>
                    <DoughnutChart />
                </div>

            </div>


        </div>
    )
}

export default Analytics;