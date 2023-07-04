import React, { useState } from 'react';
import './alarm.css'

const AlarmClock = () => {
  const [time, setTime] = useState('');
  const [alarmSet, setAlarmSet] = useState(false);
  
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  
  const handleAlarmSet = () => {
    setAlarmSet(true);
  };
  
  const handleAlarmOff = () => {
    setAlarmSet(false);
    setTime('');
  };
  
  const checkAlarm = () => {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
    if (currentTime === time) {
      alert('Wake up!');
      setAlarmSet(false);
      setTime('');
    }
  };
  
  setInterval(checkAlarm, 1000);
  
  return (
    <div>
      <h2>Alarm Clock</h2>
      <div>
        <input className='alarm' type="time" value={time}  onChange={handleTimeChange}/>
        {!alarmSet ? (
          <button onClick={handleAlarmSet}>Set Alarm</button>
        ) : (
          <button onClick={handleAlarmOff}>Turn Off Alarm</button>
        )}
      </div>
    </div>
  );
};

export default AlarmClock;
