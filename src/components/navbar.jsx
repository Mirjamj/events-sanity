'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NavLink } from './nav-link'
import { getPages } from '@/sanity/lib/api'
import Image from 'next/image'
import { LiaBarsSolid } from "react-icons/lia";

// Navbar component – renders the website's navigation menu with responsive design and dynamic pages
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false) // State to track the mobile menu visibility
  const [pages, setPages] = useState([]) // State to store the fetched pages

  // Fetch pages when the component mounts
  useEffect(() => {
    const fetchPages = async () => {
      const data = await getPages() // Fetch pages
      setPages(data) // Store fetched pages in state
    }
    fetchPages()
  }, []) // Empty dependency array ensures this runs once when the component mounts


  return (
    <nav className='wrapper flex justify-between items-center py-4 relative'>
      {/* Logo and home link */}
      <Link href='/' className='text-3xl font-bold'>
        <Image src='/logo.png' width={150} height={100} alt='events logo' />
      </Link>

      {/* Mobile menu toggle button */}
      <button
        className="md:hidden z-50"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        type='button'>
        <LiaBarsSolid className="text-3xl" />
      </button>

      {/* Mobile menu (appears when 'menuOpen' is true) */}
      {menuOpen && (
        <ul className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-md z-50 flex flex-col md:hidden" aria-hidden={!menuOpen}>

          {/* Dynamically render list items for each page */}
          {pages.map((page) => (
            <li key={page._id} onClick={() => setMenuOpen(false)}>
              <NavLink
                href={`${page.slug === '/' ? '' : '/'}${page.slug}`}
                className="block px-4 py-2 hover:bg-gray-100"
                aria-label={`Go to ${page.title}`}
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop menu – hidden on mobile */}
      <ul className="hidden md:flex">
        {pages.map((page) => (
          <li key={page._id}>
            <NavLink href={`${page.slug === '/' ? '' : '/'}${page.slug}`} aria-current={page.slug} className='px-6 py-3'>
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav >
  )
}
