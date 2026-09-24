import { useEffect, useState } from 'react';
import { ArrowRight, Clock3, FileHeart, Flower2, Heart, Laptop, Mail, Package, PawPrint, UsersRound } from 'lucide-react';
import './final-wishes.css';

const checkout = 'https://buy.stripe.com/8x25kCevh9gwdGUcCebZe17';
const timerKey = 'family-safekeep-final-wishes-offer-deadline';

function Countdown() {
  const [seconds, setSeconds] = useState(600);
  useEffect(() => {
    let deadline = Number(sessionStorage.getItem(timerKey));
    if (!deadline) {
      deadline = Date.now() + 600_000;
      sessionStorage.setItem(timerKey, String(deadline));
    }
    const tick = () => setSeconds(Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);
  return <div className="fw-countdown" role="timer" aria-label="Time remaining on the special offer"><Clock3 size={18} aria-hidden="true" /><span>{String(Math.floor(seconds / 60)).padStart(2, '0')}:{String(seconds % 60).padStart(2, '0')}</span></div>;
}

const contents = [
  { icon: Flower2, title: 'Funeral & Memorial Wishes', text: 'Burial or cremation, service preferences, music, readings, flowers and anything else that matters to you.' },
  { icon: UsersRound, title: 'People To Contact', text: 'Friends, relatives, former colleagues, clubs or anyone your family may not otherwise know to tell.' },
  { icon: Package, title: 'Personal Possessions', text: 'Who you would like sentimental items or keepsakes to go to — and why, if you want to explain.' },
  { icon: PawPrint, title: 'Pets', text: 'Who you would trust to care for them, their routines, vet details, medication and anything else they may need.' },
  { icon: Laptop, title: 'Digital Wishes', text: 'What you would like done with your photos, files, social accounts and other parts of your digital life.' },
  { icon: Mail, title: 'Personal Messages', text: 'A private place for the words that do not belong in a financial record, insurance file or will.' },
];

export default function FinalWishesPage() {
  return <main className="fw-page fw-sales-page">
    <header className="fw-sales-header"><span className="fw-sales-symbol" aria-hidden="true">✳</span><span>FAMILY SAFEKEEP</span></header>
    <div className="fw-timer-bar"><Countdown /><strong>Special post-purchase offer — available for the next 10 minutes</strong></div>

    <section className="fw-sales-hero">
      <div className="fw-sales-shell fw-sales-hero-grid">
        <div className="fw-sales-hero-copy">
          <h1>Complete Your Family Safekeep With The One Thing It Can’t Answer For Them.</h1>
          <h2>Add the No-Guessing Final Wishes Pack for $37</h2>
          <p>Your Family Safekeep gives your family one clear place to find the practical information they may one day need.</p>
          <p>But there are some things no account list, document folder or password record can tell them.</p>
          <p className="fw-big-question">What did you want?</p>
          <p>Would they know:</p>
          <ul className="fw-question-list">
            <li>whether you wanted to be buried or cremated?</li>
            <li>who you would want contacted?</li>
            <li>who should care for your pets?</li>
            <li>whether certain possessions should go to particular people?</li>
            <li>what you wanted done with your photos, files and social accounts?</li>
            <li>whether there was anything you wanted them to hear from you?</li>
          </ul>
          <p>These are the decisions only you can make clear.</p>
        </div>
        <div className="fw-sales-product"><div className="fw-sales-book"><FileHeart aria-hidden="true" /><span>THE NO-GUESSING</span><strong>Final Wishes<br />Pack</strong><small>FAMILY SAFEKEEP</small></div><div className="fw-sales-sheet fw-sales-sheet-one">My Wishes<span /><span /><span /><span /></div><div className="fw-sales-sheet fw-sales-sheet-two">Personal Messages<span /><span /><span /><span /></div></div>
      </div>
    </section>

    <section className="fw-sales-intro fw-sales-shell">
      <h2>The No-Guessing Final Wishes Pack</h2>
      <p>A private, guided record of the personal wishes your family could otherwise be left trying to work out for themselves.</p>
      <p>Keep it alongside your Family Safekeep, so if the day ever comes when they need it, they don’t have to ask:</p>
      <blockquote>“What would she have wanted?”</blockquote>
      <p>They can know.</p>
      <div className="fw-sales-price"><span>Usually $59</span><strong>Add It Now For $37</strong><a className="fw-sales-button" href={checkout}>YES — ADD MY FINAL WISHES PACK — $37 <ArrowRight aria-hidden="true" /></a></div>
    </section>

    <section className="fw-sales-clarity">
      <div className="fw-sales-shell">
        <h2>Give Them Answers Instead Of Decisions.</h2>
        <div className="fw-sales-clarity-grid"><div><FileHeart aria-hidden="true" /><p>Your Family Safekeep helps your family find the important information.</p></div><div><Heart aria-hidden="true" /><p>The Final Wishes Pack helps them understand the decisions only you could make.</p></div></div>
        <p>Together, they give your family something much more useful:</p>
        <strong>clarity.</strong>
      </div>
    </section>

    <section className="fw-sales-contents fw-sales-shell">
      <h2>Here’s What You’ll Be Able To Record</h2>
      <div className="fw-sales-content-grid">{contents.map(({icon: Icon, title, text}) => <article key={title}><Icon aria-hidden="true" strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="fw-sales-close">
      <div className="fw-sales-shell">
        <h2>You’ve Already Taken The First Step.</h2>
        <p>You’ve made sure your family will have somewhere to start.</p>
        <p>Now you can make sure they are not left guessing about the things that matter most.</p>
        <div className="fw-sales-close-card"><h3>Add The No-Guessing Final Wishes Pack For $37</h3><a className="fw-sales-button" href={checkout}>YES — I WANT TO MAKE MY WISHES CLEAR — $37 <ArrowRight aria-hidden="true" /></a><p><em>Immediate access. Complete it privately, at your own pace, and keep it alongside your Family Safekeep.</em></p></div>
        <a className="fw-sales-decline" href="/thank-you">No thanks — I’ll continue with my Family Safekeep only.</a>
      </div>
    </section>
  </main>;
}
