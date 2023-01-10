
import { Inter } from '@next/font/google'
import axios from "axios"
import { useState } from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Port from './components/portfolio'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  return (
    <>

      <div className="wrapper">
        <Nav />
        <Hero />
        <Port />
      </div>


    </>
  )
}
