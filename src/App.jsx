import React from 'react'
import Header from './components/Header'
import HeroSection from './pages/HomeSection'
import HomeSection from './pages/HomeSection'
import Layout from './components/layouts/Layout'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <Layout />
    </div>
  )
}

export default App
