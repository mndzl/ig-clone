import './css/story.css';
import UserImage from './UserImage';

function Story(props){
    // Re-order story classes

    return (
        <div className="story">
            <UserImage h="55px" img={props.img} story={true}/>
            <span className="story-username">
                <p>{props.username}</p>
            </span>
        </div>
    );
}

export default Story;