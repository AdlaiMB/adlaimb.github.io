import "./styles/app.css";
import "./styles/index.css";
import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <img
              className="logo-image"
              src="/icons/logo.png"
              height="48"
              alt="logo"
            />
          </li>
          <li>
            <a className="medium-font-weight nav-link" href="#hero-section">
              Home
            </a>
          </li>
          <li>
            <a className="medium-font-weight nav-link" href="#about-section">
              About
            </a>
          </li>
          <li>
            <a className="medium-font-weight nav-link" href="#skill-section">
              Skills
            </a>
          </li>
          <li>
            <a className="medium-font-weight nav-link" href="#project-section">
              Projects
            </a>
          </li>
          <li>
            <a className="medium-font-weight nav-link" href="#future-section">
              Future
            </a>
          </li>
        </ul>
      </nav>
      <div id="hero-section" className="hero-section">
        <section className="hero-content">
          <h1>
            Hi, I'm{" "}
            <span className="italic-font-style">Adlai Morales-Bravo</span>
          </h1>
          <p>
            A recent University of California Riverside Computer Science
            graduate.
          </p>
          <p className="bold-font-weight">Scroll down to learn more about me</p>
        </section>
        <img
          src="/PersonalWebsite-Portrait.png"
          alt="portrait"
          height="490"
          className="portrait-image"
        />
      </div>
      <div className="section-content">
        <div id="about-section" className="about-section">
          <img
            src="/PersonalWebsite-About-Education.png"
            alt="personal items"
            height="460"
            className="about-image"
          />
          <div className="about-content">
            <section>
              <h2>Education</h2>
              <p>
                Bachelor of Science, Computer Science <br /> University of
                California, Riverside <br /> Graduation: Fall 2024
              </p>
            </section>
            <section>
              <h2>About Me</h2>
              <p>
                Hey, my name is Adlai and I currently finished my undergraduate
                degree in Computer Science at the University of California,
                Riverside. I’m interested in all things computers (computer
                architecture, web dev, embedded systems), soccer, movies, and
                comic books. I am currently looking for a software engineering
                internship.
              </p>
            </section>
          </div>
        </div>
        <div id="skill-section" className="skill-section">
          <h2>Skills</h2>
          <div className="skill-content">
            <SkillCard name="Python" link="python.svg" />
            <SkillCard name="Postrgresql" link="postgresql.svg" />
            <SkillCard name="Git" link="git.svg" />
            <SkillCard name="Node.js" link="node.svg" />
            <SkillCard name="Mongo" link="mongo.svg" />
            <SkillCard name="Javascript" link="js.svg" />
            <SkillCard name="HTML" link="html.svg" />
            <SkillCard name="CSS" link="css.svg" />
            <SkillCard name="Arduino" link="arduino.svg" />
          </div>
        </div>
        <div id="project-section" className="project-section">
          <section>
            <h2>Projects</h2>
            <p>
              Here are some of the projects I've worked on, during my time in
              school and in my free time. Feel free to explore!
            </p>
          </section>
          <div className="project-content">
            <ProjectCard
              title="MedAid"
              description="An Android mobile application where users can search, review, and recommend doctors and other medical experts in their area using Parse as its backend. Finalist at CodePath Nationals Fall 2021."
              stack={["Java", "Firebase", "Android Studio"]}
              link="https://github.com/DrSearch-Team/MedAid"
            />
            <ProjectCard
              title="UDP Server"
              description="A UDP server with TCP-like behavior implemented in C++. A projected created in my UCR CS164 Computer Networks class to further my understanding of computer networks and how the transport layer works under the hood."
              stack={["C"]}
              link="https://github.com/AdlaiMB/CS164-UDP-Server"
            />
            <ProjectCard
              title="Amazon Storefront DB"
              description="A database-driven application in Java for managing user accounts, stores, products, and orders. It allows users to create accounts, log in, and perform various actions based on their user type."
              stack={["Java", "PostgreSQL"]}
              link="https://github.com/deet5/Amazon-Storefront-DB"
            />
          </div>
        </div>
        <div id="future-section" className="future-section">
          <h2>Whats Next</h2>
          <div className="future-content">
            <section>
              <p className="black-font-weight subheader-font-size">
                Embedded Systems
              </p>
              <p>
                Since I was a kid I’ve always been interested in how devices
                work such as RC Cars. This interest is what inspired be to take
                CS120B (Intro to Embedded Systems) and with the knowledge I
                gained, I was able to build a working Stacker Game. I’m also
                looking to explore more inside the field by starting a RC car
                project.
              </p>
            </section>
            <section>
              <p className="black-font-weight subheader-font-size">
                Web Development
              </p>
              <p>
                As a Computer Science major, I’m am naturally interested in
                building software. I enjoy it more when the software I build is
                visible and allows for others to experience it. This is what
                pushes me to learn more about the large Web Development field
                and how to build systems for large users bases with a clean
                design.
              </p>
            </section>
            <section>
              <p className="black-font-weight subheader-font-size">
                Computer Architecture
              </p>
              <p>
                As I have gone through my Computer Science Degree my interest in
                understanding the lower level working of computer has grown.
                Classes such as CS120A (Design Logic) and CS161(Design and
                Architecture of Computer Systems) have taught me the basics of
                how a computer works and I plan to further my understanding of
                such topics through projects provided by Ben Eater.
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-content">
          <div>
            <p className="semi-bold-font-weight footer-header-font-size">
              Adlai Morales-Bravo
            </p>
            <p className="small-font-size">
              UCR Alumn | Aspiring Software Engineer
            </p>
          </div>
          <div className="footer-links">
            <section>
              <p className="link-header-font-size semi-bold-font-weight">
                Sections
              </p>
              <ul>
                <li>
                  <a className="medium-font-weight" href="#hero-section">
                    Home
                  </a>
                </li>
                <li>
                  <a className="medium-font-weight" href="#about-section">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="medium-font-weight" href="#skill-section">
                    Skills
                  </a>
                </li>
                <li>
                  <a className="medium-font-weight" href="#project-section">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="medium-font-weight" href="#future-section">
                    Future
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <p className="link-header-font-size semi-bold-font-weight">
                Resources
              </p>
              <ul className="pill-links">
                <li>
                  <a
                    href="https://github.com/AdlaiMB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium-font-weight pill-shape"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/adlai-morales-bravo-95561221a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium-font-weight pill-shape"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <p className="link-header-font-size semi-bold-font-weight">
                Helpful Resources
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=d9ZoPFlXZ2w"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="medium-font-weight"
                  >
                    Artwork
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        <p className="small-font-size copywrite-text">
          © 2025 Adlai Morales-Bravo. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
