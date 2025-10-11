import RSVPImage from "../images/PBM_9081.jpg"

const RSVP = () => {
    return (
        <>
        <div className="RSVP-container">
            <div className="Title">RSVP & Contact Details</div>
            <div className="RSVP-details">
                <img src={RSVPImage} alt="Sara laying her head on Andrew's shoulder"/>
                <div className="RSVP-info">
                    <h2>Please RSVP by March 20, 2026</h2>
                    (put RSVP button or form here)
                </div>
                <div className="Contact-info">

                </div>

            </div>

        </div>
        </>
    )
};

export default RSVP;