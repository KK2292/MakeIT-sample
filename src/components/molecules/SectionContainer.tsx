/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = (props: SectionContainerProps) => {
  const { children } = props;
  const containerStyle = css`
    margin: 0 auto;
    max-width: 1920px;
    width: 100%;
    & > * {
      margin-bottom: 80px;
    }
    & > *:last-child {
      margin-bottom: 0;
    }
  `;
  return <div css={containerStyle}>{children}</div>;
};
