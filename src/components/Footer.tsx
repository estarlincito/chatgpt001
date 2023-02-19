import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    font-size: 0.75rem;
    color: var(--color1);
    opacity: 0.4;
    border-radius: 5px;
    user-select: none;
    text-align: center;
    margin-top: 20px;

    & a {
      text-decoration: none;
      font-weight: bold;
      color: var(--color1);
    }
  `;
  const date = new Date();

  return (
    <Footer>
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
    </Footer>
  );
};

export default Footer;
