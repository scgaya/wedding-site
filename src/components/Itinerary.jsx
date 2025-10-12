import ItineraryImage from "../images/PBM_9261.jpg";


const Itinerary = () => {
    return (
    <>
    <div className="Itinerary-container"> 
        <div className="Title">Itinerary</div>
        <div className="Itinerary-details">
            <div className="Itinerary-timeline">
                <h5>Day 1: Arrival</h5>
                <p>Check-in, unwind, and explore the South Florida area at your own pace. This is your day to take it easy before all the festivities begin!</p>
                <h5>Day 2: The Wedding</h5>
                <p>The ceremony begins at 5 p.m., with dinner, drinks, and dancing to follow. </p>
                <h5>Day 3: The Pakistani Reception</h5>
                <p>Cocktails & hors-d'ouevres begin at 5 p.m., with the reception to follow.</p>
                <h5>Day 4: Farewell Brunch</h5>
                <p>A farewell brunch will be held at The Club at Weston Hills beginning at 8 a.m.. One last hurrah before our goodbyes!</p>
            </div>
            <img src={ItineraryImage} alt="Andrew & Sara smiling together in the Boston Public Garden" />
        </div>

        
    </div>
    </>
    )
};

export default Itinerary;