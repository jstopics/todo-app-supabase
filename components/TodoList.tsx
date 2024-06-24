import { Tables } from '@/types/supabase'

type Props = {
  todos: Array<Tables<'Todos'>>
}

export default function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.description}</li>
      ))}
    </ul>
  )
}
