'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// NavLink component – renders a Next.js Link and applies active styling based on current route
export const NavLink = ({ children, className, href }) => {

  // Get the current route pathname
  const pathname = usePathname()

  // Determine if the link is active by checking for exact match or nested route
  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link href={href}
      className={`text-gray-800 hover:font-semibold ${className} ${isActive ? 'font-semibold text-green-900' : 'font-normal'}`
      }
    >{children}</Link>
  )
}
