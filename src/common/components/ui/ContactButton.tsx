import { Link } from "react-router-dom";
import styles from "./ContactButton.module.css";

export const ContactButton = () => {
  return (
    <Link to="/contact" className={styles.button}>
      <span className={styles.text}>Join/Job</span>
    </Link>
  );
};
