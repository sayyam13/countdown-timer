import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // Ininitially we add 25 minutes in seconds to display on the page.
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-mono ..">
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"></img>
      <h1 className="text-5xl font-bold mb-4 absolute inset-x-0 top-10 h-16 ... text-white">Countdown Timer</h1>
      <div className ="App-container">
        <div className="text-8xl font-bold text-white">{formatTime(timeLeft)}</div>
        <div className="mt-8">
          <button
            onClick={toggleTimer}
            className={`bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 ${isActive ? 'bg-red-500 hover:bg-red-600' : 'hover:bg-blue-600'}`}
          >
             {isActive ? 'Pause' : 'Start/Resume'}
          </button>
          <button
            onClick={resetTimer}
            className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
