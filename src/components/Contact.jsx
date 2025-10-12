import ContactImage from "../images/PBM_9272.jpg";

const Contact = () => {
    return (
        <>
            <div className="Contact-container">
                <div className="Title">Contact Us</div>
                <div className="Contact-details">
                    <div className="Contact-info">
                        <h3>If you have any questions, do not hesitate to reach out!</h3>
                        <div className="Contact-card">
                            <p>Sara Gaya (Bride-to-be)</p>
                            <p>(786)-714-6909</p>
                            <p>saracgaya@gmail.com</p>
                        </div>
                        <hr width="40%" size="1" />
                        <div className="Contact-card">
                            <p>Lourdes Delavega (Mother of the Bride)</p>
                            <p>(786)-251-9489</p>
                            <p>gayar@bellsouth.net</p>
                        </div>
                        <hr width="40%" size="1" />
                        <div className="Contact-card">
                            <p>Dianne Sanchez (Mother of the Groom)</p>
                            <p>(786)-258-3068</p>
                            <p>dianneriggs@gmail.com</p>
                        </div>
                    </div>
                    <img src={ContactImage} alt="Andrew holding Sara, both smiling at the camera" loading="lazy" />
                </div>

            </div>
        </>
    )

};

export default Contact;