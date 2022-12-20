import React, { useEffect, useState } from 'react'

export const App: React.FC = () => {
  const [products, setProducts] = useState([
    'Porta',
    'Armário',
  ])

  return (
    <div className='bg-zinc-900 h-screen overflow-hidden'>
      <ul>
        {
          products && products.map((product, i) => (
            <li
              key={i}
              >
              {product}
            </li>
          ))
        }
      </ul>

      <button
        className='w-12 h-12 bg-emerald-400 rounded-full text-white opacity-75 font-mono text-xl absolute right-4 bottom-4'
      >
        +
      </button>
    </div>
  )
}