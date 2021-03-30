import React from "react";
import { useHistory } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Card, CardImage, CardBody } from "./styles.js";
import { Clock } from "../../Icons";
import { theme } from "../../../theme.js";

export default function ExperienceCard({ cardDetails }) {
  const history = useHistory();
  return (
    <Card onClick={() => history.push("/experiences/1")}>
      <CardImage>
        <img src={cardDetails.image} alt="card-img" />
      </CardImage>
      <CardBody>
        <h2 className="exp-name">{cardDetails.name}</h2>
        <Flex
          container
          alignItems="center"
          justifyContent="space-between"
          margin="0 0 4px 0"
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
          margin="0 0 4px 0"
        >
          <p className="exp-info">
            <span>starts from </span>
            {cardDetails.guestAllowed}
          </p>
          <p className="exp-info">$ {cardDetails.price}</p>
        </Flex>
        <p className="book-exp">Book</p>
      </CardBody>
    </Card>
  );
}
