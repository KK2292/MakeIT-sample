/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Page404 = () => {
  const pStyle = css`
    color: #ddd;
    font-size: 80px;
    transform: translateY(300px);
  `;
  return <p css={pStyle}>ページが見つかりませんでした</p>;
};
