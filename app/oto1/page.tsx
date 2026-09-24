import type { ReactNode } from 'react';
import './final-wishes.css';

type WishIcon = 'flower' | 'paw' | 'box' | 'letter' | 'people' | 'laptop';

function Leaf({ className = '' }: { className?: string }) {
  return <svg className={className} viewBox="0 0 90 150" fill="none" aria-hidden="true">
    <path d="M16 143C39 109 55 69 65 10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M39 112C18 108 13 88 18 70c16 8 26 22 21 42Zm12-28C29 78 29 55 36 40c15 9 21 24 15 44Zm12-40C48 32 54 16 66 7c7 15 6 28-3 37ZM38 112c23-2 36-15 39-35-20 1-36 12-39 35Zm13-29c21-2 34-18 35-35-21 2-32 16-35 35Z" fill="currentColor" opacity=".44"/>
  </svg>;
}

function Icon({ name, className = '' }: { name: WishIcon; className?: string }) {
  const icons: Record<WishIcon, ReactNode> = {
    flower: <><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="5.3" rx="2.4" ry="4.1"/><ellipse cx="12" cy="18.7" rx="2.4" ry="4.1"/><ellipse cx="5.3" cy="12" rx="4.1" ry="2.4"/><ellipse cx="18.7" cy="12" rx="4.1" ry="2.4"/><ellipse cx="7.3" cy="7.3" rx="2.2" ry="3.6" transform="rotate(-45 7.3 7.3)"/><ellipse cx="16.7" cy="16.7" rx="2.2" ry="3.6" transform="rotate(-45 16.7 16.7)"/></>,
    paw: <><path d="M8 13c-2 2-3 4-2 5.5 1.4 2.1 4.2.2 6 .2s4.6 1.9 6-.2c1-1.5 0-3.5-2-5.5-1.5-1.6-2.4-2-4-2s-2.5.4-4 2Z"/><ellipse cx="4.5" cy="9" rx="1.4" ry="2.2" transform="rotate(-20 4.5 9)"/><ellipse cx="9" cy="6.5" rx="1.4" ry="2.2" transform="rotate(-8 9 6.5)"/><ellipse cx="15" cy="6.5" rx="1.4" ry="2.2" transform="rotate(8 15 6.5)"/><ellipse cx="19.5" cy="9" rx="1.4" ry="2.2" transform="rotate(20 19.5 9)"/></>,
    box: <><path d="m3 8 9-5 9 5-9 5-9-5Zm0 0v9l9 5 9-5V8M12 13v9M7.5 5.5l9 5"/></>,
    letter: <><rect x="2" y="5" width="20" height="14" rx="1.4"/><path d="m2 6 10 8 10-8"/></>,
    people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="8" r="2.5"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M15 14a5 5 0 0 1 6 5v1"/></>,
    laptop: <><rect x="5" y="4" width="14" height="12" rx="1"/><path d="M2 19h20l-2-3H4l-2 3Z"/></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>;
}

const wishes: { title: string; description: string; icon: WishIcon; preview: string }[] = [
  { title: 'Funeral & Memorial Wishes', description: 'Share your preferences for a meaningful farewell.', icon: 'flower', preview: 'Funeral & Memorial Wishes' },
  { title: 'People To Contact', description: 'List the people who should be informed and involved.', icon: 'people', preview: 'People To Contact' },
  { title: 'Pets', description: 'Share care instructions and your wishes for their future.', icon: 'paw', preview: 'My Pets' },
  { title: 'Personal Possessions', description: 'Specify what you’d like to happen to the things that matter.', icon: 'box', preview: 'My Personal Possessions' },
  { title: 'Digital Wishes', description: 'Share what to do with your online accounts and digital life.', icon: 'laptop', preview: 'My Digital Wishes' },
  { title: 'Personal Messages', description: 'Leave your words for the people you love.', icon: 'letter', preview: 'A Message For My Family' },
];

function WishPaper({ title, icon }: { title: string; icon: WishIcon }) {
  return <div className="fw-paper" aria-hidden="true">
    <p>{title}</p><Icon name={icon} />
    <div className="fw-paper-lines">{Array.from({ length: 5 }, (_, i) => <span key={i} />)}</div>
  </div>;
}

export default function FinalWishesPage() {
  return <main className="fw-page">
    <section className="fw-hero">
      <div className="fw-shell fw-hero-grid">
        <div className="fw-hero-copy">
          <div className="fw-brand"><Leaf />Family Safekeep</div>
          <p className="fw-eyebrow">You’ve Made Sure They Can Find Everything.</p>
          <h1>Now Make Sure They<br />{' '}Don’t Have To Guess.</h1>
          <p className="fw-hero-lead">Your Safekeep shows where the important information is.<br />But it cannot tell your family what you wanted.</p>
          <a className="fw-button" href="https://buy.stripe.com/8x25kCevh9gwdGUcCebZe17">YES — ADD MY FINAL WISHES PACK — $37</a>
          <p className="fw-hero-note">More clarity today. A kinder tomorrow.</p>
        </div>
        <div className="fw-product-scene" role="img" aria-label="The No-Guessing Final Wishes Pack workbook with sample wishes pages">
          <div className="fw-scene-page fw-scene-page-one"><p>My Wishes</p><span>FUNERAL &amp; MEMORIAL</span><i /><i /><i /><i /><i /></div>
          <div className="fw-scene-page fw-scene-page-two"><p>A Message<br />For My Family</p><Leaf /><i /><i /><i /><i /></div>
          <div className="fw-book">
            <div className="fw-book-top"><span>The</span><strong>No-Guessing<br />Final Wishes Pack</strong><Leaf /><small>YOUR WISHES.<br />THEIR PEACE OF MIND.</small></div>
            <div className="fw-book-landscape"><div className="fw-mountain fw-mountain-back" /><div className="fw-mountain fw-mountain-front" /><div className="fw-tree-line" /></div>
            <div className="fw-book-bottom">A GUIDED WORKBOOK<br />BY FAMILY SAFEKEEP</div>
          </div>
        </div>
      </div>
    </section>

    <section className="fw-questions fw-shell">
      <h2>Some Decisions Can’t Be Looked Up.</h2>
      <p>Would your family know what kind of farewell you’d want?</p>
      <p>Would they know who should care for your pets?</p>
      <p>Would they know which possessions matter most?</p>
      <p>Would they know what you’d want to say to the people you love?</p>
      <div className="fw-topics">
        <div><Icon name="flower" /><span>Funeral or memorial<br />wishes</span></div>
        <div><Icon name="paw" /><span>Pets</span></div>
        <div><Icon name="box" /><span>Sentimental<br />possessions</span></div>
        <div><Icon name="letter" /><span>Personal<br />messages</span></div>
      </div>
    </section>

    <section className="fw-contents">
      <div className="fw-shell">
        <h2>Everything They Shouldn’t Have To Guess.</h2>
        <div className="fw-card-grid">
          {wishes.map(wish => <article className="fw-card" key={wish.title}>
            <div className="fw-card-art"><WishPaper title={wish.preview} icon={wish.icon} /></div>
            <div className="fw-card-copy"><h3>{wish.title}</h3><p>{wish.description}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="fw-contrast">
      <div className="fw-shell">
        <h2>Give Them Answers Instead Of Decisions.</h2>
        <div className="fw-contrast-grid">
          <div><h3>Without it</h3><p>“I wish we knew what she would have wanted.”</p><p>“Should we keep this or give it away?”</p><p>“What would he have wanted us to do?”</p></div>
          <div><h3>With it</h3><p>“She wrote it down.”</p><p>“We have clear answers.”</p><p>“We can honour what they wanted.”</p></div>
        </div>
        <p className="fw-contrast-line">Your Safekeep removes the searching. Your Final Wishes Pack removes the guessing.</p>
        <Leaf className="fw-contrast-leaf fw-contrast-leaf-left" /><Leaf className="fw-contrast-leaf fw-contrast-leaf-right" />
      </div>
    </section>

    <section className="fw-close fw-shell">
      <Leaf className="fw-close-leaf fw-close-leaf-left" />
      <div className="fw-offer">
        <h2>The No-Guessing Final Wishes Pack</h2>
        <p>A guided workbook to share what matters most.</p>
        <p className="fw-price">$37 <span>— one time</span></p>
        <ul>
          <li>Guided, private final-wishes workbook</li>
          <li>Keep alongside your Family Safekeep</li>
          <li>Complete digitally or print it</li>
          <li>Immediate access</li>
        </ul>
        <a className="fw-button" href="https://buy.stripe.com/8x25kCevh9gwdGUcCebZe17">YES — GIVE MY FAMILY CLEAR ANSWERS — $37</a>
        <p className="fw-offer-note">Complete it in your own time. Update it whenever you need to.</p>
      </div>
      <Leaf className="fw-close-leaf fw-close-leaf-right" />
      <a className="fw-decline" href="/oto2">No thanks — I’ll continue without the Final Wishes Pack.</a>
    </section>
  </main>;
}
