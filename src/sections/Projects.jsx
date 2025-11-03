import { useState } from "react";
import coffee from "../assets/triplepeaks.png";

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: "What To Wear?",
      description:
        "A full-stack weather-based clothing recommendation app that helps users decide what to wear by providing personalized outfit suggestions based on current weather conditions, built with React, Node.js, Express, and MongoDB.",
      video: "https://www.loom.com/embed/99eab244e924443a9f59934b2480be95",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Evan-Boodoosingh/se_project_react",
    },
    {
      id: 2,
      title: "Spots",
      description:
        "A responsive photo-sharing web application that enables users to create personalized profiles, upload and manage photo cards, and engage with content through real-time like interactions, built with vanilla JavaScript and RESTful API integration.",
      video: "https://www.youtube.com/embed/_62pdopTAJY?si=Lb2Tdze25D2urVmu",
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Evan-Boodoosingh/se_project_spots",
    },
    {
      id: 3,
      title: "Triple Peaks Coffee Shop",
      description:
        "A website for a fictional coffee shop that showcases their menu, allows customers to book tables, and shares coffee brewing recipes.",
      image: coffee,
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Evan-Boodoosingh/se_project_coffeeshop-ft",
    },
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-25"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="w-full text-4xl md:text-5xl lg:text-5xl font-semibold mb-7 bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent text-center leading-relaxed py-2">
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-1 min-w-80 max-w-96 px-6 pt-6 pb-0 rounded-xl flex flex-col items-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
            >
              <h3 className=" bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-center leading-relaxed text-xl font-semibold mb-4">
                {project.title}
              </h3>
              <div className="h-48 mb-4">
                <p className="text-gray-300 indent-8">{project.description}</p>
              </div>
              <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-gray-300 py-0.5 px-2 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto w-full">
                <div className="flex flex-col text-center my-5 py-4 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] cursor-pointer  rounded-xl">
                  <p className="text-gray-300 transition-colors hover:text-white">
                    View Project
                  </p>
                  <a
                    href={project.link}
                    className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                  >
                    {project.video ? (
                      <div className="w-full h-46 rounded-xl overflow-hidden relative">
                        <iframe
                          src={project.video}
                          className="w-full h-full border-0 absolute inset-0"
                          allowFullScreen
                          title={`${project.title} Demo`}
                        />
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.title} Image`}
                        className="w-full h-46 object-cover rounded-xl"
                      />
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
