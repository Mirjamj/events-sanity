import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

function PublicLayout({ children }) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout