import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const typedEl = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: ["MERN Stack Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="width70">
      <div id="navbar" data-aos="fade-down">
        <div id="logomobile">
          <Link to="/"><span>G</span>autam</Link>
        </div>
        <div className="navbtn">
          <Link to="/resume">Resume</Link>
          <Link to="/biodata">Biodata</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div id="hed1">
        <div className="photo1" data-aos="zoom-in">
          <div className="frame">
            <img src="https://github.com/Gautammak0416/Gautam/assets/160625391/7d306197-0792-4559-b866-495e5c148d4a" loading="lazy" alt="myphoto" />
          </div>
        </div>

        <div className="information">
          <div className="text1" data-aos="fade-down" data-aos-offset="0">Hello, it's me</div>
          <div className="text2" data-aos="fade-right" data-aos-offset="0">Gautam Makwana</div>
          <div className="text3" data-aos="fade-up" data-aos-offset="0">And I'm a <span className="multiple" ref={typedEl}></span></div>
          <div className="text4" data-aos="fade-left" data-aos-offset="0">BCA Graduate building responsive web applications with React JS, JavaScript (ES6+), HTML5, and CSS3, backed by strong foundations in C, C++, Core Java, Python, MySQL and MERN Stack. Delivered academic and bootcamp projects integrating component-based state management, improving hands-on proficiency in cross-browser, mobile-responsive frontend development.</div>
          <Link to="/biodata" data-aos="zoom-in" className="about-me" data-aos-offset="0">
            More About Me
          </Link>
        </div>

        <div className="photo" data-aos="zoom-in">
          <div className="frame">
            <img src="https://github.com/Gautammak0416/Gautam/assets/160625391/7d306197-0792-4559-b866-495e5c148d4a" loading="lazy" alt="myphoto" />
          </div>
        </div>
      </div>

      <div id="box">
        <div className="boxes" onClick={() => navigate('/resume')} data-aos="fade-up" style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-briefcase"></i>
          <p>Resume</p>
          <div>It covers my Professional Career Details</div>
        </div>

        <div className="boxes" onClick={() => navigate('/biodata')} data-aos="fade-up" style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-address-card"></i>
          <p>Biodata</p>
          <div>You can see my personal, family, education and some other details.</div>
        </div>

        <div className="boxes" onClick={() => navigate('/contact')} data-aos="fade-up" style={{ cursor: 'pointer' }}>
          <i className="fa-solid fa-envelope"></i>
          <p>Contact</p>
          <div>Feel free to reach out to me for work or collaborations.</div>
        </div>
      </div>

      <footer>
        <div>Copyright © 2024 Gautam Makwana</div>
        <Link to="/"><span>G</span>autam</Link>
      </footer>
    </section>
  );
};

export default Home;
