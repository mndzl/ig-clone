import './css/mainpage.css';
import Navbar from './Navbar.js';
import Stories from './Stories.js';
import Post from './Post.js';
import Head from './Head.js';
import { useState } from 'react';

import person1 from './images/person1.jpg';
import person2 from './images/person2.jpg';
import person3 from './images/person3.jpg';
import person4 from './images/person4.jpg';

import post1 from './images/post1.jpeg';
import post2 from './images/post2.jpg';
import post3 from './images/post3.avif';
import post4 from './images/post4.jpg';

function Mainpage(){
    const [posts, setPosts] = useState([
        {
            user:"zarahenderson",
            user_image:person1,
            img:post1,
            comment_count:"12",
            likes:"470,231",
            description:"Hi this is my first post!"
        },
        {
            user:"danielross",
            user_image:person2,
            img:post2,
            comment_count:"122",
            likes:"1,231",
            description:"Happy in the best place!"
        },
        {
            user:"chrisevans",
            user_image:person3,
            img:post3,
            comment_count:"4,263",
            likes:"45",
            description:"Being in the avengers was the best thing ever"
        },
        {
            user:"julievann",
            user_image:person4,
            img:post4,
            comment_count:"2",
            likes:"1,321,455",
            description:"Ready to thrive!"
        },       
    ]);

    return (
        <div id="mainpage">
            <Head />
            <Stories />

            {posts.map( (post) => (
                <Post 
                    img={post.img} 
                    user={post.user} 
                    user_image={post.user_image} 
                    comment_count={post.comment_count} 
                    likes={post.likes} 
                    description={post.description}
                />
            ))}
            
            <Navbar />            
           

            
        </div>
    );
}

export default Mainpage;