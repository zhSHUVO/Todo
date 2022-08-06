import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    Todo
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/add-todo">Add Todo</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;
