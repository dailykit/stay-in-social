import React from "react";
import { Card, CardImage, CardBody } from "./styles.js";

export default function ExpertCard({ cardDetails }) {
  return (
    <Card>
      <CardImage>
        <img src={cardDetails.expertImage} alt="card-img" />
      </CardImage>
      <CardBody>
        <h2 className="exp-name">{cardDetails.expertName}</h2>
        <p className="category">{cardDetails.expertCategory}</p>
      </CardBody>
    </Card>
  );
}
