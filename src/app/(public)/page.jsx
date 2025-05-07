import { Sections } from '@/components/sections/sections'
import { getPageBySlug } from '@/sanity/lib/api'
import React from 'react'

async function HomePage() {

  const pageResult = await getPageBySlug('/')

  return (
    <div>
      <Sections sections={pageResult.sections} />
    </div>
  )
}

export default HomePage

