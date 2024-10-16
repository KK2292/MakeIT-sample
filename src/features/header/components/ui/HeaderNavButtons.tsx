import { useNavigate } from "react-router-dom";
import styles from "./HeaderNavButtons.module.css";

export const HeaderNavButtons = () => {
  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate("/blog");
  };

  const navigateToTeam = () => {
    navigate("/team");
  };

  return (
    <ul className={styles.navWrapper}>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={navigateToBlog}>
          Blog
        </a>
      </li>
      <li className={styles.navItem}>
        <a className={styles.navLink} onClick={navigateToTeam}>
          Team
        </a>
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
