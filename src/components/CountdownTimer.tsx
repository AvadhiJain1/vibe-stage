import { useState, useEffect } from "react";

interface Props {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: Props) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-6 justify-center">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl glass flex items-center justify-center neon-border">
            <span className="font-heading text-2xl sm:text-3xl font-black text-primary">
              {String(u.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-widest mt-2">{u.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
