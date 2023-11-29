import { PageLinks, SocialLinks } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {PageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {SocialLinks.map((social) => {
          const { id, href, icon } = social;
          return (
            <li key={id}>
              <a
                href={href}
                rel="noreferrer"
                target="_blank"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear(  )}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
