import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {

  return (
    <ul className='list'>
        {todos.length === 0 && "No Todos, try add something"}
        {todos.map(todo => {
            return (
                <TodoItem 
                    {...todo} 
                    key={todo.id} 
                    toggleTodo={toggleTodo} 
                    deleteTodo={deleteTodo} 
                />
            )
        })}
    </ul>
  )
}
