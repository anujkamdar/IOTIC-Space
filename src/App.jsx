import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Launches', href: '#home' },
  { label: 'Lunar Systems', href: '#capabilities' },
  { label: 'Vehicles', href: '#vehicles' },
  { label: 'Mission Control', href: '#mission-control' },
  { label: 'Company', href: '#company' },
]

const highlights = [
  {
    value: '24/7',
    label: 'Live mission telemetry and deep-space monitoring',
  },
  {
    value: '03',
    label: 'Flight-ready systems staged for lunar deployment',
  },
  {
    value: '99.8%',
    label: 'Operational visibility across every critical stack',
  },
]

const capabilities = [
  {
    title: 'Launch architecture',
    text: 'Reusable launch vehicles and modular payload stacks designed for rapid orbital deployment.',
  },
  {
    title: 'Moon live wallpaper',
    text: 'A cinematic, looping moon feed keeps the hero section alive and matches the screenshot atmosphere.',
  },
  {
    title: 'Ground systems',
    text: 'Mission control dashboards, telemetry layers, and resilient communications built for long-range operations.',
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="IOTIC Space home">
          IOTIC SPACE
        </a>

        <nav className="nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="launch-chip" aria-label="Upcoming launch countdown">
          <span>Upcoming launch</span>
          <strong>{countdown}</strong>
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">IOTIC SPACE PROGRAM</p>
            <h1>Making life multiplanetary starts with better infrastructure.</h1>
            <p className="hero-text">
              IOTIC Space builds launch systems, lunar hardware, and connected operations tools for the next
              generation of orbital work. The interface is intentionally SpaceX-inspired: quiet, technical, and
              cinematic.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#capabilities">
                Explore systems
              </a>
              <a className="secondary-action" href="#moon-live">
                Watch moon live
              </a>
            </div>

            <div className="highlight-strip" role="list" aria-label="Key platform metrics">
              {highlights.map((item) => (
                <article key={item.label} className="highlight-card" role="listitem">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual" id="moon-live">
            <div className="moon-frame">
              <video
                className="moon-video"
                src="/Moon%20Live%20Wallpaper_2160p.mp4"
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
        </section>

        <section className="capabilities" id="capabilities">
          <div className="section-heading">
            <p>Capabilities</p>
            <h2>Built like a launch company, presented like a control room.</h2>
          </div>

          <div className="capability-grid">
            {capabilities.map((item, index) => (
              <article key={item.title} className="capability-card">
                <span className="card-index">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="showcase" id="vehicles">
          <div className="showcase-visual">
            <img src="/engine.png" alt="IOTIC Space engine assembly" loading="lazy" />
          </div>

          <div className="showcase-copy">
            <p className="eyebrow">Vehicles</p>
            <h2>Lunar-class propulsion and modular payload hardware.</h2>
            <p>
              The engine image from the context folder becomes the technical centerpiece of the lower section,
              anchoring the page with a precise product feel rather than a generic marketing layout.
            </p>

            <div className="timeline">
              <div>
                <strong>Stage 01</strong>
                <span>Vehicle concept and stack integration</span>
              </div>
              <div>
                <strong>Stage 02</strong>
                <span>Orbital checkout and thermal validation</span>
              </div>
              <div>
                <strong>Stage 03</strong>
                <span>Lunar payload delivery and live monitoring</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-panel" id="mission-control">
          <div>
            <p className="eyebrow">Mission control</p>
            <h2>Designed to feel like a live launch page, not a brochure.</h2>
          </div>
          <p>
            If you want, this can be extended into multi-page sections for vehicles, company, updates, and launch
            manifests while keeping the same visual language.
          </p>
        </section>

        <footer className="site-footer" id="company">
          <div>
            <p className="eyebrow">Company</p>
            <h2>IOTIC Space.</h2>
          </div>
          <p>
            A minimal launch platform concept with a SpaceX-like presentation, a live moon wallpaper hero, and
            chrome-toned technical storytelling.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
