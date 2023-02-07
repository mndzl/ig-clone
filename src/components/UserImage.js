import './css/userimage.css';
import luis from './images/luis.jpeg';

function UserImage(props){
    console.log(props.h);
    return (
        <div className="userImage">
            <div className={props.post ? 'userImagePost' : "circle"}>
                <img src={props.img} style={{"height":props.h}}  />
            </div>
        </div>
    );
}

export default UserImage;