/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const BlogCard = () => {
  const cardWrapper = css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `;
  const img = css`
    background-color: #8d8d8d;
    border-radius: 10px;
    height: 200px;
    width: 400px;
  `;
  const cardTitle = css`
    font-size: 32px;
    color: #fff;
  `;
  const date = css`
    font-size: 16px;
    color: #bbb;
  `;

  return (
    <li css={cardWrapper}>
      <div css={img}></div>
      <p css={cardTitle}>タイトルタイトル</p>
      <p css={date}>2000/12/25</p>
    </li>
  );
};
