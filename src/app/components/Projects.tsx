import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  thumbnailUrl?: string;
  liveLink?: string;
  githubLink?: string;
  liveNote?: string;
  index: number;
}

function ProjectCard({ title, description, technologies, thumbnailUrl, liveLink, githubLink, liveNote, index }: ProjectCardProps) {
  const handleLiveClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!liveNote) {
      return;
    }

    event.preventDefault();
    alert(liveNote);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="h-48 bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300"></div>
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={`${title} preview`}
            className="relative z-10 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="relative z-10 text-center space-y-2">
            <div className="w-16 h-16 mx-auto bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-accent rounded"></div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Project Preview</p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">{description}</p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 dark:bg-slate-700 text-accent dark:text-blue-400 text-sm rounded-full border border-blue-100 dark:border-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLiveClick}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:border-accent hover:text-accent transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const projects = [
  {
    title: 'Motoservices',
    description:
      'A functional web platform providing digital solutions for motor services, developed in a 4-member team. Features include service booking and management system.',
    technologies: ['React', 'JavaScript', 'CSS3', 'PHP', 'MySQL'],
    thumbnailUrl: '/motoservice.png',
    liveLink: 'https://motoservices-pratap.free.nf/index.php',
    githubLink: 'https://github.com/pratap524/Motoservices-.git',
  },
  {
    title: 'Citiezen-complaint-engine',
    description:
      'A Node.js/Express backend for the Citizen Complaint Intelligence Engine hackathon project. This system automatically classifies citizen complaints, assigns urgency scores, predicts resolution times, and detects problem clusters using rule-based AI simulation.',
    technologies: ['Node.js', 'Express.js', 'MongoDB'],
    thumbnailUrl: '/citiezen.png',
    liveLink: 'https://citiezen-complaint-engine-beem.vercel.app/',
    githubLink: 'https://github.com/pratap524/Citiezen-complaint-engine.git',
  },
  {
    title: 'AI-Story-generator',
    description:
      'AI Story Generator is a full-stack AI storytelling app with a React + Vite frontend and a FastAPI backend that runs a local Transformers model for cinematic fairy-tale generation.',
    technologies: ['React', 'TypeScript', 'Vite', 'FastAPI', 'PyTorch', 'Transformers'],
    thumbnailUrl: '/ai-story.png',
    liveLink: '#',
    liveNote: 'This project runs locally. Please download and run it on your machine.',
    githubLink: 'https://github.com/pratap524/AI-Story-generator.git',
  },
  {
    title: 'Project Desk',
    description:
      'A collaborative project management platform designed for coordinating final year academic projects. Streamlines team communication and milestone tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    thumbnailUrl: '/project-desk.png',
    liveLink: '#',
    liveNote: 'Live demo coming soon.',
    githubLink: 'https://github.com/pratap524/Project-Desk.git',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects demonstrating technical proficiency and problem-solving skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
