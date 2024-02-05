import React, { useState } from "react";
import { Button, NavLink, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/M6Labs.svg";
import "./hader.sass";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SubscribeModal from "../all-hero/modal/subscribe-modal";
import MenuOpenIcon from '../../assets/menu-open.svg';

const Header = () => {
    const [isActive, setActive] = useState(false);
    const [scroll, setScroll] = useState(false)
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    const [subscribemodal, setSubscribemodal] = useState<boolean>(false)
    const subscribemodalToggle = () => {
        setSubscribemodal(!subscribemodal)
    }
    const [refreshData, setRefreshData] = useState<boolean>(false)

    const nav = useNavigate();
    return (
        <>
            <header className={scroll ? "scrolled" : ""}>
                <Navbar>
                    <Container fluid>

                        <Navbar.Brand className="d-lg-flex" onClick={() => { nav("/") }}>
                            <img className='img-fluid' src={Logo} alt="logo" />
                        </Navbar.Brand>
                        <Navbar
                            className={
                                isActive
                                    ? "justify-content-end menu logo active"
                                    : "justify-content-end menu logo"}
                        >
                            <Nav className="header-navigation">
                                <Navbar.Brand onClick={() => { nav("/") }}>
                                    <img className='img-fluid' src={Logo} alt="logo" />
                                </Navbar.Brand>

                                <div className="mobile-search">
                                    <div className="mobile-search-input">
                                        <input type="text" placeholder="Search..." />
                                        <i className="ri-search-line search-icon"></i>
                                    </div>
                                </div>

                                <div className="close-menu-icon" onClick={() => setActive(false)}>
                                    <i className="ri-close-line"></i>
                                </div>
                                <Link
                                    to="/"
                                    className={splitLocation[1] === "" ? "active" : ""}
                                    onClick={() => setActive(false)}
                                >
                                    Buy
                                </Link>
                                <Link
                                    to="/aboutus"
                                    className={splitLocation[1] === "aboutus" ? "active" : ""}
                                    onClick={() => setActive(false)}
                                >
                                    Lend
                                </Link>
                                <Link
                                    to="/education"
                                    className={splitLocation[1] === "education" ? "active" : ""}
                                    onClick={() => setActive(false)}
                                >
                                    Borrow
                                </Link>
                                <Link
                                    to="/news"
                                    className={splitLocation[1] === "news" ? "active" : ""}
                                    onClick={() => setActive(false)}
                                >
                                    Stake
                                </Link>
                                <Link
                                    to="/podcasts"
                                    className={splitLocation[1] === "podcasts" ? "active" : ""}
                                    onClick={() => setActive(false)}
                                >
                                    NFT
                                </Link>
                                <Link
                                    to="/allcreator"
                                    className={splitLocation[1] === "allcreator" ? "active" : ""}
                                    onClick={() => setActive(false)}
                                >
                                    News
                                </Link>
                            </Nav>

                        </Navbar>
                        <Button type="button" className="primary-btn btn btn-primary rounded-0 d-block m-2" onClick={() => { subscribemodalToggle() }}>
                            Subscribe
                        </Button>
                        <NavLink className="open-menu-icon" onClick={() => setActive(true)}>
                            <img src={MenuOpenIcon} alt="" className="img-fluid" />
                        </NavLink>
                    </Container>
                </Navbar>
            </header>
            <SubscribeModal isOpen={subscribemodal} toggle={subscribemodalToggle} setRefreshData={setRefreshData} />
        </>
    );
};

export default Header;
