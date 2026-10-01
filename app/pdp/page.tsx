import {useEffect, useState} from 'react';
import {ArrowRight, Check, ChevronLeft, ChevronRight, Download, ShieldCheck, Printer} from 'lucide-react';
import './pdp.css';

const checkout = 'https://buy.stripe.com/9B6fZg4UHcsI1Yc0TwbZe15';
const bundleCheckout = 'https://buy.stripe.com/8x214mgDpakAauI9q2bZe16';
const productImageSizes = '(max-width: 650px) calc(100vw - 40px), (max-width: 1280px) calc((100vw - 102px) / 2), 600px';

function ProductImage({src, alt, priority = false, lifestyle = false}: {src: string; alt: string; priority?: boolean; lifestyle?: boolean}) {
  const width = lifestyle ? 1122 : 1254;
  return <img src={src} srcSet={`${src.replace('.webp', '-640.webp')} 640w, ${src} ${width}w`}
    sizes={lifestyle ? '(max-width: 650px) calc((100vw - 40px) * .77), (max-width: 1280px) calc((100vw - 104px) / 3), 400px' : productImageSizes}
    width={width} height={lifestyle ? 1402 : 1254} alt={alt}
    loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" />;
}

const lifestyleImages = [
  {src:'/pdp/lifestyle-couple.webp', alt:'A couple working through printed planner sheets together at their kitchen table'},
  {src:'/pdp/lifestyle-digital-v2.webp', alt:'A mother and daughter using the digital planner on a laptop'},
  {src:'/pdp/lifestyle-print.webp', alt:'A woman writing on printed planner sheets with a tablet beside her'},
];
const gallery = [
  {kind:'artwork', src:'/pdp/hero-australian-simple-v3.webp', alt:'Family Safekeep Australian Edition planner on a tablet with two printed worksheets and a 30-day money-back guarantee', label:'Complete planner', note:'Fillable PDF + printable copy + Notion version. All included.'},
  {kind:'artwork', src:'/pdp/hero-passwords-v1.webp', alt:'Your passwords aren’t transferable: Family Safekeep verification codes and authenticator apps', label:'Digital access', note:''},
  {kind:'artwork', src:'/pdp/hero-everything-paper-au-v1.webp', alt:'Everything in one place: phone access, passwords, bank accounts, bills, insurance, assets and emergency contacts', label:'What’s inside', note:''},
  {kind:'artwork', src:'/pdp/hero-love-v1.webp', alt:'The final act of love: a practical roadmap for your family, with guided phone access pages', label:'For your family', note:''},
  {kind:'artwork', src:'/pdp/hero-mary-v1.webp', alt:'Mary M. holding the digital Family Safekeep planner, alongside her five-star review', label:'Mary’s review', note:''},
  {kind:'artwork', src:'/pdp/hero-guided-v1.webp', alt:'Expertly planned, effortlessly filled: guided prompts and yearly update sections', label:'Guided prompts', note:''},
  {kind:'artwork', src:'/pdp/hero-guarantee-australian-v1.webp', alt:'Try it free for 30 days: every cent refunded if it doesn’t cover what your family needs', label:'30-day guarantee', note:''},
];
const sections = [
  ['01','Accounts','Banks, savings, superannuation and borrowing. What exists, what it is for and where to find it.'],
  ['02','Insurance','Your policies, insurers, contacts and the location of the paperwork.'],
  ['03','Digital access','Phones, email and important online accounts, including verification and recovery arrangements.'],
  ['04','Bills & autopay','Household bills, due dates and the accounts that pay them.'],
  ['05','Medical information','Your GP, Medicare details, medications, allergies and the important details someone may need to know.'],
  ['06','Emergency contacts','Family, friends, professionals and the people who know how to help.'],
  ['07','Documents & belongings','Where important documents are kept, along with property and other belongings.'],
  ['08','Digital assets','Photos, cloud files and other digital belongings you want someone to be able to locate.'],
];
const faqs = [
  ['Is this designed for Australian households?', 'Yes. The Australian Edition helps you organise bank accounts, superannuation, insurance, household bills, Medicare details, important documents and digital access information in one place.'],
  ['Is this a physical planner?', 'This is a digital product. You receive a fillable PDF, a printable copy and the Notion version. Nothing is posted to you; you can print the pages yourself if you prefer to write by hand.'],
  ['What do I receive for $27?', 'The complete Family Safekeep planner with eight organised sections, getting-started instructions and extra blank record sheets, plus the Notion version and lifetime updates. The First 48 Hours Guide is an optional $17 addition.'],
  ['Do I have to complete it all at once?', 'No. Start with the information you already know, such as an emergency contact or the location of an insurance policy. Leave yourself a note for anything you need to check, then come back to it when you have time.'],
  ['Can I keep a copy for both of us?', 'You can record the household’s information and identify who each account, policy or record belongs to. Use the extra blank sheets when you need another entry. Keep completed copies private and agree with your trusted person where they will be stored.'],
  ['Do I need special software?', 'To type into the PDF, download it and open it in a PDF reader that supports fillable forms. Save your completed copy as you go. You can also print the sheets and use a pen. The Notion version is used in your own Notion workspace.'],
  ['Does this replace my will?', 'It records practical information and where important documents are kept. It does not replace a will, create legal authority or guarantee access to an account. Think of it as the household information that helps your trusted person know where to begin.'],
  ['How do I keep my information private?', 'Keep completed files in a secure place, keep your Notion copy private, and share deliberately with the person you trust. The planner includes a separate private access sheet so sensitive access details can be stored separately.'],
  ['What if it isn’t right for me?', 'You have a 30-day money-back guarantee. If Family Safekeep isn’t right for you, reply to your purchase email and ask for a full refund.'],
];

function OfferTimer() {
  const [deadline] = useState(() => Date.now() + 15 * 60 * 1000);
  const [seconds, setSeconds] = useState(900);
  useEffect(() => {
    const interval = window.setInterval(() => setSeconds(Math.max(0, Math.ceil((deadline - Date.now()) / 1000))), 1000);
    return () => window.clearInterval(interval);
  }, [deadline]);
  return <div className="pdp-timer"><span>{seconds ? 'THE OFFER ENDS IN:' : 'OFFER WINDOW ENDED'}</span><strong role="timer">{String(Math.floor(seconds / 60)).padStart(2,'0')}:{String(seconds % 60).padStart(2,'0')}</strong></div>;
}

export default function ProductPage() {
  const [slide, setSlide] = useState(0);
  const [bundle, setBundle] = useState(false);
  const price = bundle ? 44 : 27;
  const link = bundle ? bundleCheckout : checkout;
  return <main className="pdp-page">
    <div className="pdp-announcement">INSTANT DIGITAL ACCESS <span>·</span> 30-DAY MONEY-BACK GUARANTEE</div>
    <header className="pdp-header">
      <nav aria-label="Product navigation"><a href="#inside">What’s inside</a><a href="#how-it-works">How it works</a></nav>
      <a href="/pdp" className="pdp-brand">FAMILY SAFEKEEP<span>FOR THE PEOPLE YOU LOVE</span></a>
      <a href="#pdp-faq" className="pdp-header-help">Questions? <span>Read the FAQs →</span></a>
    </header>
    <div className="pdp-container">
      <section className="pdp-product" aria-label="Product information">
        <div className="pdp-gallery">
          <div className={`pdp-gallery-main pdp-gallery-${gallery[slide].kind}`}>
            {gallery[slide].kind==='product' && <div className="pdp-gallery-title"><h2>SAVE $8</h2><p>Your complete digital planner. Every format.</p></div>}
            <ProductImage src={gallery[slide].src} alt={gallery[slide].alt} priority />
            <button className="pdp-gallery-arrow pdp-gallery-prev" aria-label="Previous product image" onClick={()=>setSlide((slide+gallery.length-1)%gallery.length)}><ChevronLeft size={20}/></button>
            <button className="pdp-gallery-arrow pdp-gallery-next" aria-label="Next product image" onClick={()=>setSlide((slide+1)%gallery.length)}><ChevronRight size={20}/></button>
            {gallery[slide].kind==='product' && <div className="pdp-gallery-formats"><span>FILLABLE PDF</span><span>PRINTABLE</span><span>NOTION</span></div>}
          </div>
          <p className="pdp-gallery-caption" aria-live="polite">{gallery[slide].note || `Image ${slide + 1} of ${gallery.length}`}</p>
          <div className="pdp-thumbnails" aria-label="Product images">{gallery.map((item,index)=><button key={item.src} aria-label={`View ${item.label}`} aria-pressed={slide===index} onClick={()=>setSlide(index)}><img src={item.src.replace('.webp', '-thumb.webp')} width="160" height="160" alt="" decoding="async"/><span>{item.label}</span></button>)}</div>
          <div className="pdp-gallery-note"><ShieldCheck size={17}/><span>Your details stay in the copy you complete and control.</span></div>
        </div>
        <div className="pdp-purchase" id="purchase">
          <h1>The Family Safekeep™<br/>“If I’m Not Here” Planner<br/><span>(Australian Digital Edition)</span></h1>
          <div className="pdp-rating" aria-label="Rated 4.7 out of 5 from 539 reviews"><span className="pdp-rating-stars" aria-hidden="true">★★★★★</span><span>4.7 / 539 reviews</span></div>
          <p className="pdp-format-line">Fillable PDF · Printable copy · Instant Delivery</p>
          <ul className="pdp-benefits"><li><Check/>Eliminates 1,200+ hours of administrative detective work</li><li><Check/>Prevents digital lockout from photos, accounts &amp; memories</li><li><Check/>Written to feel calm, human &amp; surprisingly comforting</li></ul>
          <div className="pdp-offer-heading" id="package-options"><span>CHOOSE YOUR PACKAGE</span></div>
          <fieldset className="pdp-options"><legend className="pdp-sr-only">Choose your digital package</legend>
            <label className={`pdp-option pdp-package-card ${!bundle?'is-selected':''}`}>
              <input type="radio" name="pdp-package" aria-label="Family Safekeep only — $27" checked={!bundle} onChange={()=>setBundle(false)}/>
              <span className="pdp-package-heading"><strong>Family Safekeep Only</strong><small>The complete digital planner in all three formats.</small></span>
              <span className="pdp-package-total"><del>$44</del><strong>$27</strong><small>one payment</small></span>
            </label>
            <label className={`pdp-option pdp-package-card ${bundle?'is-selected':''}`}>
              <input type="radio" name="pdp-package" aria-label="Family Safekeep plus First 48 Hours Guide — $44" checked={bundle} onChange={()=>setBundle(true)}/>
              <span className="pdp-package-heading"><span className="pdp-popular-badge">Most Popular</span><strong>Family Safekeep<br/>+ First 48 Hours Guide</strong><small>The complete planner, plus their guide to what comes next.</small></span>
              <span className="pdp-package-total"><del>$72</del><strong>$44</strong><small>one payment</small></span>
              <span className="pdp-package-details">
                <span className="pdp-guide-description">When something happens, shock makes even simple decisions hard.</span>
                <strong className="pdp-guide-emphasis">This guide is the clear head they need when theirs isn’t working.</strong>
                <span className="pdp-guide-description">Who to call first, what not to touch yet, and what needs doing in those first 48 hours.</span>
                <span className="pdp-guide-price">Guide: <del>$37</del><strong>Only +$17</strong></span>
              </span>
            </label>
          </fieldset>
          <figure className="pdp-guide-testimonial">
            <div className="pdp-guide-testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>“After Dad died, we had his paperwork but no idea what to do first. I added the guide for my own family because having the information is one thing. Knowing where to start when you can’t think straight is another.”</blockquote>
            <figcaption>— Helen M.</figcaption>
          </figure>
          <OfferTimer/>
          <a className="pdp-buy" href={link}>{bundle ? 'Get the Planner + Guide' : 'Get the Planner'} — ${price}<ArrowRight size={20}/></a>
          <p className="pdp-delivery"><span aria-hidden="true"/>Digital download. Ready after checkout.</p>
          <p className="pdp-currency">Prices in USD · One payment · No subscription</p>
          <div className="pdp-trust"><span><Download/>Instant access</span><span><Printer/>Print at home</span><span><ShieldCheck/>30-day guarantee</span></div>
          <div className="pdp-product-details">
            <details open id="inside"><summary>What’s Inside Your Family Safekeep?<span>+</span></summary><p>A place for the details that help someone understand your household, even when they can’t ask you.</p><ul>{sections.map(([number,title])=><li key={number}>{title}</li>)}</ul><p>Includes getting-started instructions and extra blank record sheets. Complete it on screen or print it at home.</p></details>
            <details><summary>Delivery & money-back guarantee<span>+</span></summary><p>Your download is available after purchase. This is a digital planner; no physical book is shipped. Try it for 30 days. If it isn’t right for you, reply to your purchase email for a full refund.</p></details>
          </div>
        </div>
      </section>
    </div>
    <section className="pdp-people pdp-container"><h2>Real Families.<br/><strong>Real Peace Of Mind</strong></h2><div className="pdp-people-photos">{lifestyleImages.map(item=><figure key={item.src}><ProductImage src={item.src} alt={item.alt} lifestyle /></figure>)}</div></section>
    <section className="pdp-reference-feature pdp-container" id="how-it-works">
      <div className="pdp-split">
        <ProductImage src="/pdp/section-flatlay-paper-au-v1.webp" alt="Family Safekeep digital covers and guided PDF pages arranged on a wooden table" />
        <div>
          <p className="pdp-eyebrow">ONE WEEKEND. COMPLETE PEACE OF MIND.</p>
          <h2><strong>Easy To Fill Out.</strong><br/>Impossible To Skip</h2>
          <p>Most people avoid this because it feels overwhelming.</p>
          <p>This planner makes it simple.</p>
          <p>Guided prompts. Clear sections. No staring at blank pages wondering what to include.</p>
          <p>Designed to be lighthearted, so the necessary work feels easier to begin.</p>
          <p>Complete it in one weekend.</p>
          <p>A few hours of your time now saves them 1,200 hours of chaos later.</p>
          <a href="#purchase" className="pdp-buy">Get the Planner <ArrowRight size={18}/></a>
        </div>
      </div>
    </section>
    <section className="pdp-reference-feature pdp-container pdp-reference-reverse">
      <div className="pdp-split">
        <div>
          <h2><strong>Your Family Knows</strong><br/>Where To Look. Hackers Don’t</h2>
          <p>Passwords can be stolen. Clouds can be breached.</p>
          <p>This can’t be hacked. It stays exactly where your family needs it.</p>
          <p><em><strong>Store it safe and secure. Let them know. Sleep easy.</strong></em></p>
        </div>
        <ProductImage src="/pdp/section-desk-australian-v1.webp" alt="Family Safekeep digital planner on a tablet in a warmly lit home study" />
      </div>
    </section>
    <section className="pdp-community pdp-container">
      <h2>From Our <strong>Community</strong></h2>
      <div className="pdp-community-quotes">
        <figure><blockquote>“My husband reluctantly downloaded his copy after I wouldn’t stop asking. Found him at the kitchen table an hour later, laptop open, still filling it in. He finished the whole thing that night and thanked me for nagging him later.”</blockquote><figcaption>– Karrie B</figcaption></figure>
        <figure><blockquote>“Downloaded it for myself and immediately sent my mum and sister the link to get their own. My mum called me a week later to tell me she’d already filled hers in on her laptop. It’s the first thing I’ve recommended that everyone actually used.”</blockquote><figcaption>– Leanne S</figcaption></figure>
        <figure><blockquote>“Nobody tells you that losing someone means months of locked accounts and phone calls before you ever get to sit down and just miss them. I went through it. I’ve filled mine in, saved it somewhere secure and told my kids where to find it. They’ll have a place to start.”</blockquote><figcaption>– Linda L</figcaption></figure>
      </div>
    </section>
    <section className="pdp-reference-promise pdp-container">
      <h2>Our Promise <strong>To You</strong></h2>
      <ShieldCheck size={44} strokeWidth={1.2}/>
      <h3>30-Day Guarantee</h3>
      <p>Try it for 30 days. If it doesn’t cover what your family needs, we’ll refund every cent. Reply to your purchase email to get in touch.</p>
    </section>
    <section className="pdp-section pdp-faq-section" id="pdp-faq"><div className="pdp-container"><div className="pdp-section-heading"><h2>FAQ</h2></div><div className="pdp-faq">{faqs.map(([question,answer])=><details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="pdp-final"><p className="pdp-eyebrow">FOR THE PEOPLE YOU LOVE</p><h2>One place to leave the answers.</h2><p>{bundle ? 'Complete planner + First 48 Hours Guide.' : 'Complete digital planner. Every format.'} ${price}. One payment.</p><a href="#package-options" className="pdp-buy">Get Instant Access — ${price}<ArrowRight size={20}/></a><small>Instant download · Printable copy · 30-day money-back guarantee</small></section>
    <footer className="pdp-footer"><span className="pdp-brand">FAMILY SAFEKEEP</span><span>© 2026 The Family Safekeep</span><a href="#pdp-faq">Delivery & guarantee</a></footer>
    <div className="pdp-sticky-buy"><div><strong>The Family Safekeep</strong><span>${price} · Instant digital access</span></div><a href="#package-options">Get Instant Access<ArrowRight size={17}/></a></div>
  </main>;
}
