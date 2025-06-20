import React from 'react'
import Header from './components/Header'
import HeroSection from './pages/HomeSection'
import HomeSection from './pages/HomeSection'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <HomeSection />
    </div>
  )
}

export default App
