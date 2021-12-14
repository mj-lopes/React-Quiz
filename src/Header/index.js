import React from "react";
import AppName from "../asserts/images/appname.png";
import { String } from "../components";
import { StyledHeader } from "./style";

export const Header = ({ onClick }) => {
  return (
    <StyledHeader onClick={onClick}>
      <h1>
        <img src={AppName} alt="Squize it" />
      </h1>
      <String variant="h6" component="h2" color={"#fff"}>
        Até onde você consegue <span style={{ color: "#ffc107" }}>chegar</span>?
      </String>
    </StyledHeader>
  );
};
