import React, { useEffect, useState } from "react";
import { Flex } from "@dailykit/ui";
import {
  Card,
  ChevronRight,
  Button,
  Masonry,
  Input,
  ChevronDown,
} from "../../components";
import { theme } from "../../theme";
import { searchedExperiences, dataArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";
import {
  GridViewWrapper,
  StyledWrapper,
  GridViewForExpert,
  CardWrapperForExpert,
} from "./styles";

export default function Experiences() {
  const { width } = useWindowDimensions();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [iconSize, setIconSize] = useState("14px");
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
      <div className="centerDiv">
        <h1 class="heading">Experiences</h1>
        <Input type="text" placeholder="search" className="customInput" />
        <div>
          {searchedExperiences.map((exp, index) => {
            return (
              <Button
                backgroundColor={theme.colors.mainBackground}
                key={index}
                isMainShadow
                className="customBtn"
              >
                {Object.keys(exp)[0]}
              </Button>
            );
          })}
        </div>
      </div>
      {searchedExperiences.map((exp, index) => {
        return (
          <GridViewWrapper key={index}>
            <h3 className="experienceHeading">
              {Object.keys(exp)[0]} (
              {exp[Object.keys(exp)[0]].length || "coming soon"})
            </h3>
            {exp[Object.keys(exp)[0]].length ? (
              <>
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
                  <ChevronRight
                    size={iconSize}
                    color={theme.colors.textColor}
                  />
                </Flex>
              </>
            ) : (
              <div className="emptyCard">
                <Card
                  type="empty"
                  data={{ name: "Experiences arriving soon.." }}
                />
              </div>
            )}
          </GridViewWrapper>
        );
      })}
      <GridViewWrapper>
        <Flex
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
        >
          <h3 className="experienceHeading">
            {dataArray.length} Experts you might like to explore
          </h3>
          <ChevronDown size={iconSize} color={theme.colors.textColor4} />
        </Flex>
        <GridViewForExpert>
          {dataArray.map((data, index) => {
            return (
              <CardWrapperForExpert key={index}>
                <Card type="expert" data={data} />
              </CardWrapperForExpert>
            );
          })}
        </GridViewForExpert>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
          margin="0 0 2rem 0"
        >
          <h1 className="explore ">Explore more Experts</h1>
          <ChevronRight size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </GridViewWrapper>
    </StyledWrapper>
  );
}
