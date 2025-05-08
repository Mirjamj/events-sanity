'use client'

import { getEvents, getEventSectionTitle } from '@/sanity/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DateFormatter from '../date-formatter'
import { CiLocationOn } from 'react-icons/ci'
import { FiArrowRight } from "react-icons/fi";

// Events component - renders a list of events with sorting and filtering options
export const Events = () => {
  // State to store events and the section title
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('')

  // State for sorting order and event filtering
  const [sortOrder, setSortOrder] = useState('')
  const [filter, setFilter] = useState('upcoming')

  // Fetch the events and section title when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      const fetchedEvents = await getEvents()
      const fetchedTitle = await getEventSectionTitle()
      setEvents(fetchedEvents)
      setTitle(fetchedTitle)
    }
    fetchData()
  }, []) // Empty dependency array ensures this effect runs only once after the initial render

  // Filter and sort events based on the selected filter and sort order
  const filterAndSortedEvents = events
    .filter(event => {
      const eventDate = new Date(event.dateTime)
      const now = new Date()

      // Filter events based on the selected filter ('upcoming' or 'past')
      if (filter === 'upcoming') {
        return eventDate >= now // Show upcoming events
      } else {
        return eventDate < now // Show past events
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateTime)
      const dateB = new Date(b.dateTime)

      // Sort events based on the selected sort order (ascending or descending)
      if (sortOrder === 'asc') {
        return dateA - dateB //Soonest first
      } else {
        return dateB - dateA // Latest first
      }
    })

  return (
    <section className='wrapper'>
      <div className='flex justify-between gap-2 md:gap-10'>
        {/* Filter buttons for 'upcoming' and 'past' events */}
        <div className="flex gap-2">
          <button onClick={() => setFilter('upcoming')} className={`p-2 border ${filter === 'upcoming' ? 'text-xs md:text-base px-4 border-2 border-green-700 bg-green-900 text-white rounded-full transition-transform duration-300 ease-in-out transform hover:bg-green-800 hover:border-green-600 shadow-md hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-green-600' : 'bg-white text-xs md:text-base px-4 py-2 border rounded-full border-green-900 whitespace-nowrap'}`}>Upcoming events</button>
          <button onClick={() => setFilter('past')} className={`p-2 border ${filter === 'past' ? 'text-xs md:text-base px-4 border-2 border-green-700 bg-green-900 text-white rounded-full transition-transform duration-300 ease-in-out transform hover:bg-green-800 hover:border-green-600 shadow-md hover:shadow-xl focus:outline-none focus:ring-1 focus:ring-green-600' : 'bg-white text-xs md:text-base px-4 py-2 border rounded-full border-green-900 whitespace-nowrap'}`}>Past events</button>
        </div>

        {/* Dropdown to select the sorting order of events */}
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder} className='text-xs md:text-base border-2 border-green-700 rounded-full px-2'>
          <option value='' disabled>Sort events</option>
          <option value='asc'>Soonest first</option>
          <option value='desc'>Latest first</option>
        </select>
      </div>

      <h1 className='my-10 font-bold text-3xl ps-5'>{title}</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {/* Map through filtered and sorted events to render them */}
        {filterAndSortedEvents.map(event => (
          <Link key={event._id} href={`/events/${event.slug}`} className='flex flex-col gap-3 shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300'>
            {/* Event image */}
            <div className='relative w-full h-[13rem]'>
              <Image src={event.image.url} alt={event.image.alt} fill className='object-cover rounded-t-2xl' sizes='(max-width: 48rem) 100vw' />
            </div>

            {/* Event details */}
            <div className='flex flex-col p-3 flex-grow'>
              <h2 className='text-xl font-semibold mb-2 line-clamp-1'>{event.name}</h2>
              <p>{event.subtitle}</p>
              <div className='flex-grow' />
              <div className='flex justify-between items-center mt-4'>
                <DateFormatter date={event.dateTime} className='text-gray-700' />
                <p className='items-center text-gray-700 flex gap-1'><CiLocationOn />{event.location}</p>
              </div>
              <p className='flex items-center text-gray-800 gap-2 justify-end mt-4'>Read more <FiArrowRight /></p>
            </div>
          </Link>
        ))
        }
      </div>
    </section>
  )
}
