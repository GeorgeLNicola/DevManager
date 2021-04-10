import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NavBar from './NavBar';

function App() {
  return (
    <div className="navBarSection">
      <NavBar />
    <div className='todo-app'>
      <TodoList />
    </div>
    </div>
  );
}

export default App;