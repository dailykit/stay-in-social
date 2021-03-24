import React from "react";
import { Flex } from "@dailykit/ui";
import { Card, CardImage, CardBody } from "./styles.js";
import { Clock, ChevronRight } from "../../Icons";
import { theme } from "../../../theme.js";

export default function UpcomingExperienceCard({ cardDetails }) {
  return (
    <Card>
      <CardImage>
        <img
          src="https://www.dmarge.com/wp-content/uploads/2020/07/gin-martini-cocktail.jpg"
          alt="card-img"
        />
      </CardImage>
      <CardBody>
        <h2 className="exp-name">{cardDetails.name}</h2>
        <Flex
          container
          alignItems="center"
          justifyContent="space-between"
          margin="0 0 8px 0"
        >
          <Flex container alignItems="center" justifyContent="space-between">
            {cardDetails.participants.map((participant, index) => {
              return (
                <div className="expertImgDiv" key={index}>
                  <img
                    className="expert-img"
                    src={participant.expertImg}
                    alt="expert-img"
                  />
                </div>
              );
            })}
          </Flex>
          <span className="duration">
            <Clock size={theme.sizes.h6} color={theme.colors.textColor4} />
            <span>{cardDetails.duration}</span>
          </span>
        </Flex>
        <Flex container alignItems="center" justifyContent="space-between">
          <p className="exp-info">
            $ {cardDetails.price}{" "}
            <span className="viewReceipt">view receipt</span>
          </p>
          <p className="exp-info goForward">
            {cardDetails.participantAccepted}
            <ChevronRight
              size={theme.sizes.h8}
              color={theme.colors.textColor4}
            />
          </p>
        </Flex>
      </CardBody>
    </Card>
  );
}
