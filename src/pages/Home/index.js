import React from "react";
import { Card } from "../../components";
import {
  CardWrapper,
  GridView,
  StyledWrapper,
  CardWrapperForExpert,
  GridViewForExpert,
} from "./styles";

export default function Home() {
  const data = {
    name: "Bartender’s Handshake",
    expertName: "James Bruno",
    expertCategory: "Magician  |  Mixologist",
    expertImage: "https://via.placeholder.com/70",
    duration: "30m",
    guestAllowed: 10,
    price: 100,
    expertImg: "https://via.placeholder.com/24",
    participants: [
      { expertImg: "https://via.placeholder.com/24" },
      { expertImg: "https://via.placeholder.com/24" },
      { expertImg: "https://via.placeholder.com/24" },
    ],
    participantAccepted: "3/4 people RSVP’d",
  };
  return (
    <StyledWrapper>
      <GridView>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <CardWrapper key={index}>
              <Card type="experience" data={data} />
            </CardWrapper>
          );
        })}
      </GridView>
      <GridView>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <CardWrapper key={index}>
              <Card type="upcomingExperience" data={data} />
            </CardWrapper>
          );
        })}
      </GridView>
      <GridViewForExpert>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <CardWrapperForExpert key={index}>
              <Card type="expert" data={data} />
            </CardWrapperForExpert>
          );
        })}
      </GridViewForExpert>
    </StyledWrapper>
  );
}
