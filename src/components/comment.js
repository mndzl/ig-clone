import './css/comment.css';
import { FaRegHeart } from 'react-icons/fa';

function Comment({author, text}){
    return (
        <div className="comment">
            <div className="comment-body">
                <p className="comment-text"><strong className="username">{author} </strong>{text}</p>
            </div>
            <div className="comment-like">
                <p className="comment-like"><FaRegHeart /></p>
            </div>
        </div>
    );
}

export default Comment;