import "../App.css";
import HomeImage from "../images/PBM_9314.jpg";
import { NavLink } from "react-router";


const Home = () => {
    return (
    <>
        <div className="Home-container">
            <div className='Title'>Sara & Andrew</div>
            <img src={HomeImage} className="Home-image" alt="Homepage landing of Sara & Andrew" />
            <div className='Home-details'>
                <p>May 22, 2026</p>
                <NavLink to="rsvp" className="Home-rsvp-link" end>Please RSVP on or before March 31, 2026</NavLink>
                <p>Miami, FL</p>
            </div>
        </div>
    </>
    )
};

export default Home;