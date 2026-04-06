import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data.posts);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // ✅ DELETE FUNCTION
    const handleDelete = async (id) => {
        try {
            // await axios.delete(`http://localhost:3000/delete-post/${id}`);
            await axios.delete(`http://localhost:3000/posts/${id}`);


            // remove deleted post from UI
            // setPosts(posts.filter(post => post._id !== id));
            setPosts(prevPosts => prevPosts.filter(post => post._id !== id));


        } catch (error) {
            console.error(error);
        }
    };

    return (
       
    <section className='feed-section'>
        {posts.length > 0 ? (
            posts.map((post) => (
                <div key={post._id} className='post-card'>

                    {/* Header */}
                    {/* <div className="post-header">
                        user_name
                    </div> */}

                    {/* Image */}
                    <img src={post.image} alt={post.caption} />

                    {/* Actions */}
                    <div className="post-actions">
                        <span>❤️ 💬 </span>

                        <button 
                            className="delete-btn"
                            onClick={() => handleDelete(post._id)}
                        >
                            🗑
                        </button>
                    </div>

                    {/* Caption */}
                    <p>{post.caption}</p>

                </div>
            ))
        ) : (
            <p>No posts available</p>
        )}
    </section>
);

    
};

export default Feed;
