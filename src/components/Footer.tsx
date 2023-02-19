import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";

const FooterHTML = styled.footer`
  font-size: 0.75rem;
  color: var(--color1);
  user-select: none;
  text-align: center;
  padding: 10px;

  & a {
    text-decoration: none;
    font-weight: bold;
    color: var(--color1);
  }
`;

const Footer = () => {
  const { chats } = useContext(AppContext);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      chats.length === 0
        ? (footerRef.current.style.opacity = "1")
        : (footerRef.current.style.opacity = "0.1");
    }
  }, [chats]);

  const date = new Date();

  return (
    <FooterHTML ref={footerRef}>
      <p>
        &nbsp; Copyright © {date.getFullYear()}&nbsp;
        <a
          href="https://linktr.ee/estarlincito"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Estarlincito
        </a>
      </p>
    </FooterHTML>
  );
};

export default Footer;
