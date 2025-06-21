import React from 'react'
import Header from './components/Header'
import Layout from './components/layouts/Layout'
import './App.css'


const App = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Header />
      <Layout />
    </div>
  )
}

export default App
