import React, { useRef, useState } from "react";
import '../../styles/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faCalendarDays, faChartLine, faChartSimple, faChevronDown, faChevronRight, faEnvelope, faFile, faGear, faGears, faHeadphones, faHouseUser, faMessage, faRightFromBracket, faTriangleExclamation, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Avatar } from 'primereact/avatar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';
import s from '../../s.png'



const Navbar1 = () => {
    const openProfile = useRef(null);
    const openMessage = useRef(null);
    const openNotification = useRef(null);
    const [visible, setVisible] = useState(false);

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
        <div className="w-100">
            <div className="d-flex navbar1 m-3">
           
                <div className="hamburger-btn "  >
                <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="search-box d-none d-sm-none d-md-none d-lg-block">
                    <div className="form-group has-search">
                        <span className="pi pi-search form-control-feedback"></span>
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </div>

                <div className="d-flex position-absolute end-0  align-items-center">
                    <div className="bellIcon me-sm-3 me-md-4 me-lg-5">
                        <span onClick={(e) => openNotification.current.toggle(e)}>
                            <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px', cursor: 'pointer' }} />
                        </span>
                    </div>
                    <div className=" messageIcon me-sm-3 me-md-4 me-lg-5" >
                        <span onClick={(e) => openMessage.current.toggle(e)}>
                            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px', cursor: 'pointer' }} />
                        </span>

                    </div>

                    <div className="avtarIcon me-sm-3 me-md-4 me-lg-5">
                        <Avatar icon="pi pi-user" size="normal" style={{ backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", color: '#ffffff' }} shape="circle" onClick={(e) => openProfile.current.toggle(e)} />
                    </div>
                    <div className="barIcon me-sm-3 me-md-4 me-lg-5 d-sm-block d-md-block d-lg-none">
                        <div className="menu-icon">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                    </div>
                </div>
            </div> 
        
               


            <OverlayPanel
                ref={openProfile}
                style={{ width: "15rem", color: 'gray' }}
            >
                <ListGroup>
                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center my-3">
                            <div className="text-align-left ">
                                <Avatar icon="pi pi-user" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                            </div>
                            <div className="ms-4 lh-1">
                                <h6>Swapnil</h6>
                                <div><span>admin</span></div>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none" }}>

                        <Link className="text-decoration-none"
                            style={{ color: 'rgb(94, 94, 94)' }}
                        > <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;Profile
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem action tag="button" style={{ border: "none" }}>
                        <Link className="text-decoration-none"
                            style={{ color: 'rgb(94, 94, 94)' }}
                        >
                            <FontAwesomeIcon icon={faGear} />&nbsp;&nbsp;Setting
                        </Link>
                    </ListGroupItem>

                    <ListGroupItem action tag="button" style={{ border: "none" }}>
                        <Link className="text-decoration-none"
                            style={{ color: 'rgb(94, 94, 94)' }}>
                            <FontAwesomeIcon icon={faRightFromBracket} />&nbsp;&nbsp;Logout
                        </Link>
                    </ListGroupItem>
                </ListGroup>

            </OverlayPanel>
            {/* profile overlaypanel end */}


            {/* message overlaypanel start */}
            <OverlayPanel
                ref={openMessage}
                style={{ width: "23rem", color: 'gray' }}
            >
                <ListGroup>
                    <ListGroupItem action tag="button" className="my-2" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center">
                            <div className="text-align-left">
                                <h5>Message</h5>
                            </div>

                            <div className="position-absolute end-0  align-items-center me-3">
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '20px' }} />
                            </div>
                        </div>
                    </ListGroupItem>

                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center my-1">
                            <div className="text-align-left ">
                                <Avatar icon="pi pi-user" size="normal" style={{ backgroundColor: 'orange', color: '#ffffff' }} shape="circle" />
                            </div>
                            <div className="ms-4 lh-sm">
                                <h6>Lorem ipsum dolor sit amet...</h6>
                                <div><span>swapnil . 20m</span></div>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center my-1">
                            <div className="text-align-left ">
                                <Avatar icon="pi pi-user" size="normal" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
                            </div>
                            <div className="ms-4 lh-sm">
                                <h6>Lorem ipsum dolor sit amet...</h6>
                                <div><span>john . 1d</span></div>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center my-1">
                            <div className="text-align-left ">
                                <Avatar icon="pi pi-user" size="normal" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
                            </div>
                            <div className="ms-4 lh-sm">
                                <h6>Lorem ipsum dolor sit amet...</h6>
                                <div><span>anderson . 2d</span></div>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />
                </ListGroup>
            </OverlayPanel>

            {/* message overlaypanel close */}

            {/* notification overlaypanel start */}
            <OverlayPanel
                ref={openNotification}
                style={{ width: "23rem", color: 'gray' }}
            >
                <ListGroup>
                    <ListGroupItem action tag="button" className="my-2" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center">
                            <div className="text-align-left">
                                <h5>Notification</h5>
                            </div>

                            <div className="position-absolute end-0  align-items-center me-3">
                                <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px' }} />
                            </div>
                        </div>
                    </ListGroupItem>

                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center">
                            <div className="text-align-left">
                                <span style={{ backgroundColor: 'orange', color: '#ffffff', borderRadius: '49%', padding: '10px', width: "50%", height: '50%' }}>
                                    <FontAwesomeIcon icon={faChartLine} />
                                </span>
                            </div>  
                            <div className="ms-4 lh-sm">
                                <div><span style={{ fontSize: '13px' }}>December 6, 2023</span></div>
                                <h6>This is an alert message. It's...</h6>
                            </div>
                        </div>
                    </ListGroupItem>

                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center">
                            <div className="text-align-left">
                                <span style={{ backgroundColor: 'orange', color: '#ffffff', borderRadius: '49%', padding: '10px', width: "50%", height: '50%' }}>
                                    <FontAwesomeIcon icon={faChartSimple} />
                                </span>
                            </div>
                            <div className="ms-4 lh-sm">
                                <div><span style={{ fontSize: '13px' }}>December 5, 2023</span></div>
                                <h6>A new monthly report is rea...</h6>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center">
                            <div className="text-align-left">
                                <span style={{ backgroundColor: 'orange', color: '#ffffff', borderRadius: '49%', padding: '10px', width: "50%", height: '50%' }}>
                                    <FontAwesomeIcon icon={faTriangleExclamation} />
                                </span>
                            </div>
                            <div className="ms-4 lh-sm">
                                <div><span style={{ fontSize: '13px' }}>December 4, 2023</span></div>
                                <h6>Critical system failure, syste...</h6>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />

                    <ListGroupItem action tag="button" style={{ border: "none", color: 'rgb(94, 94, 94)' }}>
                        <div className="d-flex align-items-center">
                            <div className="text-align-left">
                                <span style={{ backgroundColor: 'orange', color: '#ffffff', borderRadius: '49%', padding: '10px', width: "50%", height: '50%' }}>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </span>
                            </div>
                            <div className="ms-4 lh-sm">
                                <div><span style={{ fontSize: '13px' }}>December 3, 2023</span></div>
                                <h6>New user request. Woody h...</h6>
                            </div>
                        </div>
                    </ListGroupItem>
                    <hr className="m-0 p-0" />
                </ListGroup>
            </OverlayPanel>

            {/* notification overlaypanel end */}

            <Sidebar visible={visible} onHide={() => setVisible(false)}>
            <div
            // className=""
            className="p-2 scrollbox"
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

              
            </div>
        </div >
            </Sidebar>
        </div>
    )
}

export default Navbar1;