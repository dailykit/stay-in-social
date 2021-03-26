import React, { useEffect, useState } from "react";
import { Flex } from "@dailykit/ui";
import { Card, ChevronRight, Button, Masonry, Input } from "../../components";
import { theme } from "../../theme";
import { experienceArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";
import { GridViewWrapper, StyledWrapper } from "./styles";

export default function Experiences() {
  const { width } = useWindowDimensions();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [iconSize, setIconSize] = useState("14px");
  const masonryOptions = {
    transitionDuration: 0,
  };
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  useEffect(() => {
    if (width > 769) {
      setIconSize("24px");
    } else {
      setIconSize("14px");
    }
  }, [width]);

  return (
    <StyledWrapper>
      <h1 class="heading">Experiences</h1>
      {experienceArray.map((exp, index) => {
        console.log("kkkk", exp[Object.keys(exp)[0]]);
        return (
          <GridViewWrapper key={index}>
            <h3 className="experienceHeading">
              {Object.keys(exp)[0]}({exp[Object.keys(exp)[0]].length})
            </h3>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {exp[Object.keys(exp)[0]].map((data, i) => {
                return <Card key={i} type="experience" data={data} />;
              })}
            </Masonry>
            <Flex
              container
              alignItems="center"
              justifyContent="center"
              padding="1rem 0"
              margin="0 0 2rem 0"
            >
              <h1 className="explore">View all</h1>
              <ChevronRight size={iconSize} color={theme.colors.textColor} />
            </Flex>
          </GridViewWrapper>
        );
      })}
    </StyledWrapper>
  );
}
