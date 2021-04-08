import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
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
  UpcomingExperience,
  InvitePollFeed,
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
  GridViewWrapper,
  StyledWrapper,
  CardWrapperForExpert,
  CategoryTagWrap,
  GridViewForExpert,
  GreetingDiv,
  CategorySection,
} from "./styles";
import CategoryTagPage from "../CategoryTag";
import { Experience } from "../../graphql";

export default function Home() {
  const { width } = useWindowDimensions();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [iconSize, setIconSize] = useState("14px");
  const [categoryTagDrawer, setCategoryTagDrawer] = useState(false);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  useQuery(Experience, {
    onCompleted: ({ customers }) => {
      console.log(customers);
    },
  });

  const openCategoryTagDrawer = () => {
    setCategoryTagDrawer(true);
  };
  const closeCategoryTagDrawer = () => {
    setCategoryTagDrawer(false);
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
      <h3 className="experienceHeading">You have 1 Upcoming Experience!</h3>
      <div className="upcomingExperience-div">
        <UpcomingExperience />
      </div>
      <h3 className="experienceHeading">You have sent 1 Availability Poll!</h3>
      <div className="upcomingExperience-div">
        <InvitePollFeed />
      </div>
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
            return (
              <Card
                boxShadow="true"
                key={index}
                type="experience"
                data={data}
              />
            );
          })}
        </Masonry>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
          margin="0 0 2rem 0"
        >
          <NavLink to="/experiences">
            <h1 className="explore">Explore more Experiences</h1>
          </NavLink>
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
          <NavLink to="/experts">
            <h1 className="explore ">Explore more Experts</h1>
          </NavLink>
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
          <h1 onClick={openCategoryTagDrawer} className="explore ">
            Edit Categories
          </h1>
          <EditIcon size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </CategorySection>
      <Modal
        type={width > 769 ? "sideDrawer" : "bottomDrawer"}
        isOpen={categoryTagDrawer}
        close={closeCategoryTagDrawer}
      >
        <div style={{ padding: "1rem" }}>
          <CategoryTagPage />
        </div>
      </Modal>
    </StyledWrapper>
  );
}
