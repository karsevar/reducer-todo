import React, {useState, useEffect} from 'react';

function Timer(props) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle(event) {
        event.stopPropagation();
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }
    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
            <div className='todo-timer'>
                <div className='time'>
                    {seconds}s
                </div>
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={event => toggle(event)}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
            </div>
        </>
    )
}

export default Timer;