import Menu from "../components/Menu";

const link = {
  padding: "40px 50%",
};

function Home() {
  return (
    <>
      <div className="homeBody">
        <section
          className="homeBody1"
          id="homebody">
          <div className="overlay">
            <Menu />
            <div className="iam">
              <div
                className="main"
                style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <h1>I am a: </h1>
                <ul>
                  <li>Bilingual</li>
                  <li>Data Analyst</li>
                  <li>AI Developer</li>
                  <li>Full-stack Developer</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          className="aboutme"
          id="aboutme1">
          <h1>About Me</h1>
          <nav className="abme">
            <p>
              Hello, my name is Clement Arhin, and I love to create autonomous
              AI Algorithms{" "}
            </p>
          </nav>
          <h1>Education</h1>
          <nav className="abmeed">
            <ul>
              <li>
                <h2>Indiana Wesleyan University</h2>
                <p>Master of Science AI- Data Analytics</p>
              </li>
              <li>
                <h2>University of Arizona</h2>
                <p>Master of Arts Russian, Linguistics</p>
              </li>
              <li>
                <h2>University of Ghana</h2>
                <p>Bachelor of Arts Sociology, Russian</p>
              </li>
            </ul>
          </nav>
          <h1>Research</h1>
          <nav className="abme">
            <ul>
              <li>
                <h2>University of Arizona</h2>
                <p>
                  Cheating With ChatGPT: The Relationship Between Learner
                  Autonomy, Engagement With AI for Learning, and Russian (L2)
                  Learners’ Attitudes Towards ChatGPT as a Learning Tool
                </p>
              </li>
            </ul>
          </nav>
        </section>
        <section
          className="skills"
          id="skillset">
          <h1>Skills</h1>
          <nav className="abme">
            <ul>
              <li>
                <span>Russian Communication</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "95%" }}></div>
                </div>
              </li>
              <li>
                <span>Laravel PHP</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "75%" }}></div>
                </div>
              </li>
              <li>
                <span>React JS</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "90%" }}></div>
                </div>
              </li>

              <li>
                <span>HTML5</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <span>CSS</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "75%" }}></div>
                </div>
              </li>
              <li>
                <span>Python</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "85%" }}></div>
                </div>
              </li>
              <li>
                <span>Machine Learning / Deep Learning</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <span>MySQL / NoSQL</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "70%" }}></div>
                </div>
              </li>
              <li>
                <span>Microsoft Excel</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: "95%" }}></div>
                </div>
              </li>
            </ul>
          </nav>
        </section>
        <section
          className="projects"
          id="project1">
          <h1>Check Out my Artifacts</h1>
          <a href="https://clementarhin121.github.io/chepperence/">
            <nav className="abmeChef">
              <div className="overlay">
                <h3>
                  Restaurant Menu
                  <p>Food app built with React</p>
                  <i
                    class="fa-solid fa-link"
                    style={link}></i>
                </h3>
              </div>
            </nav>
          </a>
          <a href="https://clementarhin121.github.io/greenquiz/">
            <nav className="abmeQuiz">
              <div className="overlay">
                <h3>
                  React Quiz
                  <p>Quiz app built with React</p>
                  <i
                    class="fa-solid fa-link"
                    style={link}></i>
                </h3>
              </div>
            </nav>
          </a>
          <a href="https://clementarhin121.github.io/greenweather/">
            <nav className="abmeWeather">
              <div className="overlay">
                <h3>
                  Weather App
                  <p>Weather app built with React</p>
                  <i
                    class="fa-solid fa-link"
                    style={link}></i>
                </h3>
              </div>
            </nav>
          </a>
          <a href="news.html">
            <nav className="abmeNews">
              <div className="overlay">
                <h3>
                  News Letters
                  <p>News Letter app built with React</p>
                  <i
                    class="fa-solid fa-link"
                    style={link}></i>
                </h3>
              </div>
            </nav>
          </a>
        </section>
      </div>
    </>
  );
}
export default Home;
