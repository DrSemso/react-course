import React, { useState } from "react";
import "./App.css";
import CustomForm from "./components/CustomForm/CustomForm";
import CustomDiv from "./components/CustomDiv/CustomDiv";
import ToDo from "./components/ToDo/ToDo";
import GridCmp from "./components/Grid/Grid";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import StyledButton from "./components/StyledButton/StyledButton";
import PrimaryDiv from "./components/PrimaryDiv/PrimaryDiv";
const App = () => {
  return (
    // <>
    //   <PrimaryButton primary borderColor="blue">
    //     Button Outside the Div
    //   </PrimaryButton>
    //   <PrimaryDiv height="500px" width="200px" borderColor="red">
    //     <PrimaryButton borderColor="blue">Button Inside the Div</PrimaryButton>
    //   </PrimaryDiv>
    // </>
    <>
      <ToDo></ToDo>
      <ToDo />
    </>
  );
};

export default App;
