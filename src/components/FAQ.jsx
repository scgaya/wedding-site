import { NavLink } from "react-router";

const FAQ = () => {
    return (
        <>
        <div className="FAQ-container">
            <div className="Title">Details & Frequently Asked Questions</div>
            <div className="FAQ-details">
                <div className="FAQ-row">
                    <h2>Dress Code & Parking</h2>
                    <p>The dress code is formal attire, no tuxedos required. All events will be inside,
                        so no need to worry about the heat! All venues have plenty of parking for those
                        who plan to drive. 
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Accommodations</h2>
                    <p>We've reserved a block of rooms at X hotel in Weston, FL. When you make a reservation,
                        let the hotel know you are part of the Gaya-Sanchez wedding to receive the discount. You are 
                        also welcome to stay anywhere in the area!
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Transportation</h2>
                    <p>For guests arriving from out of town, we recommend arranging a carpool with local family members or Ubering where possible. 
                        If you need more transportation options, please reach out to us.
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Gift Registry</h2>
                    <p>Your presence is truly the best gift we could ask for, nothing more needed! But if you would like 
                        to give us a gift, we've put together a honeymoon fund as well as a small registry of items we want most. 
                        Link to fund: <NavLink to="#" end>www.saraandandrewfund.com</NavLink>. 
                        Link to registry: <NavLink to="#" end>www.saraandandrewregistry.com</NavLink>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default FAQ;