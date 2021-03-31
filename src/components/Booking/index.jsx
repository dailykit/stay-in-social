import React, { useState } from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import Button from "../Button";
import { CalendarIcon } from "../Icons";
import AvailableDate from "../AvailableDate";
import { theme } from "../../theme";
import { bookingTimeSlot } from "../../fakeData";

export default function Booking() {
  const [bookingType, setBookingType] = useState("public");
  const typeHandler = (type) => {
    setBookingType(type);
  };
  return (
    <Wrapper>
      <h2 className="heading">Select Booking Type</h2>
      <Flex container alignItems="center" margin="0 0 2rem 0 ">
        <Button
          backgroundColor={
            bookingType === "private"
              ? theme.colors.secondaryColor
              : theme.colors.mainBackground
          }
          isMainShadow
          className="customBtn"
          onClick={() => typeHandler("private")}
        >
          Private
        </Button>
        <Button
          backgroundColor={
            bookingType === "public"
              ? theme.colors.secondaryColor
              : theme.colors.mainBackground
          }
          isMainShadow
          className="customBtn"
          onClick={() => typeHandler("public")}
        >
          Public
        </Button>
      </Flex>
      <Flex
        container
        alignItems="center"
        justifyContent="space-between"
        margin="0 0 12px 0 "
      >
        <span className="showAll">Showing all</span>
        <span className="calendarSpan">
          <CalendarIcon size={theme.sizes.h8} color={theme.colors.textColor} />
        </span>
      </Flex>
      <div className="availableDate">
        {bookingTimeSlot.map((timeslot, index) => {
          return <AvailableDate date={timeslot.date} slots={timeslot.slots} />;
        })}
      </div>
      <div className="footerNextBtnWrapper">
        <Button className="nextBtn">Next</Button>
      </div>
    </Wrapper>
  );
}
