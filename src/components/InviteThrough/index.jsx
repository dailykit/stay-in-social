import React, { useState, useEffect } from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles.js";
import Input from "../Input";
import { CrossIcon } from "../Icons";
import { theme } from "../../theme";

export default function InviteThrough({ onChange }) {
  const [inviteAddress, setInviteAddress] = useState("");
  const [inviteAddressList, setInviteAddressList] = useState([]);
  const [bgStyle, setBgStyle] = useState([]);
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
    console.log(e, e.key, e.keyCode);
    if (value.indexOf(",") > -1 || e.key === "Enter" || e.keyCode === 13) {
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

  useEffect(() => {
    onChange(inviteAddressList);
  }, [inviteAddressList]);
  return (
    <Wrapper>
      <h1 className="invite-h1-head">Invite through Email & Phone</h1>
      <p className="invite-msg">
        Type emails, phone numbers separated by enter or comma{" "}
      </p>
      <Input
        type="text"
        placeholder="enter here"
        value={inviteAddress}
        onChange={onChangeHandler}
        onKeyDown={onChangeHandler}
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
              <span class="remove-btn" onClick={() => onRemoveHandler(index)}>
                <CrossIcon
                  size={theme.sizes.h6}
                  color={theme.colors.textColor4}
                />
              </span>
            </div>
          );
        })}
      </Flex>
    </Wrapper>
  );
}
