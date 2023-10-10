import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog List</Link>
                    </li>
                    <li>
                        <Link to="/form">Form</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar