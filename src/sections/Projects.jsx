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
        "A coffee shop website built with semantic HTML5 and CSS, featuring interactive forms, animations, and BEM methodology to demonstrate modern front-end development techniques and clean code organization.",
      image: coffee,
      technologies: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Evan-Boodoosingh/se_project_coffeeshop-ft",
    },
    {
      id: 4,
      title: "Beacon Hill Property Management",
      description:
        "A modern, responsive property management web application showcasing residential, commercial, and construction services with smooth scroll animations, custom Intersection Observer implementations, and an integrated contact system.",
      video: "https://www.loom.com/embed/e7f2db20a099483da4792bf94739472f",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4"],
      link: "https://github.com/Evan-Boodoosingh/bhpm",
      deployedUrl: "https://evan-boodoosingh.github.io/bhpm/",
    },
    {
      id: 5,
      title: "Lost Pets - Korra & GRiZ",
      description:
        "A vibrant, animated lost pet website featuring dynamic dog profiles with smooth Framer Motion transitions, responsive image positioning, and an integrated contact form system",
      video: "https://www.loom.com/embed/2089399a18e440c88aa3bb6dffd7c53f",
      technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS v4"],
      link: "https://github.com/Evan-Boodoosingh/lost-dog",
      deployedUrl: "https://evan-boodoosingh.github.io/lost-dog/",
    },
    {
      id: 6,
      title: "Herik's 40th Birthday - One Piece Tribute",
      description:
        "A custom birthday celebration website honoring a friend's 40th birthday with an immersive One Piece pirate theme, featuring an interactive wanted poster hero section, animated photo timeline showcasing 25+ memories across a decade, heartfelt friend testimonials, and a treasure chest gift reveal with pirate-themed animations and easter eggs throughout.",
      video: "https://www.loom.com/embed/ee9bb11e2d3b45dd84eec3d18a82bd6a",
      technologies: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS v4",
        "Framer Motion",
      ],
      link: "https://github.com/Evan-Boodoosingh/herik-birthday",
      deployedUrl: "https://evan-boodoosingh.github.io/herik-birthday/",
    },
    {
      id: 7,
      title: "Queued",
      description:
        "A full-stack social anime tracking platform that allows users to track shows, follow friends, discuss episodes, and discover what others are watching. Built with React, Node.js, Express, and MongoDB.",
      video: "https://www.loom.com/embed/1623021f60f04d9a8c6852cbaadd6744",
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Evan-Boodoosingh/qd",
      deployedUrl: "https://qd-two.vercel.app",
    },
  ]);

  return (
    <section id="projects" className="py-10 pt-32 font-mono">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-7 bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent text-center leading-tight py-2">
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group w-full sm:flex-1 sm:min-w-80 max-w-96 px-6 pt-6 pb-6 rounded-xl flex flex-col border-2 border-white/10 hover:border-blue-500/50 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900"
            >
              <h3 className="bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white group-hover:bg-none text-center leading-relaxed text-xl font-semibold mb-4 transition-all">
                {project.title}
              </h3>

              {/* Description section - takes natural space */}
              <div className="grow mb-6">
                <p className="text-gray-300 group-hover:bg-linear-to-r group-hover:from-teal-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent indent-8 transition-all leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Fixed position for badges - always in same spot */}
              <div className="flex flex-wrap justify-center gap-2 mb-2 min-h-12 items-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-gray-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Video/Image section */}
              <div className="mt-auto w-full">
                <div className="flex flex-col text-center my-2 py-4 justify-center gap-3 border-2 border-white/10 group-hover:border-blue-500/50 group-hover:shadow-[9_2px_8px_rgba(59,130,246,0.3)] rounded-xl transition-all">
                  {project.video ? (
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                      <iframe
                        src={project.video}
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        title={`${project.title} Demo`}
                      />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={`${project.title} Image`}
                      className="w-full aspect-video object-cover rounded-xl"
                    />
                  )}
                </div>
                <div className="flex gap-3 mt-4">
                  {project.deployedUrl && (
                    <a
                      href={project.deployedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border-2 border-white/20 text-gray-300 py-2 px-2 rounded-full hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition text-xs sm:text-sm hover:text-white flex items-center justify-center h-10"
                    >
                      Live Site
                    </a>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-white/20 text-gray-300 py-2 px-2 rounded-full hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition text-xs sm:text-sm hover:text-white flex items-center justify-center h-10"
                  >
                    View Code
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
