// Bottom navbar
import './css/navbar.css';
import { MdHomeFilled } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'
import { BiMoviePlay } from 'react-icons/bi'
import { BiShoppingBag } from 'react-icons/bi'
import UserImage from './UserImage';
import luis from './images/luis.jpeg'

function Navbar(){
    return (
        <div className="navbar">
            <div className="home">
               <MdHomeFilled /> 
            </div>
            <div className="search">
                <BiSearch />
            </div>
            <div className="reels">
               <BiMoviePlay /> 
            </div>
            <div className="shop">
               <BiShoppingBag /> 
            </div>
            <div className="profile">
                <UserImage img={luis} navbar={true}/>
            </div>
            
        </div>
    );
}

export default Navbar;
