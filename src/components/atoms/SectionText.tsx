/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

type SectionTextProps = {
  children: ReactNode;
};

export const SectionText = (props: SectionTextProps) => {
  const { children } = props;

  const pStyle = css`
    color: #ddd;
    font-size: 40px;
    line-height: 1.4;
    max-width: 960px;
    padding: 0 40px;
  `;
  return <p css={pStyle}>{children}</p>;
};
