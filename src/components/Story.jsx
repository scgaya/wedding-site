import StoryImage from "../images/PBM_9350.jpg";


const Story = () => {
    return (
        <>
        <div className="Story-container">
            <div className="Title">Our Story</div>
            <div className="Story-details">
                <img src={StoryImage} className="Story-image" alt="Our Story pic of Sara smiling with Andrew looking at her" />
                <div className="Story-paragraph">
                    <p>
                        Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque quis et, laoreet. 
                    </p>
                    <p>
                        Vitae lacus, aliquet lorem mauris, sit dolor sodales. Nullam quam quis lorem dui tristique massa enim. Faucibus sed egestas mollis vivamus et sed sed.
                    </p>
                    <p>
                        Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus pretium egestas ultricies tempus sit elit.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
};

export default Story;