import { SectionFlexContainer } from "../layout";
import { SectionContainer } from "../layout/SectionContainer";
import { SectionText, SectionTitle } from "../ui";
import styles from "./Activity.module.css";
import { FaDiscord } from "react-icons/fa";

export const Activity = () => {
  return (
    <SectionContainer>
      <SectionTitle align={"left"}>Activity</SectionTitle>
      <SectionFlexContainer>
        <SectionText>
          毎週水曜日、放課後の15:40以降に活動しています。
          <br />
          必ず参加しなければいけないということはなく、バイトや就活、プライベートと両立しながら活動することができます。
          <br />
          <br />
          Discordをコミュニケーションツールとして使用しています。
          <br />
          連絡・質問はもちろん、雑談・独り言でも気軽にしてください。
        </SectionText>
        <ul className={styles.activityImageWrapper}>
          <li className={styles.activityItem}>
            <p className={styles.activityTitle}>活動時間</p>
            <ul className={styles.week}>
              <li>日</li>
              <li>月</li>
              <li>火</li>
              <li className={styles.activityDay}>水</li>
              <li>木</li>
              <li>金</li>
              <li>土</li>
            </ul>
            <p className={styles.activityTimeDetail}>放課後　15:40～</p>
          </li>
          <li className={styles.activityItem}>
            <p className={styles.activityTitle}>使用ツール</p>
            <div className={styles.discordWrapper}>
              <div className={styles.discordIconWrapper}>
                <FaDiscord className={styles.discordIcon} />
              </div>

              <p className={styles.discordText}>Discord</p>
            </div>
          </li>
        </ul>
      </SectionFlexContainer>
    </SectionContainer>
  );
};
