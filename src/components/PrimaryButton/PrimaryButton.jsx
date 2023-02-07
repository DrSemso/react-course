import React from "react";
import styled from "@emotion/styled";
import { borderColor } from "@mui/system";

const PrimaryButton = styled.button`
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 10px;
  color: ${(props) => (props.primary ? "red" : "white")};
  background-color: ${(props) => (props.primary ? "white" : "red")};
  padding: 20px;
  opacity: ${(props) => (props.opacity ? props.opracity : 1)};
`;

export default PrimaryButton;
