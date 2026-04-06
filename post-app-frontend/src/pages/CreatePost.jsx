import axios from 'axios';
import React from 'react';

import {useNavigate} from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    axios.post('http://localhost:3000/create-post', formData) 
    .then((response) => {
      navigate('/feed');
      // alert("Post created successfully");
      // e.target.reset();
      console.log(response)
    })
    .catch((error) => {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    });
    
  }
  return (
    <section className='create-post-section'>
        <h1>Create Posts</h1>

        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept='image/*' />
            <input type="text" name='caption' placeholder='Enter caption' required />
            <button type='submit'>Submit</button>
        </form>

    </section>
  )
}

export default CreatePost
