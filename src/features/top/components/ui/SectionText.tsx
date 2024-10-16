import { ReactNode } from "react";
import styles from "./SectionText.module.css";

type SectionTextProps = {
  children: ReactNode;
};

export const SectionText = (props: SectionTextProps) => {
  const { children } = props;

  return <p className={styles.sectionText}>{children}</p>;
};
