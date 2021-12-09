import React from "react";
import AppName from "../../asserts/images/appname.png";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <img src={AppName} alt="Squize it" />
    </StyledHeader>
  );
};
