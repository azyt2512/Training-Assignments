import React from 'react';

function TodoCard({ key, index, todo}) {
    const randColors = ['#fff3cd','#f8d7da','#d1e7dd','#cfe2ff','#f7d6e6']
    return (
        <div className='shadow-sm col-lg-3 col-md-4 p-3 h-50 m-3 align-self-start' style={{backgroundColor:randColors[index%5]}}>
            <div className='text-center fw-bold'>{todo.title}</div>
            <div >{todo.description}</div>
        </div>
    );
}

export default TodoCard;