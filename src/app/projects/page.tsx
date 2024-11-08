

export default function Project() {
  
    return (
   <div> 
  <section id="projects" className="mb-12">
          <h2 className="mb-4 text-3xl font-bold text-blue-800">Projects</h2>
          <p className="mb-4 text-gray-700">
            Here, you will find a collection of my software development projects. Each project is designed to solve real-world problems or enhance digital experiences, showcasing my expertise in various technologies.
          </p>
          <p className="mb-4 text-gray-700">
            In this section, you will find:
          </p>
          <ul className="mb-6 text-gray-700 list-disc list-inside">
            <li>Live Demos: Explore fully functional web applications built using technologies like TypeScript, Next.js, and more.</li>
            <li>Source Code: Access code repositories to understand the technical implementation and architecture.</li>
            <li>Project Details: Gain insights into the challenges faced, the solutions implemented, and the learning outcomes.</li>
          </ul>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Next.js Class III Project", url: "https://nextjs-class-iii.vercel.app/" },
              { title: "Next.js Second Class Project", url: "https://nextjs-second-class.vercel.app/" },
              { title: "Milestone 5 Share Resume", url: "https://milestone-5-share-resume.vercel.app/" },
              { title: "Static Resume Project", url: "https://static-resume-jet.vercel.app/" },
              { title: "Editable Resume Project", url: "https://editable-resume-liard.vercel.app/" },
              { title: "Dynamic Resume Project", url: "https://dynamic-resume-psi.vercel.app/" },
              { title: "Portfolio Project", url: "https://portfolio-raza-74.vercel.app/" },
              { title: "Screen Calculator Project", url: "https://screen-calculator.vercel.app/" },
            ].map((project, index) => (
              <div key={index} className="p-6 transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105">
                <h3 className="mb-2 text-xl font-semibold text-blue-700">{project.title}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 transition-colors hover:text-purple-800 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>
        </div>
    )}