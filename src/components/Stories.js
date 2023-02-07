import './css/stories.css';
import { useState } from 'react';
import Story from './Story.js'
import luis from './images/luis.jpeg'
import { BsFillPlusCircleFill } from 'react-icons/bs';
import person1 from './images/person1.jpg';
import person2 from './images/person2.jpg';
import person3 from './images/person3.jpg';
import person4 from './images/person4.jpg';

function Stories(){
    const [stories, setStories] = useState([
        {
            username:"zarahenderson",
            img:person1,
            story:true,
        },
        {
            username:"danielross",
            img:person2,
            story:true,
        },
        {
            username:"chrisevans",
            img:person3,
            story:true,
        },
        {
            username:"julievann",
            img:person4,
            story:true,
        },
    ])

    return (
        <div id="stories">
            <div className="stories-personal">
                <div className="story">
                    <div className="circle personal-circle-nostory clickable">
                        <img src={luis}></img>
                        <div className="story-personal-add">
                            <BsFillPlusCircleFill />
                        </div>
                    </div>
                    <span className="story-username personal-story">
                        <p>Your story</p>
                    </span>
                </div>
            </div>

            {stories.map( story => 
                <Story 
                    username={story.username}
                    img={story.img}
                    story={true}
                />
            )}

        </div>
    );
}

export default Stories;