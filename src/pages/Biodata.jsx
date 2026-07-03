import { Link } from 'react-router-dom';
const Biodata = () => {
  return (
    <section className="width70">
      <div id="navbar">
        <div id="logomobile">
          <Link to="/"><span>G</span>autam</Link>
        </div>
        <div className="navbtn">
          <Link to="/resume.html">Resume</Link>
          <Link to="/gallery.html">Gallery</Link>
          <Link to="/biodata.html" id="active1">Biodata</Link>
          <Link to="/contact.html">Contact</Link>
        </div>
      </div>

      <div className="heading" data-aos="fade-right">Biodata</div>

      <div id="hed1">
        <section id="contact">
          <span className="contact-heading">CONTACT</span>

          <div className="phone">
            <div><i className="fa-solid fa-phone"></i>Phone :</div>
            <div className="number">9157415103</div>
          </div>

          <div className="email">
            <div><i className="fa-solid fa-envelope"></i>Email :</div>
            <div className="number">gautammakwana0401@gmail.com</div>
          </div>

          <div className="address">
            <div><i className="fa-solid fa-location-dot"></i>Address :</div>
            <div className="number">Royal Park-1, Kotada Sangani Road, Gondal-360311</div>
          </div>
        </section>

        <section id="education" data-aos="fade-up">
          <span className="contact-heading">EDUCATION</span>

          <div className="phone">
            <div><i className="fa-solid fa-graduation-cap"></i>Qualification :</div>
            <div className="number">BCA (Bachelor of Computer Applications)</div>
          </div>

          <div className="email">
            <div><i className="fa-solid fa-building"></i>Degree Institution :</div>
            <div className="number">GLS University, Ahmedabad.</div>
          </div>
        </section>

        <section id="personal" data-aos="fade-up">
          <span className="contact-heading">PERSONAL DETAILS</span>

          <div className="detail">
            <section>Name :</section>
            <section>Gautam Atulbhai Makwana</section>
          </div>
          <div className="detail">
            <section>Date of Birth :</section>
            <section>4 January 2006</section>
          </div>
          <div className="detail">
            <section>Height :</section>
            <section>5'3&quot;</section> {/* Escaping quote */}
          </div>
          <div className="detail">
            <section>Weight :</section>
            <section>70kg</section>
          </div>
          <div className="detail">
            <section>Sub Caste :</section>
            <section>Luhar Suthar</section>
          </div>
          <div className="detail">
            <section>Hobbies :</section>
            <section>Travelling, Video Games, Cricket ,Badminton ,Kabaddi , Web Designing</section>
          </div>
          <div className="detail">
            <section>Language Known :</section>
            <section>English, Hindi, Gujarati</section>
          </div>
        </section>

        <section id="family" data-aos="fade-up">
          <span className="contact-heading">FAMILY DETAILS</span>

          <div className="detail">
            <section>Father's Name :</section>
            <section>Atulbhai Vrajlal Makwana</section>
          </div>
          <div className="detail">
            <section>Mother's Name :</section>
            <section>Varshaben Atulbhai Makwana</section>
          </div>
          <div className="detail">
            <section>Brother's Name:</section>
            <section>Utkarsh Atulbhai Makwana</section>
          </div>
          <div className="detail">
            <section>Father's Occupation :</section>
            <section>Business</section>
          </div>
        </section>
      </div>

      <footer>
        <div>Copyright © 2024 Gautam Makwana</div>
        <Link to="/"><span>G</span>autam</Link>
      </footer>
    </section>
  );
};

export default Biodata;
