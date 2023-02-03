import React, { createContext, useState, useEffect } from 'react';
import Monkey from '../components/img/monkey.gif';

const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchData = async () => {
    const response = await fetch('http://localhost:5000/posts');
    const data = await response.json();
setPosts(data);
setLoading(false);
};
fetchData();
}, []);

if (loading) {
    return (
            <div className="loading">
                <img src={Monkey} alt="loading" />
            </div>
);
}

const createPost = async newPost => {
const response = await fetch('http://localhost:5000/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: { 'Content-Type': 'application/json' },
});
const updatedData = await response.json();
setPosts([...posts, updatedData]);
};

return (
    <PostContext.Provider value={{ posts, createPost }}>
        {children}
    </PostContext.Provider>
);
};

export { PostProvider };
export default PostContext;