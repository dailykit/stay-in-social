import React, { useState, useEffect } from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper, Wrap } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { Goodies } from "../Goodies";
import Modal from "../Modal";
import Error from "../Error";
import AvailableDate from "../AvailableDate";
import { CalendarIcon, ChevronLeft, ChevronRight } from "../Icons";
import { theme } from "../../theme";
import { bookingTimeSlot } from "../../fakeData";
import { validatorFunc, capitalize } from "../../utils";

export default function Booking({ onBooking }) {
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
  const [addressType, setAddressType] = useState("home");
  const [bookedTimeSlot, setBookedTimeSlot] = useState("");
  const [guest, setGuest] = useState(minimumGuest);
  const [kit, setKit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(minimumGuest * pricePerPerson);
  const [isHostParticipant, setIsHostParticipant] = useState(false);
  const [isKitAdded, setIsKitAdded] = useState(null);
  const [isLoyaltyPointChecked, setIsLoyaltyPointChecked] = useState(null);
  const [isWalletAmountChecked, setIsWalletAmountChecked] = useState(null);
  const [bookingStepsIndex, setBookingStepsIndex] = useState(0);
  const [bottomDrawer, setBottomDrawer] = useState(false);
  const [addressFormDrawer, setAddressFormDrawer] = useState(false);
  const [address, setAddress] = useState({
    fullAddress: {
      value: "",
      meta: {
        isValid: false,
        isTouched: false,
        errors: [],
      },
    },
    city: {
      value: "",
      meta: {
        isValid: false,
        isTouched: false,
        errors: [],
      },
    },
    zip: {
      value: "",
      meta: {
        isValid: false,
        isTouched: false,
        errors: [],
      },
    },
    state: {
      value: "",
      meta: {
        isValid: false,
        isTouched: false,
        errors: [],
      },
    },
    phone: {
      value: "",
      meta: {
        isValid: false,
        isTouched: false,
        errors: [],
      },
    },
  });
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
    if (bottomDrawer === false) {
      openBottomDrawer();
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
    closeBottomDrawer();
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
    closeBottomDrawer();
  };

  const confirmNPayHandler = () => {
    onBooking();
  };

  const openBottomDrawer = () => {
    setBottomDrawer(true);
  };
  const closeBottomDrawer = () => {
    setBottomDrawer(false);
  };
  const openAddressForm = () => {
    setAddressFormDrawer(true);
  };
  const closeAddressForm = () => {
    setAddressFormDrawer(false);
  };

  const allValid = () => {
    if (
      validatorFunc.text(address.fullAddress.value).isValid &&
      validatorFunc.text(address.city.value).isValid &&
      validatorFunc.text(address.zip.value).isValid &&
      validatorFunc.text(address.state.value).isValid &&
      validatorFunc.number(address.phone.value).isValid
    ) {
      console.log("if");
      return true;
    } else {
      console.log("else");
      return false;
    }
  };

  const addressHandler = (e) => {
    const { value, name } = e.target;
    console.log({
      ...address,
      [name]: {
        ...address[name],
        value: value,
      },
    });
    setAddress({
      ...address,
      [name]: {
        ...address[name],
        value: value,
      },
    });
  };
  const onBlurHandler = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: {
        ...address[name],
        meta: {
          ...address[name].meta,
          isTouched: true,
          errors: validatorFunc.text(value).errors,
          isValid: validatorFunc.text(value).isValid,
        },
      },
    });
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
      <Modal
        isOpen={bottomDrawer}
        close={closeBottomDrawer}
        type="bottomDrawer"
      >
        {/* bottom drawer content for detailed breakdown  */}
        {bookingStepsIndex === 1 &&
          detailsBreakdown.map((detail, index) => {
            return (
              <div className="modal-content-div" key={index}>
                <Flex
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <p>
                    {detail.guests && (
                      <small style={{ marginRight: "4px" }}>First </small>
                    )}
                    {detail.guests || detail.guestRane} guests
                  </p>
                  <Flex
                    container
                    flexDirection="column"
                    alignItems="flex-end"
                    justifyContent="space-between"
                  >
                    <p>
                      {detail.guestRange && (
                        <small style={{ marginRight: "4px" }}>additional</small>
                      )}
                      ${detail.price}
                      <small style={{ marginLeft: "4px" }}>per person</small>
                    </p>
                    {detail.guestRange && (
                      <small style={{ color: theme.colors.tertiaryColor }}>
                        {detail.discount}% off
                      </small>
                    )}
                  </Flex>
                </Flex>
              </div>
            );
          })}

        {/* bottom drawer content for adding kit  */}
        {bookingStepsIndex === 2 && (
          <div style={{ padding: "1rem", marginBottom: "4rem" }}>
            <Wrap>
              <label className="checkbox-wrap">
                <Input
                  type="checkbox"
                  customWidth="24px"
                  customHeight="24px"
                  checked={isKitAdded}
                  onClick={addKitHandler}
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
              <p className="add-address-p">
                Please enter your address to deliver your kit.
              </p>

              {allValid() ? (
                <>
                  <Flex container align="center" justifyContent="space-between">
                    <p className="normal-p">Your kits will be delivered</p>
                    <Flex container alignItems="center">
                      <p onClick={openAddressForm} className="change-head">
                        Change Address
                      </p>
                      <ChevronRight
                        size={theme.sizes.h6}
                        color={theme.colors.textColor}
                      />
                    </Flex>
                  </Flex>
                  <div className="address-div">
                    <p>{capitalize(addressType)}</p>
                    <p>{`${address.fullAddress.value},${address.city.value},${address.state.value}-${address.zip.value}`}</p>
                    <p>{address.phone.value}</p>
                  </div>
                </>
              ) : (
                <div className="coupon-wrapper" onClick={openAddressForm}>
                  <Flex container alignItems="center" justifyContent="center">
                    + ADD ADDRESS
                  </Flex>
                </div>
              )}

              <div className="table-wrap">
                <table>
                  <tr>
                    <td> kit</td>
                    <td>${(kit * kitPrice).toFixed(1)}</td>
                  </tr>
                  <tr>
                    <td>Delivery Charges</td>
                    <td>${deliveryCharge}</td>
                  </tr>
                  <tr>
                    <td>Total Payable for kit:</td>
                    <td>
                      $
                      {kit > 0
                        ? (kitPrice * kit + deliveryCharge).toFixed(1)
                        : 0}
                    </td>
                  </tr>
                </table>
              </div>
            </Wrap>
          </div>
        )}

        {/* bottom drawer content for adding/updating address */}
      </Modal>
      <Modal
        isOpen={addressFormDrawer}
        close={closeAddressForm}
        type="bottomDrawer"
      >
        <div>
          <Flex
            container
            alignItems="center"
            padding="1rem"
            justifyContent="space-evenly"
          >
            <Button
              backgroundColor={
                addressType === "home"
                  ? theme.colors.secondaryColor
                  : theme.colors.mainBackground
              }
              isMainShadow
              className="customAddressBtn"
              onClick={() => setAddressType("home")}
            >
              Home
            </Button>
            <Button
              height="38px"
              backgroundColor={
                addressType === "work"
                  ? theme.colors.secondaryColor
                  : theme.colors.mainBackground
              }
              isMainShadow
              className="customAddressBtn"
              onClick={() => setAddressType("work")}
            >
              Work
            </Button>
            <Button
              backgroundColor={
                addressType === "others"
                  ? theme.colors.secondaryColor
                  : theme.colors.mainBackground
              }
              isMainShadow
              className="customAddressBtn"
              onClick={() => setAddressType("others")}
            >
              Other
            </Button>
          </Flex>
          <p className="address-head">Shipping Address</p>
          <Flex
            container
            flexDirection="column"
            padding="1rem"
            margin="0 0 4rem 0 "
          >
            <Flex container flexDirection="column">
              <Input
                name="fullAddress"
                className="customAddressInput"
                type="text"
                placeholder="Address"
                value={address?.fullAddress?.value}
                onChange={addressHandler}
                onBlur={onBlurHandler}
              />
              {address.fullAddress.meta.isTouched &&
                !address.fullAddress.meta.isValid &&
                address.fullAddress.meta.errors.map((error, index) => (
                  <Error margin="0 0 1rem 0" key={index}>
                    {error}
                  </Error>
                ))}
            </Flex>
            <Flex container flexDirection="column">
              <Input
                name="city"
                className="customAddressInput"
                type="text"
                placeholder="City"
                value={address?.city.value}
                onChange={addressHandler}
                onBlur={onBlurHandler}
              />
              {address.city.meta.isTouched &&
                !address.city.meta.isValid &&
                address.city.meta.errors.map((error, index) => (
                  <Error margin="0 0 1rem 0" key={index}>
                    {error}
                  </Error>
                ))}
            </Flex>
            <Flex container flexDirection="column">
              <Input
                name="zip"
                className="customAddressInput"
                type="text"
                placeholder="Zip"
                value={address?.zip.value}
                onChange={addressHandler}
                onBlur={onBlurHandler}
              />
              {address.zip.meta.isTouched &&
                !address.zip.meta.isValid &&
                address.zip.meta.errors.map((error, index) => (
                  <Error margin="0 0 1rem 0" key={index}>
                    {error}
                  </Error>
                ))}
            </Flex>
            <Flex container flexDirection="column">
              <Input
                name="state"
                className="customAddressInput"
                type="text"
                placeholder="State"
                value={address?.state.value}
                onChange={addressHandler}
                onBlur={onBlurHandler}
              />
              {address.state.meta.isTouched &&
                !address.state.meta.isValid &&
                address.state.meta.errors.map((error, index) => (
                  <Error margin="0 0 1rem 0" key={index}>
                    {error}
                  </Error>
                ))}
            </Flex>
            <Flex container flexDirection="column">
              <Input
                name="phone"
                className="customAddressInput"
                type="tel"
                placeholder="Phone Number"
                value={address?.phone.value}
                onChange={addressHandler}
                onBlur={onBlurHandler}
              />
              {address.phone.meta.isTouched &&
                !address.phone.meta.isValid &&
                address.phone.meta.errors.map((error, index) => (
                  <Error margin="0 0 1rem 0" key={index}>
                    {error}
                  </Error>
                ))}
            </Flex>
            <Button
              onClick={() => allValid() && closeAddressForm()}
              height="38px"
              className="customAddressBtn"
            >
              Submit
            </Button>
          </Flex>
        </div>
      </Modal>

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
            <p className="breakdown-head" onClick={openBottomDrawer}>
              Detailed Breakdown
            </p>
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
              onClick={(e) => setIsHostParticipant(e.target.checked)}
            />
            <span className="checkbox-label">Remove myself as participant</span>
          </label>
        </Wrap>
      )}
      {/* add kit form  */}
      {bookingStepsIndex === 2 && (
        <Wrap>
          <Goodies title="Add Kits" />
          <label className="checkbox-wrap">
            <Input
              type="checkbox"
              customWidth="24px"
              customHeight="24px"
              checked={isKitAdded}
              onClick={addKitHandler}
            />
            <Flex
              container
              alignItems="center"
              justifyContent="space-between"
              flex="1"
            >
              <span className="checkbox-label">Add kit</span>
              <span className="checkbox-label">${kitPrice.toFixed(1)}</span>
            </Flex>
          </label>
        </Wrap>
      )}
      {/* confirm and pay form  */}
      {bookingStepsIndex === 3 && (
        <Wrap>
          <h2 className="top-heading">Confirm & Pay</h2>
          <div className="booking-info">
            <p>
              Your <strong> {capitalize(bookingType)} Group</strong> experience
              is booked for
            </p>
            <p>
              <strong>{bookedTimeSlot}</strong>
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

            {allValid() ? (
              <div className="update-address">
                <Flex container align="center" justifyContent="space-between">
                  <p>Your kits will be delivered</p>
                  <Flex container alignItems="center">
                    <p onClick={openAddressForm} className="change-head">
                      Change Address
                    </p>
                    <ChevronRight
                      size={theme.sizes.h6}
                      color={theme.colors.textColor}
                    />
                  </Flex>
                </Flex>
                <p>{capitalize(addressType)}</p>
                <p>{`${address.fullAddress.value},${address.city.value},${address.state.value}-${address.zip.value}`}</p>
                <p>{address.phone.value}</p>
              </div>
            ) : (
              <div className="coupon-wrapper" onClick={openAddressForm}>
                <Flex container alignItems="center" justifyContent="center">
                  + ADD ADDRESS
                </Flex>
              </div>
            )}
          </div>
          <div className="table-wrap">
            <table>
              <tr>
                <td>
                  Experience {guest}*{pricePerPerson}
                </td>
                <td>${totalPrice.toFixed(1)}</td>
              </tr>
              <tr>
                <td>{kit} kit</td>
                <td>${(kit * kitPrice).toFixed(1)}</td>
              </tr>
              <tr>
                <td>Delivery Charges</td>
                <td>${deliveryCharge.toFixed(1)}</td>
              </tr>
              <tr>
                <td>sales tax</td>
                <td>${salesTax}</td>
              </tr>
            </table>
          </div>
          <div className="points-wrap">
            <div className="extra-pts-wrap">
              {/* <label> */}
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
                    onClick={loyaltyPointHandler}
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
              {/* </label> */}
            </div>
            <div className="extra-pts-wrap">
              {/* <label> */}
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
                    onClick={walletAmountHandler}
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
              {/* </label> */}
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
              <p>${totalPrice.toFixed(1)}</p>
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
                <span className="minCost">| ${totalPrice.toFixed(1)}</span>
              </Flex>
            </Flex>
            <div>{bookingStepsIndex === 3 ? "Confirm & Pay" : "Next"}</div>
          </Flex>
        </Button>
      </div>
    </Wrapper>
  );
}
