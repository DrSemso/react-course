import styled from "@emotion/styled";
// import styled from "@emotion/styled

const PrimaryDiv = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: blue;
  border: solid ${(props) => props.borderColor} 5px;
`;

export default PrimaryDiv;
