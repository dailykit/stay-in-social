import React from "react";
import { BackDropDiv } from "./styles";

export default function BackDrop({ show, close, children }) {
  return (
    <BackDropDiv show={show} onClick={close}>
      {children}
    </BackDropDiv>
  );
}
