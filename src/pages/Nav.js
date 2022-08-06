import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add-todo" className="nav-link">Add Todo</Link>
        </nav>
    );
};

export default Nav;
