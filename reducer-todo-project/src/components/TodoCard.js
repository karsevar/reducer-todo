import React from 'react';

function TodoCard(props) {
    console.log(props.todoState);

    const {todoState, dispatch} = props;

    return (
        <div className='card-container'>
            {todoState.map((object, index) => {
                return (
                    <div 
                        key={index} 
                        className={`todo${object.completed ? ' finished' : ''}`}
                        onClick={() => dispatch({type: 'TOGGLE_TODO', payload: object.id})}
                    >
                        <p>{object.todo}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoCard;