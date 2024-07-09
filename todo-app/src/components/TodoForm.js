import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function TodoForm() {
    const [newTodo, setNewTodo] = useState({title:'',description:''});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.title==='') return;
        dispatch(addTodo(newTodo));
        setNewTodo({title:'',description:''});
    };

    return (
        <div className='shadow my-1 mx-2 rounded glassy'>
            <div className='bg-primary topBanner'></div>
            <h5 className='text-center m-2'>Todo Form</h5>
            <form onSubmit={handleSubmit} className='m-1 p-1 fw-light'>
                <div className="my-2">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control form-control-sm" id="title" value={newTodo.title}
                        onChange={handleChange} name='title'/>
                </div>
                <div className="mb-1">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" className="form-control form-control-sm" id="description" value={newTodo.description}
                        onChange={handleChange} name='description'/>
                </div>
                <button type="submit" className="btn btn-sm btn-primary float-end my-3">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoForm;