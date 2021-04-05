import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Wrap } from "./styles";
import { Booking, BackDrop } from "../../components";
import celebration from "../../assets/images/celebration.png";

export default function BookingPage() {
  const history = useHistory();
  const [isCelebrating, setIsCelebrating] = useState(false);
  const stopCelebration = () => {
    setTimeout(setIsCelebrating(false), 2000);
    history.push("/invite");
  };
  const startCelebration = () => {
    setIsCelebrating(true);
    setTimeout(stopCelebration, 2000);
  };
  return (
    <Wrap>
      <BackDrop show={isCelebrating}>
        <div class="booking-done">
          <img src={celebration} alt="celebration-emoji" />
          <p>Your're BOOKED!</p>
        </div>
      </BackDrop>
      <Booking onBooking={startCelebration} />
    </Wrap>
  );
}
