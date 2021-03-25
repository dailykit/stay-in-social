import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import {
  Card,
  ChevronDown,
  ChevronRight,
  Button,
  EditIcon,
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
          <p class="separatorNote">Already have an account?</p>
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
        <GridView>
          {dataArray.map((data, index) => {
            return (
              // <CardWrapper key={index}>
              <Card key={index} type="experience" data={data} />
              // </CardWrapper>
            );
          })}
        </GridView>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
        >
          <h1 className="explore">Explore more Experiences</h1>
          <ChevronRight size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </GridViewWrapper>
      {/* <GridView>
        {dataArray.map((item, index) => {
          return (
            <CardWrapper key={index}>
              <Card type="upcomingExperience" data={data} />
            </CardWrapper>
          );
        })}
      </GridView> */}
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
        >
          <h1 className="explore ">Edit Categories</h1>
          <EditIcon size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </CategorySection>
    </StyledWrapper>
  );
}
