import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days from today

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                setCountdown({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center', gap: '10px', position: 'relative',top: '450px',right:"540px" ,zIndex: 1,}}>
            <div style={{width: '80px',height: '80px',backgroundColor: '#D3D3D3',borderRadius: '8px',display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center',fontSize: '24px',fontWeight: 'bold',color: '#333',}}>
                <div>{countdown.days}</div>
                <span style={{ fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#666',
                }}>Days</span>
            </div>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#D3D3D3',
              borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
            }}>
                <div>{countdown.hours}</div>
                <span style={{
                    fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#666',
                }}>Hours</span>
            </div>
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#D3D3D3',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
            }}>
                <div>{countdown.minutes}</div>
                <span style={{
                    fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#666',
                }}>Minutes</span>
            </div>
            <div style={{
                 width: '80px',
                 height: '80px',
                 backgroundColor: '#D3D3D3',
                 borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333',
            }}>
                <div>{countdown.seconds}</div>
                <span style={{
                    fontSize: '14px',
                    fontWeight: 'normal',
                    color: '#666',
                }}>Seconds</span>
            </div>
        </div>
    );
};

export default CountdownTimer;