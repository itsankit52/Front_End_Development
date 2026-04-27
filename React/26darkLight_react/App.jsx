import React, { useState } from "react";
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'

const App = () => {
   const [isDark, setisDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
  return (
    <>
      <Header theme = {[isDark, setisDark]} />
      <Outlet  context={[isDark, setisDark]}/>
    </>
  )
}

export default App
