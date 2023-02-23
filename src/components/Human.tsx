import styled from "styled-components";
import { humanTp } from "../types/contextTp";

const HumanHTML = styled.div`
  background-color: var(--color4);
  border-radius: 10px 0px 10px 0px;
  color: var(--color1);
  display: grid;
  max-width: 85%;
  justify-self: end;
  padding: 10px;


  & span {
    font-size: 0.5em;
    user-select: none;
    text-align: right;
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
