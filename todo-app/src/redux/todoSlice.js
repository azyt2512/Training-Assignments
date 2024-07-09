// src/slices/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { 
                ...state, 
                todos: [...state.todos, { title: action.payload.title, description: action.payload.description, isCompleted: false }] 
            }
        },

        updateTodo: (state, action) => {
            const index = action.payload.index;
            const updatedTodo = action.payload.newTodo;
            state.todos[index] = updatedTodo;
            return 
        },
        completeTodo: (state, action) => {
            const index = action.payload
            state.todos[index].isCompleted = !state.todos[index].isCompleted;
            return 
        },
        removeTodo: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            }
        },
    },
});

export const { addTodo, updateTodo, completeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
