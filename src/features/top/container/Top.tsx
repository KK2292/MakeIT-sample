import {
  AboutUs,
  Achivements,
  Activity,
  FirstView,
} from "../components/modules";
import styles from "./Top.module.css";

export const Top = () => {
  return (
    <>
      <FirstView />
      <div className={styles.mainContentsStyle}>
        {/* セクション間の余白を調整するラッパー */}
        <AboutUs />
        <Achivements />
        <Activity />
      </div>
    </>
  );
};
