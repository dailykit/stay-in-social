import React from "react";
import { Flex } from "@dailykit/ui";
import { Card, CardImage, CardBody } from "./styles.js";
import { Clock } from "../../Icons";
import { theme } from "../../../theme.js";

export default function NormalExperienceCard({ cardDetails, ...props }) {
  return (
    <Card {...props}>
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
          <div className="expert-info-wrapper">
            <div className="expertImgDiv">
              <img
                className="expert-img"
                src={cardDetails.expertImg}
                alt="expert-img"
              />
            </div>
            <p className="expert-name">{cardDetails.expertName}</p>
          </div>
          <span className="duration">
            <Clock size={theme.sizes.h6} color={theme.colors.textColor4} />
            <span>{cardDetails.duration}</span>
          </span>
        </Flex>
      </CardBody>
    </Card>
  );
}
