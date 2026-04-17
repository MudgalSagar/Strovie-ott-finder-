
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p> © 2025 Strovie. Movie & streaming data provided by <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer" className="underline">TMDb</a>, <a href="https://www.watchmode.com/" target="_blank" rel="noreferrer" className="underline">Watchmode</a>, and <a href="https://www.omdbapi.com/" target="_blank" rel="noreferrer" className="underline">OMDb API</a>. AI responses powered by <a href="https://openai.com/" target="_blank" rel="noreferrer" className="underline">OpenAI</a>.</p>
      <div className="footer-links">
        <Link to="/policy">Privacy Policy</Link>
        <Link to="/terms&condition">Terms & Conditions</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
