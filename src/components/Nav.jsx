import '../App.css';
import { NavLink } from "react-router";

const Nav = () => {
    return (
        <>
            <nav className='Nav-row'>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="story" end>
                    Our Story
                </NavLink>
                <a href="#">Venue</a>
                <a href="#">Itinerary</a>
                <a href="#">FAQs</a>
                <a href="#">RSVP</a>
            </nav>
        </>
    )
}

export default Nav;