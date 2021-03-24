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
        <h2 class="exp-name">{cardDetails.expertName}</h2>
        <p class="category">{cardDetails.expertCategory}</p>
      </CardBody>
    </Card>
  );
}
