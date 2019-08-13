import React, {useState} from 'react';

function TodoForm (props) {

    const [todo, setTodo] = useState('');

    const handleChange = event => {
        // console.log(todo);
        setTodo(event.target.value);
    };

    return (
        <div className='form-container'>
            <form>
                <input 
                    placeholder='todo'
                    value={todo} 
                    name='todo'
                    onChange={handleChange}
                />
                <button>Submit!</button>
            </form>
        </div>
    )
}

export default TodoForm;