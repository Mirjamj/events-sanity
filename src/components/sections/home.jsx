import Link from 'next/link'
import React from 'react'

export const Home = ({ headline, body }) => {
  return (
    <div className="wrapper text-center my-5">
      <h2 className='text-xl md:text-4xl font-bold'>{headline}</h2>
      <p className='my-8'>{body}</p>
      <Link href="/events" className="px-5 py-2 border-2 border-green-700 bg-green-900 text-white rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-green-800 hover:border-green-600 shadow-md hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-green-600">
        See all events
      </Link>
    </div>
  )
}

