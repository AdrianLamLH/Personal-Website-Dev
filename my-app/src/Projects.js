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
        <div class="Main-info Project-vault">
          <ul>
            <li className="Project-widget">
              <div>
                <div>
                  <h2>Hillside Street Prioritization Application</h2>
                  <p>Blah Blah Hillside</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <img src={'/assets/Hillside.jpeg'}></img>
              </div>
            </li>
            <li className="Project-widget">
              <div>
                <div>
                  <h2>Wiki-CS Geometric Neural Network Explainer</h2>
                  <p>Blah Blah Hillside</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <img src={'/assets/Hillside.jpeg'}></img>
              </div>
            </li>

            <li className="Project-widget">
              <div>
                <div>
                  <h2>Full Stack Dall-E Web App</h2>
                  <p>Blah Blah Hillside</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <img src={'/assets/Hillside.jpeg'}></img>
              </div>
            </li>
            <li className="Project-widget">
              <div>
                <div>
                  <h2>UMSA Organization Website</h2>
                  <p>Blah Blah Hillside</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <img src={'/assets/Hillside.jpeg'}></img>
              </div>
            </li>
            <li className="Project-widget">
              <div>
                <div>
                  <h2>Docker Kitty: Desktop Pet</h2>
                  <p>Blah Blah Hillside</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <img src={'/assets/Hillside.jpeg'}></img>
              </div>
            </li>
            <li className="Project-widget">
              <div>
                <div>
                  <h2>Pediatrician Public Domain Webcrawler</h2>
                  <p>Blah Blah Hillside</p>
                  <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>AWS Route 53</li>
                    <li>AWS Elastic Beanstalk</li>
                    <li>AWS Load Balancer</li>
                    <li>Python</li>
                    <li>MySQL</li>
                  </ul>
                </div>
                <img src={'/assets/Hillside.jpeg'}></img>
              </div>
            </li>
          </ul>
        </div>
      </body>
    </div>
  )
}

export default Projects