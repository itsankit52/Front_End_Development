import React from "react";
export default function Header() {
  return (
    <header style={ {background: 'linear-gradient(135deg, #ff00dd, #975858bd)'}} className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world? </a>
        </h2>
        <p className="theme-changer">
          <i className="fa-regular fa-moon" />
          &nbsp;&nbsp;Dark Mode
        </p>
      </div>
    </header>
  )
}