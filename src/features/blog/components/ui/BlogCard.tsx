import styles from "./BlogCard.module.css";

export const BlogCard = () => {
  return (
    <li className={styles.cardWrapper}>
      <div className={styles.img}></div>
      <p className={styles.title}>タイトルタイトル</p>
      <p className={styles.date}>2000/12/25</p>
    </li>
  );
};
