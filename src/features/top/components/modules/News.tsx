import { NavButton } from "../../../../common/components/ui";
import { NewsLinks } from "../../../NewsLinks/container/NewsLinks";
import { SectionContainer, SectionFlexContainer } from "../layout";
import { SectionTitle } from "../ui";
import styles from "./News.module.css";

export const News = () => {
  return (
    <SectionContainer>
      <SectionFlexContainer alignItems="center">
        <div className={styles.leftWrapper}>
          <SectionTitle align={"left"}>News</SectionTitle>
          <NavButton path={"news"}>View more</NavButton>
        </div>
        <NewsLinks />
      </SectionFlexContainer>
    </SectionContainer>
  );
};
