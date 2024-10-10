/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BlogCard } from "../components/atoms/BlogCard";

export const Blog = () => {
  const tentativeStyle = css`
    color: #ddd;
    font-size: 40px;
    transform: translateY(300px);
  `;
  const blogCardWrapper = css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 64px 40px;
  `;
  return (
    <>
      <p css={tentativeStyle}>Blog</p>
      <ul css={blogCardWrapper}>
        {Array.from({ length: 20 }, (_, i) => (
          <BlogCard key={i} />
        ))}
      </ul>
    </>
  );
};
