import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper, GridViewWrapper } from "./styles";
import { expertArray, dataArray } from "../../fakeData.js";
import { useWindowDimensions } from "../../utils";
import { theme } from "../../theme.js";
import {
  ChevronDown,
  ChevronRight,
  Card,
  Masonry,
  AboutExpert,
} from "../../components";

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
      <AboutExpert expert={expert} />
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
      </GridViewWrapper>
    </Wrapper>
  );
}
