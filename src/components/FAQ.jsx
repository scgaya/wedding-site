import { NavLink } from "react-router";

const FAQ = () => {
    return (
        <>
        <div className="FAQ-container">
            <div className="Title">Details & Frequently Asked Questions</div>
            <div className="FAQ-details">
                <div className="FAQ-row">
                    <h2>Dress Code</h2>
                    <p>We kindly request formal attire for both wedding events. All events will be indoors,
                        so no need to worry about the heat! We recommend bringing a light jacket or shawl 
                        as the indoor venues may get chilly.
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Accommodations</h2>
                    <p>You are welcome to stay anywhere in the Miami/Ft. Lauderdale area! Listed below are a few recommended hotels:
                        <br/>
                        <NavLink to={"https://www.marriott.com/en-us/hotels/fllwc-courtyard-fort-lauderdale-weston/overview/"} target="_blank">
                           • Courtyard by Marriott Ft. Lauderdale/Weston
                        </NavLink>
                        <br/>
                        <NavLink to={"https://www.marriott.com/en-us/hotels/flltw-towneplace-suites-fort-lauderdale-weston/overview/"} target="_blank">
                           • TownePlace Suites by Marriott Ft. Lauderdale/Weston
                        </NavLink>
                        <br/>
                        <NavLink to={"https://vacationvillageresorts.com/mizner_place/index.html"} target="_blank">
                           • Mizner Place at Weston Town Center
                        </NavLink>
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Getting Around</h2>
                    <p>There is a considerable distance between the venue for Friday and the venue for Saturday, so for guests 
                        arriving from out of town we recommend renting a car. Carpooling is also encouraged, and rideshare services are always an option.
                        All venues will have plenty of parking spaces. 
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Gift Registry</h2>
                    <p>Your presence is truly the best gift we could ask for, nothing more needed! But if you would like to 
                        contribute to our new chapter together, we've put together a honeymoon fund and select gifts that we would love to receive. 
                        We will post our registry here in the next few weeks, stay tuned!
                        {/* <br />
                        Link to Registry: <NavLink to={"https://www.zola.com/registry/saraandandrewmay22"} target="_blank">Gaya-Sanchez Registry</NavLink> */}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default FAQ;