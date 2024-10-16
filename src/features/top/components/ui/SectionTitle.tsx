import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
  align: "left" | "center" | "right"; //alignを３つの値から選択するための型定義
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { children, align } = props;

  //alignの値によって適切なクラスを付与する
  let alignClass;
  switch (align) {
    case "left":
      alignClass = styles.alignLeft;
      break;
    case "center":
      alignClass = styles.alignCenter;
      break;
    case "right":
      alignClass = styles.alignRight;
      break;
    default:
      alignClass = "";
  }

  return <h2 className={`${styles.sectionTitle} ${alignClass}`}>{children}</h2>;
};
