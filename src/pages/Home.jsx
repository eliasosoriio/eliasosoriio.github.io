import React from 'react'
import Hero from '../components/layout/Hero'
import ContactCTA from '../components/sections/ContactCTA'
import LatestPosts from '../components/sections/LatestPosts'
import Clients from '../components/sections/Clients'

function Home() {
  return (
    <main className='mt-10 px-4 flex flex-col gap-16 text-primary-gray animate-fade-in-up'>
        <Hero />
        <LatestPosts />
        <Clients />
        <ContactCTA />
    </main>
  )
}

export default Home
