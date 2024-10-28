import { NavArrow } from "../../../common/components/ui";
import styles from "./NewsLinks.module.css";

export const NewsLinks = () => {
  const items = [
    { date: "2000/12/31", title: "ホームページを作成しました！" },
    { date: "2001/01/01", title: "新年のご挨拶" },
    { date: "2001/02/14", title: "バレンタインイベント開催" },
    { date: "2001/04/01", title: "エイプリルフール特集" },
    { date: "2001/12/25", title: "クリスマスパーティーのお知らせ" },
  ];

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div className={styles.contents}>
            <p className={styles.date}>{item.date}</p>
            <p className={styles.title}>{item.title}</p>
          </div>
          <div className={styles.arrowWrapper}>
            <NavArrow />
          </div>
        </div>
      ))}
    </div>
  );
};
