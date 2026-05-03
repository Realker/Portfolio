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
    id: 'federated-learning',
    title: 'Towards Robust Federated Learning',
    description:
      'FYP (Distinction) — Investigated LLM + Federated Learning integration to uncover attack surfaces. Designed a Krum Algorithm variant enhanced by LLM feedback loops; simulated label-flipping and model-poisoning attacks on the MIMIC-III dataset.',
    stack: ['Python', 'PyTorch', 'Flower', 'LLMs'],
    featured: true,
    category: 'AI/ML',
  },
  {
    id: 'trialcovery',
    title: 'Trialcovery 2.0 — Singapore Discovery Centre',
    description:
      'FYP (B+) — Event app for SDC\'s Amazing Race. Built a photo-upload reward module that boosted engagement by 40%, a real-time admin-user chat with geolocation tracking, and revamped UI/UX increasing user satisfaction by 30%. Deployed for student groups across Singapore.',
    stack: ['Node.js', 'JavaScript', 'Geolocation API'],
    featured: true,
    category: 'Web',
  },
  {
    id: 'dbs-money-tracker',
    title: 'DBS Money Habit Tracker',
    description:
      'Financial expense tracking web app built during my internship at Beansprout. Designed to help users develop better money habits through clear visualisation of their spending.',
    stack: ['JavaScript', 'CSS'],
    featured: false,
    category: 'Web',
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'Responsive portfolio website built with Vite, React, TypeScript, and Tailwind CSS. Fully static — deployed to Vercel.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Realker/Portfolio',
    featured: false,
    category: 'Web',
  },
]
