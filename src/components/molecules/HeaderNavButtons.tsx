/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export const HeaderNavButtons = () => {
  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate("/blog");
  };

  const navigateToTeam = () => {
    navigate("/team");
  };

  const ulStyle = css`
    align-items: center;
    background-color: #111;
    border: 2px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    gap: 80px;
    height: 56px;
    justify-content: space-between;
    padding: 0 40px;
  `;
  const liStyle = css`
    list-style: none;
  `;
  const aStyle = css`
    color: #fff;
    font-size: 24px;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
  `;
  return (
    <ul css={ulStyle}>
      <li css={liStyle}>
        <a css={aStyle} onClick={navigateToBlog}>
          Blog
        </a>
      </li>
      <li css={liStyle}>
        <a css={aStyle} onClick={navigateToTeam}>
          Team
        </a>
      </li>
      <li css={liStyle}>
        <a
          css={aStyle}
          href="https://github.com/ISC-MakeIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
    </ul>
  );
};
