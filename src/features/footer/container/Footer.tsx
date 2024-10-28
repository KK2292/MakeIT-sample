import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const links = [
    { name: "About us", path: "" },
    { name: "Achivements", path: "" },
    { name: "Activity", path: "" },
    { name: "Members", path: "" },
    { name: "Blog", path: "" },
    { name: "Contact", path: "" },
  ];
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTitle}>
        <p className={styles.circleName}>MakeIT</p>
        <div className={styles.subtitle}></div>
        <p className={styles.supportedBy}>supported by</p>
        <p className={styles.schoolName}>情報科学専門学校</p>
      </div>
      <div className={styles.indexWrapper}>
        <p className={styles.indexTitle}>Index</p>
        <nav className={styles.linksWrapper}>
          <ul className={styles.links}>
            {links.map((link, index) => {
              return (
                <li key={index} className={styles.linksItem}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <p className={styles.address}>
        〒221-0835 神奈川県横浜市神奈川区鶴屋町2-17 相鉄岩崎ビル
      </p>
    </footer>
  );
};
