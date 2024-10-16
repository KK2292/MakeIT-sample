import { SectionContainer, SectionFlexContainer } from "../layout";
import { SectionTitle } from "../ui";
import styles from "./News.module.css";

export const News = () => {
  return (
    <SectionContainer>
      <SectionFlexContainer>
        <SectionTitle align={"left"}>News</SectionTitle>
      </SectionFlexContainer>
    </SectionContainer>
  );
};
