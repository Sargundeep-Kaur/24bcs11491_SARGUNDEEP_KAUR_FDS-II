import { useState, useEffect } from "react";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stop Watch</h1>

      <h2>
        {String(Math.floor(time / 3600)).padStart(2, "0")}:
        {String(Math.floor((time % 3600) / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </h2>

      <button onClick={() => setIsRunning(true)}>Start</button>

      <button
        onClick={() => setIsRunning(false)}
        style={{ marginLeft: "10px" }}
      >
        Stop
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default StopWatch;