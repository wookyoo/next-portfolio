'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
// import Providers from './providers'
// import ThemeSwitcher from './ThemeSwitcher'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  
  const pathname  = usePathname()

  const navLink = [
    {name: "Home", link: "/",},
    {name: "Project", link: "/projects",},
    {name: "About", link: "/about-me",}
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Wookyoo Portfolio</title>
        <meta name='description' content='Personal Web portfolio' />
      </head>
      <body>
        <header className="header-layout bg-gradient-to-b from-orange-100 to-30%">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="dark:text-white ml-3 text-2xl font-mono">Wookyoo Kang</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              {navLink.map(({link, name}) => (
                <Link key={name} href={link} className={`${pathname  === link ? 'border-blue-500 rounded py-1 px-3 bg-blue-500 text-white hover:bg-blue-700' : 'hover:text-blue-500'} inline-block mr-5`}>
                  {name}
                </Link>
              ))}
              {/*
              <Link href="/" className={`link ${pathname === '/' ? 'active mr-5 hover:text-gray-900' : 'mr-5 hover:text-gray-900'}`}>Home</Link>
              <Link href="/projects" className="mr-5 hover:text-gray-900">Project</Link>
              <Link href="/about-me" className="mr-5 hover:text-gray-900">About</Link >
               */}
              {/* <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link> */}
            </nav>
          </div>
        </header>

        
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

                  

                </div>
            </section>
        </main> */}

        {/* <Providers>
          <ThemeSwitcher> {children} </ThemeSwitcher>
        </Providers> */}

        {children}
        
        <footer className="text-gray-600 body-font sm:pt-6 ">
          <div className="bg-gray-100">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 by Full-stack Java Developers <br/> Powered and secured by Wookyoo Kang
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="ml-3 text-gray-500" href="https://github.com/wookyoo" target="_blank">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500" href="http://ca.linkedin.com/in/wookyoo" target="_blank">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
