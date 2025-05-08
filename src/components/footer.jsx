import React from 'react'

// Simple footer with static copy and dynamic current year
export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='mt-6 py-4 text-center bg-black text-white'>&copy; {currentYear} events stockholm</div>
  )
}

