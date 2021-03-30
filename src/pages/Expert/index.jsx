import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper, GridViewWrapper } from "./styles";
import { expertArray, dataArray } from "../../fakeData.js";
import { useWindowDimensions } from "../../utils";
import { theme } from "../../theme.js";
import { ChevronDown, ChevronRight, Card, Masonry } from "../../components";

export default function Expert() {
  const { expertId } = useParams();
  const expert = expertArray.find((exp) => exp.id === expertId);
  const { width } = useWindowDimensions();
  const [iconSize, setIconSize] = useState("14px");
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  useEffect(() => {
    if (width > 769) {
      setIconSize("24px");
    } else {
      setIconSize("14px");
    }
  }, [width]);
  return (
    <Wrapper>
      <div className="expert">
        <img
          className="expertImg"
          src={expert.image}
          alt={`${expert.name}-img`}
        />
        <h1 className="expertName">{expert.name}</h1>
        <p className="expertCategory">{expert.category}</p>
        <p className="expertDesc">{expert.description}</p>
        <button className="readMore">Read More</button>
      </div>
      <GridViewWrapper>
        <Flex
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
        >
          <h3 className="experienceHeading">{dataArray.length} Experiences</h3>
          <ChevronDown size={iconSize} color={theme.colors.textColor4} />
        </Flex>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {dataArray.map((data, index) => {
            return <Card key={index} type="experience" data={data} />;
          })}
        </Masonry>
        <Flex
          container
          alignItems="center"
          justifyContent="center"
          padding="1rem 0"
          margin="0 0 2rem 0"
        >
          <h1 className="explore">Explore more Experiences</h1>
          <ChevronRight size={iconSize} color={theme.colors.textColor} />
        </Flex>
      </GridViewWrapper>
    </Wrapper>
  );
}
