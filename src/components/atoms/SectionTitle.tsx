/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type SectionTitleProps = {
  children: React.ReactNode;
  align: "left" | "center" | "right";
};

export const SectionTitle = (props: SectionTitleProps) => {
  const { children, align } = props;

  const h2Style = css`
    color: #fff;
    font-family: "Outfit", sans-serif;
    font-size: 128px;
    font-weight: 500;
    text-align: ${align};
    &:before,
    &:after {
      color: #808080;
    }
    &:before {
      content: "< ";
    }

    &:after {
      content: " />";
    }
  `;
  return <h2 css={h2Style}>{children}</h2>;
};
