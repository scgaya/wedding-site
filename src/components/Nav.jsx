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
                <NavLink to="contact" end>
                    Contact
                </NavLink>
                {/* <NavLink to="rsvp" end>
                    RSVP
                </NavLink> */}
            </nav>
            {/* mobile nav hamburger menu  */}
            <nav className='Nav-mobile'>
                <div className="Nav-hamburger-menu">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
                    <nav className={isOpen ? 'Nav-mobile-menu-open' : 'Nav-mobile-menu-closed'}>
                        <NavLink to="/" onClick={() => setOpen(isOpen => !isOpen)} end>
                            Home
                        </NavLink>
                        <NavLink to="story" onClick={() => setOpen(isOpen => !isOpen)} end>
                            Our Story
                        </NavLink>
                        <NavLink to="venue" onClick={() => setOpen(isOpen => !isOpen)} end>
                            Venue
                        </NavLink>
                        <NavLink to="itinerary" onClick={() => setOpen(isOpen => !isOpen)} end>
                            Itinerary
                        </NavLink>
                        <NavLink to="faqs" onClick={() => setOpen(isOpen => !isOpen)} end>
                            FAQs
                        </NavLink>
                        <NavLink to="contact" onClick={() => setOpen(isOpen => !isOpen)} end>
                            Contact
                        </NavLink>
                        {/* <NavLink to="rsvp" onClick={() => setOpen(isOpen => !isOpen)} end>
                            RSVP
                        </NavLink> */}
                    </nav>
            </nav>
        </>
    )
}

export default Nav;