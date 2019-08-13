import React, {useState} from 'react';

function TodoForm (props) {

    const {dispatch} = props;

    const [todo, setTodo] = useState({todo: '', time: ''});

    const handleChange = event => {
        setTodo({...todo, [event.target.name]: event.target.value});
        //console.log(todo);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TODO', payload: todo});
        setTodo({todo: '', time: ''});
    }

    const handleDelete = event => {
        event.preventDefault();
        dispatch({type: 'DELETE_COMPLETED'});
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='todo'
                    value={todo.todo} 
                    name='todo'
                    onChange={handleChange}
                />
                <input 
                    placeholder='minutes'
                    type='number'
                    value={todo.time}
                    name='time'
                    onChange={handleChange}
                />
                <button>Submit!</button>
                <button onClick={event => handleDelete(event)}>Delete Completed!</button>
            </form>
        </div>
    )
}

export default TodoForm;