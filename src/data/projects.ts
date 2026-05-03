export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  github?: string
  live?: string
  featured: boolean
  category: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'Responsive portfolio website built with Vite, React, TypeScript, and Tailwind CSS. Fully static — deployed to Vercel.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/jonathanlim/portfolio',
    live: 'https://jonathanlim.dev',
    featured: true,
    category: 'Web',
  },
  {
    id: 'project-2',
    title: 'Project Two',
    description:
      'A short description of this project, what problem it solves, and the key technical decisions made.',
    stack: ['Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com/jonathanlim/project-2',
    featured: true,
    category: 'Backend',
  },
  {
    id: 'project-3',
    title: 'Project Three',
    description:
      'A short description of this project, what problem it solves, and the key technical decisions made.',
    stack: ['Python', 'FastAPI', 'Docker'],
    github: 'https://github.com/jonathanlim/project-3',
    live: 'https://project-3.example.com',
    featured: false,
    category: 'Backend',
  },
  {
    id: 'project-4',
    title: 'Project Four',
    description:
      'A short description of this project, what problem it solves, and the key technical decisions made.',
    stack: ['React', 'Redux', 'Firebase'],
    github: 'https://github.com/jonathanlim/project-4',
    featured: false,
    category: 'Web',
  },
]
