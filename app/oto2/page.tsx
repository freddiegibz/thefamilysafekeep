import { useEffect, useState } from 'react';
import { Clock3 } from 'lucide-react';
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

const inside = [
  { title: 'Funeral & Memorial Wishes', text: 'Whether you want burial or cremation, what kind of service feels right, and any music, readings or details that matter to you.' },
  { title: 'People To Contact', text: 'Friends, relatives, former colleagues, clubs or anyone your immediate family may not otherwise know to tell.' },
  { title: 'Pets', text: 'Who you would want to care for them, plus their routines, vet details, medication and anything else someone would need to know.' },
  { title: 'Personal Possessions', text: 'Who you would like sentimental items or keepsakes to go to — and, if you want, why they matter.' },
  { title: 'Digital Wishes', text: 'What you would like done with your photographs, files, social accounts and other parts of your digital life.' },
  { title: 'Personal Messages', text: 'A private place for the words that do not belong in a will, account list or financial record.' },
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
        <p>A simple set of guided cards designed to sit alongside your Family Safekeep and record the decisions only you can make.</p>
        <h3>Inside, you can make clear:</h3>
        <dl className="fw-inside">{inside.map(({title, text}) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
        <p className="fw-price">Family Safekeep customer price: <strong>$37</strong></p>
        <a className="fw-button" href={checkout}>YES — ADD MY FINAL WISHES PACK</a>
      </div>
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
