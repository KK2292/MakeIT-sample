import { HeaderNavButtons } from "../components/ui/HeaderNavButtons";
import { ContactButton } from "../../../common/components/ui/ContactButton";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <h1 className={styles.logo}>MakeIT（仮ロゴ）</h1>
      </Link>

      <nav className={styles.nav}>
        <HeaderNavButtons />
        <ContactButton />
      </nav>
    </header>
  );
};
