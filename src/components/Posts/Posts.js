import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Posts = () => {
    const [posts,setPosts] = useState([]);
    useEffect(()=>{
        // ** data loader function
        const postsLoad = async()=>{
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                response.ok ? console.log('Successfull') : console.log('failed');
                const data = await response.json();
                setPosts(data)
            } catch (error) {
                console.log(error)
            }
        };

        postsLoad()
    },[])
    return (
        <div>
            <h1>Posts Available:{posts.length}</h1>
            {
                posts?.map(post=> <Post post={post} key={Math.random()*100}></Post>)
            }
        </div>
    );
};

export default Posts;