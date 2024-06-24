'use client'

import React, { useState } from 'react'

export default function TodoItem({ description }: { description: string }) {
  return (
    <li>
      {description}
      <button className='border rounded p-1 ml-1' onClick={() => {}}>
        Delete
      </button>
    </li>
  )
}
