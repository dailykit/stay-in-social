import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper, GridView } from "./styles";
import {
  Card,
  ChevronLeft,
  HorizontalTabs,
  HorizontalTab,
  HorizontalTabList,
  HorizontalTabPanel,
  HorizontalTabPanels,
  Button,
  CopyIcon,
  FacebookSquare,
  WhatsappSquare,
  LinkedinSquare,
  TwitterSquare,
  MesenggerSquare,
  Modal,
  Input,
  CrossIcon,
} from "../../components";
import { theme } from "../../theme";
import { dataArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";

export default function InvitePoll() {
  const { width } = useWindowDimensions();
  const [bottomDrawer, setBottomDrawer] = useState(false);
  const [inviteAddress, setInviteAddress] = useState("");
  const [inviteAddressList, setInviteAddressList] = useState([]);
  const [copyBtnClasses, setCopyBtnClasses] = useState(["customBtn"]);
  const [bgStyle, setBgStyle] = useState([]);
  const slots = [
    { time: "May 20, 2020  |  9:30 am", vote: 3 },
    { time: "May 21, 2020  |  11:00 am", vote: 6 },
  ];
  const openBottomDrawer = () => {
    setBottomDrawer(true);
  };
  const closeBottomDrawer = () => {
    setBottomDrawer(false);
  };

  const copyHandler = async () => {
    setCopyBtnClasses((prev) => [...prev, "blink_me"]);
    navigator.clipboard
      .writeText("https://www.stayinsocial.com/bartendar-handshake/invite")
      .then(
        function () {
          console.log("Async: Copying to clipboard was successful!");
          setCopyBtnClasses(["customBtn"]);
        },
        function (err) {
          console.error("Async: Could not copy text: ", err);
        }
      );
  };
  const onChangeHandler = (e) => {
    const { value } = e.target;
    const bgColors = [
      theme.colors.textColor10,
      theme.colors.textColor11,
      theme.colors.textColor12,
      theme.colors.textColor13,
      theme.colors.textColor14,
    ];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    setInviteAddress(value);
    if (value.indexOf(",") > -1) {
      setBgStyle((prev) => [...prev, randomBgColor]);
      setInviteAddress("");
      setInviteAddressList((prev) => [...prev, value.replace(",", "")]);
    }
  };

  const onRemoveHandler = (index) => {
    console.log(inviteAddressList, index);
    const updatedInviteAddressList = inviteAddressList;
    updatedInviteAddressList.splice(index, 1);
    console.log(updatedInviteAddressList);
    setInviteAddressList([...updatedInviteAddressList]);
  };
  return (
    <Wrapper>
      <GridView>
        <Card boxShadow="false" type="upcomingExperience" data={dataArray[0]} />
      </GridView>
      <p className="invite-p-head">
        We've sent you an email with details and a calendar invite with a link
        to the online experience!
      </p>
      <Link className="back-to-home" to="/">
        <span>
          <ChevronLeft size={theme.sizes.h6} color={theme.colors.textColor} />
        </span>
        Home
      </Link>
      <div className="invitation-div">
        <p className="invite-sub-head">Share the poll</p>
        <div className="invite-msg-div">
          <p className="invite-msg">
            <p> Hey,</p> Alex has invited you to join the Bartender’s Handshake
            experience on May 4, 2021 | starting at 9:00am. Join us from the
            link below:
          </p>
          <Link to="https://www.stayinsocial.com/bartendar-handshake/invite">
            https://www.stayinsocial.com/bartendar-handshake/invite
          </Link>
          <p className="invite-msg">Be sure to RSVP before May 3rd.</p>
          <Button
            background={theme.colors.secondaryColor}
            className={copyBtnClasses}
            onClick={copyHandler}
          >
            <span>
              <CopyIcon size={theme.sizes.h6} color={theme.colors.textColor4} />
            </span>
            Copy Poll Invite
          </Button>
        </div>
        <Flex
          container
          alignItems="center"
          justifyContent="space-evenly"
          margin="1rem 0"
        >
          <span className="share-icon">
            <FacebookSquare size={theme.sizes.h1} color="#14a5fb" />
          </span>
          <span className="share-icon">
            <WhatsappSquare size={theme.sizes.h1} color="#4FCE5D" />
          </span>
          <span className="share-icon">
            <LinkedinSquare size={theme.sizes.h1} color="#0077b5" />
          </span>
          <span className="share-icon">
            <TwitterSquare size={theme.sizes.h1} color="#00acee" />
          </span>
          <span className="share-icon">
            <MesenggerSquare size={theme.sizes.h1} color="#14a5fb" />
          </span>
        </Flex>
        <p className="or">OR</p>
        <Button onClick={openBottomDrawer} className="customBtn">
          Invite via Email & Phone
        </Button>
      </div>
      <Flex
        container
        alignItems="center"
        justifyContent="space-between"
        margin="0 0 20px 0"
      >
        <p className="slot-info-head">3 Slots</p>
        <p className="expiry-head">poll expires on May 6</p>
      </Flex>
      {slots.map((slot, index) => {
        return (
          <div className="slot-div">
            <Flex
              container
              alignItems="center"
              justifyContent="space-between"
              margin="0 0 12px 0"
            >
              <p className="slot-info-time">{slot.time}</p>
              <p className="vote-head">{slot.vote} votes</p>
            </Flex>
            <p className="book-slot">Book Slot</p>
          </div>
        );
      })}

      <Modal
        isOpen={bottomDrawer}
        close={closeBottomDrawer}
        type={width > 769 ? "sideDrawer" : "bottomDrawer"}
      >
        <div className="invite-through-mail-div">
          <h1 className="invite-h1-head">Invite through Email & Phone</h1>
          <p className="invite-msg">
            Type emails, phone numbers separated by enter or comma{" "}
          </p>
          <Input
            type="text"
            placeholder="enter here"
            value={inviteAddress}
            onChange={onChangeHandler}
            className="customInput"
          />
          <Flex container alignItems="center" flexWrap="wrap">
            {inviteAddressList.map((listItem, index) => {
              return (
                <div
                  key={index}
                  class="invitation-address"
                  style={{ background: bgStyle[index] }}
                >
                  {listItem}
                  <span
                    class="remove-btn"
                    onClick={() => onRemoveHandler(index)}
                  >
                    <CrossIcon
                      size={theme.sizes.h6}
                      color={theme.colors.textColor4}
                    />
                  </span>
                </div>
              );
            })}
          </Flex>
        </div>
      </Modal>
    </Wrapper>
  );
}
