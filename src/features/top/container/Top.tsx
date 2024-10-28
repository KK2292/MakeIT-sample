import { Footer } from "../../footer/container/Footer";
import {
  AboutUs,
  Achivements,
  Activity,
  FirstView,
} from "../components/modules";
import { Contact } from "../components/modules/Contact";
import { News } from "../components/modules/News";
import { Team } from "../components/modules/Team";
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
        <Team />
        <News />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
