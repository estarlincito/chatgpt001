import styled from "styled-components";
import { botTp } from "../types/contextTp";

const Bot = ({ date, answer }: botTp) => {
  const BotHTML = styled.div`
    text-align: left;
    & p {
      background-color: var(--color2);
      padding: 20px;
      border-radius: 0px 20px 0px 20px;
      color: var(--color1);
    }

    & span {
      padding: 20px;
      font-size: 0.7em;
    }
  `;

  return (
    <BotHTML>
      <span>{date}</span>
      <p dangerouslySetInnerHTML={{ __html: answer }} />
    </BotHTML>
  );
};

export default Bot;
