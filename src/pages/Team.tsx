/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Team = () => {
  const tentativeStyle = css`
    color: #ddd;
    font-size: 40px;
    transform: translateY(300px);
  `;
  return (
    <>
      <p css={tentativeStyle}>Team</p>
    </>
  );
};
