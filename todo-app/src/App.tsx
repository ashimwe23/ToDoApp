
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')
  function addTodo() {
    if (newTodo.trim() === '') {
      return
    }

    
    const todo: Todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false
    }

    
    setTodos([...todos, todo])
    setNewTodo('')
  }

  return (
    <div className="min-h-screen bg-[#191919] flex items-center justify-center px-4 py-8">

      <div className="mx-auto w-full max-w-263.75 rounded bg-white px-6 py-8 sm:px-16">

        
        <h1 className="mb-16 text-center text-6xl font-bold tracking-wide text-[#eeeeee] sm:text-7xl md:text-8xl">
          todos
        </h1>

        
        <div className="flex h-18 items-center rounded-full border border-gray-200 px-6 shadow-md sm:px-10">

          <input
            type="text"
            placeholder="Add todo..."
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                addTodo()
              }
            }}
            className="w-full border-none bg-transparent text-xl text-gray-700 outline-none placeholder:text-gray-800"
          />

          <button
            type="button"
            onClick={addTodo}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>

        </div>

        
        <div className="mt-10">

          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex min-h-[95px] items-center gap-5 border-b border-gray-200 py-3"
            >

            
              <input
                type="checkbox"
                className="h-5 w-5 shrink-0 cursor-pointer accent-teal-600"
              />

              
              <p className="flex-1 text-lg text-gray-600 sm:text-xl md:text-2xl">
                {todo.text}
              </p>

              
              <button
                type="button"
                className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-gray-100 text-red-500"
              >
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default App
