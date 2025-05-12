'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const savedMode = localStorage.getItem('isDark')
    if (savedMode) {
      setIsDark(JSON.parse(savedMode))
    }
  }, [])

  useEffect(() => {
    const classList = document.documentElement.classList
    if (isDark) {
      classList.add('dark')
      localStorage.setItem('isDark', JSON.stringify(true)) 
    } else {
      classList.remove('dark')
      localStorage.setItem('isDark', JSON.stringify(false)) 
    }
  }, [isDark])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    // { href: '/our-tutors', label: 'Tutors'},
    { href: '/enroll', label: 'Enroll' },
  ]

  return (
    <nav className="flex items-center justify-between px-3 py-4 bg-primary/55 dark:bg-secondary/55 shadow fixed w-full z-50">
      <div className="text-xl font-bold flex items-center justify-center">
        <Link href="/">
          <Image src="/images/logo.webp" width={50} height={50} alt="logo" priority />
        </Link>
        <Link href="/" className="text-xl hidden md:block"><h1>El-MARAGY</h1></Link>
      </div>

      <ul className="flex space-x-3 md:space-x-10 rtl:space-x-reverse text-sm md:text-base p-1">
        {navLinks.map((link) => (
          <li key={link.href} className={link.href === "/contact" ? "hidden  md:block" : "" }>
            <Link
              href={link.href}
              className={`md:text-2xl hover:underline transition-colors  ${
                pathname === link.href ? ' text-primary-foreground ' : ''
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsDark(!isDark)} 
          className="rounded-full"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-600" style={{ width: '90%', height: '90%' }} />
          ) : (
            <Moon className="w-5 h-5 bg-black text-white rounded-full" style={{ width: '100%', height: '100%' }} />
          )}
        </Button>
      </div>
    </nav>
  )
}
