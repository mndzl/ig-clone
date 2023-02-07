// Will change depending what screen is
import { FiPlusSquare } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa';
import { RiMessengerLine } from 'react-icons/ri';
import InstagramLogo from './images/InstagramLogo.png'

import './css/head.css';

function Head(){
    return (
        <div id="head">
            <div id="head-main">
                <span className='head-main-left'>
                    <div className='instagramLogo'>
                        <img src={InstagramLogo}></img>
                    </div>
                </span>
                <span className="head-main-right">
                    <FiPlusSquare className="clickable" />
                    <FaRegHeart className="clickable"/>
                    <RiMessengerLine className="clickable" />
                </span>
            </div>
        </div>
    );
}

export default Head;