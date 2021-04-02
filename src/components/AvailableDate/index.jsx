import React, { useState } from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import Button from "../Button";
import { theme } from "../../theme";

export default function AvailableDate({ date, slots, onClick }) {
  const [selectedBtnIndex, setSelectedBtnIndex] = useState("");
  const clickHandler = ({ date, slot, index }) => {
    setSelectedBtnIndex(index);
    onClick(date, slot);
  };
  return (
    <Wrapper>
      <Flex container flexDirection="column">
        <p class="date">{date}</p>
        <Flex
          container
          alignItems="center"
          justifyContent="flex-start"
          flexWrap="wrap"
        >
          {slots.map((slot, index) => {
            return (
              <Button
                key={index}
                backgroundColor={
                  selectedBtnIndex === index
                    ? theme.colors.secondaryColor
                    : theme.colors.mainBackground
                }
                isMainShadow
                className="customBtn"
                onClick={() => clickHandler({ date, slot, index })}
              >
                <span className="spanText">starts at</span>
                <span className="time">{slot}</span>
              </Button>
            );
          })}
        </Flex>
      </Flex>
    </Wrapper>
  );
}
