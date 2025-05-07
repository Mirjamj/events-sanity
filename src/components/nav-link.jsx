'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const NavLink = ({ children, className, href }) => {

  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(href + '/')

  return (
    <Link href={href}
      className={`text-gray-800 hover:font-semibold ${className}, ${isActive ? 'font-semibold text-green-900' : 'font-normal'}`
      }
    >{children}</Link>
  )
}
