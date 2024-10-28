import { Link } from "react-router-dom";
import styles from "./HeaderNavButtons.module.css";

export const HeaderNavButtons = () => {
  return (
    <ul className={styles.navWrapper}>
      <li className={styles.navItem}>
        <Link to="/blog" className={styles.navLink}>
          Blog
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link to="/team" className={styles.navLink}>
          Team
        </Link>
      </li>
      <li className={styles.navItem}>
        <a
          className={styles.navLink}
          href="https://github.com/ISC-MakeIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
};
