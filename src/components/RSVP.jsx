import RSVPImage from "../images/PBM_9081.jpg"
import { NavLink } from "react-router";

const RSVP = () => {
    return (
        <>
        <div className="RSVP-container">
            <div className="Title">RSVP & Contact Details</div>
            <div className="RSVP-details">
                <img src={RSVPImage} alt="Sara laying her head on Andrew's shoulder"/>
                <div className="RSVP-info">
                    <div className="RSVP-text">
                        <h2>Please RSVP by March 20, 2026</h2>
                        {/* get form from https://www.oursvp.app/console */}
                        <div id="rsvp-widget"></div> 
                    </div>
                    <div className="Contact-details">
                        <h2>Contact Info</h2>
                        <p>If you have any questions or concerns, do not hesitate to reach out to us!
                        </p>
                        <div className="Contact-info">
                            <div className="Contact-card">
                                <p>Sara Gaya</p>
                                <p>(786)-714-6909</p>
                                <p>saracgaya@gmail.com</p>
                            </div>
                            <div className="Contact-card">
                                <p>Lourdes Delavega</p>
                                <p>(786)-251-9489</p>
                                <p>gayar@bellsouth.net</p>
                            </div>
                            <div className="Contact-card last">
                                <p>Dianne Sanchez</p>
                                <p>(786)-258-3068</p>
                                <p>dianneriggs@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
};

export default RSVP;