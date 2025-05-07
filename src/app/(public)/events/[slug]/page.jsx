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


export const generateMetadata = async ({ params }) => {
  const { slug } = await params

  const event = await client.fetch(GET_EVENT_QUERY, { slug })

  return {
    title: event.name,
  }
}

async function EventDetailsPage({ params }) {

  const { slug } = await params

  const event = await getEventBySlug(slug)

  if (!event) {
    return notFound()
  }

  console.log(event)

  return (
    <div className='wrapper flex'>
      <div className='w-full md:w-1/2 aspect-auto'>
        <Image src={event.image.url} alt={event.image.alt} height={200} width={400} className='h-full w-full object-cover' />
      </div>
      <div className='w-full md:w-1/2 prose'>
        <h1>{event.name}</h1>
        <PortableText value={event.description} />
        <div>
          <DateFormatter date={event.dateTime} />
          <p className='flex'><CiLocationOn />{event.location}</p>
        </div>
        <Link href='#' className='bg-black text-white p-2 '>Book now</Link>
      </div>
    </div>
  )
}

export default EventDetailsPage