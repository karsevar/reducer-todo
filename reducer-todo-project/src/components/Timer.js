import React, {useState, useEffect} from 'react';

function Timer(props) {
    
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(Number(props.time));

    function reset() {
        setSeconds(0);
    }

    useEffect(() => {
        let interval = null;

        if (minutes >= 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);

            if (seconds === 0) {
                reset();
                setMinutes(minutes => minutes - 1);
                setSeconds(60)
            }
        }

        return () => clearInterval(interval);
    }, [minutes, seconds]);

    return (
        <>
            <div className='todo-timer'>
                <div className='time'>
                    {minutes < 0 ? <p style={{color: 'red'}}>Over Due</p> : <p>{minutes} : {seconds}</p>}
                </div>
            </div>
        </>
    )
}

export default Timer;