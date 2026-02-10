import StoryImage from "../images/PBM_9350.jpg";


const Story = () => {
    return (
        <>
        <div className="Story-container">
            <div className="Title">The Story</div>
            <div className="Story-details">
                <img src={StoryImage} alt="Our Story pic of Sara smiling with Andrew looking at her" loading="lazy" />
                <div className="Story-paragraph">
                    <p>
                        Sara and Andrew first met at the University of Florida (Go Gators!) as fellow Computer Science students. Andrew thought Sara was pretty from the start and made an effort 
                        to get to know her. After forming a close friendship, they soon realized that they wanted to spend just about all their time together. 
                    </p>
                    <p>
                        Andrew would offer Sara rides home during school breaks, and both sides of parents noticed that these two were spending quite a 
                        bit of time with each other! But they didn't start dating until 2020, right when the COVID pandemic hit. Yet even during that tumultuous time, 
                        they were happy to be in each other's presence. 
                    </p>
                    <p>
                        Fast forward 5 years later, Andrew asked Sara for her hand and she happily said yes! They are ecstatic about becoming husband and wife, 
                        and can't wait to celebrate with all of you in May.
                    </p>
                    
                </div>
            </div>
        </div>
        </>
    )
};

export default Story;