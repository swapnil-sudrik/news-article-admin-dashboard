import React, { useState } from "react";
import '../../styles/dashboard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faEnvelope, faFile, faGears, faHeadphones, faHouseUser, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import s from '../../s.png'
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
const Menu = () => {
    const [menuVisible] = useState(true);

    const firstColumnWidth = menuVisible ? '300px' : '0px'; // Adjust the width as needed
    var rotation = 0;
    const toggleOptions = () => {
        let dropdownIcon = document.getElementById("dropdown-icon");
        rotation = (rotation === -90) ? 0 : -90;
        dropdownIcon.style.transform = "rotate(" + rotation + "deg)";
        let submenu = document.getElementById("dropdownItems");
        submenu.classList.toggle("open-menu");
    }

    const toggleOptions1 = () => {
        let dropdownIcon = document.getElementById("dropdown-icon1");
        rotation = (rotation === 90) ? 0 : 90;
        dropdownIcon.style.transform = "rotate(" + rotation + "deg)";
        let submenu = document.getElementById("dropdownItems1");
        submenu.classList.toggle("open-menu1");
    }
    const [sectors] = useState([
        { "sectorName": "Analytics" , "path":"/" },
        { "sectorName": "Information Technology" },
        { "sectorName": "Pharmaceuticals" },
        { "sectorName": "Healthcare" },
        { "sectorName": "Automotive" },
        { "sectorName": "Energy" },
        { "sectorName": "Manufacturing" },
        { "sectorName": "Media & entertainment" },
        { "sectorName": "Environment" },
        { "sectorName": "Government" },
        { "sectorName": "Tourism & hospitality" },
        { "sectorName": "Financial services" },
        { "sectorName": "Education" },
        { "sectorName": "Retail" },
        { "sectorName": "Transport" },
        { "sectorName": "Security" },
        { "sectorName": "Construction" },
        { "sectorName": "Food & agriculture" },
        { "sectorName": "Telecoms" },
        { "sectorName": "Water" },
        { "sectorName": "Mining" },
        { "sectorName": "Science" },
        { "sectorName": "Support services" },
    ]);
    return (
        <div
            // className=""
            className="p-2 menu-contain scrollbox"
            style={{
                width: firstColumnWidth,
                transition: 'width 0.5s',
                overflow: 'hidden',
                // borderRight: '1px solid black',
                position: 'fixed',
                top: 0,
                bottom: 0,
                overflowY: 'auto',
            }}

        >
            <div className="scrollbox-inner ms-2">
                <div className="d-flex flex-wrap" style={{ alignItems: 'center' }}>
                    <div><img alt="" style={{
                        width: "50px"
                        , height: '50px'
                    }} src={s} /></div>
                    <div className="logo mt-2 ms-3">TrendWise</div>
                </div>

                <div className="main-dropdown mt-3">

                    <div className="d-flex align-items-center p-2 dropdown-title" onClick={toggleOptions}>
                        <div className="text-align-left text-color">
                            <FontAwesomeIcon style={{ border: 'none' }} icon={faHouseUser} />&nbsp;&nbsp;Dashboard
                        </div>
                        <div>
                        </div>
                        <div className="position-absolute end-0  align-items-center dropdown-icon" id="dropdown-icon">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                    <div className="dropdown-items" id="dropdownItems">
                        {sectors.map((sector, index) => (
                            <React.Fragment key={index}>
                                <Link to="/dddd" className="list-link">
                                    <li className="align-items-center p-2 list-itms" style={{ listStyleType: 'circle' }}>{sector.sectorName}</li>
                                </Link>
                            </React.Fragment>
                        ))}
                    </div>

                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                      <i className="pi pi-server" ></i>&nbsp;&nbsp;Topics
                    </div>
                </div>


                <div className="text-align-left text-color p-2">
                    APPS & PAGES
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;Email
                    </div>
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                        <FontAwesomeIcon icon={faMessage} />&nbsp;&nbsp;Chat
                    </div>
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                        <FontAwesomeIcon icon={faCalendarDays} />&nbsp;&nbsp;Calender
                    </div>
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                        <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;User
                    </div>
                </div>

                <div className="main-dropdown ">

                    <div className="d-flex align-items-center p-2 dropdown-title" onClick={toggleOptions1}>
                        <div className="text-align-left text-color">
                            <FontAwesomeIcon icon={faGears} />&nbsp;&nbsp;Roles & Permissions
                        </div>
                        <div>
                        </div>
                        <div className="position-absolute end-0  align-items-center dropdown-icon" id="dropdown-icon1">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className="dropdown-items1" id="dropdownItems1">
                        <Link to="/#" className="list-link">
                            <li className="align-items-center p-2 list-itms" style={{ listStyleType: 'circle' }}>Role</li>
                            <li className="align-items-center p-2 list-itms" style={{ listStyleType: 'circle' }}>Permissions</li>
                        </Link>
                    </div>

                </div>
                <div className="text-align-left text-color p-2">
                    OTHERS
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                        <i className="pi pi-th-large"></i>&nbsp;&nbsp;Access Controls
                    </div>
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                    <FontAwesomeIcon icon={faHeadphones} />&nbsp;&nbsp;Support
                    </div>
                </div>

                <div className="d-flex align-items-center p-2 dropdown-title">
                    <div className="text-align-left text-color">
                    <FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;Documentation
                    </div>
                </div>

                <div className="vertical-line"></div>
            </div>
        </div >
    )
}

export default Menu;