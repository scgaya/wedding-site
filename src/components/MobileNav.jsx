import '../App.css';
import { NavLink } from "react-router";

const MobileNav = () => {
    return (
        <>
            <nav className='MobileNav-row'>
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
                <NavLink to="faqs" end>
                    FAQs
                </NavLink>
                <NavLink to="rsvp" end>
                    RSVP
                </NavLink>
            </nav>
        </>
    )
}

export default MobileNav;