import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  { href: 'https://github.com/jonathanlim', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jonathanlim', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:jonathan_lim1@nuhs.edu.sg', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 mt-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Jonathan Lim. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-gray-700 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
