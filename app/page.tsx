'use server'

import { getTodos } from '@/actions/todos'
import AddTodo from '@/components/AddTodo'
import TodoList from '@/components/TodoList'

export default async function Home() {
  const { data } = await getTodos()

  return (
    <div>
      <h1>Home</h1>
      <AddTodo />
      {data && <TodoList todos={data} />}
    </div>
  )
}
