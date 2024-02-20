/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/j06jsObZA0y
 */
import Link from "next/link"

import { Fragment, JSX } from 'react'
import { Search } from "./search"

export default function Main() {
  return (
    <>
       <Fragment>
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="bg-gray-50/90 border-t border-b border-gray-200 border-gray-200 dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800">
          <div className="container px-4 py-4 md:py-6 grid items-center gap-4 text-center md:gap-8 lg:grid-cols-2">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <Link className="flex items-center space-x-2 text-2xl font-bold tracking-tighter" href="#">
                <span className="sr-only">Cafecito</span>
                <span className="text-gray-500 dark:text-gray-400">Cafecito</span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      {/* Resto del contenido */}

    </Fragment>
      <section className="w-full py-6 md:py-12 lg:py-16 lg:pt-24 md:pt-24 pt-8 sm:pt-0">
        <div className="container px-4 grid items-center gap-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Busqueda de Servicios
            </h1>
          </div>
          <div className="flex justify-center">
           <Search />
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-12">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Categories</h2>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-4 px-4 md:gap-8 md:grid-cols-2 lg:max-w-6xl">
            <div className="flex items-center space-x-2">
              <Link className="font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Music
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">($5, $10, $20)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link className="font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Art
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">($3, $7, $15)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link className="font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Writing
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">($2, $5, $10)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link className="font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Podcasts
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">($1, $3, $5)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link className="font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Photography
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">($2, $4, $8)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link className="font-medium hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
                Video
              </Link>
              <span className="text-sm text-gray-500 dark:text-gray-400">($5, $10, $20)</span>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="w-full">
        <div className="container py-12 grid gap-4 text-center md:gap-8 md:grid-cols-2 lg:py-16">
          <div className="space-y-4">
            <Link className="flex items-center space-x-2 text-2xl font-bold tracking-tighter" href="#">
              <span className="sr-only">Cafecito</span>
              <span className="text-gray-500 dark:text-gray-400">Cafecito</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Cafecito. All rights reserved.</p>
          </div>
          <nav className="flex flex-col items-center justify-center space-y-2 text-sm font-medium md:flex-row md:space-y-0 md:justify-end md:gap-4">
            <Link className="hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
              How it works
            </Link>
            <Link className="hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
              Find creators
            </Link>
            <Link className="hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
              Create page
            </Link>
            <Link className="hover:underline hover:text-gray-900 dark:hover:text-gray-50" href="#">
              Log in
            </Link>
          </nav>
        </div>
      </footer>
    </>
  )


}
