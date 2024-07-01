'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@supabase/supabase-js'
import { Database, Tables } from '@/types/supabase'

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export const getTodos = async () => {
  const { data, error } = await supabase.from('Todos').select('*')

  if (error) {
    console.error('error', error)
  }

  return { data, error }
}

export const addTodo = async (todo: string) => {
  const { error } = await supabase.from('Todos').insert({
    description: todo,
  })

  if (error) {
    console.error('error', error)
  }

  revalidatePath('/')
}

export const deleteTodo = async (id: number) => {
  const { error } = await supabase.from('Todos').delete().eq('id', id)

  if (error) {
    console.error('error', error)
  }

  revalidatePath('/')
}

export const updateTodo = async (todo: Tables<'Todos'>) => {
  const { error } = await supabase
    .from('Todos')
    .update({
      description: todo.description,
      created_at: todo.created_at,
    })
    .eq('id', todo.id)

  if (error) {
    console.error('error', error)
  }

  revalidatePath('/')
}
