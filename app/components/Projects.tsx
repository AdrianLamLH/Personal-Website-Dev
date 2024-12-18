'use client'

import { motion } from 'framer-motion'

const workExperiences = [
  {
    id: 1,
    role: 'Machine Learning Engineer',
    company: 'Asurion',
    description: '• Fine-tuned open-source LLMs with hybrid agent frameworks\n• Implemented reasoning guardrails to optimize troubleshooting accuracy',
    date: 'Oct. 2024 - Present',
    location: 'San Francisco, CA',
    tech: ['Python', 'FastAPI', 'Ngrok', 'AWS SDK', 'Multimodal LLMs', 'GraphRAG', 'Agentic Arena']
  },
  {
    id: 2,
    role: 'Data Scientist',
    company: 'Towngas',
    description: '• Engineered automated ETL pipeline using PySpark to restructure 300TB unprocessed database\n• Minimized query delays through database optimization\n• Built and optimized XGBoost classifier model reducing technician deployment redundancies by 30%',
    date: 'Jun. 2023 - Sept. 2023',
    location: 'Hong Kong',
    tech: ['Python', 'PySpark', 'MySQL', 'Matplotlib','Scikit-learn']
  },
  {
    id: 3,
    role: 'Software Engineer, Data Platform',
    company: 'Sensing and Robotics for Infrastructure Lab',
    description: '• Designed and deployed a GNN-based Roadwork Prioritization Platform with React and Node.js\n• Implemented real-time model tuning and feature engineering\n• Developed 30+ user-customizable importance metrics',
    date: 'Nov. 2023 - Jul. 2024',
    location: 'Los Angeles, CA',
    tech: ['React', 'Node.js', 'Scikit-learn', 'AWS Cloud', 'Bash']
  },
  {
    id: 4,
    role: 'Python Developer',
    company: 'The American Academy of Pediatric Neuropsychology',
    description: '• Engineered a headless browser web scraper with Selenium to extract 100,000+ records\n• Cleaned and wrangled patient records to MySQL DBs for k-means clustering, lowering outreach costs by $1.5k per month\n• Maintained full documentation in Git to help onboard 20+ business-centric users',
    date: 'Aug. 2022 - Dec. 2022',
    location: 'Long Beach, CA',
    tech: ['Python', 'Selenium', 'MySQL', 'Scikit-learn']
  },
  {
    id: 5,
    role: 'Software Engineer, Intern',
    company: 'Change For Change',
    description: '• Developed a Chrome Extension for an NGO\'s e-commerce donation platform\n• Led 4 developers to build a RESTful Twitter bot for non-profit posts\n• Reached 350 followers within a week\n• Designed wireframes for user portals in Figma',
    date: 'Dec. 2021 - Nov. 2022',
    location: 'Los Angeles, CA',
    tech: ['React', 'MongoDB', 'JavaScript', 'Figma']
  }
]

const personalProjects = [
  {
    id: 4,
    title: 'Anthropic & Menlo Builder Day',
    description: '• Led 3-person team to win 2nd place ($55,000) among 100+ teams\n• Reinvented Google\'s captcha-system\n• Improved standard false-negative rate by 70%',
    tech: ['Python', 'LLMs', 'Langchain', 'Next.js', 'FastAPI', 'Computer Vision'],
    date: 'Oct. 2024 - Nov. 2024'
  },
  {
    id: 5,
    title: 'AWS & Slalom Innovation Challenge',
    description: '• Devised and built ML-driven parking solution\n• Collaborated with AWS and Slalom engineers\n• Designed solution in Figma for UCLA\'s campus-wide competition',
    tech: ['AWS', 'ML', 'Figma'],
    date: 'Mar. 2023 - May. 2023'
  },
  {
    id: 6,
    title: 'Research Analyst',
    description: '• Collaborated in 5-person team\n• Developed contextual Wikipedia article recommender model\n• Implemented solution using PyTorch on WikiCS dataset',
    tech: ['PyTorch', 'Python', 'NetworkX'],
    date: 'Sept. 2022 - Mar. 2023'
  }
]

export default function Projects() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">My Work</h2>
        
        {/* Work Experiences Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-blue-400">Professional Experience</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {workExperiences.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-800/50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-gray-800 h-full flex flex-col"
              >
                <div className="flex flex-col justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{work.role}</h4>
                    <p className="text-gray-300 mb-1">{work.company}</p>
                    <p className="text-gray-400 text-sm mb-2">{work.location}</p>
                    <p className="text-sm text-gray-400">{work.date}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 flex-grow whitespace-pre-line">{work.description}</p>
                {work.tech && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {work.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Projects Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-blue-400">Personal Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-gray-800/50 rounded-lg p-6 hover:shadow-lg transition-all hover:bg-gray-800"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <span className="text-sm text-gray-400">{project.date}</span>
                </div>
                <p className="text-gray-400 mb-4 whitespace-pre-line">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}