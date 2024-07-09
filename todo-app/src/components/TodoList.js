import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div className='shadow mx-2 my-3 mt-4 rounded glassy'>
        <div className='bg-success topBanner'></div>
        <h4 className='text-center my-2'>Todo List</h4>
        <div className='py-2 scroll-div'style={{display:(todos.length === 0 ? 'none' : 'block')}}>
            {Array.isArray(todos) &&  todos.map((todo, index) => (
                <TodoItem 
                key={index}
                index={index}
                todo={todo}
                />
            ))}
        </div>
    </div>
  );
}

export default TodoList;
