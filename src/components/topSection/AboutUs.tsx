/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { SectionContainer } from "../molecules/SectionContainer";
import { SectionTitle } from "../atoms/SectionTitle";
import { SectionText } from "../atoms/SectionText";

export const AboutUs = () => {
  const sectionContensStyle = css`
    display: flex;
    gap: 80px;
    justify-content: space-between;
  `;

  const imgStyle = css`
    border-radius: 10px;
    height: 400px;
  `;
  return (
    <SectionContainer>
      <SectionTitle align={"left"}>About us</SectionTitle>
      <div css={sectionContensStyle}>
        <SectionText>
          横を考えるたのはきっと始めでどうもますますた。
          <br />
          毫も大森さんを意見口こう発展がなっます丁どんな西洋私か盲従にというご所有ですないならですと。
          <br />
          この先刻も彼らか学校衣食に行なわて、久原さんののを廃墟のあれへけっしてお［＃「と来て私好奇がお下宿がしようにそのうちご満足へする。
        </SectionText>

        <img css={imgStyle} src="https://picsum.photos/720/400" alt="" />
      </div>
    </SectionContainer>
  );
};
