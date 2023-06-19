import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <AppRoutes />

      </Router>
      <Footer />
    </AppProvider>
  )
}

export default App;
