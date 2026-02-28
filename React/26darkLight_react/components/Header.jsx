// import React, { useState } from "react";
export default function Header({theme}) {

  // const [isDark, setisDark] = useState(false);
  const [isDark, setisDark] =theme;

  /*This is not correct method
      if(isDark){
        document.body.classList.add('dark')
      }
      else{
        document.body.classList.remove('dark')
  }*/

      

  return (
    <header style={{ background: 'linear-gradient(135deg, #ff00dd, #975858bd)' }} className={`header-container ${isDark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world? </a>
        </h2>
        <p className="theme-changer" onClick={() => {
          setisDark(!isDark)
          localStorage.setItem('isDarkMode', !isDark)
        }}>

          <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />

          &nbsp;&nbsp; {isDark ? 'Light' : 'Dark'} Mode

        </p>
      </div>
    </header>
  )
}