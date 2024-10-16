import styles from "./NavButton.module.css";
import { useNavigate } from "react-router-dom";

type NavButtonProps = {
  children: React.ReactNode;
  path: string;
};

export const NavButton = (props: NavButtonProps) => {
  const { children, path } = props;
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(`/${path}`);
  };

  return (
    <button className={styles.button} onClick={onClickNavigate}>
      {children}
    </button>
  );
};
