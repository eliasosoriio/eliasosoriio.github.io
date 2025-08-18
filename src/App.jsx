import { Header } from './components/layout/Header'
import Hero from './components/layout/Hero'
import About from './components/sections/About'
import Brands from './components/sections/Brands'
import Contact from './components/sections/Contact'
import Services from './components/sections/Services'
import { Quote } from './components/ui/Quote'

function App() {

  return (
    <>
      <Header />
      <main className='mt-10 px-4 flex flex-col gap-16 text-primary-gray animate-fade-in-up'>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Quote />
        <Contact />
      </main>
    </>
  )
}

export default App
