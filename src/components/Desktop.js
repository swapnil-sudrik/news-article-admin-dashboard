import React from "react";
import '../styles/dashboard.css'
import Navbar1 from "./sub-components/Navbar";
import Menu from "./sub-components/Menu";
import {
 Route, Routes } from "react-router-dom";
import Analytics from "./sub-components/Analytics";

const Desktop = () => {

    return (
        // <BrowserRouter>

            <div className="main-container">
                <div className="d-flex" style={{ height: '100vh' }}>
                    {/* First Column (Menu) */}
                    <Menu />

                    {/* Second Column */}
                    <div className="flex-grow-1 dashboard-contain">
                        {/* Sub-columns in the second column */}
                        <div className="d-flex flex-wrap">

                            <Navbar1 />

                        </div>

                        <Routes>
                            <Route path="/" element={<Analytics />} />
                        </Routes>
                        {/* <Analytics /> */}
{/* 
                        <div className="d-flex flex-wrap main-dashboard">
                            <div className="bg-dark flex-md-grow-1 p-3 m-2">
                                Sub-column 1
                            </div>
                            <div className="flex-md-grow-1 p-3 m-2">
                                Sub-column 2
                            </div>
                            <div className="bg-dark flex-md-grow-1 p-3 m-2">
                                Sub-column 3
                            </div>
                            <div className="bg-dark flex-md-grow-1 p-3 m-2">
                                Sub-column 4
                            </div>
                            <div className="bg-dark flex-md-grow-1 p-3 m-2">
                                Sub-column 5
                            </div>
                        </div>

                        <div className="d-flex flex-wrap">
                            <div className="bg-dark flex-md-grow-1 p-3 m-2">
                                main column 1
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>
        // </BrowserRouter>
    )
}

export default Desktop;