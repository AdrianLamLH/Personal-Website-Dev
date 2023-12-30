import './style.css'
import ReturnButton from './components/ReturnButton'
function About() {
  return (
    <div className="Home">
      <header>
        <div className="Main-header">
          <ReturnButton></ReturnButton>
          <h1 className="Page-header">About</h1>
        </div>
      </header>
    </div>
  )
}

export default About