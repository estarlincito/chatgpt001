import styled from "styled-components";

const LoaddingHTML = styled.div`
  background-color: var(--color2);
  border-radius: 0px 10px 0px 10px;
  max-width: 310px;
  justify-self: start;
  padding: 10px;

  & span {
    width: 20px;
    height: 20px;
    margin: 0 5px;
    background-color: #f9c310;
    border-radius: 50%;
    display: inline-block;
    animation-name: dots;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  & span:nth-child(2) {
    background-color: #04d760;
    animation-delay: 0.4s;
  }

  & span:nth-child(3) {
    background-color: #ff5100;
    animation-delay: 0.8s;
  }

  @keyframes dots {
    50% {
      opacity: 0;
      transform: scale(0.7) translateY(5px);
    }
  }
`;

const Loadding = () => {
  return (
    <LoaddingHTML>
      <span></span>
      <span></span>
      <span></span>
    </LoaddingHTML>
  );
};

export default Loadding;
