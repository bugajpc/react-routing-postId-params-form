import React from "react";
import { Link } from "react-router-dom";
function BlogList() {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/blog/1">Blog 1</Link>
                </li>
                <li>
                    <Link to="/blog/2">Blog 2</Link>
                </li>
                <li>
                    <Link to="/blog/3">Blog 3</Link>
                </li>
            </ul>
        </div>
    )
}
export default BlogList