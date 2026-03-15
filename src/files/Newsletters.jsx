import "./news.css";
import Menu from "../components/Menu";
import Banner from "../components/banner";
import Footer from "../components/Footer";

import {
  FaChartLine,
  FaDollarSign,
  FaShoppingCart,
  FaRegClock,
  FaMapMarkedAlt,
  FaClock,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";

function Newsletters() {
  return (
    <>
      <div className="newsContainer">
        <Menu />
        <Banner />
        {/* Back Button */}{" "}
        <div className="butts">
          <button id="back">← Back To Home</button>
        </div>
        <section className="newsContent">
          {/* Heading Section */}
          <div className="heading">
            <h2>
              <FaChartLine style={{ marginRight: "0.5rem" }} /> Monthly
              Analytics Highlights
            </h2>
            <p>
              Explore the latest analyses, insights, and data-driven solutions.
            </p>
            <div className="infoBar">
              Updated Monthly | Business Intelligence
            </div>
            <hr />
          </div>

          {/* Main 1 */}
          <a href="https://steelebender.github.io/greenpolice/">
            {" "}
            <div className="main1">
              <h3>
                <FaChartLine
                  style={{ marginRight: "0.5rem", color: "#ff6a00" }}
                />
                Police Traffic Stop Analysis
              </h3>
              <span> Public Safety Intelligence</span>

              <p>
                This analysis examines police traffic stop data to uncover
                patterns and evaluate enforcement trends. Insights help improve
                public safety, reduce congestion, and inform public decisions.
              </p>

              <ul className="insightsList">
                <li>
                  <FaClock
                    style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                  />
                  <strong>Time Patterns:</strong> Analyze time-of-day and
                  day-of-week trends.
                </li>
                <li>
                  <FaUserCheck
                    style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                  />
                  <strong>Demographics:</strong> Evaluate stop statistics across
                  age, gender.
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                  />
                  <strong>Stop Outcomes:</strong> Examine results of stops such
                  as warnings, citations, and arrests.
                </li>
              </ul>

              <button className="notifyMe">Notify Me</button>
            </div>
          </a>
          <div className="main3">
            <h3>
              <FaChartLine
                style={{ marginRight: "0.5rem", color: "#ff6a00" }}
              />
              Life Expectancy Data Analysis
            </h3>
            <span>Global Health Insights</span>

            <p>
              This project explores global life expectancy trends using health,
              demographic, and socio-economic data. The analysis highlights the
              factors influencing longevity across different regions, enabling
              better understanding of public health priorities and future
              outcomes.
            </p>

            <ul className="insightsList">
              <li>
                <FaMapMarkedAlt
                  style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                />
                <strong>Regional Variations:</strong> Compare life expectancy
                across countries and continents.
              </li>
              <li>
                <FaClock style={{ color: "#ff6a00", marginRight: "0.5rem" }} />
                <strong>Time Trends:</strong> Track improvements in longevity
                over decades.
              </li>
              <li>
                <FaUserCheck
                  style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                />
                <strong>Key Factors:</strong> Evaluate the impact of healthcare,
                income, and lifestyle on life expectancy.
              </li>
            </ul>

            <button className="notifyMe">Notify Me</button>
          </div>
          <div className="main2">
            <h3>
              <FaChartLine
                style={{ marginRight: "0.5rem", color: "#ff6a00" }}
              />
              Walmart Sales Data Analysis
            </h3>
            <span>Business Intelligence</span>

            <p>
              This analysis explores Walmart's sales performance across regions
              and product categories. Using analytics, we uncover trends,
              seasonal patterns, and actionable insights to optimize operations
              and drive strategy.
            </p>

            <ul className="insightsList">
              <li>
                <FaDollarSign
                  style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                />
                <strong>Revenue Trends:</strong> Observe monthly revenue growth
                and identify top-performing categories.
              </li>
              <li>
                <FaShoppingCart
                  style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                />
                <strong>Sales Volume:</strong> Track units sold across regions
                and product lines.
              </li>
              <li>
                <FaRegClock
                  style={{ color: "#ff6a00", marginRight: "0.5rem" }}
                />
                <strong>Seasonality:</strong> Spot seasonal spikes and dips to
                plan inventory efficiently.
              </li>
            </ul>

            <button className="notifyMe">Read More</button>
          </div>

          <hr
            style={{
              width: "100%", // full container width
              maxWidth: "1200px", // optional max width
              height: "4px", // thickness
              margin: "2rem auto", // vertical spacing and center
              border: "none",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #ffb347, #ffcc33)", // gradient
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)", // subtle shadow
            }}
          />
        </section>
        <div className="butts">
          <button id="back">← Back To Home</button>
        </div>
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default Newsletters;
