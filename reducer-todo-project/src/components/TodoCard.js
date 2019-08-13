import React from 'react';

function TodoCard(props) {
    console.log(props.todoState);

    const {todoState} = props;

    return (
        <div className='card-container'>
            {todoState.map((object, index) => {
                return <p key={index}>{object.todo}</p>
            })}
        </div>
    )
}

export default TodoCard;