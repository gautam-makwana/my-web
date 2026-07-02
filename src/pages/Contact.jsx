import { Link } from 'react-router-dom';
import { useState } from 'react';

const ContactBox = ({ className, iconId, iconClass, title, content, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Replicating logic:
    // icon.style.fontSize = "22px"; (Default 16px presumably? Need to check CSS if I want it perfect, JS logic says 22px on hover, 16px out)
    // contactbox.style.marginTop = "34px"; (Default 40px)

    const boxStyle = {
        marginTop: isHovered ? '34px' : '40px',
    };
    
    // Note: The icon selector in original JS was by ID, but here we can just style the icon directly in React
    const iconStyle = {
        fontSize: isHovered ? '22px' : '16px', // Original JS logic
        // Original CSS has specific size 25px or similar? 
        // Let's look at index.css: .contactbox1 i { color: var(--skin-color); transition: 0.2s; }
        // The JS was forcing 22px/16px. I will trust the JS logic.
    };

    return (
        <section 
            className={className} 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={boxStyle}
        >
            <i className={iconClass} id={iconId} style={iconStyle}></i>
            <p>{title}</p>
            <div>{content}</div>
        </section>
    );
};

const Contact = () => {
    const handlePhone = () => {
        window.open("tel:9157415103", '_parent');
    };

    const handleLocation = () => {
        window.open("https://maps.app.goo.gl/f4v12tQeDk9gdvaD8", '_blank');
    };

    const handleEmail = () => {
        window.open("mailto:gautammakwana0401@gmail.com", '_parent');
    };

    const handleFacebook = () => {
        window.open("https://www.facebook.com/profile.php?id=100092457919126", '_parent');
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/gautam__04?igsh=MTJ6dGZ4cnl5Zml1aw==", '_blank');
    };

    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/gautam-makwana-03b147286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/", '_blank');
    };

    return (
        <section className="contact-main">
            <div id="navbar">
                <div id="logomobile">
                    <Link to="/"><span>G</span>autam</Link>
                </div>
                <div className="navbtn">
                    <Link to="/resume.html">Resume</Link>
                    <Link to="/gallery.html">Gallery</Link>
                    <Link to="/biodata.html">Biodata</Link>
                    <Link to="/contact.html" id="active1">Contact</Link>
                </div>
            </div>
            
            <div className="heading" data-aos="fade-right">Contact Me</div>
            <div className="qustion1" data-aos="zoom-out">DO YOU HAVE ANY QUESTION?</div>
            <div className="qustion2" data-aos="zoom-out">I'M AT YOUR SERVICE</div>
            
            <div className="contactinfo" data-aos="fade-up">
                <ContactBox 
                    className="contactbox1" 
                    iconId="icon1" 
                    iconClass="fa-solid fa-phone"
                    title="Call us on"
                    content="9157415103"
                    onClick={handlePhone}
                />
                
                <ContactBox 
                    className="contactbox2" 
                    iconId="icon2" 
                    iconClass="fa-solid fa-location-dot"
                    title="Location"
                    content="Royal Park 1, Gondal"
                    onClick={handleLocation}
                />
                
                <ContactBox 
                    className="contactbox3" 
                    iconId="icon3" 
                    iconClass="fa-solid fa-envelope"
                    title="Email"
                    content="gautammakwana0401@gmail.com"
                    onClick={handleEmail}
                />
            </div>

            <div className="qustion3" data-aos="zoom-out">SEND ME AN EMAIL</div>
            <div className="qustion4" data-aos="zoom-out">I'M VERY RESPONSIVE TO MESSAGES</div>
            
            <section className="follow-on">
                <i className="fa-brands fa-square-facebook" onClick={handleFacebook} id="s2" data-aos="fade-up"></i>
                <i className="fa-brands fa-instagram" onClick={handleInstagram} data-aos="fade-up"></i>
                <i className="fa-brands fa-linkedin" onClick={handleLinkedin} data-aos="fade-up"></i>
            </section>

            <footer id="cfooter">
                <div>Copyright © 2024 Gautam Makwana</div>
                <Link to="/"><span>G</span>autam</Link>
            </footer>
        </section>
    );
};

export default Contact;
