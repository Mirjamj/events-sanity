import { getEvents } from '@/sanity/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DateFormatter from '../date-formatter'
import { CiLocationOn } from 'react-icons/ci'
import { FiArrowRight } from "react-icons/fi";


export const Events = async ({ title }) => {

  const events = await getEvents()

  return (
    <section className='wrapper'>
      <h2 className='my-10 font-bold'>{title}</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {events && events.map(event => (
          <Link key={event._id} href={`/events/${event.slug}`} className='border border-pink-500 rounded overflow-hidden hover:border-2 hover:scale-105 transition'>
            <div className='w-full aspect-auto'>
              <Image src={event.image.url} alt={event.image.alt} width={200} height={100} className='w-full h-full object-cover' />
            </div>
            <h3 className='font-bold'>{event.name}</h3>
            <p>{event.subtitle}</p>
            <div>
              <DateFormatter date={event.dateTime} />
              <p className='flex'><CiLocationOn />{event.location}</p>
            </div>
            <p className='flex items-center gap-1'>Read more <FiArrowRight /></p>
          </Link>
        ))
        }
      </div>
    </section>
  )
}
