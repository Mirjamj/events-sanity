import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

// Hero component - renders a prominent header section with option of headline, image and subtitle
export const Hero = ({ headline, image, subtitle }) => {

  return (
    <header className='h-96 flex flex-col justify-center items-center text-center relative bg-green-900'>

      <h1 className='text-4xl md:text-6xl font-bold relative z-20 text-white drop-shadow-xl/90'>{headline}</h1>

      {/* Optional subtitle if provided */}
      {subtitle && (
        <p className='font-semibold relative z-20 text-white drop-shadow-xl/90 m-5'>
          {subtitle}
        </p>
      )}

      {/* Background image if one is provided */}
      {
        image && (
          <>
            <Image aria-hidden="true" className='absolute w-full h-full object-cover z-0' src={urlFor(image.asset).url()} alt={image.alt} width={1080} height={450} />
          </>
        )
      }

    </header >
  )
}

