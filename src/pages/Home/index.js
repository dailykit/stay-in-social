import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import {
  Card,
  ChevronDown,
  ChevronRight,
  Button,
  EditIcon,
  Masonry,
  Modal,
} from "../../components";
import { theme } from "../../theme";
import {
  dataArray,
  greetingMsg,
  welcomeMsg,
  selectedCategories,
} from "../../fakeData";
import { useWindowDimensions } from "../../utils";
import {
  GridView,
  GridViewWrapper,
  StyledWrapper,
  CardWrapperForExpert,
  CategoryTagWrap,
  GridViewForExpert,
  GreetingDiv,
  CategorySection,
} from "./styles";

export default function Home() {
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
      <GreetingDiv>
        <div className="forDesktop">
          <h1 className="greeting-name">
            {isLoggedIn ? greetingMsg.head : welcomeMsg.head}
          </h1>
          <p className="greeting-msg">
            {isLoggedIn ? greetingMsg.msg : welcomeMsg.msg}
          </p>
        </div>
        <div className="forMobile">
          <NavLink to="/login" className="buttonWrapper">
            <Button className="loginBtn">Log in</Button>
          </NavLink>
          <p className="separatorNote">Already have an account?</p>
          <NavLink to="/signup" className="buttonWrapper">
            <Button
              backgroundColor={theme.colors.secondaryColor}
              className="signupBtn"
            >
              Sign Up
            </Button>
          </NavLink>
        </div>
      </GreetingDiv>
      <GridViewWrapper>
        <Flex
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
        >
          <h3 className="experienceHeading">
            {dataArray.length} Experiences we think you’d like.
          </h3>
          <ChevronDown size={iconSize} color={theme.colors.textColor4} />
        </Flex>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dataArray.map((data, index) => {
            return <Card key={index} type="experience" data={data} />;
          })}
        </Masonry>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
          margin="0 0 2rem 0"
        >
          <h1 className="explore">Explore more Experiences</h1>
          <ChevronRight size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </GridViewWrapper>
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
      <CategorySection>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
        >
          <h3 className="experienceHeading">
            Your personalized tags categories
          </h3>
        </Flex>
        <CategoryTagWrap>
          {selectedCategories.map((category, index) => {
            return (
              <Button
                backgroundColor={theme.colors.mainBackground}
                key={index}
                isMainShadow
                className="categoryTag"
              >
                {category}
              </Button>
            );
          })}
        </CategoryTagWrap>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
          margin="0 0 2rem 0"
        >
          <h1 className="explore ">Edit Categories</h1>
          <EditIcon size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </CategorySection>
    </StyledWrapper>
  );
}
