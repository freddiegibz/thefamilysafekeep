import { useEffect, useState } from 'react';
import { Clock3, Flower2, Laptop, Mail, Package, PawPrint, UsersRound } from 'lucide-react';
import './final-wishes.css';

const checkout = 'https://buy.stripe.com/8x25kCevh9gwdGUcCebZe17';
const timerKey = 'family-safekeep-final-wishes-offer-deadline';

function Countdown() {
  const [seconds, setSeconds] = useState(600);
  useEffect(() => {
    let deadline = Number(sessionStorage.getItem(timerKey));
    if (!deadline || deadline <= Date.now()) {
      deadline = Date.now() + 600_000;
      sessionStorage.setItem(timerKey, String(deadline));
    }
    const tick = () => setSeconds(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);
  return <div className="fw-countdown" role="timer" aria-label="Time remaining on the special offer"><Clock3 size={17} aria-hidden="true" /><span>{String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}</span></div>;
}

const topics = [
  { icon: Flower2, label: 'Funeral & memorial' },
  { icon: PawPrint, label: 'Pets' },
  { icon: Package, label: 'Personal possessions' },
  { icon: UsersRound, label: 'People to contact' },
  { icon: Laptop, label: 'Digital wishes' },
  { icon: Mail, label: 'Personal messages' },
];

export default function FinalWishesPage() {
  return <main className="fw-page">
    <header className="fw-header"><span className="fw-mark" aria-hidden="true">✳</span><span>FAMILY SAFEKEEP</span></header>
    <div className="fw-timer"><Countdown /><span>Special post-purchase offer — available for the next 10 minutes</span></div>

    <section className="fw-opening fw-shell">
      <h1>Your Family Safekeep makes sure they can find everything.</h1>
      <h2>But would they know what you wanted?</h2>
      <p>If your family ever had to make decisions for you, they could still be left wondering about things no account list or document can answer — funeral wishes, pets, possessions, digital accounts, or messages you wanted them to have.</p>
      <p className="fw-opening-close">At an already difficult time, guessing is the last thing you want to leave them with.</p>
    </section>

    <section className="fw-offer fw-shell">
      <img className="fw-product-image" src="/final-wishes-pack-mockup.png" alt="The No-Guessing Final Wishes Pack in a navy presentation folder with four guided wishes cards" width="1456" height="1092" />
      <div className="fw-offer-copy">
        <h2>The No-Guessing Final Wishes Pack</h2>
        <p>A simple set of guided cards that sits alongside your Family Safekeep and tells your family the things only you can decide.</p>
        <p className="fw-price">Family Safekeep customer price: <strong>$37</strong></p>
        <a className="fw-button" href={checkout}>YES — ADD MY FINAL WISHES PACK</a>
      </div>
    </section>

    <section className="fw-covers fw-shell" aria-label="What the pack covers">
      <div className="fw-topic-grid">{topics.map(({icon: Icon, label}) => <div key={label}><Icon aria-hidden="true" strokeWidth={1.5} /><span>{label}</span></div>)}</div>
    </section>

    <section className="fw-contrast">
      <div className="fw-shell">
        <div className="fw-contrast-pair"><p><span>Family Safekeep:</span> where everything is</p><p><span>Final Wishes Pack:</span> what you wanted</p></div>
        <h2>One removes the searching.<br />The other removes the guessing.</h2>
      </div>
    </section>

    <section className="fw-final fw-shell">
      <h2>Add the Final Wishes Pack for $37</h2>
      <a className="fw-button" href={checkout}>YES — I WANT MY FAMILY TO KNOW WHAT I WANTED</a>
      <a className="fw-decline" href="/thank-you">No thanks — I’ll continue with my Family Safekeep only.</a>
    </section>
  </main>;
}
