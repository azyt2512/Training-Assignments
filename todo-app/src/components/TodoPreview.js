import TodoCard from './TodoCard';
import { useSelector } from 'react-redux';
function TodoPreview() {
  const todos = useSelector((state) => state.todos.todos);

    return (
        <>
            <div className='bg-warning topBanner'></div>
            <h4 className='text-center mt-2'>Preview</h4>
            <div className='row px-3 py-1 justify-content-between'>
                {Array.isArray(todos) && todos.map((todo, index) => (
                    <TodoCard 
                    key={index}
                    index={index}
                    todo={todo}
                    />
                ))}
            </div>
        </>
    );
}

export default TodoPreview;