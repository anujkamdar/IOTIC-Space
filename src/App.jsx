import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Our Approach', href: '#capabilities' },
  { label: 'Flux Alpha', href: '#vehicles' },
  { label: 'Mission', href: '#mission-control' },
  { label: 'Company', href: '#company' },
  { label: 'Contact', href: '#contact' },
]

const highlights = [
  {
    value: 'Phase 1',
    label: 'Design, manufacturing, and static fire testing',
  },
  {
    value: 'Tech',
    label: 'Solid rocket motor prototype validation',
  },
  {
    value: 'Goal',
    label: 'Build real engineering capability first. Scale later.',
  },
]

const capabilities = [
  {
    title: 'Propulsion Validation',
    text: 'A foundational solid rocket motor prototype focusing on combustion understanding, nozzle design, and chamber pressure behavior.',
  },
  {
    title: 'Deep-Tech Infrastructure',
    text: 'Building scalable space transportation systems to support humanity’s expansion into cislunar and lunar space.',
  },
  {
    title: 'Iterative Engineering',
    text: 'Embracing a disciplined cycle of design, validation, and improvement—the true engine of aerospace progress.',
  },
]

function getCountdown() {
  const targetDate = new Date('2026-06-18T21:00:00Z')
  const remaining = Math.max(targetDate.getTime() - Date.now(), 0)

  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return [days, hours, minutes, seconds].map((value) => String(value).padStart(2, '0')).join(':')
}

function App() {
  const [countdown, setCountdown] = useState(getCountdown())
  const hasSetInitialVideoOffset = useRef(false)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleMoonVideoLoadedMetadata = (event) => {
    if (hasSetInitialVideoOffset.current) return

    event.currentTarget.currentTime = 2
    hasSetInitialVideoOffset.current = true
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="IOTIC Space home">
          <img src="/LogoWithoutText.png" alt="IOTIC Space logo" />
          <span className="brand-name">IOTIC Space</span>
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <Link className="nav-recruitment-cta" to="/recruitment">
          Recruitment
        </Link>


      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy reveal">
            <h1>Engineering the first steps toward humanity’s next frontier.</h1>





          </div>

          <div className="hero-visual reveal" id="moon-live" style={{ '--reveal-delay': '120ms' }}>
            <div className="moon-panel">
              <div className="moon-frame">
                <video
                  className="moon-video"
                  src="/Moon%20Live%20Wallpaper_2160p.mp4"
                  onLoadedMetadata={handleMoonVideoLoadedMetadata}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Live moon wallpaper"
                />
                <div className="moon-sheen" />
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities reveal" id="capabilities">
          <div className="section-heading reveal" style={{ '--reveal-delay': '80ms' }}>
            <p>Our Approach</p>
            <h2>Real engineering capability first. Scale later.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article
                key={item.title}
                className="capability-card reveal"
                style={{ '--reveal-delay': `${120 + index * 90}ms` }}
              >
                <span className="card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase reveal" id="vehicles">
          <div className="showcase-visual">
            <img src="/engine.png" alt="IOTIC Space engine assembly" loading="lazy" />
          </div>

          <div className="showcase-copy">
            <h2>Flux Alpha</h2>
            <p>Engine properties</p>

            <div className="timeline">
              <div>
                <strong>ISP</strong>
                <span>260-290 s - efficiency range for sustained burn performance.</span>
              </div>
              <div>
                <strong>Thrust</strong>
                <span>400 kN - delivers strong acceleration for mission maneuvers.</span>
              </div>
              <div>
                <strong>Propellant</strong>
                <span>LOX + LCH4 - a clean, high-performance cryogenic propellant pair.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-panel reveal" id="mission-control">
          <div>
            <p className="eyebrow">The Mission</p>
            <h2>One validated propulsion milestone at a time.</h2>
          </div>
          <p>
            IOTIC Space is not attempting to skip steps. We are beginning with foundational propulsion work
            that every serious space company must master—the ability to design, build, test, fail safely,
            learn, and iterate.
          </p>
        </section>

        <footer className="site-footer reveal" id="company">
          <div>
            <p className="eyebrow">Company</p>
            <h2>IOTIC Space.</h2>
          </div>
          <p>
            We are building a technically credible foundation in propulsion and launch system development. 
            Capability, once earned, can change everything.
          </p>
        </footer>

        <section className="contact-section reveal" id="contact">
          <div className="contact-copy reveal" style={{ '--reveal-delay': '70ms' }}>
            <p className="eyebrow">Contact Us</p>
            <h2>Connect with the IOTIC Space team.</h2>
            <p>
              For collaboration, internships, and media inquiries, reach out through the channels below.
            </p>
          </div>

          <div className="contact-details" aria-label="Contact details">
            <div className="reveal" style={{ '--reveal-delay': '120ms' }}>
              <span>Email</span>
              <a className="contact-link" href="mailto:hello@ioticspace.com">
                hello@ioticspace.com
              </a>
            </div>

            <div className="reveal" style={{ '--reveal-delay': '180ms' }}>
              <span>Phone</span>
              <a className="contact-link" href="tel:+919876543210">
                +91 85059 05796
              </a>
            </div>

            <div className="reveal" style={{ '--reveal-delay': '240ms' }}>
              <span>Location</span>
              <p>Dhanbad, Jharkhand</p>
            </div>

            <div className="reveal" style={{ '--reveal-delay': '300ms' }}>
              <span>LinkedIn</span>
              <a className="contact-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                www.linkedin.com/company/iotic-space/
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
