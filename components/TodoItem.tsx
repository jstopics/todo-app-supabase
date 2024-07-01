'use client'

import { deleteTodo, updateTodo } from '@/actions/todos'
import { Tables } from '@/types/supabase'
import { useState } from 'react'

type Props = {
  todo: Tables<'Todos'>
  selectedTodoId: number
  setSelectedTodoId: React.Dispatch<React.SetStateAction<number>>
}

export default function TodoItem({
  todo: t,
  selectedTodoId,
  setSelectedTodoId,
}: Props) {
  const [todo, setTodo] = useState(t)

  const handleUpdateTodo = () => {
    updateTodo(todo)
    setSelectedTodoId(-1)
  }

  const handleDeleteTodo = () => {
    deleteTodo(todo.id)
  }

  return (
    <li>
      <input
        className='border rounded p-1 mt-1'
        type='text'
        value={todo.description ? todo.description : ''}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        onClick={() => setSelectedTodoId(todo.id)}
      />

      {selectedTodoId === t.id && (
        <>
          <button
            className='border rounded p-1 ml-1'
            onClick={handleUpdateTodo}
          >
            Update
          </button>
          <button
            className='border rounded p-1 ml-1'
            onClick={handleDeleteTodo}
          >
            Delete
          </button>
        </>
      )}
    </li>
  )
}
