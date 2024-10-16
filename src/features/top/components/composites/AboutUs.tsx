import { SectionContainer } from "../layout";
import { SectionText, SectionTitle } from "../ui";
import styles from "./AboutUs.module.css";

export const AboutUs = () => {
  return (
    <SectionContainer>
      <SectionTitle align={"left"}>About us</SectionTitle>
      <div className={styles.sectionContents}>
        <SectionText>
          横を考えるたのはきっと始めでどうもますますた。
          <br />
          毫も大森さんを意見口こう発展がなっます丁どんな西洋私か盲従にというご所有ですないならですと。
          <br />
          この先刻も彼らか学校衣食に行なわて、久原さんののを廃墟のあれへけっしてお［＃「と来て私好奇がお下宿がしようにそのうちご満足へする。
        </SectionText>

        <img
          className={styles.img}
          src="https://picsum.photos/720/400"
          alt=""
        />
      </div>
    </SectionContainer>
  );
};
