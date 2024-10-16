import styles from "./SectionFlexContainer.module.css";

type SectionFlexContainerProps = {
  children: React.ReactNode;
};

export const SectionFlexContainer = (props: SectionFlexContainerProps) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};
