import React from "react";
import ReactPlayer from "react-player";
import { Flex } from "@dailykit/ui";
import { Wrapper, TabWrapper } from "./styles";
import {
  ChevronRight,
  ChevronLeft,
  Clock,
  AboutExpert,
} from "../../components";
import { theme } from "../../theme";
import { expertArray } from "../../fakeData";

export default function Experience() {
  const expert = expertArray.find((exp) => exp.id === "pat-5");
  const scrollRightHandler = () => {
    document.getElementById("experienceTab").scrollLeft += 20;
  };
  const scrollLeftHandler = () => {
    document.getElementById("experienceTab").scrollLeft -= 20;
  };
  return (
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
          <span className="scrollBtn scrollLeftBtn" onClick={scrollLeftHandler}>
            <ChevronLeft
              size={theme.sizes.h7}
              color={theme.colors.textColor2}
            />
          </span>
          <div className="tab" id="experienceTab">
            <ul>
              <li>
                <a href="#section-1">About Experience</a>
              </li>
              <li>
                <a href="#section-2">About the Expert</a>
              </li>
              <li>
                <a href="#section-3">Suppaes & Ingredients</a>
              </li>
              <li>
                <a href="#section-4">Goodies in your Kit</a>
              </li>
              <li>
                <a href="#section-5">How to Book & Participate</a>
              </li>
              <li>
                <a href="#section-6">Book Experience</a>
              </li>
              <li>
                <a href="#section-7">Other Similar Experiences</a>
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
          strong shot and we're happy. We call it a Bartender's Handshake in the
          industry - not to be confused with the cocktail drink that is also
          called the Bartender's Handshake.But the two couldn't be more
          different. In this experience, we'll start by cheering with your
          favorite beer and shot before making the cocktail version, a delicious
          daiquiri on ice.
        </p>
        <button className="readMore">Read More</button>
      </section>
      <section id="section-2">
        <h1 className="sub-heading">About Expert</h1>
        <AboutExpert expert={expert} />
      </section>
    </Wrapper>
  );
}
