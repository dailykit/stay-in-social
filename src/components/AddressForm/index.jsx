import React, { useState } from "react";
import { Flex } from "@dailykit/ui";
import { Wrapper } from "./styles";
import Input from "../Input";
import Button from "../Button";
import Error from "../Error";
import { theme } from "../../theme";
import { validatorFunc } from "../../utils";

export default function AddressForm({ setType, closeAddressForm, onChange }) {
  const [addressType, setAddressType] = useState("home");
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
    const updatedAddressDetails = {
      ...address,
      [name]: {
        ...address[name],
        value: value,
      },
    };
    setAddress(updatedAddressDetails);
    onChange(updatedAddressDetails);
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
  return (
    <Wrapper>
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
          onClick={() => {
            setAddressType("home");
            setType("home");
          }}
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
          onClick={() => {
            setAddressType("work");
            setType("work");
          }}
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
          onClick={() => {
            setAddressType("others");
            setType("others");
          }}
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

        {/* footer submit button  */}
        <div className="footer-submit-btn-div">
          <Button
            onClick={() => allValid() && closeAddressForm()}
            className="custom-submit-button"
          >
            Submit
          </Button>
        </div>
      </Flex>
    </Wrapper>
  );
}
