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
  InviteThrough,
} from "../../components";
import { theme } from "../../theme";
import { dataArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";

export default function Invite() {
  const { width } = useWindowDimensions();
  const [bottomDrawer, setBottomDrawer] = useState(false);
  const [copyBtnClasses, setCopyBtnClasses] = useState(["customBtn"]);
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

  return (
    <Wrapper>
      <GridView>
        <Card type="upcomingExperience" data={dataArray[0]} />
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
      <HorizontalTabs>
        <HorizontalTabList>
          <HorizontalTab>Invite Participants</HorizontalTab>
          <HorizontalTab>Manage Participants</HorizontalTab>
        </HorizontalTabList>
        <HorizontalTabPanels>
          <HorizontalTabPanel>
            <h1 className="invite-h1-head">Invite Participants</h1>
            <p className="invite-sub-head">
              Share the Invite through public url
            </p>
            <div className="invite-msg-div">
              <p className="invite-msg">
                <p> Hey,</p> Alex has invited you to join the Bartender’s
                Handshake experience on May 4, 2021 | starting at 9:00am. Join
                us from the link below:
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
                  <CopyIcon
                    size={theme.sizes.h6}
                    color={theme.colors.textColor4}
                  />
                </span>
                Copy Invite
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
            <p className="last-msg">See you and your flock soon!</p>
          </HorizontalTabPanel>
          <HorizontalTabPanel>
            <h1 style={{ marginBottom: "5rem" }} className="invite-h1-head">
              Manage Participants
            </h1>
          </HorizontalTabPanel>
        </HorizontalTabPanels>
      </HorizontalTabs>
      <Modal
        isOpen={bottomDrawer}
        close={closeBottomDrawer}
        type={width > 769 ? "sideDrawer" : "bottomDrawer"}
      >
        <InviteThrough onChange={(list) => console.log("listttt :", list)} />
      </Modal>
    </Wrapper>
  );
}
