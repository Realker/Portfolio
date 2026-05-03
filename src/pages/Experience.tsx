import { Helmet } from 'react-helmet-async'
import { MapPin, Calendar } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience — Jonathan Lim</title>
        <meta name="description" content="My professional work history and experience." />
      </Helmet>

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I've built there."
        />

        <ol className="relative border-l border-gray-200">
          {experience.map((item) => (
            <li key={item.id} className="mb-12 ml-6">
              {/* Timeline dot */}
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent ring-4 ring-white">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="ml-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.role}</h3>
                <p className="text-base font-medium text-accent">{item.company}</p>

                <div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} /> {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.skills.map((s) => (
                    <Badge key={s} label={s} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
