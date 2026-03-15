import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      <p>
        © {year} Steele Bender <br />
        <br /> All rights reserved.
      </p>
      <div className="socialIcons">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
