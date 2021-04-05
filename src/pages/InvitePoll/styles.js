import styled from "styled-components";
import { theme } from "../../theme";

export const Wrapper = styled.div`
  margin-bottom: 5rem;
  .invite-p-head {
    font-size: ${theme.sizes.h7};
    font-weight: 300;
    font-style: italic;
    color: ${theme.colors.textColor4};
    margin: 20px 0;
    text-align: center;
  }
  .slot-div {
    padding: 1rem;
    background: ${theme.colors.mainBackground};
    box-shadow: -3px 3px 6px rgba(21, 23, 30, 0.2),
      3px -3px 6px rgba(21, 23, 30, 0.2), -3px -3px 6px rgba(45, 51, 66, 0.9),
      3px 3px 8px rgba(21, 23, 30, 0.9), inset 1px 1px 2px rgba(45, 51, 66, 0.3),
      inset -1px -1px 2px rgba(21, 23, 30, 0.5);
    border-radius: 12px;
    margin-bottom: 12px;
  }
  .slot-info-head {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor4};
  }
  .slot-info-time {
    font-size: ${theme.sizes.h8};
    font-weight: 500;
    color: ${theme.colors.textColor4};
  }
  .vote-head {
    font-size: ${theme.sizes.h8};
    font-weight: 500;
    color: ${theme.colors.textColor};
  }
  .book-slot {
    text-align: center;
    font-weight: 800;
    font-size: ${theme.sizes.h8};
    color: ${theme.colors.tertiaryColor};
    text-transform: uppercase;
    cursor: pointer;
  }
  .expiry-head {
    font-size: ${theme.sizes.h7};
    font-weight: 400;
    font-style: italic;
    color: ${theme.colors.textColor4};
  }
  .back-to-home {
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    color: ${theme.colors.textColor};
    text-decoration: none;
    text-align: center;
    margin-bottom: 2rem;
    display: block;
  }
  .invitation-div {
    background: ${theme.colors.mainBackground};
    margin-bottom: 1rem;
  }
  .invite-h1-head {
    font-size: ${theme.sizes.h2};
    font-weight: 600;
    color: ${theme.colors.textColor4};
    text-align: center;
    margin-bottom: 1rem;
  }
  .invite-sub-head {
    font-size: ${theme.sizes.h6};
    font-weight: 700;
    color: ${theme.colors.textColor4};
    text-align: left;
    margin-bottom: 1rem;
  }
  .invite-msg-div {
    background: ${theme.colors.textColor9};
    padding: 1rem;
    color: ${theme.colors.textColor4};
    font-size: ${theme.sizes.h6};
    font-weight: 400;
    text-align: left;
    .invite-msg {
      margin-bottom: 12px;
    }
    a {
      color: ${theme.colors.textColor};
      text-decoration: none;
    }
  }
  .invite-through-mail-div {
    padding: 1rem;
    color: ${theme.colors.textColor4};
    margin-bottom: 5rem;
    p {
      font-size: ${theme.sizes.h6};
      font-weight: 400;
    }
    .customInput {
      color: ${theme.colors.textColor4};
      margin: 1rem 0;
    }
    .invitation-address {
      padding: 10px;
      color: ${theme.colors.textColor4};
      background: #eb98ad;
      border-radius: 2px;
      margin: 4px;
    }
    .remove-btn {
      margin-left: 4px;
    }
  }
  .customBtn {
    color: ${theme.colors.textColor4};
    font-size: ${theme.sizes.h8};
    font-weight: 800;
    text-align: center;
    span {
      margin-right: 8px;
    }
  }
  .blink_me {
    animation: blinker 1s linear 1;
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  }

  .share-icon {
    background: ${theme.colors.textColor4};
    width: 40px;
    height: 40px;
    border-radius: 8px;
  }
  .or {
    color: ${theme.colors.textColor4};
    font-size: ${theme.sizes.h8};
    font-weight: 700;
    text-align: center;
    margin-bottom: 1rem;
  }
  .last-msg {
    color: ${theme.colors.textColor4};
    font-size: ${theme.sizes.h9};
    font-weight: 300;
    text-align: center;
    margin: 1rem 0 5rem 0;
  }

  @media (min-width: 769px) {
    .invite-p-head {
      font-size: ${theme.sizes.h9};
      font-weight: 500;
    }
    .back-to-home {
      font-size: ${theme.sizes.h4};
    }
    .invite-h1-head {
      font-size: ${theme.sizes.h1};
    }
    .invite-sub-head {
      font-size: ${theme.sizes.h9};
    }
    .invite-msg-div {
      font-size: ${theme.sizes.h8};
      background: ${theme.colors.textColor8};
    }
    .customBtn {
      font-size: ${theme.sizes.h9};
      height: 48px;
    }
    .or {
      font-size: ${theme.sizes.h9};
    }
    .last-msg {
      font-size: ${theme.sizes.h4};
      font-weight: 500;
    }
  }
`;

export const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 350px;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;
  @media (min-width: 769px) {
    display: flex;
    width: 350px;
    height: 350px;
    justify-content: center;
    align-items: center;
  }
`;
