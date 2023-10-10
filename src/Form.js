import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Form() {
    const [postId, setPostId] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        navigate(`/blog/${postId}`)
    }
    return (
        <div>
            <h1>Form</h1>
            <label>Enter Post ID</label>
            <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)}/>
            <br></br>
            <button onClick={handleSubmit}>Got to blog post</button>
        </div>
    )
}
export default Form