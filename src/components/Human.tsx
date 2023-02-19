import styled from "styled-components";
import { humanTp } from "../types/contextTp";

const HumanHTML = styled.div`
  background-color: var(--color4);
  border-radius: 10px 0px 10px 0px;
  color: var(--color1);
  display: grid;
  justify-self: end;
  padding: 10px;
  text-align: right;

  & span {
    font-size: 0.5em;
  }
`;

const Human = ({ date, question }: humanTp) => {
  return (
    <HumanHTML>
      <p>{question}</p>
      <span>{date}</span>
    </HumanHTML>
  );
};

export default Human;
