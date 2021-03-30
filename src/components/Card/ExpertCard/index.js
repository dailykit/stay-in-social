import React from "react";
import { Flex } from "@dailykit/ui";
import { Card, CardImage, CardBody } from "./styles.js";

export default function ExpertCard({ cardDetails }) {
  return (
    <Card>
      <CardImage>
        <img src={cardDetails.expertImage} alt="card-img" />
      </CardImage>
      <CardBody>
        <h2 className="exp-name">{cardDetails.expertName}</h2>
        <Flex container alignItems="center" flexDirection="column">
          <p className="category">{cardDetails.expertCategory}</p>
          <p className="experience">
            {cardDetails.expertTotalExperience} Experiences
          </p>
          <button className="viewProfileBtn">View Profile</button>
        </Flex>
      </CardBody>
    </Card>
  );
}
