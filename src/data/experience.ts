export interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
  skills: string[]
}

export const experience: ExperienceItem[] = [
  {
    id: 'job-1',
    role: 'Software Engineer',
    company: 'Company Name',
    period: 'Jan 2024 – Present',
    location: 'Singapore',
    bullets: [
      'Describe a key responsibility or achievement using strong action verbs.',
      'Quantify impact where possible — e.g., reduced latency by 40%.',
      'Mention collaboration, architecture decisions, or cross-team work.',
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'job-2',
    role: 'Junior Software Engineer',
    company: 'Previous Company',
    period: 'Jun 2022 – Dec 2023',
    location: 'Singapore',
    bullets: [
      'Describe a key responsibility or achievement using strong action verbs.',
      'Quantify impact where possible — e.g., shipped feature used by 10 000+ users.',
      'Mention tools, frameworks, or methodologies you worked with.',
    ],
    skills: ['Python', 'FastAPI', 'Docker', 'AWS'],
  },
  {
    id: 'intern-1',
    role: 'Software Engineering Intern',
    company: 'Internship Company',
    period: 'May 2021 – Aug 2021',
    location: 'Singapore',
    bullets: [
      'Built and shipped X feature under mentorship.',
      'Wrote unit tests achieving 85% coverage for the payments module.',
    ],
    skills: ['JavaScript', 'React', 'Jest'],
  },
]
