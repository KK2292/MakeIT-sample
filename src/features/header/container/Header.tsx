import { useNavigate } from "react-router-dom";
import { HeaderNavButtons } from "../components/ui/HeaderNavButtons";
import { ContactButton } from "../../../common/components/ui/ContactButton";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();
  const navigateToTop = () => {
    navigate("/");
  };

  return (
    <header className={styles.wrapper}>
      <h1 className={styles.logo} onClick={navigateToTop}>
        MakeIT（仮ロゴ）
      </h1>
      <nav className={styles.nav}>
        <HeaderNavButtons />
        <ContactButton />
      </nav>
    </header>
  );
};
