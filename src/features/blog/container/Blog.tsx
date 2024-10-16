import styles from "./Blog.module.css";
import { BlogCard } from "../components/ui";

export const Blog = () => {
  return (
    <>
      <p className={styles.tentative}>Blog</p>
      <ul className={styles.cardWrapper}>
        {Array.from({ length: 20 }, (_, i) => (
          <BlogCard key={i} />
        ))}
      </ul>
    </>
  );
};
