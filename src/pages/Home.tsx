import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import SectionHeading from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

const skills = [
  'TypeScript', 'React', 'Node.js', 'Python',
  'PostgreSQL', 'Docker', 'AWS', 'Git',
]

const socials = [
  { href: 'https://github.com/jonathanlim', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/jonathanlim', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:jonathan_lim1@nuhs.edu.sg', icon: Mail, label: 'Email' },
]

export default function Home() {
  const featured = projects.filter((p) => p.featured)

  return (
    <>
      <Helmet>
        <title>Jonathan Lim — Software Engineer</title>
        <meta
          name="description"
          content="Software engineer based in Singapore. I build reliable, user-focused software."
        />
      </Helmet>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <p className="text-accent font-medium mb-3">Hi, I'm</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            Jonathan Lim
          </h1>
          <p className="mt-3 text-2xl sm:text-3xl font-medium text-gray-400">
            Software Engineer
          </p>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            I build reliable, user-focused software. Based in Singapore — passionate about clean
            architecture, developer experience, and shipping things that matter.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button href="/assets/resume.pdf" variant="outline" external>
              Download Resume <Download size={16} />
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <SectionHeading title="Tech Stack" subtitle="Technologies I work with day-to-day." />
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <Badge key={s} label={s} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of recent work."
          />
          <Link
            to="/projects"
            className="text-sm text-accent hover:underline whitespace-nowrap mb-[2.6rem]"
          >
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {featured.map((project) => (
            <Card key={project.id}>
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline flex items-center gap-1"
                  >
                    Live <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
