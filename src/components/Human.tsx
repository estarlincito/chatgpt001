import styled from "styled-components";
import { humanTp } from "../types/contextTp";

const Human = ({ date, question }: humanTp) => {
  const HumanHTML = styled.div`
    text-align: right;
    & p {
      background-color: var(--color4);
      padding: 20px;
      border-radius: 20px 0px 20px 0px;
      color: var(--color1);
    }

    & span {
      padding: 20px;
      font-size: 0.7em;
    }
  `;
  return (
    <HumanHTML>
      <span>{date}</span>
      <p>{question}</p>
    </HumanHTML>
  );
};

export default Human;
