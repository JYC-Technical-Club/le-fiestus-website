import {useState, useEffect} from 'react';
import './CountdownTimer.css';
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <div className='countdown-dhm'>
                <span className='two-numbers'>{remainingTime.days}</span>
                <span className='Time-Parameters'>Days</span>
            </div>
            <div className='countdown-dhm'>
                <span className="two-numbers">{remainingTime.hours}</span>
                <span className='Time-Parameters'>Hours</span>
            </div>
            <div className='countdown-dhm'>
                <span className="two-numbers">{remainingTime.minutes}</span>
                <span className='Time-Parameters'>Minutes</span>
            </div>
        </div>
    );
}

export default CountdownTimer;