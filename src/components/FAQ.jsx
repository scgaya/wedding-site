import { NavLink } from "react-router";

const FAQ = () => {
    return (
        <>
        <div className="FAQ-container">
            <div className="Title">Details & Frequently Asked Questions</div>
            <div className="FAQ-details">
                <div className="FAQ-row">
                    <h2>Dress Code</h2>
                    <p>We kindly request formal attire for the wedding. All events will be indoors,
                        so no need to worry about the heat! We recommend bringing a light jacket or shawl 
                        as the indoor venues may get chilly.
                    </p>
                </div>
                <hr width="90%" size="1" />
                <div className="FAQ-row">
                    <h2>Accommodations</h2>
                    <p>You are welcome to stay anywhere in the Miami/Ft. Lauderdale area! We will update this section with recommended hotels in the near future.
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
                        contribute to our new chapter together, we will be putting together a honeymoon fund as well as a small registry with 
                        some of our most wished-for items. Stay tuned!
                        {/* Link to fund: <NavLink to="#" end>www.saraandandrewfund.com</NavLink>. 
                        Link to registry: <NavLink to="#" end>www.saraandandrewregistry.com</NavLink> */}
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default FAQ;