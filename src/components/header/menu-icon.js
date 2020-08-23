import React from "react";
import styled from "@emotion/styled";

const PlaceholderImage = styled.div`
  cursor: pointer;
  display: block;
  z-index: 2;
  margin: 12px;
  width: 40px;
  ::before,
  ::after,
  div {
    background-color: #fff;
    border-radius: 3px;
    content: "";
    display: block;
    height: 3px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }
  @media screen and (min-width: 768px) {
    margin: 20px;
  }

  @media screen and (min-width: 1400px) {
    position: absolute;
    left: -100px;
  }

  ${(props) =>
    props.closed &&
    `
  ::before {
    transform: translateY(10px) rotate(135deg);
  }

  ::after {
    transform: translateY(-10px) rotate(-135deg);
  }

  div {
    transform: scale(0);
  }
  `}
`;

const Menu = ({ onClick, closed }) => {
  return (
    <PlaceholderImage onClick={onClick} closed={closed}>
      <div />
    </PlaceholderImage>
  );
};

export default Menu;
