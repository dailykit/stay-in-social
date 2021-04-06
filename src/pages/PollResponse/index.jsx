import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper, StyledWrap } from "./styles";
import { Card, Input, Button, Modal, BackDrop } from "../../components";
import { dataArray } from "../../fakeData";
import placeholderImg from "../../assets/images/placeholderImage.png";
import pinImg from "../../assets/images/pin.png";

export default function PollResponse() {
  const slots = [
    { time: "May 20, 2020  |  9:30 am", vote: 3 },
    { time: "May 21, 2020  |  11:00 am", vote: 6 },
    { time: "May 22, 2020  |  11:00 am", vote: 8 },
  ];

  const [drawer, setDrawer] = useState(false);
  const [checkedBox, setCheckedBox] = useState([false, false, false]);
  const [slotVoting, setSlotVoting] = useState([]);
  const [responseDetail, setResponseDetail] = useState({
    name: "",
    email: "",
  });
  const history = useHistory();
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
  const checkBoxHandler = (e, index, time) => {
    const { checked } = e.target;
    const updatedCheckedBox = checkedBox;
    updatedCheckedBox[index] = checked;
    console.log(checked, index, updatedCheckedBox);
    setCheckedBox([...updatedCheckedBox]);
    if (checked) {
      setSlotVoting((prev) => [...prev, { index, time }]);
    } else {
      const updatedSlotVoting = slotVoting;
      const votedSlotIndex = updatedSlotVoting.findIndex(
        (slot) => slot.index === index
      );
      if (votedSlotIndex > -1) {
        updatedSlotVoting.splice(votedSlotIndex, 1);
      }
      setSlotVoting([...updatedSlotVoting]);
    }
  };

  const doneHandler = () => {
    setResponseDetail({
      name: "",
      email: "",
    });
    closeDrawer();
    startCelebration();
  };
  return (
    <StyledWrap>
      <Wrapper isCelebrating={isCelebrating}>
        <img className="host-img" src={placeholderImg} alt="host-img" />
        <h2 className="host-name-head">Patrick Jane</h2>
        <p className="below-para">wants you to know your availability! </p>
        <Card type="normalExperience" data={dataArray[0]} />
        <p className="normal-heading">
          Select the dates and times that work for you.
        </p>
        <div className="slots-wrapper">
          {slots.map((slot, index) => {
            return (
              <div key={index} className="slot-div">
                <label>
                  <Flex container alignItems="center">
                    <Input
                      type="checkbox"
                      customWidth="24px"
                      customHeight="24px"
                      checked={checkedBox[index]}
                      onClick={(e) => checkBoxHandler(e, index, slot.time)}
                    />
                    <p className="slot-time">{slot.time}</p>
                  </Flex>
                </label>
                <p className="vote-count">{slot.vote} votes</p>
              </div>
            );
          })}
        </div>

        {/* sticky submit button  */}
        <div className="footer-sticky-btn-div">
          <p className="poll-expiry-msg">poll expires on May 6</p>
          <Button onClick={openDrawer} className="custom-submit-btn">
            Submit Response
          </Button>
        </div>

        {/* submit response modal  */}
        <Modal type="bottomDrawer" isOpen={drawer} close={closeDrawer}>
          <div className="modal-content-div">
            <img className="pinImg" src={pinImg} alt="pin-icon" />
            <h3 class="response-head">Your Response is submitted!</h3>
            <h3 class="response-sub-head">
              Thank you! Enter your information below and we’ll send you and
              invite with the date and time that Alex selects!
            </h3>
            <Input
              className="custom-response-input"
              type="text"
              placeholder="Name"
              value={responseDetail?.name}
              onChange={(e) =>
                setResponseDetail((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
            />
            <Input
              className="custom-response-input"
              type="email"
              placeholder="Email"
              value={responseDetail?.email}
              onChange={(e) =>
                setResponseDetail((prev) => {
                  return { ...prev, email: e.target.value };
                })
              }
            />
            <div className="custom-done-btn-wrapper">
              <Button onClick={doneHandler} className="custom-done-btn">
                Done
              </Button>
            </div>
          </div>
        </Modal>
      </Wrapper>
      <BackDrop show={isCelebrating}>
        <div class="response-done">
          <img src={pinImg} alt="pin-emoji" />
          <h2>Your Response is submitted!</h2>
          <p>See you with the flock soon</p>
        </div>
      </BackDrop>
    </StyledWrap>
  );
}
