import React from "react";
import styled from "@emotion/styled";

const PlaceholderImage = styled.div`
  width: 32px;
  height: 25px;
  cursor: pointer;
  margin-right: 44px;
  border: 1px solid grey;
  background-color: transparent;
`;

const Menu = ({ onClick }) => {
  return <PlaceholderImage onClick={onClick} />;
};

export default Menu;
