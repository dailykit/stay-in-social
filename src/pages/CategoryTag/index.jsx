import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, ChevronRight } from "../../components";
import { theme } from "../../theme";
import { categories } from "../../fakeData";
import { Wrapper, CategoryTagWrap } from "./styles";

export default function CategoryTagPage() {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const tagSelection = (index) => {
    const selectedBtnIndex = selectedButtons.findIndex((i) => i === index);
    console.log("index", selectedBtnIndex);
    if (selectedBtnIndex === -1) {
      setSelectedButtons([...selectedButtons, index]);
    } else {
      const updatedSelectedButtons = selectedButtons;
      updatedSelectedButtons.splice(selectedBtnIndex, 1);
      setSelectedButtons(updatedSelectedButtons);
    }
  };
  console.log("rendering...", selectedButtons);

  return (
    <Wrapper>
      <div class="skip">
        <Link to="/">
          Skip <ChevronRight size="14px" color={theme.colors.textColor} />{" "}
        </Link>
      </div>
      <h1 className="heading">Tell us what you’re interested in.</h1>
      <CategoryTagWrap>
        {categories.map((category, index) => {
          return (
            <Button
              backgroundColor={
                selectedButtons.includes(index)
                  ? theme.colors.secondaryColor
                  : theme.colors.mainBackground
              }
              onClick={() => tagSelection(index)}
              key={index}
              isMainShadow
              className="categoryTag"
            >
              {category}
            </Button>
          );
        })}
      </CategoryTagWrap>
      <div className="getStartedBtnWrap">
        <Button className="getStartedBtn">Get Started</Button>
      </div>
    </Wrapper>
  );
}
