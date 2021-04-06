import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper, Wrap } from "./styles";
import {
  Input,
  Button,
  Goodies,
  Modal,
  Error,
  AvailableDate,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Card,
} from "../../components";
import { theme } from "../../theme";
import { bookingTimeSlot, dataArray } from "../../fakeData";
import { validatorFunc, capitalize } from "../../utils";
import calendarImg from "../../assets/images/calendar.png";

export default function Booking() {
  const history = useHistory();
  const pricePerPerson = 12;
  const minimumGuest = 5;
  const kitPrice = 3.8;
  const deliveryCharge = 1.2;
  const salesTax = 2.35;
  const loyaltyPoints = 5;
  const walletAmount = 3.2;
  const detailsBreakdown = [
    {
      guests: "10",
      price: 100,
    },
    {
      guestRange: "10-20",
      price: 8,
      discount: 20,
    },
    {
      guestRange: "20-40",
      price: 7,
      discount: 20,
    },
    {
      guestRange: "40-100",
      price: 5,
      discount: 20,
    },
  ];
  const [bookingType, setBookingType] = useState("public");
  const [bookedTimeSlot, setBookedTimeSlot] = useState("");
  const [isHostParticipant, setIsHostParticipant] = useState(false);
  const [isKitAdded, setIsKitAdded] = useState(null);
  const [bookingStepsIndex, setBookingStepsIndex] = useState(0);

  const typeHandler = (type) => {
    setBookingType(type);
  };

  const nextBookingSteps = () => {
    setBookingStepsIndex((prev) => prev + 1);
  };
  const previousBookingSteps = () => {
    if (bookingStepsIndex > 0) {
      setBookingStepsIndex((prev) => prev - 1);
    }
  };

  const confirmNPayHandler = () => {
    history.push("/pollInvite");
  };

  return (
    <Wrapper>
      <span class="previousBtn" onClick={previousBookingSteps}>
        <ChevronLeft size={theme.sizes.h4} color={theme.colors.textColor4} />
      </span>
      {/* booking type form */}
      {bookingStepsIndex === 0 && (
        <>
          <Card type="normalExperience" data={dataArray[0]} />
          <h2 className="top-heading">SEND AVAILABILITY POLL</h2>
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
              <CalendarIcon
                size={theme.sizes.h8}
                color={theme.colors.textColor}
              />
            </span>
          </Flex>
          <div className="availableDate">
            {bookingTimeSlot.map((timeslot, index) => {
              return (
                <AvailableDate
                  date={timeslot.date}
                  slots={timeslot.slots}
                  onClick={(date, slot) =>
                    setBookedTimeSlot(`${date} | ${slot}`)
                  }
                />
              );
            })}
          </div>
        </>
      )}
      {/* add participants form  */}
      {bookingStepsIndex === 1 && (
        <Wrap>
          <img className="calendar-img" src={calendarImg} alt="calendar_icon" />
          <h2 className="sub-heading">Poll is set and ready to be sent</h2>
          <p className="small-heading">Set Deadline for Poll Responses</p>
        </Wrap>
      )}

      {/* footer  */}
      <div className="footerNextBtnWrapper">
        <Button
          className="nextBtn"
          onClick={
            bookingStepsIndex === 1 ? confirmNPayHandler : nextBookingSteps
          }
        >
          <Flex container alignItems="center" justifyContent="center">
            <div>
              {bookingStepsIndex === 1 ? "SEND AVAILABILITY POLL" : "Next"}
            </div>
          </Flex>
        </Button>
      </div>
    </Wrapper>
  );
}
