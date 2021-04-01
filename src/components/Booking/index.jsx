import React, { useState, useEffect } from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper, Wrap } from "./styles";
import Button from "../Button";
import Input from "../Input";
import { CalendarIcon, ChevronLeft, ChevronRight } from "../Icons";
import AvailableDate from "../AvailableDate";
import { theme } from "../../theme";
import { bookingTimeSlot } from "../../fakeData";
import { Goodies } from "../Goodies";

export default function Booking() {
  const pricePerPerson = 12;
  const minimumGuest = 5;
  const kitPrice = 3.8;
  const deliveryCharge = 5;
  const salesTax = 2.35;
  const loyaltyPoints = 5;
  const walletAmount = 3.2;
  const [bookingType, setBookingType] = useState("public");
  const [guest, setGuest] = useState(minimumGuest);
  const [kit, setKit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(minimumGuest * pricePerPerson);
  const [isHostParticipant, setIsHostParticipant] = useState(false);
  const [isKitAdded, setIsKitAdded] = useState(null);
  const [isLoyaltyPointChecked, setIsLoyaltyPointChecked] = useState(null);
  const [isWalletAmountChecked, setIsWalletAmountChecked] = useState(null);
  const [bookingStepsIndex, setBookingStepsIndex] = useState(0);
  const typeHandler = (type) => {
    setBookingType(type);
  };
  const increment = (type) => {
    if (type === "guest") {
      setGuest((prev) => prev + 1);
    } else {
      setKit((prev) => prev + 1);
    }
  };
  const decrement = (type) => {
    if (type === "guest" && guest > minimumGuest) {
      setGuest((prev) => prev - 1);
    } else if (type === "kit" && kit > 0) {
      setKit((prev) => prev - 1);
    }
  };

  const nextBookingSteps = () => {
    setBookingStepsIndex((prev) => prev + 1);
  };
  const previousBookingSteps = () => {
    if (bookingStepsIndex > 0) {
      setBookingStepsIndex((prev) => prev - 1);
    }
  };

  const addKitHandler = (e) => {
    const { checked } = e.target;
    setIsKitAdded(checked);
    if (checked) {
      setKit((prev) => prev + 1);
    } else {
      setKit((prev) => prev - 1);
    }
  };

  const loyaltyPointHandler = (e) => {
    console.log(e, "hey");
    const { checked } = e.target;
    setIsLoyaltyPointChecked(checked);
    if (checked) {
      setTotalPrice((prev) => prev - loyaltyPoints);
    } else {
      setTotalPrice((prev) => prev + loyaltyPoints);
    }
  };

  const walletAmountHandler = (e) => {
    console.log(e);
    const { checked } = e.target;
    setIsWalletAmountChecked(checked);
    if (checked) {
      setTotalPrice((prev) => prev - walletAmount);
    } else {
      setTotalPrice((prev) => prev + walletAmount);
    }
  };

  const confirmNPayHandler = () => {
    console.log("Booked");
  };

  useEffect(() => {
    setTotalPrice(guest * pricePerPerson);
    // if(kit>0){
    //   setTotalPrice((prev)=> prev+ kit*kitPrice)
    // }else{
    //   setTotalPrice((prev)=> prev- kit*kitPrice)
    //   else if (type === "kit" && kit === 0) {
    //     setIsKitAdded(false);
    //   }
    // }
  }, [guest]);

  useEffect(() => {
    if (isKitAdded) {
      setTotalPrice((prev) => prev + kit * kitPrice);
    } else if (!isKitAdded && isKitAdded !== null) {
      if (kit > 0) {
        setTotalPrice((prev) => prev - kit * kitPrice);
      } else {
        setTotalPrice((prev) => prev - kitPrice);
      }
    }
  }, [isKitAdded, kit]);
  return (
    <Wrapper>
      <span class="previousBtn" onClick={previousBookingSteps}>
        <ChevronLeft size={theme.sizes.h4} color={theme.colors.textColor4} />
      </span>
      {/* booking type form */}
      {bookingStepsIndex === 0 && (
        <>
          <h2 className="top-heading">Booking Experience</h2>
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
                <AvailableDate date={timeslot.date} slots={timeslot.slots} />
              );
            })}
          </div>
        </>
      )}
      {/* add participants form  */}
      {bookingStepsIndex === 1 && (
        <Wrap>
          <h2 className="top-heading">Booking Experience</h2>
          <Flex
            container
            alignItems="center"
            justifyContent="space-between"
            margin="0 0 27px 0 "
          >
            <p className="small-head">Minimum:</p>
            <p className="minGuest">{minimumGuest}</p>
          </Flex>
          <h1 className="counter-head">Select number of people </h1>
          <Flex
            container
            alignItems="center"
            justifyContent="space-between"
            margin="0 0 5rem 0 "
          >
            <p className="showAll">
              starting from ${pricePerPerson} per person
            </p>
            <p className="breakdown-head">Detailed Breakdown</p>
          </Flex>
          <div className="counter-wrap">
            <Flex container alignItems="center" justifyContent="space-around">
              <Button onClick={() => decrement("guest")} btnType="circle">
                -
              </Button>
              <p className="minGuest-b">{guest}</p>
              <Button onClick={() => increment("guest")} btnType="circle">
                +
              </Button>
            </Flex>
          </div>
          <p className="discount-info">-20% per ticket</p>
          <label className="checkbox-wrap">
            <Input
              type="checkbox"
              customWidth="24px"
              customHeight="24px"
              checked={isHostParticipant}
              onChange={(e) => setIsHostParticipant(e.target.checked)}
            />
            <span className="checkbox-label">Remove myself as participant</span>
          </label>
        </Wrap>
      )}
      {bookingStepsIndex === 2 && (
        <Wrap>
          <Goodies title="Add Kits" />
          <label className="checkbox-wrap">
            <Input
              type="checkbox"
              customWidth="24px"
              customHeight="24px"
              checked={isKitAdded}
              onChange={addKitHandler}
            />
            <Flex
              container
              alignItems="center"
              justifyContent="space-between"
              flex="1"
            >
              <span className="checkbox-label">Add kit</span>
              <span className="checkbox-label">${kitPrice}</span>
            </Flex>
          </label>
        </Wrap>
      )}

      {bookingStepsIndex === 3 && (
        <Wrap>
          <h2 className="top-heading">Confirm & Pay</h2>
          <div className="booking-info">
            <p>
              Your <strong> Private Group</strong> experience is booked for
            </p>
            <p>
              <strong>May 20, 2020 | 9:00am</strong>
            </p>
          </div>
          <div className="counter-update">
            <Flex container alignItems="center" justifyContent="space-between">
              <Flex
                container
                flexDirection="column"
                justifyContent="space-between"
                flex="1"
              >
                <p>Select number of people</p>
                <small>
                  <em>starting from $12 per person</em>
                </small>
              </Flex>
              <Flex
                container
                alignItems="center"
                justifyContent="space-evenly"
                flex="1"
              >
                <Button
                  customWidth="30px"
                  customHeight="30px"
                  onClick={() => decrement("guest")}
                  btnType="circle"
                >
                  -
                </Button>
                <p className="guest-count">{guest}</p>
                <Button
                  customWidth="25px"
                  customHeight="25px"
                  onClick={() => increment("guest")}
                  btnType="circle"
                >
                  +
                </Button>
              </Flex>
            </Flex>
          </div>
          <div className="counter-update">
            <Flex container alignItems="center" justifyContent="space-between">
              <Flex
                container
                flexDirection="column"
                justifyContent="space-between"
                flex="1"
                padding="1rem"
              >
                <p>Kits for you</p>
                <small>
                  <em>$3.8 per kit</em>
                </small>
              </Flex>
              <Flex
                container
                alignItems="center"
                justifyContent="space-evenly"
                flex="1"
              >
                <Button
                  customWidth="30px"
                  customHeight="30px"
                  onClick={() => decrement("kit")}
                  btnType="circle"
                >
                  -
                </Button>
                <p className="guest-count">{kit}</p>
                <Button
                  customWidth="25px"
                  customHeight="25px"
                  onClick={() => increment("kit")}
                  btnType="circle"
                >
                  +
                </Button>
              </Flex>
            </Flex>
            <div className="update-address">
              <Flex container align="center" justifyContent="space-between">
                <p>Your kits will be delivered</p>
                <p className="change-head">Change Address</p>
              </Flex>
              <p>Home</p>
              <p>123 south park,24th block, Chicago - 56031</p>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <tr>
                <td>
                  Experience {guest}*{pricePerPerson}
                </td>
                <td>${totalPrice}</td>
              </tr>
              <tr>
                <td>{kit} kit</td>
                <td>${kit * kitPrice}</td>
              </tr>
              <tr>
                <td>Delivery Charges</td>
                <td>${deliveryCharge}</td>
              </tr>
              <tr>
                <td>sales tax</td>
                <td>${salesTax}</td>
              </tr>
            </table>
          </div>
          <div className="points-wrap">
            <div className="extra-pts-wrap">
              <label>
                <Flex
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Input
                      type="checkbox"
                      customWidth="25px"
                      customHeight="25px"
                      checked={isLoyaltyPointChecked}
                      onChange={loyaltyPointHandler}
                    />
                    <Flex
                      container
                      flexDirection="column"
                      justifyContent="space-between"
                      margin="0 0 0 12px"
                    >
                      <p>Use loyality Points</p>
                      <small>allowed till $5 per purchase</small>
                    </Flex>
                  </Flex>
                  <h1>${loyaltyPoints}</h1>
                </Flex>
              </label>
            </div>
            <div className="extra-pts-wrap">
              <label>
                <Flex
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Flex
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Input
                      type="checkbox"
                      customWidth="25px"
                      customHeight="25px"
                      checked={isWalletAmountChecked}
                      onChange={walletAmountHandler}
                    />
                    <Flex
                      container
                      flexDirection="column"
                      justifyContent="space-between"
                      margin="0 0 0 12px"
                    >
                      <p>Use Wallet Amount</p>
                    </Flex>
                  </Flex>
                  <h1>${walletAmount}</h1>
                </Flex>
              </label>
            </div>
          </div>
          <div className="coupon-wrapper">
            <Flex container alignItems="center" justifyContent="space-between">
              <Flex
                container
                flexDirection="column"
                justifyContent="space-between"
              >
                <h1>Apply Coupon</h1>
                <small>3 valid coupons available</small>
              </Flex>
              <span>
                <ChevronRight
                  size={theme.sizes.h4}
                  color={theme.colors.textColor}
                />
              </span>
            </Flex>
          </div>
          <div className="total-sum">
            <Flex container alignItems="center" justifyContent="space-between">
              <p>Total</p>
              <p>${totalPrice}</p>
            </Flex>
          </div>
        </Wrap>
      )}

      {/* footer  */}
      <div className="footerNextBtnWrapper">
        <Button
          className="nextBtn"
          onClick={
            bookingStepsIndex === 3 ? confirmNPayHandler : nextBookingSteps
          }
        >
          <Flex container alignItems="center" justifyContent="space-between">
            <Flex flexDirection="column" container alignItems="center">
              <span className="minHead">Minimum Booking amount</span>
              <Flex container alignItems="center">
                <span className="guest">{guest} guests </span>
                <span className="minCost">| ${totalPrice}</span>
              </Flex>
            </Flex>
            <div>{bookingStepsIndex === 3 ? "Confirm & Pay" : "Next"}</div>
          </Flex>
        </Button>
      </div>
    </Wrapper>
  );
}
