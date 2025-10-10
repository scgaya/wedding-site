const Venue = () => {
    return (
        <>
        <div className="Venue-container">
            <div className="Ceremony-details">
                <div className="Title">The Ceremony</div>
                <p>The ceremony will be held at St. John Neumann Catholic Church and will begin at 5 p.m. .</p>
            </div>
            <hr width="20%" size="1" />
            <div className="Reception-details">
                <div className="Title">The Reception</div>
                <p>Dinner and dancing to follow at the Coral Gables Country Club. Expect an elegant, lively party where we get to celebrate our union with those we love most.</p>
            </div>
            <hr width="20%" size="1" />
            <div className="Pakistani-reception-details">
                <div className="Title">The Pakistani Reception</div>
                <p>There will be a Pakistani reception the following day (May 23) at the Weston Hills Country Club. Cocktails and hors d'ouevres begin at 5 p.m., with the reception to follow in the adjacent ballroom.</p>
            </div>
            {/* <hr width="20%" size="1" />
            <div className="Dress-details">
                <div className="Subtitle">Dress Code & Parking</div>
                <p>Formal attire is requested, no tuxedos required. All events will be indoors so no need to worry about the heat! There will also be plenty of parking available at both venues for those who wish to drive.</p>
            </div> */}
        </div>
        </>
    )
};

export default Venue;