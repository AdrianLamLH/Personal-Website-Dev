import './style.css'
import ReturnButton from './components/ReturnButton'
function About() {
  return (
    <div className="Home">
      <header>
        <div className="Main-header">
          <ReturnButton></ReturnButton>
          <h1 className="Page-header">About Me</h1>
        </div>
      </header>
      <body className="Main-body">
        <div className="Main-info">
          <p>
            My name is Adrian and I am currently a senior at UCLA majoring in BS. Mathematics of Computation.
            I was born in Hong Kong, but I moved from HK to Shanghai, Shanghai to London, and now finally, London to Los Angeles.
          </p>
          <p>
            During my travels, I love most meeting new people from different backgrounds, and learning foreign languages/cultures to immerse myself into the places I visit.
          </p>
          <p>
            On campus, I sing bass for my On That Note A Capella at UCLA, I'm a big fan of intramural basketball games, and I help organize Math-oriented events for other Mathematics enthusiasts like me!
          </p>
        </div>
        <div className="Main-added-info">
        <img src={'/assets/japan-biker.png'} className="Biker-image" alt="Adrian's Police Debut"></img>
        <em className="Main-info Added-info">*A nice Japanese lady took this for me after my trip to Japan. It commemorates the first-time I got to practice my Japanese skills!*</em>
        </div>
      </body>
    </div>
  )
}

export default About