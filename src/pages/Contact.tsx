import { type FormEvent, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'

const socials = [
  {
    href: 'https://github.com/jonathanlim',
    icon: Github,
    label: 'GitHub',
    handle: 'jonathanlim',
  },
  {
    href: 'https://linkedin.com/in/jonathanlim',
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'in/jonathanlim',
  },
  {
    href: 'mailto:jonathan_lim1@nuhs.edu.sg',
    icon: Mail,
    label: 'Email',
    handle: 'jonathan_lim1@nuhs.edu.sg',
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value

    window.location.href = `mailto:jonathan_lim1@nuhs.edu.sg?subject=Portfolio contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact — Jonathan Lim</title>
        <meta name="description" content="Get in touch with Jonathan Lim." />
      </Helmet>

      <section className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a question or want to work together? I'd love to hear from you."
        />

        <div className="grid sm:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            {sent ? (
              <div className="rounded-2xl bg-green-50 border border-green-100 p-6 text-center">
                <p className="text-green-700 font-medium">Your email client should open shortly.</p>
                <p className="mt-1 text-sm text-green-600">
                  If it didn't,{' '}
                  <a
                    href="mailto:jonathan_lim1@nuhs.edu.sg"
                    className="underline"
                  >
                    email me directly
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Your message…"
                  />
                </div>
                <Button variant="primary" className="w-full justify-center">
                  <Send size={15} /> Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-6">Or reach me directly on any of these:</p>
            {socials.map(({ href, icon: Icon, label, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-4 hover:border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-900">{label}</p>
                  <p className="text-xs text-gray-500">{handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
