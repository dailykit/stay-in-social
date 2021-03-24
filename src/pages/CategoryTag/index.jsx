import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input, ChevronRight } from "../../components";
import { theme } from "../../theme";
import { Wrapper, CategoryTagWrap } from "./styles";

export default function CategoryTagPage() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const categories = [
    "Cooking",
    "Baking",
    "Cocktails",
    "Mixology",
    "Wine Tasting",
    "Drink / Food Pairings",
    "Floral Arrangement",
    "Succulent Arrangement",
    "Cookie Decorating",
    "Cake Decorating",
    "Candle Making",
    "Crafts",
    "Magic",
    "Soap Making",
    "Knitting Classes",
    "Games",
    "Entertaining at Home",
    "Personal Fashion Styling",
    "Makeup",
    "Hair Styling",
    "Classes",
    "Shows",
    "Interactivity",
    "30 min Experiences",
    "45 min Experiences",
    "60 min Experiences",
    "60+ min Experiences",
    "Learning New Skills",
    "Socializing",
    "New Technology",
    "Discovering New Products",
    "Holidays",
    "Themes",
    "Private Experiences",
    "Group Experiences",
    "Meeting New People",
    "Dating",
    "Custom Experiences",
    "Beginner Level",
    "Intermediate Level",
    "Advanced Level",
    "Kits Included",
    "Last Minute Sign Up",
    "Easy Participation",
  ];
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
