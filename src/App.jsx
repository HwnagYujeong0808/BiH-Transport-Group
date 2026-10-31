import { Route, MapPin, Repeat, Building2, Phone, Printer, Mail, Clock, Users, Satellite, ShieldCheck } from 'lucide-react'
import logo from './assets/logo.png'
import logoFooter from './assets/logo-footer.png'
import usMap from './assets/us-map.png'
import iconTruck from './assets/icon-truck.png'
import iconTrailers from './assets/icon-trailers.png'
import iconDispatch from './assets/icon-dispatch.png'

const PHONE = '(518) 478-8466'
const FAXNUM = '(518) 729-2800'
const TEL = `tel:${PHONE.replace(/\D/g, '')}`
const FAX = `tel:${FAXNUM.replace(/\D/g, '')}`
const EMAIL = 'contact@bihtransportllc.com'
const ADDRESS = '84 Harris Ave, Albany, NY, 12208'
const WEBSITE = 'bihtransportllc.com'
const HOURS = ['Mon – Fri: 7:00 AM – 6:00 PM', 'Sat – Sun: 7:00 AM – 12:00 PM']

const services = [
  { Icon: Route, title: 'Long Haul', text: 'Coast-to-coast freight across the lower 48.' },
  { Icon: MapPin, title: 'Local Haul', text: 'Fast, reliable regional and local deliveries.' },
  { Icon: Repeat, title: 'Drop Trailers', text: 'Flexible drop-and-hook trailer service.' },
  { Icon: Building2, title: 'Broker Partners', text: 'Trusted carrier for major freight brokers.' },
]

const stats = [
  { img: iconTruck, label: 'Since 2015' },
  { img: iconTrailers, label: '48 States Covered' },
  { img: iconDispatch, label: '24/7 Dispatch' },
]

export default function App() {
  return (

    <>
      <header className="nav container">
        
        <a href="#top"><img src={logo} alt="BiH Transport Group LLC" className="nav-logo" /></a>
        <nav>
          
          <a href="#services">Services</a>
          <a href="#coverage">Coverage</a>
          <a href="#about">About</a>
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

      <section className="info light">
        <div className="container info-grid">
          <div>
            <Clock size={36} strokeWidth={1.5} />
            <div>
              <h4>Hours of Operation</h4>
              {HOURS.map((h) => <p key={h}>{h}</p>)}
            </div>
          </div>
          <div>
            <MapPin size={36} strokeWidth={1.5} />
            <div>
              <h4>Location</h4>
              <p>{ADDRESS}</p>
            </div>
          </div>
          <div>
            <Phone size={36} strokeWidth={1.5} />
            <div>
              <h4>Call Dispatch 24/7</h4>
              <p><a href={TEL}>{PHONE}</a></p>
            </div>
          </div>
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
            {stats.map(({ img, label }) => (
              <div key={label}>
                <img src={img} alt="" />
                <h3>{label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
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

      <section className="cta">
        <div className="container cta-inner">
          <h2>Freight to move? Our dispatch never sleeps.</h2>
          <a href={TEL} className="btn btn-yellow">Contact Dispatch</a>
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
              <li><Phone size={18} /><a href={TEL}>{PHONE}</a></li>
              <li><Fax size={18} />Fax (518) 729-2800</li>
              <li><Mail size={18} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li><Clock size={18} />Dispatch 24/7</li>
              <li><MapPin size={18} />{ADDRESS}</li>
            </ul>
          </div>
          <div>
            <h4>Service Area</h4>
            <p>48 contiguous United States</p>
          </div>
          <div>
            <h4>Hours of Operation</h4>
            <ul>
              {HOURS.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </div>
        <div className="container copyright">© {new Date().getFullYear()} BiH Transport Group LLC. All rights reserved.</div>
      </footer>
    </>
  )
}
