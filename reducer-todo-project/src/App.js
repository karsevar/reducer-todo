import React from 'react';
import './App.css';

// components:
import TodoForm from './components/TodoForm';
import TodoCard from './components/TodoCard'; 

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoCard />
    </div>
  );
}

export default App;
