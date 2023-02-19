import styled from "styled-components";
import { botTp } from "../types/contextTp";

const BotHTML = styled.div`
  background-color: var(--color2);
  border-radius: 0px 10px 0px 10px;
  color: var(--color1);
  display: grid;
  justify-self: start;
  padding: 10px;

  & span {
    font-size: 0.5em;
    justify-self: end;
  }
`;

const Bot = ({ date, answer }: botTp) => {
  return (
    <BotHTML>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
      <span>{date}</span>
    </BotHTML>
  );
};

export default Bot;
