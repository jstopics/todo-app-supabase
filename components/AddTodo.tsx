'use client'

import { addTodo } from '@/actions/todos'
import { useState } from 'react'

export default function AddTodo() {
  const [todo, setTodo] = useState('')

  const handleAddTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <div>
      <input
        type='text'
        className='border'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo} disabled={todo === ''}>
        Add
      </button>
    </div>
  )
}
