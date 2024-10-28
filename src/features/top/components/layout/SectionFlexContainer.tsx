import styles from "./SectionFlexContainer.module.css";

type SectionFlexContainerProps = {
  children: React.ReactNode;
  alignItems?: "center";
};

export const SectionFlexContainer = (props: SectionFlexContainerProps) => {
  const { children, alignItems } = props;
  return (
    <div
      className={`${styles.container} ${
        alignItems === "center" ? styles.alignCenter : ""
      }`}
    >
      {children}
    </div>
  );
};
