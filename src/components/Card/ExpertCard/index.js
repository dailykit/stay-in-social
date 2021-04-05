import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Card, CardImage, CardBody } from "./styles.js";

export default function ExpertCard({ cardDetails, ...props }) {
  return (
    <Card {...props}>
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
          <Link to={`/experts/${cardDetails.expertId}`}>
            <button className="viewProfileBtn">View Profile</button>
          </Link>
        </Flex>
      </CardBody>
    </Card>
  );
}
