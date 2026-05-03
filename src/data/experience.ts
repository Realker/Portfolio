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
    id: 'alexandra-hospital',
    role: 'Software Engineer',
    company: 'Alexandra Hospital',
    period: 'July 2025 – Present',
    location: 'Singapore',
    bullets: [
      'Developed Microsoft Teams bot and tab applications using Node.js, JavaScript, and Bot Framework for internal automation tools.',
      'Integrated Microsoft Graph API and Teams SSO to enable secure authentication, OneDrive file access, and data operations.',
      'Deployed containerised backend services using Docker, AWS EC2/ECS, and Application Load Balancer for scalable API endpoints.',
      'Implemented real-time chatbot streaming and multi-bot routing with external AI workflow integration for internal users.',
    ],
    skills: ['Node.js', 'JavaScript', 'Bot Framework', 'Docker', 'AWS', 'Microsoft Graph API'],
  },
  {
    id: 'beansprout',
    role: 'Software Engineer Intern',
    company: 'Beansprout',
    period: 'Feb 2025 – May 2025',
    location: 'Singapore',
    bullets: [
      'Built the DBS Money Habit Tracker web app using JavaScript and CSS for financial expense tracking.',
      'Maintained and upgraded the company website using TypeScript, Svelte, and Bootstrap.',
      'Streamlined infrastructure for better performance, security, and reliability.',
      'Automated workflows and scripts to boost efficiency in web operations and data handling.',
    ],
    skills: ['JavaScript', 'TypeScript', 'Svelte', 'Bootstrap'],
  },
  {
    id: 'trust-wallet',
    role: 'Product Operation Data Analyst Intern',
    company: 'Trust Wallet',
    period: 'Sept 2024 – Feb 2025',
    location: 'Singapore',
    bullets: [
      'Supported partnership operations with cross-functional teams and maintained timely documentation.',
      'Aligned with product, marketing, and design teams on project deliverables.',
      'Conducted market research and organised daily trend insights.',
      'Leveraged data insights to connect with KOLs, PR channels, and partners.',
    ],
    skills: ['Data Analysis', 'Market Research', 'Documentation'],
  },
  {
    id: 'htx',
    role: 'AI Engineer Intern',
    company: 'Home Team Science and Technology Agency (HTX)',
    period: 'Jan 2024 – July 2024',
    location: 'Singapore',
    bullets: [
      'Collected and analysed trial data at ICA checkpoints, reporting key findings.',
      'Built and cleaned datasets for AI model development and automation.',
      'Designed autoencoder and computer vision models to detect threats in x-ray images.',
      'Explored CLIP model integration and optimised models via hyperparameter tuning.',
    ],
    skills: ['Python', 'PyTorch', 'Computer Vision', 'CLIP'],
  },
  {
    id: 'zumata',
    role: 'Chatbot Developer Intern',
    company: 'Zumata Pte Ltd',
    period: 'Apr 2018 – Aug 2019',
    location: 'Singapore',
    bullets: [
      'Analysed customer feedback to identify and improve chatbot performance gaps.',
      'Built chatbot solutions for clients including Etiqa, MSIG, and Philip Securities, boosting engagement by 25%.',
      'Developed and tested chatbot flows using Node.js for a smoother user experience.',
      'Enhanced conversational logic in Dialogflow with updated training phrases and process flows.',
    ],
    skills: ['Node.js', 'JavaScript', 'Dialogflow'],
  },
]
