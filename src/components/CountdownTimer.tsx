"use client";

import React, { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: { [key: string]: number } = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index, array) => {
    timerComponents.push(
      <div className="flex items-center flex-col space-y-1" key={interval}>
        <span className="text-2xl font-semibold">
          {isClient ? (timeLeft as any)[interval] : "00"}
        </span>
        <span className="text-xs font-light uppercase">{interval}</span>
      </div>
    );

    if (index < array.length - 1) {
      timerComponents.push(
        <span
          key={interval + "-colon"}
          className="text-2xl font-semibold text-white"
        >
          :
        </span>
      );
    }
  });

  return (
    <div className="flex space-x-2">
      {timerComponents.length ? timerComponents : <span>{"Time's up!"}</span>}
    </div>
  );
};

export default CountdownTimer;
