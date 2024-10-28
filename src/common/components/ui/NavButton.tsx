import { Link } from "react-router-dom";
import styles from "./NavButton.module.css";

type NavButtonProps = {
  children: React.ReactNode;
  path: string;
};

export const NavButton = (props: NavButtonProps) => {
  const { children, path } = props;

  return (
    <Link to={path} className={styles.button}>
      <span className={styles.text}>{children}</span>
    </Link>
  );
};
