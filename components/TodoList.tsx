'use client'

import { useState } from 'react'
import { Tables } from '@/types/supabase'
import TodoItem from './TodoItem'

type Props = {
  todos: Array<Tables<'Todos'>>
}

export default function TodoList({ todos }: Props) {
  const [selectedTodoId, setSelectedTodoId] = useState<number>(-1)

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          selectedTodoId={selectedTodoId}
          setSelectedTodoId={setSelectedTodoId}
        />
      ))}
    </ul>
  )
}
