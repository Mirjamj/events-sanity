import Link from 'next/link'
import React from 'react'
import { NavLink } from './nav-link'
import { getPages } from '@/sanity/lib/api'
import Image from 'next/image'

export const Navbar = async () => {

  const pages = await getPages()

  return (
    <nav className='wrapper flex justify-between items-center py-4'>
      <Link href='/' className='text-3xl font-bold'>
        <Image src='/logo.png' width={150} height={100} alt='events logo' />

      </Link>
      <ul className='flex gap-4'>
        {
          pages.map(page => (
            <li key={page._id}>
              <NavLink href={`${page.slug === '/' ? '' : '/'}${page.slug}`}>{page.title}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav >
  )
}
