import './css/post.css';
import { SlOptions } from 'react-icons/sl';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';
import { TbSend } from 'react-icons/tb'
import { BiBookmark } from 'react-icons/bi'
import Comment from './comment';
import Story from './Story';

function Post({img, user, user_image, likes, description, comment_count}){
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-header-left">
                    <div className="post-story">
                        <Story story_available={true} img={user_image} post={true} />
                    </div>
                    
                    <div className="post-author">
                        <div className="post-username">
                            <p>{user}</p>
                        </div>
                        <div className="post-music">
                            <p>{user} · Original audio</p>
                        </div>
                    </div>
                </div>
                <div className="post-header-right">
                    <SlOptions className="clickable"/>
                </div>
            </div>
            <div className="post-image">
                <img src={img}></img>
            </div>
            <div className="post-control">
                <div className="post-control-left">
                    <FaRegHeart className="clickable" />
                    <FaRegComment className="clickable"/>
                    <TbSend className="clickable"/>
                </div>
                <div className="post-control-right">
                    <BiBookmark className="clickable" />
                </div>
            </div>
            <div className="post-likes">
                <p>{likes} likes</p>
            </div>
            <div className="post-description">
                <strong className="username">{user} </strong>
                <p className="post-description-text">
                    {description}
                </p>
            </div>
            <div className="post-comments">
                <p className="post-comment-count">View all {comment_count} comments</p>
                <div className="post-comment-first">
                    <Comment author="leomessi" text="Que grande pa la verda tenia que decirtelo quere veni a juga a la pelota?" />
                </div>
            </div>
        </div>
    );
}

export default Post;