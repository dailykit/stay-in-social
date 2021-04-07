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

export default function UpcomingExperience() {
  const { width } = useWindowDimensions();
  return (
    <Wrapper>
      <div className="flex-container">
        <div className="card-wrap">
          <Card
            customHeight={width > 769 ? "331px" : "251px"}
            customWidth={width > 769 ? "371px" : "auto"}
            type="upcomingExperience"
            data={dataArray[0]}
          />
        </div>
        <div className="invite-response-div">
          <h3 className="response-head">3/4 people requested to book</h3>
          <div className="response-row-div">
            <div className="response-inside-wrap">
              <div class="row-content-mv-wrap">
                <span className="serial-no">1.</span>
                <p className="respondee respondee-name">
                  Alex Tod
                  <span className="admin-tag">Admin</span>
                </p>
              </div>
              <div class="row-content-mv-wrap">
                <p className="respondee">alexTod@gmail.com</p>
              </div>
              <div class="row-content-mv-wrap">
                <p className="respondee respondee-response">BOOKED</p>
                <p className="respondee kit-info">
                  <span className="kit-icon">
                    <GiftIcon
                      size={theme.sizes.h8}
                      color={theme.colors.textColor}
                    />
                  </span>
                  Kit added
                </p>
              </div>
            </div>
            {true ? (
              <div
                class="row-content-mv-wrap"
                style={{ marginLeft: "12px", flex: "0" }}
              >
                <span className="icon-span">
                  <AcceptCicleIcon
                    size={theme.sizes.h2}
                    color={theme.colors.textColor6}
                  />
                </span>
                <span className="icon-span">
                  <RejectCircleIcon
                    size={theme.sizes.h2}
                    color={theme.colors.tertiaryColor}
                  />
                </span>
              </div>
            ) : (
              <div
                class="row-content-mv-wrap"
                style={{ marginLeft: "12px", flex: "0" }}
              >
                <p className="respondee kit-info">
                  <span className="kit-icon">
                    <PlaneIcon
                      size={theme.sizes.h8}
                      color={theme.colors.textColor}
                    />
                  </span>
                  Resend Invite
                </p>
              </div>
            )}
          </div>

          {/* empty row for adding new one */}
          <div className="response-row-div">
            <div className="response-inside-wrap">
              <div class="row-content-mv-wrap">
                <span className="serial-no">2.</span>
                <p className="respondee respondee-name empty"></p>
              </div>
              <div class="row-content-mv-wrap">
                <p className="respondee empty"></p>
              </div>
              <div class="row-content-mv-wrap">
                <p className="respondee respondee-response empty"></p>
                <p className="respondee kit-info empty"></p>
              </div>
            </div>
            <div class="row-content-mv-wrap" style={{ flex: "0" }}>
              <span className="icon-span ">
                <AddCircleIcon
                  size={theme.sizes.h2}
                  color={theme.colors.textColor}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
