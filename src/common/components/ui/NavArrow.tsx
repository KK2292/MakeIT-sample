import styles from "./NavArrow.module.css";

export const NavArrow = () => {
  return (
    <div className={styles.arrowCircle}>
      <span className={styles.arrow}></span>
    </div>
  );
};
