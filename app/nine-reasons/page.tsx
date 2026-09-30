import {useEffect, useState} from 'react';
import source from './copy.md?raw';
import './reasons.css';

function OfferCountdown() {
  const [deadline] = useState(() => Date.now() + 15 * 60 * 1000);
  const [secondsLeft, setSecondsLeft] = useState(() => Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));

  useEffect(() => {
    const interval = window.setInterval(() => setSecondsLeft(Math.max(0, Math.ceil((deadline - Date.now()) / 1000))), 1000);
    return () => window.clearInterval(interval);
  }, [deadline]);

  const time = `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`;
  return <div className="reasons-offer-countdown">
    <strong>{secondsLeft > 0 ? 'THE OFFER ENDS IN:' : 'OFFER WINDOW ENDED'}</strong>
    <span role="timer" aria-label={`${Math.floor(secondsLeft / 60)} minutes and ${secondsLeft % 60} seconds remaining`}>{time}</span>
  </div>;
}

const chunks = source.replace(/\r\n/g, '\n').trim().split(/\n(?=## \d+\. )/);
const intro = chunks.shift() || '';
const lines = intro.split(/\n\s*\n/).map(x => x.trim());
const clean = (s: string) => s.replace(/^\*\*(.*?)\*\*$/, '$1').replace(/^# /, '');
const inline = (s: string) => s.split(/(\*\*[^*]+\*\*)/g).map((part, i) => part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part);
const reasons = chunks.map((chunk, index) => {
  const blocks = chunk.trim().split(/\n\s*\n/);
  return { number: index + 1, title: blocks[0].replace(/^## /, ''), paragraphs: blocks.slice(1) };
});
const closing = reasons[8].paragraphs.splice(-5);

export default function NineReasons() {
  return <main className="reasons-page">
    <article className="reasons-article">
      <div className="reasons-intro">
        <p className="reasons-eyebrow">{clean(lines[0])}</p>
        <h1>{clean(lines[2])}</h1>
        <div className="reasons-author"><img className="reasons-avatar" src="/sienna-cunningham.png" alt="Portrait of Sienna Cunningham" /><span><strong>{clean(lines[3])}</strong><small>{lines[4]}</small></span></div>
        <p className="reasons-summary">{inline(lines[5])}</p>
      </div>
      {reasons.map((reason, index) => <section className="reasons-section" key={reason.number}>
        <figure className="reasons-image"><img src={index === 4 ? '/reasons/05-australian-v1.png' : `/reasons/${String(index + 1).padStart(2, '0')}.png`} alt={[
          'A family member starting with a phone and account information',
          'The steps needed after entering an account password',
          'A household inventory of accounts and policies',
          'Practical household information alongside legal documents',
          'Records for an Australian household',
          'A guided system replacing a blank spreadsheet',
          'A family member using organised information',
          'Updating family information as life changes',
          'The everyday details that help a family run a household'
        ][index]} loading="lazy" /></figure>
        <h2>{reason.title}</h2>
        {reason.paragraphs.map((paragraph, i) => <p key={i}>{inline(paragraph)}</p>)}
      </section>)}
      <div className="reasons-close">{closing.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div>
      <aside className="reasons-offer">
        <div className="reasons-offer-copy">
          <span className="reasons-offer-eyebrow">INSTANT ACCESS | 30-DAY MONEY-BACK GUARANTEE</span>
          <h2>The Family Safekeep™<br/>“If I’m Not Here” Planner<br/><span>(Australian Digital Edition)</span></h2>
          <p className="reasons-discount-price"><del>$44</del> <strong>$27</strong> <span>SAVE $17</span></p>
          <p>The complete Australian Edition of Family Safekeep: fillable PDF, Notion version and a copy you can print. One payment, with lifetime updates included.</p>
          <OfferCountdown />
          <p className="reasons-offer-nudge"><strong>Keep a digital copy. Print one for your family.</strong></p>
          <a href="/pdp" className="reasons-cta" data-pixel-event="AdvertorialContinue">Check Availability <span aria-hidden="true">→</span></a>
          <div className="reasons-offer-trust"><span>INSTANT DOWNLOAD</span><span>PDF + NOTION</span><span>30-DAY GUARANTEE</span></div>
          <p className="reasons-offer-guarantee">Try it for 30 days. If it isn’t right for you, ask for a full refund. Every cent back.</p>
        </div>
        <img src="/pdp/advertorial-planner-natural-v1.png" alt="The Family Safekeep planner and printed worksheets on a kitchen table" />
      </aside>
    </article>
    <footer className="reasons-footer">© 2026 The Family Safekeep</footer>
  </main>;
}
