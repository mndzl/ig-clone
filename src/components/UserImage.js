import './css/userimage.css';
import { useEffect, useState } from 'react';

function UserImage(props){
    const [height, setHeight] = useState(65)

    const [innerHeight, setInnerHeight] = useState(55);

    useEffect(() => {
        if(props.post || props.navbar){
            setHeight(40)
            setInnerHeight(30)
        }
        if(props.navbar){
            setHeight(30)
            setInnerHeight(20)
        }

        console.log("h modified is: " + innerHeight)
    },[])

    return (
        <div className="userImage">
            <div className={props.story_available ? 'story_available' : ""} style={{"height":height, "width":height}}>
                <img src={props.img} style={{"height":innerHeight, "width":innerHeight}}  />
            </div>
        </div>
    );
}

export default UserImage;