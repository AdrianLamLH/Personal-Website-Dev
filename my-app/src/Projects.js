import React from 'react'
import './style.css'
import ReturnButton from './components/ReturnButton'
function Projects() {
  return (
    <div className="Home">
      <header>
        <div className="Main-header">
          <ReturnButton></ReturnButton>
          <h1 className="Page-header">Past Projects</h1>
        </div>
      </header>
    </div>
  )
}

export default Projects