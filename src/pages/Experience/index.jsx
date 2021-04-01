import React, { useState, useEffect } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import ReactPlayer from "react-player";
import { Flex } from "@dailykit/ui";
import { Wrapper, TabWrapper, GridViewWrapper, StyledWrapper } from "./styles";
import {
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  Clock,
  AboutExpert,
  Booking,
  Masonry,
  Card,
  ScrollToTop,
  Button,
  Goodies,
  GoodiesWrapper,
  Ingredients,
} from "../../components";
import { theme } from "../../theme";
import { useWindowDimensions } from "../../utils";
import { expertArray, dataArray } from "../../fakeData";
import shakerImg from "../../assets/images/shaker.jpg";
import jiggerImg from "../../assets/images/jigger.jpg";
import limeJuiceImg from "../../assets/images/lime_juice.jpg";
import openBoxImg from "../../assets/images/Box_Open.jpg";

export default function Experience() {
  const expert = expertArray.find((exp) => exp.id === "pat-5");
  const { width } = useWindowDimensions();
  const [iconSize, setIconSize] = useState("14px");
  const breakpointColumnsObj = {
    default: 3,
    1320: 2,
    1200: 1,
    700: 1,
    500: 1,
  };
  useEffect(() => {
    if (width > 769) {
      setIconSize("24px");
    } else {
      setIconSize("14px");
    }
  }, [width]);
  const scrollRightHandler = () => {
    document.getElementById("experienceTab").scrollLeft += 20;
  };
  const scrollLeftHandler = () => {
    document.getElementById("experienceTab").scrollLeft -= 20;
  };
  return (
    <StyledWrapper isDesktopView={width > 769}>
      <Wrapper>
        <div className="player-wrapper">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=4FOghJzXuYg"
          />
        </div>
        <h1 class="heading">Bartender's Handshake</h1>
        <Flex
          container
          alignItems="center"
          justifyContent="space-between"
          margin="0 0 25px 0"
        >
          <p className="category">Cocktail</p>
          <Flex container alignItems="center" justifyContent="space-between">
            <Clock size={theme.sizes.h4} color={theme.colors.textColor4} />
            <span className="duration">30m</span>
          </Flex>
        </Flex>
        <TabWrapper>
          <div className="tabOptions">
            <span
              className="scrollBtn scrollLeftBtn"
              onClick={scrollLeftHandler}
            >
              <ChevronLeft
                size={theme.sizes.h7}
                color={theme.colors.textColor2}
              />
            </span>
            <div className="tab" id="experienceTab">
              <ul>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-1">
                    About Experience
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-2">
                    About the Expert
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-3">
                    Supplies & Ingredients
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-4">
                    Goodies in your Kit
                  </Link>
                </li>
                <li>
                  <Link activeClass smooth to="#section-5">
                    How to Book & Participate
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="/booking">
                    Book Experience
                  </Link>
                </li>
                <li>
                  <Link activeClassName="activeHash" smooth to="#section-7">
                    Other Similar Experiences
                  </Link>
                </li>
              </ul>
            </div>
            <span
              className="scrollBtn scrollRightBtn"
              onClick={scrollRightHandler}
            >
              <ChevronRight
                size={theme.sizes.h7}
                color={theme.colors.textColor2}
              />
            </span>
          </div>
        </TabWrapper>
        <section id="section-1">
          <h1 className="sub-heading">About Experience</h1>
          <p className="about-exp">
            I get asked many questions about my job - including what bartenders
            drink when they go out. We keep it simple. Give us a good beer and
            strong shot and we're happy. We call it a Bartender's Handshake in
            the industry - not to be confused with the cocktail drink that is
            also called the Bartender's Handshake.But the two couldn't be more
            different. In this experience, we'll start by cheering with your
            favorite beer and shot before making the cocktail version, a
            delicious daiquiri on ice.
          </p>
          <button className="readMore">Read More</button>
        </section>
        <section id="section-2">
          <h1 className="sub-heading">About Expert</h1>
          <AboutExpert expert={expert} />
        </section>
        <div id="section-3">
          <GoodiesWrapper>
            <Ingredients title="Supplies & Ingredients" />
          </GoodiesWrapper>
        </div>
        <div id="section-4">
          <Goodies title="Goodies in your Kit" />
        </div>
        <section id="section-5">
          <h1 className="sub-heading">How to Book & Participate</h1>
          <h3 className="subsub-heading">
            Book a private single or private group experience
          </h3>
          <p className="about-exp">
            For private group bookings, you can send a poll to your guests to
            see which dates / times work best based on Expert availability.
            Choose the time that works for the most people and send invites to
            the group. They’ll be prompted to fill out their contact info when
            accepting the invite.
          </p>
          <h3 className="subsub-heading">Join using your computer</h3>
          <p className="about-exp">
            After you book, you’ll receive an email with a link and details on
            how to join our immersive digital space. Don’t worry, you don’t have
            to download anything!
          </p>
        </section>
        <section id="section-7">
          <GridViewWrapper>
            <Flex
              container
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              padding="1rem 0"
            >
              <h3 className="experienceHeading">Other Similar Experiences</h3>
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
          </GridViewWrapper>
        </section>
      </Wrapper>

      {width > 769 && (
        <aside>
          <Booking />
        </aside>
      )}
      <div class="footerBtnWrapper">
        <Link to="#">
          <Button
            backgroundColor={theme.colors.secondaryColor}
            className="customFooterBtn"
          >
            Send Poll
          </Button>
        </Link>
        <Link to="/booking">
          <Button
            backgroundColor={theme.colors.primaryColor}
            isMainShadow
            className="customFooterBtn"
          >
            Book
          </Button>
        </Link>
      </div>
      <ScrollToTop showBelow={250} />
    </StyledWrapper>
  );
}
