import { useState, useRef } from "react";

const StopWatch = () => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000);
      setIsRunning(true);
    } else {
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIsRunning(false);
  };

  if (second >= 60) {
    setSecond(0);
    setMinute((minute) => minute + 1);
  }
  if (minute >= 60) {
    setMinute(0);
    setHour((hour) => hour + 1);
  }

  return (
    <>
      <div className="flex flex-col gap-12 justify-center items-center h-[100vh]">
        <div className="bg-black text-white text-8xl flex justify-center items-center rounded-[50%]">
          <article className="p-24">
            <span className="p-4 font-bold">
              {hour}:{minute < 10 ? `0${minute}` : minute}:
              {second < 10 ? `0${second}` : second}
            </span>
          </article>
        </div>
        <div className="flex gap-8 flex-row">
          <button
            type="button"
            className="rounded-lg p-4 bg-red-300 hover:bg-red-400 text-black font-bold text-2xl "
            onClick={handleStart}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button
            type="button"
            className="rounded-lg p-4 bg-green-300 hover:bg-green-400 text-black font-bold text-2xl "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default StopWatch;
