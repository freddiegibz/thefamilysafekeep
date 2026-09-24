import { Folder, MessagesSquare, ListChecks, Sprout } from 'lucide-react';
import './setup.css';

const steps = [
  { icon: Folder, title: '1. We Look At What You Already Have', text: 'We review what you’ve completed and what you have on hand.' },
  { icon: MessagesSquare, title: '2. We Work Through It Together', text: 'We go through the next steps, answer your questions and help you make decisions.' },
  { icon: ListChecks, title: '3. You Leave Knowing What’s Sorted', text: 'You’ll have clarity on what’s done and a clear plan for what remains.' },
];
const before = [
  'You feel unsure where to start or what to do next.',
  'Your paperwork is in different places.',
  'Some sections keep getting put off.',
  'You worry that something important may be missed.',
];
const after = [
  'Key sections are worked through.',
  'Missing information is identified.',
  'You have a clear list of what remains.',
  'You feel more organised and informed.',
  'You know you’ve made real progress.',
];

export default function SafekeepSortedPage() {
  return <main className="sorted-page">
    <section className="sorted-hero">
      <div className="sorted-hero-content">
        <div className="sorted-brand">Family Safekeep</div>
        <h1>You Don’t Have To<br />{' '}Do This Alone.</h1>
        <p className="sorted-hero-lead">Get the important parts sorted, with someone beside you.</p>
        <p className="sorted-hero-copy">A private one-to-one Guided Completion Session to help you work through your Safekeep and know what still needs to be done.</p>
        <button className="sorted-button" type="button" disabled>YES — HELP ME GET MY SAFEKEEP SORTED — $97</button>
      </div>
      <div className="sorted-hero-image"><img src="/oto2-guided-session.png" alt="A guide and a customer working through the Safekeep together at a table" width="1536" height="1024" /></div>
    </section>
    <section className="sorted-intro sorted-wrap">
      <h2>Because buying it is the easy part.</h2>
      <p>You bought your Family Safekeep so the people you love won’t be left searching for information later.</p>
      <p>Some parts are straightforward. Others mean finding documents, checking details or making decisions.</p>
      <p>When life gets busy, an important job can stay on the to-do list.</p>
      <p>A guided session helps you move forward, with clarity and confidence.</p>
    </section>
    <section className="sorted-process"><div className="sorted-wrap">
      <h2>How this works</h2>
      <div className="sorted-steps">{steps.map(({icon: Icon, title, text}) => <article className="sorted-step" key={title}><Icon aria-hidden="true" strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="sorted-outcomes sorted-wrap">
      <div className="sorted-comparison">
        <article className="sorted-before"><h2>Before</h2><ul>{before.map(item => <li key={item}>{item}</li>)}</ul></article>
        <article className="sorted-after"><h2>After</h2><ul>{after.map(item => <li key={item}>{item}</li>)}</ul></article>
      </div>
      <div className="sorted-ready">
        <div className="sorted-ready-icon"><Sprout aria-hidden="true" strokeWidth={1} /></div>
        <div><h2>You Don’t Need To Be Ready.</h2><p>This is a supportive, no-pressure session. You don’t need to have everything sorted before we talk. We’ll meet you where you’re at.</p>
          <ul><li>You do not need every answer.</li><li>You do not need all your paperwork.</li><li>You do not need to prepare perfectly.</li><li>Just bring what you have.</li><li>We start there.</li></ul>
        </div>
      </div>
      <section className="sorted-offer">
        <h2>Your Safekeep, Sorted</h2>
        <p className="sorted-offer-subtitle">Private Guided Completion Session</p>
        <p className="sorted-price">$97 <span>— one time</span></p>
        <p className="sorted-offer-copy">A private one-to-one session to help you work through your Safekeep, get clarity on what’s still to do, and move forward with confidence.</p>
        <button className="sorted-button" type="button" disabled>YES — HELP ME GET MY SAFEKEEP SORTED — $97</button>
        <p className="sorted-disclaimer">Private guided support only. No legal, financial or tax advice is provided.</p>
      </section>
      <a className="sorted-decline" href="/thank-you">No thanks — I’ll complete my Safekeep on my own.</a>
    </section>
  </main>;
}
