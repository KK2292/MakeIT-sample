import styles from "./AchivementsCard.module.css";

export const AchivementsCard = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://picsum.photos/720/400"
        alt=""
        className={styles.image}
      />
      <div className={styles.contents}>
        <p className={styles.title}>サークルのホームページを開発</p>
        <p className={styles.text}>
          私も今さぞその落第っ放しという事のためにしたない。なお今に相違家はそのうちその意見ありでだけと思って来るだがは道楽忘れなけれですから.
        </p>
      </div>
    </div>
  );
};
