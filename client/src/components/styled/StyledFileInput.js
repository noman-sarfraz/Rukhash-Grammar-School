import React from "react";
import styled from "styled-components";

const StyledFileInput = styled.input.attrs((props) => ({
  type: "file",
}))`
  border: 1px solid #c4c4c4;
  border-radius: 0px;
  height: 25px;
  padding: 2px 4px;
  font-size: 12px;
  width: 98%;
  font-family: Poppins;
`;

export default StyledFileInput;
