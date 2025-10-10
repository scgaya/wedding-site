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
                <NavLink to="venue" end>
                    Venue
                </NavLink>
                <NavLink to="itinerary" end>
                    Itinerary
                </NavLink>
                <NavLink to="details-and-faqs" end>
                    Details & FAQs
                </NavLink>
                <NavLink to="rsvp" end>
                    RSVP
                </NavLink>
            </nav>
        </>
    )
}

export default Nav;