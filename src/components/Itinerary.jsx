import ItineraryImage from "../images/PBM_9261.jpg";


const Itinerary = () => {
    return (
    <>
    <div className="Itinerary-container"> 
        <div className="Title">Itinerary</div>
        <div className="Itinerary-details">
            <div className="Itinerary-timeline">
                <h3>Week of Wedding: Arrival</h3>
                <p>Check-in, unwind, and explore the South Florida area at your own pace. This is your chance to relax before all the festivities begin!</p>
                <hr width="100%" size="1" />
                <h3>Fri, May 22: The Wedding</h3>
                <p>The ceremony begins at 5 p.m., with dinner, drinks, and dancing to follow. </p>
                <hr width="100%" size="1" />
                <h3>Sat, May 23: The Pakistani Reception</h3>
                <p>Cocktails & hors-d'ouevres begin at 7 p.m., with the reception to follow.</p>
                {/* <hr width="100%" size="1" />
                <h3>Sun, May 24: Farewell Brunch</h3>
                <p>A farewell brunch will be held for out-of-town guests starting at 11 a.m. at The Club at Weston Hills. One last hurrah before our goodbyes!</p> */}
            </div>
            <img src={ItineraryImage} alt="Sara & Andrew smiling together in the Boston Public Garden" loading="lazy" />
        </div>

        
    </div>
    </>
    )
};

export default Itinerary;