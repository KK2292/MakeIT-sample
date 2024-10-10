/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export const ContactButton = () => {
  const navigate = useNavigate();

  const navigateToContact = () => { 
    navigate("/contact");
  }

  const buttonStyle = css`
    background-color: #910712;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-size: 24px;
    height: 56px;
    padding: 0 40px;
    transition: 0.2s;
    &:hover {
      opacity: 0.8;
    }
  `;
  return <button css={buttonStyle}
  onClick={navigateToContact}>Join/Job</button>;
};
