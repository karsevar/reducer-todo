import React, {useState, useEffect} from 'react';

function Timer(props) {
    const [seconds, setSeconds] = useState(58);
    const [minutes, setMinutes] = useState(0);

    function reset() {
        setSeconds(0);
    }

    useEffect(() => {
        let interval = null;

        interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);

        if (seconds === 60) {
            reset();
            setMinutes(minutes => minutes + 1) 
        }

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <>
            <div className='todo-timer'>
                <div className='time'>
                    {minutes} : {seconds}
                </div>
            </div>
        </>
    )
}

export default Timer;