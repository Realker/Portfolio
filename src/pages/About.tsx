import { Helmet } from 'react-helmet-async'
import { Download, GraduationCap } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

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
              Hi, I'm Jonathan — a software engineer based in Singapore. I enjoy building
              software that is fast, reliable, and easy to use. My focus is on the full stack,
              from database design to frontend experiences.
            </p>
            <p>
              I care deeply about code quality, developer experience, and shipping products that
              make a real difference. Outside of work I enjoy [your interests here].
            </p>
            <p>
              I'm always open to interesting conversations about software — feel free to reach
              out.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="mt-14">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2 mb-6">
            <GraduationCap size={20} className="text-accent" /> Education
          </h3>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <p className="font-medium text-gray-900">Bachelor of Computing (Computer Science)</p>
                <p className="text-sm text-gray-500">National University of Singapore</p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">Aug 2018 – May 2022</span>
            </div>
          </div>
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
