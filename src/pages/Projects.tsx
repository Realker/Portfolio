import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Github, ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { projects } from '../data/projects'

const ALL = 'All'

export default function Projects() {
  const categories = [ALL, ...Array.from(new Set(projects.map((p) => p.category)))]
  const [active, setActive] = useState(ALL)

  const visible = active === ALL ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Helmet>
        <title>Projects — Jonathan Lim</title>
        <meta name="description" content="A collection of software projects I've built." />
      </Helmet>

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built — personal projects, side experiments, and shipped work."
        />

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <Badge
              key={cat}
              label={cat}
              active={active === cat}
              onClick={() => setActive(cat)}
            />
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {visible.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <Badge key={t} label={t} />
                  ))}
                </div>
              </div>
              <div className="mt-5 flex gap-4">
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
                    Live <ArrowUpRight size={14} />
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
