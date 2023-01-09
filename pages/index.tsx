
import { Inter } from '@next/font/google'
import axios from "axios"
import { useState } from 'react'
import Nav from './components/nav'
import Hero from './components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  return (
    <>
      <body>
        <div className="wrapper">
          <Nav />
          <Hero />
        </div>

      </body >
    </>
  )
}
