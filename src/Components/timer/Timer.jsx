import React, { memo, useEffect, useState } from 'react';
import './Timer.css';

function Timer() {
  const [sec, setSec] = useState(null);
  const [min, setMin] = useState(null);
  const [hour, setHour] = useState(null);
  const [day, setDay] = useState(null);

  useEffect(() => {
    let timer = setInterval(() => {
      const remainingTime = Math.floor(new Date(2024, 4, 31).getTime() - new Date().getTime());

      setSec(Math.floor((remainingTime % 60000) / 1000));
      setMin(Math.floor(remainingTime % (60000 * 60) / 60000));
      setHour(Math.floor(remainingTime % (60000 * 60 * 60) / (60000 * 60)));
      setDay(Math.floor(remainingTime % (60000 * 60 * 60 * 24) / (60000 * 60 * 24)));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timer'>
      <h1>ԲԱՑՄԱՆԸ ՄՆԱՑԵԼ Է</h1>
      <div className='timer_content'>
        <div>
          <span>{day}</span>
          <span>օր</span>
        </div>
        <div>
          <span>{hour}</span>
          <span>ժամ</span>
        </div>
        <div>
          <span>{min}</span>
          <span>րոպե</span>
        </div>
        <div>
          <span>{sec}</span>
          <span>վայրկյան</span>
        </div>
      </div>
    </div>
  )
}

export default memo(Timer)