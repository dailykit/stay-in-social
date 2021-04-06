import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper, StyledWrap } from "./styles";
import { Card, Input, Button, Modal, BackDrop } from "../../components";
import { dataArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";
import placeholderImg from "../../assets/images/placeholderImage.png";
import kitImg from "../../assets/images/Box_Open.jpg";
import celebrationImg from "../../assets/images/celebration.png";
import AddressForm from "../../components/AddressForm";

export default function BookingInviteResponse() {
  const [drawer, setDrawer] = useState(false);
  const history = useHistory();
  const { width } = useWindowDimensions();
  const [isCelebrating, setIsCelebrating] = useState(false);
  const stopCelebration = () => {
    setTimeout(setIsCelebrating(false), 2000);
    history.push("/");
  };
  const startCelebration = () => {
    setIsCelebrating(true);
    setTimeout(stopCelebration, 2000);
  };
  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };

  const acceptInvitationHandler = () => {
    closeDrawer();
    startCelebration();
  };
  return (
    <StyledWrap>
      <Wrapper isCelebrating={isCelebrating}>
        <h2 className="invitation-head">You're invited!</h2>
        <Flex
          container
          alignItems="flex-start"
          justifyContent="center"
          margin="1rem 0"
        >
          <span className="normal-heading">by</span>
          <img className="host-img" src={placeholderImg} alt="host-img" />
          <span className="normal-heading">
            <strong>Patrik Jane</strong>
          </span>
        </Flex>
        <p className="below-para">Be sure to RSVP before May 3rd.</p>
        <Card type="upcomingExperience" paid data={dataArray[0]} />
        <div className="kit-includes-div">
          <Flex container alignItems="center">
            <img className="kit-img" src={kitImg} alt="kit-img" />
            <p className="kit-head">Your Invitation includes Kit delivery.</p>
          </Flex>
          <p className="kit-info">Whats included in my Kit?</p>
        </div>
        <h3 className="heading-before">Accept your Invitation.</h3>
        <p className="sub-heading-before">
          Please enter your details below and accept the invitation
        </p>
        <Input className="customInput" type="text" placeholder="Your Name" />
        <Input className="customInput" type="email" placeholder="Your Email" />

        {/* if kit and experience are paid */}
        {true && (
          <>
            <Input
              className="customInput"
              type="text"
              placeholder="Your Contact Number"
            />
            <p className="small-head">
              Please enter your address to deliver your kit.
            </p>
            <div onClick={openDrawer} className="address-wrapper">
              <Flex container alignItems="center" justifyContent="center">
                + ADD ADDRESS
              </Flex>
            </div>
          </>
        )}

        {/* sticky submit button  */}
        <div
          onClick={acceptInvitationHandler}
          className="footer-accept-btn-div"
        >
          <p className="poll-expiry-msg">
            😇 Alex has already paid for your experience and kit.
          </p>
          <Button className="custom-accept-btn">Accept Invitation</Button>
        </div>

        <Modal
          type={width > 679 ? "sideDrawer" : "bottomDrawer"}
          isOpen={drawer}
          close={closeDrawer}
        >
          <AddressForm />
        </Modal>
      </Wrapper>
      <BackDrop show={isCelebrating}>
        <div class="response-done">
          <img src={celebrationImg} alt="pin-emoji" />
          <h2>You’re BOOKED!</h2>
          <p>
            We have emailed you the invite as well as created calendar invite
            for you with all of the details!
          </p>
        </div>
      </BackDrop>
    </StyledWrap>
  );
}
