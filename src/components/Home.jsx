import "../App.css";
import HomeImage from "../images/PBM_9314.jpg";
import { NavLink } from "react-router";


const Home = () => {
    return (
    <>
        <div className="Home-container">
            <div className='Title'>Andrew & Sara</div>
            <p className="Home-subtitle">are getting married!</p>
            <img src={HomeImage} className="Home-image" alt="Homepage landing of Sara & Andrew" loading="lazy" />
            <div className='Home-details'>
                <p>May 22, 2026</p>
                {/* <button>
                    <NavLink to="rsvp" end>RSVP</NavLink>
                </button> */}
                <p>Miami, FL</p>
            </div>
        </div>
    </>
    )
};

export default Home;