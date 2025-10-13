import ItineraryImage from "../images/PBM_9261.jpg";


const Itinerary = () => {
    return (
    <>
    <div className="Itinerary-container"> 
        <div className="Title">Itinerary</div>
        <div className="Itinerary-details">
            <div className="Itinerary-timeline">
                <h5>Week of Wedding: Arrival</h5>
                <p>Check-in, unwind, and explore the South Florida area at your own pace. This is your chance to relax before all the festivities begin!</p>
                <hr width="100%" size="1" />
                <h5>Fri, May 22: The Wedding</h5>
                <p>The ceremony begins at 5 p.m., with dinner, drinks, and dancing to follow. </p>
                <hr width="100%" size="1" />
                <h5>Sat, May 23: The Pakistani Reception</h5>
                <p>Cocktails & hors-d'ouevres begin at 5 p.m., with the reception to follow.</p>
                <hr width="100%" size="1" />
                <h5>Sun, May 24: Farewell Brunch</h5>
                <p>A farewell brunch will be held at The Club at Weston Hills beginning at 8 a.m.. One last hurrah before our goodbyes!</p>
            </div>
            <img src={ItineraryImage} alt="Sara & Andrew smiling together in the Boston Public Garden" loading="lazy" />
        </div>

        
    </div>
    </>
    )
};

export default Itinerary;