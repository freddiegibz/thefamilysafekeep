import { ArrowRight, Check, CheckCircle2, ClipboardList, Heart, LockKeyhole, MessageCircle, UserRound, UsersRound } from 'lucide-react';
import './setup.css';

const steps = [
  { icon: ClipboardList, title: 'Get Ready', text: "I’ll send you a short preparation guide so you know what’s useful to have nearby." },
  { icon: UsersRound, title: 'Do It Together', text: "We'll work through your Family Safekeep together, section by section." },
  { icon: CheckCircle2, title: 'Finish It', text: 'If anything genuinely needs retrieving afterwards, we deal with it and complete the final check.', outcome: 'The outcome: your Family Safekeep is done.' },
];

export default function SafekeepSortedPage() {
  return <main className="sorted-page">
    <header className="sorted-header sorted-wrap">
      <div className="sorted-logo"><span className="sorted-logo-mark" aria-hidden="true">✳</span><span><strong>FAMILY SAFEKEEP</strong><small>CLARITY TODAY. SUPPORT TOMORROW.</small></span></div>
      <div className="sorted-checkout"><LockKeyhole size={13} aria-hidden="true" /> <span>SECURE CHECKOUT<br />ONE TIME OFFER</span></div>
    </header>
    <div className="sorted-notice"><span className="sorted-notice-check"><Check size={15} aria-hidden="true" /></span>You’ve taken the first step towards leaving everything clear, organised and easier for your family.</div>
    <section className="sorted-hero">
      <div className="sorted-hero-content">
        <h1>Now Let’s Get Your<br />Family Safekeep Finished.</h1>
        <h2>You don’t have to work through it all alone.</h2>
        <p>You’ve already decided this matters.</p>
        <p>The only part left is actually sitting down, finding what you need and getting it properly completed.</p>
        <p>With <strong>Your Family Safekeep, Sorted</strong>, we’ll work through it together until your Family Safekeep is organised, complete and ready for your family to use.</p>
        <p className="sorted-hero-price">Private Guided Completion — $97</p>
        <button className="sorted-button" type="button" disabled>YES — HELP ME GET MY FAMILY SAFEKEEP FINISHED <ArrowRight aria-hidden="true" /></button>
        <p className="sorted-hero-note">Private organisational support only. No legal, financial or tax advice.</p>
      </div>
      <div className="sorted-hero-image"><img src="/oto1-guided-session.png" alt="A guide and customer working through a Family Safekeep together" /><div className="sorted-photo-note">Get it<br />done, for<br />the people<br />who matter<br />most.<span /></div></div>
    </section>
    <section className="sorted-process"><div className="sorted-wrap">
      <h2>Here’s How We’ll Get It Done</h2>
      <div className="sorted-steps">{steps.map(({icon: Icon, title, text, outcome}, index) => <article className="sorted-step" key={title}><span className="sorted-step-number">{index + 1}</span><Icon className="sorted-step-icon" aria-hidden="true" strokeWidth={1.4} /><div><h3>{title}</h3><p>{text}</p>{outcome && <strong>{outcome}</strong>}</div></article>)}</div>
    </div></section>
    <section className="sorted-reassurance sorted-wrap">
      <div className="sorted-reassurance-heading"><h2>You Don’t Have To<br />Figure It Out By Yourself.</h2><div className="sorted-values"><span><LockKeyhole />Private.</span><span><Heart />Personal.</span><span><UserRound />Practical.</span><span><MessageCircle />No judgement.</span></div></div>
      <blockquote><span>“</span><p>“I’d been meaning to finish it for weeks. Having someone work through it with me meant I finally got it done.”</p><cite>Alex B, 68</cite></blockquote>
      <blockquote><span>“</span><p>“The best part was the feeling afterwards. I knew everything important was finally in one place.”</p><cite>Michael B, 62</cite></blockquote>
    </section>
    <section className="sorted-offer sorted-wrap">
      <div className="sorted-offer-top"><div className="sorted-offer-name"><span className="sorted-offer-mark" aria-hidden="true">✳</span><div><h2>Your Family Safekeep, Sorted.</h2><p>$97 — one time</p></div></div><ul><li>Private one-to-one completion support</li><li>Help through every section</li><li>Follow-up for anything genuinely outstanding</li><li>Final completion check</li></ul></div>
      <button className="sorted-button" type="button" disabled>YES — LET’S GET MY FAMILY SAFEKEEP FINISHED — $97 <ArrowRight aria-hidden="true" /></button>
      <a className="sorted-decline" href="/oto2">No thanks — I'm happy to complete my Family Safekeep myself.</a>
    </section>
  </main>;
}
