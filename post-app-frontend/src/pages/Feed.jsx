import React, { useState } from 'react';

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: 1,
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            caption: 'This is a sample post one'
        },
    ]);

    return (
        <section className='feed-section'>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
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
