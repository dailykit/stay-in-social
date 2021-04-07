import React from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import { Card } from "../Card";
import {
  AcceptCicleIcon,
  AddCircleIcon,
  GiftIcon,
  RejectCircleIcon,
  PlaneIcon,
} from "../Icons";
import { theme } from "../../theme";
import { dataArray } from "../../fakeData";
import { useWindowDimensions } from "../../utils";
export default function InvitePollFeed() {
  return (
    <Wrapper>
      <div className="flex-container">
        <Card type="normalExperience" data={dataArray[0]} />
        <div className="slots-div">
          <Flex container justifyContent="space-between" margin="0 0 20px 0">
            <p>Slots (3)</p>
            <p>poll expires on May 6</p>
          </Flex>
          <div class="slot-div-wrap">
            <div className="slot-div">
              <Flex
                container
                alignItems="center"
                justifyContent="space-between"
                margin="0 0 12px 0"
              >
                <p className="slot-info-time">May 20, 2020 | 9:30 am</p>
                <p className="vote-head">7 votes</p>
              </Flex>
              <p className="book-slot">Book Slot</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
