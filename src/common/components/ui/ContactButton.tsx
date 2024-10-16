import styles from "./ContactButton.module.css";
import { useNavigate } from "react-router-dom";

export const ContactButton = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <button className={styles.button} onClick={navigateToContact}>
      Join/Job
    </button>
  );
};
