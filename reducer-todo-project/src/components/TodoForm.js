import React, {useState} from 'react';

function TodoForm (props) {

    const {dispatch} = props;

    const [todo, setTodo] = useState('');

    const handleChange = event => {
        // console.log(todo);
        setTodo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({type: 'ADD_TODO', payload: todo});
        setTodo('');
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
                    value={todo} 
                    name='todo'
                    onChange={handleChange}
                />
                <button>Submit!</button>
                <button onClick={event => handleDelete(event)}>Delete Completed!</button>
            </form>
        </div>
    )
}

export default TodoForm;