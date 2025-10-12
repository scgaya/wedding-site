const Venue = () => {
    return (
        <>
        <div className="Venue-container">
            <div className="Ceremony-details">
                <div className="Title">The Ceremony</div>
                <p>The ceremony will be held at St. John Neumann Catholic Church and begin at 5 p.m.</p>
                <p>12125 SW 107th Ave.
                    <br/>
                    Miami, FL 33176
                </p>
            </div>
            <hr width="20%" size="1" />
            <div className="Reception-details">
                <div className="Title">The Reception</div>
                <p>Dinner and dancing to follow at the Coral Gables Country Club. Expect an elegant and lively party where we get to celebrate our union with those we love most.</p>
                <p>997 N Greenway Dr.
                    <br/>
                    Coral Gables, FL 33134
                </p>
            </div>
            <hr width="20%" size="1" />
            <div className="Pakistani-reception-details">
                <div className="Title">The Pakistani Reception</div>
                <p>A Pakistani reception will take place the following day at The Club at Weston Hills. Cocktails and hors d'ouevres begin at 5 p.m., with the reception to follow in the adjacent ballroom.</p>
                <p>2600 Country Club Way
                    <br/>
                    Weston, FL 33332
                </p>
            </div>
        </div>
        </>
    )
};

export default Venue;