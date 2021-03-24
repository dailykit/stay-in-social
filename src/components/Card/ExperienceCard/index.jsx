import React from "react";
import { Flex } from "@dailykit/ui";
import { Card, CardImage, CardBody } from "./styles.js";
import { Clock } from "../../Icons";
import { theme } from "../../../theme.js";

export default function ExperienceCard({ cardDetails }) {
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
          <div className="expertImgDiv">
            <img
              className="expert-img"
              src={cardDetails.expertImg}
              alt="expert-img"
            />
          </div>
          <span className="duration">
            <Clock size={theme.sizes.h6} color={theme.colors.textColor4} />
            <span>{cardDetails.duration}</span>
          </span>
        </Flex>
        <Flex
          container
          alignItems="center"
          justifyContent="space-between"
          margin="0 0 8px 0"
        >
          <p className="exp-info">{cardDetails.guestAllowed}</p>
          <p className="exp-info">$ {cardDetails.price}</p>
        </Flex>
        <p className="book-exp">Book</p>
      </CardBody>
    </Card>
  );
}
