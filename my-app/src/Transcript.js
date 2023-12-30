import './style.css'
import ReturnButton from './components/ReturnButton'
function Transcript() {
  return (
    <div className="Home">
      <header>
        <div className="Main-header">
          <ReturnButton></ReturnButton>
          <h1 className="Page-header">Transcript</h1>
        </div>
      </header>
    </div>
  )
}

export default Transcript