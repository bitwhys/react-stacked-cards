import React from 'react'
import imgSrc from '../assets/images/anchorshark.png'

export type CardProps = {}

const Card = ({}: CardProps) => {
  return (
    <div className="max-w-sm rounded-3xl bg-white p-10 shadow-lg">
      <div className="flex flex-col space-y-12">
        <div className="aspect-w-1 aspect-h-1 flex-shrink-0">
          <div className="h-full w-full rounded-full bg-zinc-50"></div>
          <img src={imgSrc} alt="" className="h-full w-full" />
        </div>
        <div className="flex flex-col space-y-1 text-center">
          <h1 className="font-title text-3xl font-bold">Congratulations</h1>
          <p className="text-lg text-zinc-600">Fringilla arcu velit pulvinar euismod. Lorem ipsum dolor sit amet.</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-transparent bg-cyan-500 px-6 py-3 text-2xl font-semibold
              font-medium text-white shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500
              focus:ring-offset-2"
        >
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}

export default Card
