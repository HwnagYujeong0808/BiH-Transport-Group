import { Route, MapPin, Repeat, Building2, Truck, Container, Headset, Phone, Printer, Mail, Clock, Users, Satellite, ShieldCheck } from 'lucide-react'
import logo from './assets/logo.png'
import logoFooter from './assets/logo-footer.png'
import usMap from './assets/us-map.png'

const PHONE = '(518) 478-8466'
const EMAIL = 'dispatch@bihtransport.com'

const services = [
  { Icon: Route, title: 'Long Haul', text: 'Coast-to-coast freight across the lower 48.' },
  { Icon: MapPin, title: 'Local Haul', text: 'Fast, reliable regional and local deliveries.' },
  { Icon: Repeat, title: 'Drop Trailers', text: 'Flexible drop-and-hook trailer service.' },
  { Icon: Building2, title: 'Broker Partners', text: 'Trusted carrier for major freight brokers.' },
]

const stats = [
  { Icon: Truck, label: 'Since 2015' },
  { Icon: Container, label: '48 States Covered' },
  { Icon: Headset, label: '24/7 Dispatch' },
]

export default function App() {
  return (
    <>
      <header className="nav container">
        <a href="#top"><img src={logo} alt="BiH Transport Group LLC" className="nav-logo" /></a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#coverage">Coverage</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="container">
          <span className="bar" />
          <h1>General Freight.<br />Delivered Across 48 States.</h1>
          <p>Local and long haul trucking with 24/7 dispatch — trusted since 2015.</p>
          <div className="actions">
            <a href="#contact" className="btn btn-primary">Ship With Us</a>
            <a href="#services" className="btn btn-outline">Our Services</a>
          </div>
        </div>
      </section>

      <section className="section light" id="about">
        <div className="container about">
          <div>
            <p className="eyebrow">About us</p>
            <h2>Staff and Safety Standards</h2>
            <p className="about-intro">
              If you would like, we can provide details on driver pay rates and benefits, or assistance with your
              shipping and trucking needs. <a href="#contact">Contact us</a>.
            </p>
          </div>
          <ul className="about-list">
            <li>
              <Users size={40} strokeWidth={1.5} />
              <div>
                <h3>Owner Operators &amp; Company Drivers</h3>
                <p>We hire both owner operators and company drivers.</p>
              </div>
            </li>
            <li>
              <ShieldCheck size={40} strokeWidth={1.5} />
              <div>
                <h3>Driver Requirements</h3>
                <p>Minimum of two years of experience, a clean driving record, and passing background checks and drug testing.</p>
              </div>
            </li>
            <li>
              <Satellite size={40} strokeWidth={1.5} />
              <div>
                <h3>24/7 Dispatch &amp; GPS Tracking</h3>
                <p>Round-the-clock dispatch with GPS satellite tracking on all units for real-time freight monitoring.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="section container" id="services">
        <p className="eyebrow">What we do</p>
        <h2>Our Services</h2>
        <div className="cards">
          {services.map(({ Icon, title, text }) => (
            <article className="card" key={title}>
              <Icon size={40} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section light" id="coverage">
        <div className="container center">
          <p className="eyebrow">Coverage</p>
          <h2>Serving All 48 Contiguous States</h2>
          <p className="muted">Excluding Alaska and Hawaii.</p>
          <img src={usMap} alt="Map of the 48 contiguous United States" className="map" />
          <div className="stats">
            {stats.map(({ Icon, label }) => (
              <div key={label}>
                <Icon size={80} strokeWidth={1.2} />
                <h3>{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <h2>Freight to move? Our dispatch never sleeps.</h2>
          <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn btn-yellow">Contact Dispatch</a>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-grid">
          <div>
            <img src={logoFooter} alt="BiH Transport Group LLC" className="footer-logo" />
            <p>General freight carrier since 2015.</p>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><Phone size={18} /><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li>
              <li><Printer size={18} />Fax (518) 729-2800</li>
              <li><Mail size={18} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><Clock size={18} />Dispatch 24/7</li>
            </ul>
          </div>
          <div>
            <h4>Service Area</h4>
            <p>48 contiguous United States</p>
          </div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} BiH Transport Group LLC. All rights reserved.</div>
      </footer>
    </>
  )
}
