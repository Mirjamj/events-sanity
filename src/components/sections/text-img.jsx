import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

// TextImg section component – displays a headline, body text, and an image side-by-side
export const TextImg = ({ headline, image, body }) => {
  return (
    <section className="wrapper flex flex-col md:flex-row md:gap-10 md:items-center my-10">

      {/* Text content column */}
      <div className='md:w-1/2'>
        <h2 className='text-xl md:text-4xl font-bold'>{headline}</h2>
        <p className='my-5'>{body}</p>
      </div>

      {/* Image column (conditionally rendered) */}
      {image && (
        <div className="md:w-1/2 h-[400px] overflow-hidden">
          <Image
            className='w-full h-full object-cover'
            src={urlFor(image.asset).url()}
            alt={image.alt}
            width={600}
            height={400} />
        </div>
      )}


    </section>
  )
}
