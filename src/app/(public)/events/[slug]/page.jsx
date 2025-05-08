import { getEventBySlug } from '@/sanity/lib/api'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CiLocationOn } from "react-icons/ci";
import React from 'react'
import DateFormatter from '@/components/date-formatter';
import { GET_EVENT_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

// This function generates page metadata for an event based on the slug in the URL
export const generateMetadata = async ({ params }) => {
  const { slug } = await params

  // Fetch the event details from CMS using the slug
  const event = await client.fetch(GET_EVENT_QUERY, { slug })

  // Return a metadata object with the event's name as the title
  return {
    title: event.name,
  }
}

// Main component for rendering the event details page
async function EventDetailsPage({ params }) {
  const { slug } = await params

  // Retrieve the full event data using the slug
  const event = await getEventBySlug(slug)

  // If no event is found, display a 404 Not Found page
  if (!event) {
    return notFound()
  }

  return (
    <div className='wrapper flex flex-col md:flex-row md:gap-10'>
      {/* Left column: Event image */}
      <div className='w-full md:w-1/2 aspect-auto'>
        <Image src={event.image.url} alt={event.image.alt} height={200} width={400} className='h-full w-full object-cover' />
      </div>

      {/* Right column: Event details */}
      <div className='w-full md:w-1/2 prose'>
        <h1 className='mt-5'>{event.name}</h1>
        <PortableText value={event.description} />

        {/* Date and location section */}
        <div className='flex justify-between'>
          <DateFormatter date={event.dateTime} className='font-semibold' />
          <p className='flex items-center gap-1'><CiLocationOn aria-hidden='true' />{event.location}</p>
        </div>

        {/* Call to action button */}
        <button href='#' className='w-full bg-green-900 text-white p-2 text-center'>
          Book now
        </button>
      </div>
    </div>
  )
}

export default EventDetailsPage