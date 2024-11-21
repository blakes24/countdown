import { useEffect, useState } from "react";
import { CountDiv } from "./CountDiv";

export const CountdownContainer = () => {
  const [time, setTime] = useState(0);
  const deadline = new Date("Dec 25, 2024").getTime();

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = deadline - now;
      setTime(remainingTime > 0 ? remainingTime : 0);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <CountDiv count={days} />
      <CountDiv count={hours} />
      <CountDiv count={minutes} />
      <CountDiv count={seconds} />
    </div>
  );
};
