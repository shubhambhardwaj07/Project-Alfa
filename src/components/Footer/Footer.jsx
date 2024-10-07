import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Import specific brand icons
import styles from "./Footer.module.scss";

const socialMediaLinks = [
  {
    name: "",
    url: "https://twitter.com",
    icon: faTwitter, // Font Awesome icon directly
  },
  {
    name: "",
    url: "https://facebook.com",
    icon: faFacebook,
  },
  {
    name: "",
    url: "https://instagram.com",
    icon: faInstagram,
  },
  {
    name: "",
    url: "https://linkedin.com",
    icon: faLinkedin,
  },
  {
    name: "",
    url: "https://github.com",
    icon: faGithub,
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Social Media Links Section */}
      <div className={styles.socialLinks}>
        {socialMediaLinks.map(({ name, url, icon }) => (
          <Link
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FontAwesomeIcon icon={icon} className={styles.icon} size="4x" />
            {name}
          </Link>
        ))}
      </div>

      {/* Main Footer Sections */}
      <div className={styles.mainFooter}>
        {/* First Section: Links */}
        <div className={styles.linksSection}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Second Section: Name */}
        <div className={styles.nameSection}>
          <p>Shubham Bhardwaj</p>
        </div>

        {/* Third Section: Contact */}
        <div className={styles.contactSection}>
          <Link href="mailto:contact@example.com">Contact Me</Link>
        </div>
      </div>
    </footer>
  );
};
