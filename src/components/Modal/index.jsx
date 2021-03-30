import React, { useRef, useEffect } from "react";
import { theme } from "../../theme";
import { CrossIcon } from "../Icons";
import { ModalDiv } from "./styles";

export default function Modal({ children, close, ...props }) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      // console.log(event.target, wrapperRef.current);
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        console.log(wrapperRef.current.contains(event.target));
        close();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <ModalDiv id="modall" {...props} ref={wrapperRef}>
      <div className="modal-header">
        <div className="closeBtn" onClick={close}>
          <CrossIcon size="18" color={theme.colors.textColor} />
        </div>
      </div>
      <div className="modal-body">{children}</div>
    </ModalDiv>
  );
}
