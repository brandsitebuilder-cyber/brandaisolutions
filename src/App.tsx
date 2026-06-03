import { Menu, X, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Quote', href: '#quote' },
  { label: 'About', href: '#about' },
]

const SERVICES = [
  { icon: '🖥️', title: 'Web Development', desc: 'Custom websites built with React, Next.js & Tailwind' },
  { icon: '📍', title: 'Google Business Profile', desc: 'Setup, optimization, and review management for local SEO' },
  { icon: '🤖', title: 'AI Automation', desc: 'Smart workflows and agents that save time and drive revenue' },
  { icon: '🔧', title: 'Custom Solutions', desc: 'Tailored business tools — dashboards, portals, integrations' },
  { icon: '🧠', title: 'AI Integration', desc: 'Embed AI into your existing business processes and systems' },
  { icon: '📊', title: 'Client Portals', desc: 'Invoicing, dashboards, and business management platforms' },
]

const PROJECTS = [
  { title: 'Pieterhuizen Planning', cat: 'Professional Services', desc: '20-page town planning consultancy site', url: 'https://pieterhuizen-website.vercel.app' },
  { title: 'RK Construction', cat: 'Professional Services', desc: 'Construction services with project gallery', url: 'https://rk-construction.vercel.app' },
  { title: 'Els Bruilof', cat: 'Weddings & Events', desc: 'Elegant wedding site with guest management', url: 'https://elsbruilof.co.za' },
  { title: 'The Boat Lab', cat: 'E-Commerce', desc: 'Full-stack store with Stripe payments', url: 'https://the-boat-lab.vercel.app' },
  { title: 'Invoice Dashboard', cat: 'SaaS / Tools', desc: 'Client portal with auth, invoicing, Supabase', url: 'https://invoicedashboard-brandsitebuilder-9030s-projects.vercel.app' },
  { title: 'Euro Motor Clinic', cat: 'Automotive', desc: 'Professional site for a vehicle service workshop', url: 'https://euro-motor-clinic.vercel.app' },
]

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const sent = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('sent')

  return (
    <div className="min-h-screen bg-bg text-white selection:bg-accent/30">
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-bg font-black text-xs">BAS</span>
            </div>
            <span className="font-bold text-white tracking-tight">
              Brand<span className="text-accent">AI</span>Solutions
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
              Start Project
            </a>
          </div>

          <button className="md:hidden text-gray-400" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border-subtle bg-bg px-6 py-4 space-y-3">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="block text-sm text-gray-400 hover:text-white py-1.5">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-accent text-bg py-2.5 rounded-lg text-sm font-semibold">
              Start Project
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/3 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-border-subtle rounded-full px-4 py-1.5 text-sm text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Grow Your Business.<br />
            <span className="text-accent">We'll Handle</span> the Tech.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Modern websites, AI automation, and smart tools that bring in more customers —
            so you can focus on what you do best.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#portfolio" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg px-8 py-4 rounded-xl font-bold text-lg transition-colors">
              View Our Work
              <ExternalLink size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 border border-border-subtle hover:border-border-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Business Growth</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Everything you need to grow your business online — from stunning websites to intelligent automation.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle rounded-2xl overflow-hidden">
            {SERVICES.map(s => (
              <div key={s.title} className="bg-bg p-8 group hover:bg-card-hover transition-colors">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects We're Proud Of</h2>
            <p className="text-gray-500 max-w-xl mx-auto">A curated selection of websites, tools, and platforms we've built for our clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border-subtle rounded-2xl overflow-hidden">
            {PROJECTS.map(p => (
              <a key={p.title} href={p.url} target="_blank" rel="noopener noreferrer" 
                className="bg-bg p-6 group hover:bg-card-hover transition-colors block">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full">{p.cat}</span>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <h3 className="font-semibold text-white mb-1.5 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET A QUOTE ── */}
      <section id="quote" className="py-24 md:py-32 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Request a Quote</h2>
            <p className="text-gray-500">Tell us what you need — we'll get back to you within 24 hours.</p>
          </div>

          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Thanks! We'll be in touch.</h3>
              <p className="text-gray-400">Your quote request has been sent. We typically respond within 24 hours.</p>
            </div>
          ) : (
            <form action="https://formsubmit.co/marcus@brandaisolutions.co.za" method="POST" className="space-y-5">
              <input type="hidden" name="_subject" value="New Quote Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input type="hidden" name="_next" value="https://brandaisolutions.co.za/?sent=true" />
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Name *</label>
                <input type="text" name="name" required
                  placeholder="Your name"
                  className="w-full bg-white/[0.03] border border-border-subtle rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Email *</label>
                <input type="email" name="email" required
                  placeholder="you@example.com"
                  className="w-full bg-white/[0.03] border border-border-subtle rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Phone</label>
                <input type="tel" name="phone"
                  placeholder="Your phone number"
                  className="w-full bg-white/[0.03] border border-border-subtle rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Service *</label>
                <select name="service" required
                  className="w-full bg-white/[0.03] border border-border-subtle rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent/50 transition-colors appearance-none">
                  <option value="" className="bg-bg">Select a service</option>
                  <option value="Web Development" className="bg-bg">Web Development</option>
                  <option value="Google Business Profile" className="bg-bg">Google Business Profile</option>
                  <option value="AI Automation" className="bg-bg">AI Automation</option>
                  <option value="Custom Solutions" className="bg-bg">Custom Solutions</option>
                  <option value="AI Integration" className="bg-bg">AI Integration</option>
                  <option value="Client Portals" className="bg-bg">Client Portals</option>
                  <option value="Other" className="bg-bg">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1.5">Tell us about your project</label>
                <textarea name="message" rows={4}
                  placeholder="Describe what you're looking for..."
                  className="w-full bg-white/[0.03] border border-border-subtle rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 transition-colors resize-none" />
              </div>
              <button type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-bg px-8 py-4 rounded-xl font-bold text-lg transition-colors">
                Send Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── ABOUT + CONTACT ── */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Partner in Digital Growth</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Hi, I'm Marcus. I don't just build websites — I help businesses reach their full potential 
            through stunning design, smart automation, and AI-powered tools. Whether you're a local 
            service or scaling enterprise, I'm invested in your success.
          </p>

          <div id="contact" className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a href="mailto:marcus@brandaisolutions.co.za" 
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg px-8 py-4 rounded-xl font-bold text-lg transition-colors w-full sm:w-auto justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email Us
            </a>
            <a href="https://wa.me/27765626175" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border-subtle hover:border-accent/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all w-full sm:w-auto justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border-subtle py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold text-xs">BAS</span>
            </div>
            <span className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} BrandAISolutions
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="mailto:marcus@brandaisolutions.co.za" className="hover:text-gray-400 transition-colors">marcus@brandaisolutions.co.za</a>
            <span className="text-border-subtle">|</span>
            <span>brandaisolutions.co.za</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
