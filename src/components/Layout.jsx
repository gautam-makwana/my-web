import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes (mobile UX)
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const isActive = (path) => {
        if (path === '/' && location.pathname === '/') return 'active';
        return location.pathname.endsWith(path) && path !== '/' ? 'active' : '';
    };

    return (
        <div className="main-container">
            {/* Sidebar / Aside */}
            <section className={`width30 ${isMenuOpen ? 'active-menu' : ''}`} style={{ left: isMenuOpen ? '0px' : '' }}>
                <div className="logo" data-aos="flip-up">
                    <Link to="/"><span>G</span>autam</Link>
                </div>
                <div className="aside" data-aos="zoom-in">
                    <ul>
                        <li className="i1">
                            <Link to="/" className={isActive('/')}>
                                <i className="fa fa-house"></i>Home
                            </Link>
                        </li>
                        <li className="i2">
                            <Link to="/resume" className={isActive('/resume')}>
                                <i className="fa-solid fa-briefcase"></i>Resume
                            </Link>
                        </li>
                        <li className="i3">
                            <Link to="/biodata" className={isActive('/biodata')}>
                                <i className="fa-solid fa-address-card"></i>Biodata
                            </Link>
                        </li>
                        <li className="i5">
                            <Link to="/contact" className={isActive('/contact')}>
                                <i className="fa-solid fa-phone"></i>Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Mobile Menu Button */}
            <i 
                className="fa-solid fa-bars" 
                id="menubtn" 
                onClick={toggleMenu}
                style={{ display: 'block' }} // Ensure it's visible based on CSS, but logic here assumes it's handled by CSS media queries mostly, but click handler is key
            ></i>

            {/* Overlay for Mobile */}
            <section 
                id="opacity" 
                onClick={() => setIsMenuOpen(false)}
                style={{ filter: isMenuOpen ? 'brightness(50%)' : 'brightness(100%)' }}
            >
                {/* Main Content Area */}
                <Outlet />
            </section>
        </div>
    );
};

export default Layout;
