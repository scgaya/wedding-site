import "../App.css";
import HomeImage from "../images/PBM_9314.jpg";


const Home = () => {
    return (
    <>
        <div className="Home-container">
            <div className='Title'>Sara & Andrew</div>
            <img src={HomeImage} className="Home-image" alt="Homepage landing of Sara & Andrew" />
            <div className='Home-details'>
                <p>May 22, 2026</p>
                <p>Miami, FL</p>
            </div>
        </div>
    </>
    )
};

export default Home;