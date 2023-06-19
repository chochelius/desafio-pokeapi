import React from "react";
import "./Navbar.css";
import Navlink from "../Navlink/Navlink";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {

    const location = useLocation();

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top mb-5">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        PokeApi
                        <img src="/favicon-16x16.png" alt="" className="logo" />
                    </Link>




                <div className="justify-content-end">
                    <ul className="nav">
                        <Link className="nav-link text-white" to={"/"}>
                            <Navlink
                                classes={
                                    location.pathname === "/" ? "nav-link text-warning active" : "nav-link text-white"
                                }
                                name="Home"
                                to="/"
                            />
                        </Link>
                        <Link className="nav-link" to={"/pokemones"}>
                            <Navlink
                                classes={
                                    location.pathname === "/pokemones" ? "nav-link text-warning active" : "nav-link text-white"
                                }
                                name="Pokemones"
                                to="/pokemones"
                            />
                        </Link>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;