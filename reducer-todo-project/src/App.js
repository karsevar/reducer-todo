import React, {useReducer} from 'react';
import './App.css';

// components:
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard'; 

// reducer and initial state
import todoReducer, {initialState} from './reducers/todoReducer';

function App() {

  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoCard todoState={todoState} />
    </div>
  );
}

export default App;
