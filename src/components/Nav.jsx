import '../App.css';
import { NavLink } from "react-router";
import Hamburger from 'hamburger-react';
import React, { useState} from 'react';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

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
                <NavLink to="faqs" end>
                    FAQs
                </NavLink>
                <NavLink to="rsvp" end>
                    RSVP
                </NavLink>
            </nav>
            {/* mobile nav hamburger menu  */}
            <nav className='Nav-mobile'>
                <div className="Nav-hamburger-menu">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                {isOpen && (
                <>
                    <nav className='Nav-mobile-menu'>
                        <NavLink to="/" onClick={() => setOpen(!isOpen)} end>
                            Home
                        </NavLink>
                        <NavLink to="story" onClick={() => setOpen(!isOpen)} end>
                            Our Story
                        </NavLink>
                        <NavLink to="venue" onClick={() => setOpen(!isOpen)} end>
                            Venue
                        </NavLink>
                        <NavLink to="itinerary" onClick={() => setOpen(!isOpen)} end>
                            Itinerary
                        </NavLink>
                        <NavLink to="faqs" onClick={() => setOpen(!isOpen)} end>
                            FAQs
                        </NavLink>
                        <NavLink to="rsvp" onClick={() => setOpen(!isOpen)} end>
                            RSVP
                        </NavLink>
                    </nav>
                </>
                )}
            </nav>
        </>
    )
}

export default Nav;