import { Link } from 'react-router-dom';
const Resume = () => {
  return (
    <section className="width70">
      <div id="navbar">
        <div id="logomobile">
          <Link to="/"><span>G</span>autam</Link>
        </div>
        <div className="navbtn">
          <Link to="/resume.html" id="active1">Resume</Link>
          <Link to="/gallery.html">Gallery</Link>
          <Link to="/biodata.html">Biodata</Link>
          <Link to="/contact.html">Contact</Link>
        </div>
      </div>
      <div className="heading" data-aos="fade-right">Resume</div>
      <div id="hed1">

        <div className="animationbox" data-aos="fade-up">
          <section className="titel">
            EDUCATION
          </section>
          <section className="detilec">
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para"><b>BCA(Bachelor in Computer Application)</b></div>
            </span>
            <span className="columefix">
              <div className="blank"></div>
              <div className="para">GLS University<br />
                2023-Present<br />
                CGPA: 7.78<br />
              </div>
            </span>
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para"><b>
                Higher Secondary(12th)</b></div>
            </span>
            <span className="columefix">
              <div className="blank"></div>
              <div className="para">Avantika School,Gondal<br />
                2022-2023<br />
                PR: 94.28</div>
            </span>
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para"><b>
                High School (10th)</b></div>
            </span>
            <span className="columefix">
              <div className="blank"></div>
              <div className="para">St Mary's School, Gondal<br />
                2020-2021<br />
                PR: 87.62</div>
            </span>
          </section>
        </div>

        <div className="animationbox" data-aos="fade-up">
          <section className="titel">
            INTERNSHIP & BOOTCAMP
          </section>
          <section className="detile">
            <div className="dot" style={{marginTop: "5px"}}></div>
            <div className="para">
              <b>LetsUpgrade React Bootcamp</b><br />
              Built functional React JS components (using hooks, props, and state) as measured by successful completion of all bootcamp milestones by completing LetsUpgrade's intensive 3-day React Bootcamp covering component design and frontend application architecture.
            </div>
            <br/>
            <div className="dot" style={{marginTop: "5px"}}></div>
            <div className="para">
              <b>LetsUpgrade HTML5/CSS3 Bootcamp</b><br />
              Delivered fully responsive, cross-browser web layouts as measured by pixel-accurate rendering across mobile and desktop breakpoints by completing LetsUpgrade's 3-day HTML5/CSS3 Bootcamp on modern responsive design and UI structuring.
            </div>
          </section>
        </div>

        <div className="animationbox" data-aos="fade-up">
          <section className="titel">
            PROJECTS
          </section>
          <section className="detile">
            <div className="dot" style={{marginTop: "5px"}}></div>
            <div className="para">
              <b>TravelMate - Your Travel Companion</b> (GLS University)<br />
              <i>Tech Stack: React JS, JavaScript (ES6+), HTML5, CSS3</i><br />
              • Increased trip-planning speed for test users as measured by reduced itinerary creation time by building AI-driven personalized recommendation components in React JS.<br />
              • Enabled end-to-end, editable trip itineraries by architecting reusable React components with state management for transport, packing, and activity data.<br />
              • Resolved 10 local-need queries per test session as measured by chatbot response accuracy by implementing an AI chatbot interface with JavaScript-based state handling.
            </div>
            <br/>
            <div className="dot" style={{marginTop: "5px"}}></div>
            <div className="para">
              <b>Personal Portfolio</b><br />
              <i>Tech Stack: HTML5, CSS3, JavaScript (ES6+)</i><br />
              • Achieved full cross-device responsiveness across mobile, tablet, and desktop breakpoints as measured by consistent layout rendering by designing a mobile-first, media-query-driven responsive layout.<br />
              • Maintained a version-controlled, publicly viewable codebase as measured by commits/deployments by hosting and iterating on the project via GitHub and GitHub Pages.
            </div>
          </section>
        </div>

        <div className="animationbox" data-aos="fade-up">
          <section className="titel">
            SKILLS
          </section>
          <section className="detilec">
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para">Communication Skills
              </div>
            </span>
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para">Leadership
              </div>
            </span>
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para">Interpersonal Skills
              </div>
            </span>
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para">Teamwork and Collabiration
              </div>
            </span>
            <span className="columefix">
              <div className="dotc"></div>
              <div className="para">Continuous Learning
              </div>
            </span>
          </section>
        </div>

        <div className="animationbox" data-aos="fade-up">
          <section className="titel">
            TECHNICAL SKILLS
          </section>
          <section className="skilldetile">
            <section className="divide50">
              <div className="skillname">
                HTML
              </div>
              <div className="skilldotbox">
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
            <section className="divide50">
              <div className="skillname">
                CSS
              </div>
              <div className="skilldotbox">
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
          </section>
          <section className="skilldetile">
            <section className="divide50">
              <div className="skillname">
                Javascript
              </div>
              <div className="skilldotbox">
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot gray"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
            <section className="divide50">
              <div className="skillname">
                C-Language
              </div>
              <div className="skilldotbox">
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot gray"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>

          </section>
          <section className="skilldetile">
            <section className="divide50">
              <div className="skillname">
                Database Management System
              </div>
              <div className="skilldotbox">
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot gray"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
            <section className="divide50">
              <div className="skillname">
                C++
              </div>
              <div className="skilldotbox">
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot"></div>
                <div className="skilldot gray"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
          </section>

          <section className="skilldetile">
            <section className="divide50">
              <div className="skillname">
                React JS
              </div>
              <div className="skilldotbox">
                <div className="skilldot" style={{backgroundColor: 'red'}}></div>
                <div className="skilldot" style={{backgroundColor: 'red'}}></div>
                <div className="skilldot" style={{backgroundColor: 'red'}}></div>
                <div className="skilldot gray"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
            <section className="divide50">
              <div className="skillname">
                Node JS
              </div>
              <div className="skilldotbox">
                <div className="skilldot" style={{backgroundColor: 'red'}}></div>
                <div className="skilldot" style={{backgroundColor: 'red'}}></div>
                <div className="skilldot" style={{backgroundColor: 'red'}}></div>
                <div className="skilldot gray"></div>
                <div className="skilldot gray"></div>
              </div>
            </section>
          </section>
        </div>

        <div className="animationbox" data-aos="fade-up">
            <section className="titel">
              HOBBIES
            </section>
            <section className="detile">
              <div className="dot"></div>
              <div className="para">
                Apart from being a Frontend Developer, I like to play Cricket with my friends. Along with cricket, I also play Badminton. Moreover, I also like to being part of Adventure Activities such as Climbing Mountains, Camping and Scuba Diving.In addition to this, I am also active in Photography.</div>
            </section>
          </div>

          <div className="animationbox" data-aos="fade-up">
            <section className="titel">
              CERTIFICATIONS
            </section>
            <section className="detilec">
              <span className="columefix">
                <div className="dotc"></div>
                <div className="para">
                  One day MLA in Gujarat Legislative Assembly(Youva Assembly).
                </div>
              </span>
            </section>
          </div>



          <div className="animationbox" data-aos="fade-up">
            <section className="titel">
              LANGUAGES KNOWN
            </section>
            <section className="detilec">
              <span className="columefix">
                <div className="dotc"></div>
                <div className="para">English
                </div>
              </span>
              <span className="columefix">
                <div className="dotc"></div>
                <div className="para">  Hindi
                </div>
              </span>
              <span className="columefix">
                <div className="dotc"></div>
                <div className="para">Gujarati
                </div>
              </span>
            </section>
          </div>


        </div>
        <footer>
          <div>Copyright © 2024 Gautam Makwana</div>
          <Link to="/"><span>G</span>autam</Link>
        </footer>

      </section>
  );
};

export default Resume;
