import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, completeTodo, removeTodo } from '../redux/todoSlice';

function TodoItem({ todo, index }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTodo, setNewTodo] = useState(todo);
    const dispatch = useDispatch();

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTodo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleClose = () => {
        setIsEditing(false);
    };
    const handleSave = (e) => {
        e.preventDefault();
        dispatch(updateTodo({ index, newTodo }));
        setIsEditing(false);
    };

    return (
        <div className='row py-3 rounded bg-light m-2 d-flex justify-content-between' >
            <div className='col-md-12 col-sm-12 col-lg-8 py-1 rounded row'>
                {todo.isCompleted ? (
                    <div className='rounded-circle text-light btn btn-sm col-1' onClick={() => dispatch(completeTodo(index))} disabled={isEditing}>
                        <span className=' align-middle material-symbols-outlined bg-success rounded-circle'  >
                            check_circle
                        </span>
                    </div>
                ) : (
                    <div className='rounded-circle btn btn-sm col-1' onClick={() => dispatch(completeTodo(index))} disabled={isEditing}>
                        <span className=' align-middle material-symbols-outlined'>
                            check_circle
                        </span>
                    </div>
                )}
                <div className='ms-2 d-inline col-10 text-wrap'>
                    {todo.title}
                </div>
            </div>
            <div className='col-md-12 col-sm-12 col-lg-4 float-end'>
                <div className="d-flex justify-content-end">
                    <span id='editbtn' className='rounded-circle p-1 mx-2 btn btn-sm btn-outline-primary material-symbols-outlined' onClick={handleEdit} style={{ pointerEvents: (todo.isCompleted ? 'none' : 'auto') }} data-bs-toggle="modal" data-bs-target="#editTodo" disabled={todo.isCompleted}>edit</span>
                    <div className="modal fade" id="editTodo" tabIndex="-1" aria-labelledby="editTodo" aria-hidden={!isEditing}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update Todo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleSave} className='m-1 p-1 fw-light'>
                                        <div className="my-2">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input type="text" className="form-control form-control-sm" id="title" value={newTodo.title}
                                                onChange={handleChange} name='title' />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea type="text" className="form-control form-control-sm" id="description" value={newTodo.description}
                                                onChange={handleChange} name='description' />
                                        </div>
                                        <button type="submit" className="btn btn-sm btn-primary float-end my-3" data-bs-dismiss="modal">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id='dltbtn' className='rounded-circle mx-2 p-1 btn btn-sm btn-outline-danger material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#deleteTodo" style={{ pointerEvents: (isEditing ? 'none' : 'auto') }}>delete</span>
                    <div className="modal fade" id="deleteTodo" tabIndex="-1" aria-labelledby="editTodo" aria-hidden={!isEditing}>
                        <div className="modal-dialog m-6">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Delete Todo</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                                </div>
                                <div className='modal-body'>
                                    <div>Confirm delete Todo: <strong>"{todo.title}"</strong></div>
                                    <button className='btn btn-sm btn-danger float-end' onClick={() => dispatch(removeTodo(index))} data-bs-dismiss="modal">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default TodoItem;