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
      <body className="Main-body">
        <div className="Main-info Project-vault">
          <ul>
            <li className="Project-widget">
              <div className="Project-card">
                <a href="https://site.hspa.info/application">
              <img className="Preview-proj-img" src={'/assets/Hillside.png'}></img>
                </a>
                <div className="Project-info">
                  <h2>Hillside Street Prioritization Application</h2>
                  <em>Full Stack Developer | Data Engineer Supervisor</em>
                  <p>Web Application developed as part of LA Streets project by City of Los Angeles and UCLA. Displays preprocessed GeoJson dataset of Hillside street conditions, provides dynamic platform for frictionless weighted street filtering, hosted backend on AWS and Vercel frontend.</p>
                  <ul className="Skillset">
                    <li>React</li>
                    <li>Python</li>
                    <li>MySQL</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Docker</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="Project-widget">
              <div className="Project-card">
              <a href="https://docs.google.com/presentation/d/1XHBgL57jEf0iXEGB-WqfrN8uC9aWmMK8nf1mWmg7Qbc/edit?usp=sharing">
                <img className="Preview-proj-img" src={'/assets/GNN.png'}></img>
              </a>
                <div className="Project-info">
                  <h2>Wiki-CS Geometric Neural Network Explainer</h2>
                  <em>Data Research Project Lead</em>
                  <p>Data Resolutions project on Geometric Neural Network Explainer model with Wikipedia's CS network dataset for employing content-aware hyperlinking. Utilizes Open-Source PyTorch libraries, applies layered convolutions, and generates ~70% accuracy rates on benchmarks.</p>
                  <ul className="Skillset">
                    <li>Python</li>
                    <li>PyTorch Geometric</li>
                    <li>Pandas</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="Project-widget">
              <div className="Project-card">
              <a href="https://github.com/AdrianLamLH/Dall-E-Full-Stack-Web-App">
                <img className="Preview-proj-img" src={'/assets/DALLE.png'}></img>
              </a>
                <div className="Project-info">
                  <h2>Full Stack Dall-E Web App</h2>
                  <em>Independent Study</em>
                  <p>Personal Full-Stack project developing OpenAI powered DALL-E image generation social media platform. MongoDB backend database handling image sources, enabling community interaction actions and fully-synchronized community feed for other user post activity.</p>
                  <ul className="Skillset">
                    <li>React</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>OpenAI API</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="Project-widget">
              <div className="Project-card">
              <a href="https://www.math.ucla.edu/~umsa/index.html">
                <img className="Preview-proj-img" src={'/assets/UMSA.png'}></img>
              </a>
                <div className="Project-info">
                  <h2>UMSA Organization Website</h2>
                  <em>Director of Technology</em>
                  <p>Responsible for official UCLA Mathematics affiliate website for Undergraduate Mathematics Students Association. Integrated Google Calendar API, Google Form submission handling, and clear programmatic documentation.</p>
                  <ul className="Skillset">
                    <li>React</li>
                    <li>Node</li>
                    <li>Linux</li>
                    <li>Google API</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="Project-widget">
              <div className="Project-card">
              <a href="https://github.com/trungvu08/Wordle-PLUS">
                <img className="Preview-proj-img" src={'/assets/Wordle.png'}></img>
              </a>
                <div className="Project-info">
                  <h2>Your Custom Wordle</h2>
                  <em>Frontend Developer</em>
                  <p>Wordle PLUS web app revamping of original Wall Street Journal game. Difficulty scaling functionality with MongoDB user leaderboard storing and retrieving.</p>
                  <ul className="Skillset">
                    <li>React</li>
                    <li>Javascript</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="Project-widget">
              <div className="Project-card">
              <a href="https://devpost.com/software/docktor-kitty">
                <img className="Preview-proj-img" src={'/assets/Kitty.png'}></img>
              </a>
                <div className="Project-info">
                  <h2>Docker Kitty: Desktop Pet</h2>
                  <em>Hackathon Team Lead</em>
                  <p>Desktop Pet program based in Pygame using OS GUI libraries, implemented threaded animation cycles and using multiple RESTful APIs.</p>
                  <ul className="Skillset">
                    <li>Python</li>
                    <li>Pygame</li>
                    <li>Win32 GUI</li>
                    <li>OOP</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="Project-widget">
              <div className="Project-card">
              <a href="https://github.com/AdrianLamLH/Webscraper-Intern-Plus">
                <img className="Preview-proj-img" src={'/assets/Scraper.png'}></img>
              </a>
                <div className="Project-info">
                  <h2>Pediatrician Public Domain Webcrawler</h2>
                  <em>Freelance Contractor</em>
                  <p>Dynamically scaling Webcrawler algorithm to scrape, wrangle, and process popular online medical databases with Selenium, employing time delay, request cooldowns, and adaptive handling of distinct webpage layouts.</p>
                  <ul className="Skillset">
                    <li>Python</li>
                    <li>BeautifulSoup4</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </body>
    </div>
  )
}

export default Projects