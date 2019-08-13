import React from 'react';

function TodoCard(props) {
    console.log(props.todoState);

    const {todoState} = props;

    return (
        <div className='card-container'>
            {todoState.map((object, index) => {
                return (
                    <div key={index} className={`todo${object.completed ? ' finished' : ''}`}>
                        <p>{object.todo}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoCard;