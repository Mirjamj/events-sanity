import { Sections } from '@/components/sections/sections'
import { getPageBySlug } from '@/sanity/lib/api'
import React from 'react'


// HomePage component - fetches and renders the homepage content dynamically
async function HomePage() {

  // Fetch the homepage data based on the slug for the root path "/"
  const pageResult = await getPageBySlug('/')

  return (
    <div>
      <Sections sections={pageResult.sections} />
    </div>
  )
}

export default HomePage

