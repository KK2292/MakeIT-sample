import styles from "./SectionContainer.module.css";

type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = (props: SectionContainerProps) => {
  const { children } = props;

  return <section className={styles.container}>{children}</section>;
};
