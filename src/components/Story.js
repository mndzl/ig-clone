import './css/story.css';
import UserImage from './UserImage';

function Story(props){
    // Re-order story classes

    return (
        <div className="story_container">
            <div className="story">
                <UserImage img={props.img} story_available={props.story_available} post={props.post}/>
                <span className="story-username">
                    <p>{props.username}</p>
                </span>
            </div>
        </div>
    );
}

export default Story;