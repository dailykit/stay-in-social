import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import { Card } from "../Card";
import Button from "../Button";
import { theme } from "../../theme";
import { dataArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";
export default function InvitePollFeed() {
  const { width } = useWindowDimensions();
  const slots = [
    { time: "May 20, 2020  |  9:30 am", vote: 3 },
    { time: "May 21, 2020  |  11:00 am", vote: 6 },
    { time: "May 22, 2020  |  11:00 am", vote: 8 },
  ];
  return (
    <Wrapper>
      <div className="flex-container">
        <Flex container justifyContent="center">
          <Card
            customHeight={width > 769 ? "280px" : "204px"}
            customWidth="100%"
            type="normalExperience"
            data={dataArray[0]}
          />
        </Flex>
        <div className="slots-div">
          <Flex container justifyContent="space-between" margin="0 0 20px 0">
            <p>Slots (3)</p>
            <p>poll expires on May 6</p>
          </Flex>
          <div class="slot-div-wrap">
            {slots.map((slot, index) => {
              return (
                <div key={index} className="slot-div">
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
          </div>
          <div class="share-btn-div">
            <Link
              to="/pollInvite"
              style={{ width: width > 769 ? "auto" : "100%" }}
            >
              <Button className="custom-share-btn">
                SHARE AVAILABILITY POLL
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
