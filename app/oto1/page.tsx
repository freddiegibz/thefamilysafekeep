import { Folder, MessagesSquare, ListChecks, Sprout } from 'lucide-react';
import './setup.css';

const steps = [
  { icon: Folder, title: '1. Bring What You Have', text: 'Gather your Safekeep and the documents and details you want included.' },
  { icon: MessagesSquare, title: '2. We Complete It Together', text: 'We work through every section with you, put the information in the right place and answer your questions.' },
  { icon: ListChecks, title: '3. You Leave With It Done', text: 'Your Safekeep is completed, organised and ready for your family to use.' },
];
const before = [
  'You feel unsure where to start or what to do next.',
  'Your paperwork is in different places.',
  'Some sections keep getting put off.',
  'You worry that something important may be missed.',
];
const after = [
  'Every section has been worked through.',
  'Your important information is in one place.',
  'The details are clear and organised.',
  'Your family has something practical to use.',
  'Your Safekeep is done.',
];

export default function SafekeepSortedPage() {
  return <main className="sorted-page">
    <section className="sorted-hero">
      <div className="sorted-hero-content">
        <div className="sorted-brand">Family Safekeep</div>
        <h1>Let’s Get Your<br />{' '}Safekeep Done Together.</h1>
        <p className="sorted-hero-lead">Set aside the time. We’ll sit down and finish it with you.</p>
        <p className="sorted-hero-copy">A private one-to-one Guided Completion Session where we work through your Family Safekeep together, section by section, until it’s complete.</p>
        <button className="sorted-button" type="button" disabled>YES — LET’S COMPLETE MY SAFEKEEP TOGETHER — $97</button>
      </div>
      <div className="sorted-hero-image"><img src="/oto1-guided-session.png" alt="A guide and a customer working through the Safekeep together at a table" width="1536" height="1024" /></div>
    </section>
    <section className="sorted-intro sorted-wrap">
      <h2>Because buying it is only the first step.</h2>
      <p>You bought your Family Safekeep so the people you love won’t be left searching for information later.</p>
      <p>Some parts are straightforward. Others mean finding documents, checking details or making decisions.</p>
      <p>When life gets busy, an important job can stay on the to-do list.</p>
      <p>This session gives you the support and time to get it finished together.</p>
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
        <div><h2>You Don’t Have To Figure It Out Alone.</h2><p>Bring your Safekeep and the information you want your family to have. We’ll help you turn it into a completed, organised record.</p>
          <ul><li>No need to decide where everything goes beforehand.</li><li>No need to work through difficult sections on your own.</li><li>No need to keep putting it off.</li><li>We sit down and get it done together.</li></ul>
        </div>
      </div>
      <section className="sorted-offer">
        <h2>Your Safekeep, Sorted</h2>
        <p className="sorted-offer-subtitle">Done-with-you Guided Completion Session</p>
        <p className="sorted-price">$97 <span>— one time</span></p>
        <p className="sorted-offer-copy">A private one-to-one session to complete your Family Safekeep with you, so it’s organised, finished and ready for your family to use.</p>
        <button className="sorted-button" type="button" disabled>YES — LET’S COMPLETE MY SAFEKEEP TOGETHER — $97</button>
        <p className="sorted-disclaimer">Private guided support only. No legal, financial or tax advice is provided.</p>
      </section>
      <a className="sorted-decline" href="/oto2">No thanks — I’ll complete my Safekeep on my own.</a>
    </section>
  </main>;
}
