import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [font, setFontSize] = useState(10)

  const inc = () => {
    setFontSize(font + 1)
  }
  const dec = () => {
    setFontSize(font - 1)
  }

  return (
    <div className='flex flex-col items-center justify-center bg-gray-200 min-h-screen'>
      <button
        type='submit'
        className='rounded-lg w-96 h-10 border-blue-600 text-white bg-blue-600'
        onClick={inc}
      >
        +
      </button>
      <button
        type='submit'
        onClick={dec}
        className='rounded-lg w-96 h-10 mt-8 border-blue-600 bg-blue-600 text-white'
      >
        -
      </button>
      <span className='mt-8' style={{ fontSize: font }}>
        Praticando (1) … Aumentar e diminuir tamanho de texto da página
      </span>
    </div>
  )
}

export default Home
