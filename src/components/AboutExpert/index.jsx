import React from "react";
import { Wrapper } from "./styles";

export default function AboutExpert({ expert }) {
  return (
    <Wrapper>
      <img
        className="expertImg"
        src={expert.image}
        alt={`${expert.name}-img`}
      />
      <h1 className="expertName">{expert.name}</h1>
      <p className="expertCategory">{expert.category}</p>
      <p className="expertExp">{expert.totalExperience} Experiences</p>
      <p className="expertDesc">{expert.description}</p>
      <button className="readMore">Read More</button>
    </Wrapper>
  );
}
