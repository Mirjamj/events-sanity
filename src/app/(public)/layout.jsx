import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

// Public layout component that wraps the entire public-facing site
function PublicLayout({ children }) {
  return (
    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <header role='banner'>
        <Navbar />
      </header>

      <main role='main'>
        {children}
      </main>

      <footer role='contentinfo'>
        <Footer />
      </footer>
    </div>
  )
}

export default PublicLayout