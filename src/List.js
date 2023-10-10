import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function List() {
    const [postId, setPostId] = useState('')
    const [list, setList] = useState([])
    //const navigate = useNavigate()
    const handleAddToList = (e) => {
        //navigate(`/blog/${postId}`)
        setList([...list, postId])
        setPostId("")
    }
    return (
        <div>
            <h1>List</h1>
            <label>Name</label>
            <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)}/>
            <br></br>
            <button onClick={handleAddToList}>Got to blog post</button>
            <div>
                <ul>
                    {list.map((item, index) => (
                        <li>
                            <Link to={`/blog/${item}`}>{item}</Link>
                        </li>
                    ) )}
                </ul>
            </div>
        </div>
    )
}
export default List