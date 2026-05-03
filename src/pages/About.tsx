import { Helmet } from 'react-helmet-async'
import { Download, GraduationCap, Trophy, Languages } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const education = [
  {
    degree: 'Bachelor of Engineering (Computer Science)',
    institution: 'Nanyang Technological University',
    period: 'Aug 2021 – May 2025',
  },
  {
    degree: 'Diploma in Business & Information Technology',
    institution: 'Temasek Polytechnic',
    period: 'Apr 2016 – Apr 2019',
  },
]

const achievements = [
  'Champion — National Cashflow Challenge 2023 (Individual Category)',
  '2nd Runner-up — National Cashflow Challenge 2023 (Group Category)',
  '3rd Runner-up — NTU Interdisciplinary Challenge 2023',
  'DSTA Brainhack Capture the Flag — Top 50',
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Jonathan Lim</title>
        <meta name="description" content="Learn more about Jonathan Lim, software engineer." />
      </Helmet>

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <SectionHeading title="About Me" />

        {/* Bio + photo */}
        <div className="flex flex-col sm:flex-row gap-10 items-start">
          <img
            src="/assets/profile.jpg"
            alt="Jonathan Lim"
            className="w-40 h-40 rounded-2xl object-cover flex-shrink-0 bg-gray-100"
            onError={(e) => {
              ;(e.target as HTMLImageElement).style.display = 'none'
            }}
          />
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hi, I'm Jonathan — a software engineer based in Singapore. I graduated from
              Nanyang Technological University with a BEng in Computer Science and currently
              work at Alexandra Hospital building internal automation tools.
            </p>
            <p>
              My experience spans full-stack web development, AI/ML engineering, and chatbot
              development. I enjoy working across the stack — from containerised backend services
              to polished frontend interfaces — and I care about writing clean, maintainable code
              that solves real problems.
            </p>
            <p>
              I'm always open to interesting conversations about software, AI, or new
              opportunities — feel free to reach out.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-accent" /> Education
          </h3>
          <div className="space-y-5">
            {education.map(({ degree, institution, period }) => (
              <div
                key={institution}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
              >
                <div>
                  <p className="font-medium text-gray-900">{degree}</p>
                  <p className="text-sm text-gray-500">{institution}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">{period}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-6">
            <Trophy size={20} className="text-accent" /> Achievements
          </h3>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a} className="flex gap-2 text-sm text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <Languages size={20} className="text-accent" /> Languages
          </h3>
          <p className="text-sm text-gray-600">English — Fluent &nbsp;·&nbsp; Mandarin — Intermediate</p>
        </div>

        {/* Resume CTA */}
        <div className="mt-12">
          <Button href="/assets/resume.pdf" variant="outline" external>
            <Download size={16} /> Download Resume
          </Button>
        </div>
      </section>
    </>
  )
}
