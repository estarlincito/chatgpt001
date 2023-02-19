import { GiRobotHelmet } from "react-icons/gi";
import styled from "styled-components";

const HeaderHTML = styled.header`
  background-color: var(--color1);
  color: var(--color6);
  user-select: none;
  text-align: center;
  font-size: 1.125rem;
  border-radius: 10px 10px 0px 0px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;

const Header = () => {
  return (
    <HeaderHTML>
      <GiRobotHelmet />
      <h4>CHATGPT001</h4>
    </HeaderHTML>
  );
};

export default Header;
