// components/Clock.tsx
"use client";

import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(time);

  const cleanDate = formattedTime.replace(/,/g, '');

  return (
    <time className="text-sm font-medium">
      {cleanDate}
    </time>
  );
};

export default Clock;