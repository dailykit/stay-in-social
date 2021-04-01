import React from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import shakerImg from "../../assets/images/shaker.jpg";
import jiggerImg from "../../assets/images/jigger.jpg";
import limeJuiceImg from "../../assets/images/lime_juice.jpg";
import openBoxImg from "../../assets/images/Box_Open.jpg";

export const GoodiesWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export const Ingredients = ({ title }) => {
  return (
    <>
      <h1 className="sub-heading">{title}</h1>
      <Flex
        container
        alignItems="flex-end"
        justifyContent="space-around"
        margin="0 0 42px 0"
      >
        <div className="goodiesImgWrapper">
          <img className="goodiesImg" src={shakerImg} alt="shaker-img" />
          <p className="goodieName">StayIn Branded 16oz shaker</p>
        </div>
        <div className="goodiesImgWrapper">
          <img className="goodiesImg" src={jiggerImg} alt="jigger-img" />
          <p className="goodieName">StayIn Branded Jigger</p>
        </div>
        <div className="goodiesImgWrapper">
          <img className="goodiesImg" src={limeJuiceImg} alt="lime-juice-img" />
          <p className="goodieName">Lime Juice</p>
        </div>
      </Flex>
    </>
  );
};
export const Goodies = ({ title, secondTitle }) => {
  return (
    <GoodiesWrapper>
      <h1 className="sub-heading">{title}</h1>
      <img className="box-open-img" src={openBoxImg} alt="open-box-img" />
      <Ingredients title={secondTitle} />
    </GoodiesWrapper>
  );
};
