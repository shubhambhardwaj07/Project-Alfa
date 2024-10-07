import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"; // Import specific brand icons
import styles from "./Footer.module.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const socialMediaLinks = [
  {
    name: "",
    url: "https://twitter.com",
    icon: faTwitter, // Font Awesome icon directly
  },
  {
    name: "",
    url: "https://facebook.com",
    icon: faYoutube,
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
        {socialMediaLinks.map(({ name, url, icon }, index) => (
          <>
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FontAwesomeIcon
                icon={icon}
                className={styles.icon}
                size="3x"
                fa-sync
                fa-spin
              />
              {name}
            </Link>
            {index !== 4 && <div className={styles.divider} />}
          </>
        ))}
      </div>

      {/* Main Footer Sections */}
      <div className={styles.mainFooter}>
        {/* First Section: Links */}
        <div className={styles.linksSection}>
          <Link href="/about">WORK</Link>
          <Link href="/projects">PROJECTS</Link>
        </div>

        {/* Second Section: Name */}
        <div className={styles.nameSection}>
          <p>
            Crafted with{" "}
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </p>
        </div>

        {/* Third Section: Contact */}
        <div className={styles.contactSection}>
          <Link href="mailto:contact@example.com">CONTACT ME</Link>
        </div>
      </div>
    </footer>
  );
};
