import React from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import Button from "../Button";
import { theme } from "../../theme";

export default function AvailableDate({ date, slots }) {
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
                backgroundColor={theme.colors.mainBackground}
                isMainShadow
                className="customBtn"
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
