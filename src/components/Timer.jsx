import React, { useEffect, useState } from "react";

const Timer = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      clearInterval(interval);
      onTimeUp(); // Move to the next question when time is up
    }

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-red-500 font-bold text-xl">
      ⏳ Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;
