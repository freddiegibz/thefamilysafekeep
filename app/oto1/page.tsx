import { ArrowRight } from 'lucide-react';
import './setup.css';

export default function SafekeepSortedPage() {
  return <main className="sorted-page sorted-letter-page">
    <header className="sorted-letter-header">
      <span className="sorted-logo-mark" aria-hidden="true">✳</span>
      <span>FAMILY SAFEKEEP</span>
    </header>

    <section className="sorted-letter-hero">
      <div className="sorted-letter-copy">
        <h1>Congratulations — Your Order Is Confirmed.</h1>
        <p>You’ve just done something most people mean to do…</p>
        <p>but never quite get around to.</p>
        <p>You’ve taken the first real step towards making sure that, if something ever happened to you, your family wouldn’t be left panicking, searching through paperwork, guessing passwords or trying to work out where everything is.</p>
        <p>That matters.</p>
        <p>Because the whole point of your Family Safekeep is to make things easier for them at the moment they may need that help most.</p>
      </div>
      <div className="sorted-letter-image"><img src="/oto1-guided-session.png" alt="A customer and guide working through a Family Safekeep together" /></div>
    </section>

    <div className="sorted-letter-body">
      <section className="sorted-letter-section">
        <h2>But Buying It Is Only The First Step.</h2>
        <p>The important part now is getting it filled in.</p>
        <p>And that is usually where people get stuck.</p>
        <p>Not because they don’t care.</p>
        <p>Because life gets busy.</p>
        <p>A document needs finding.</p>
        <p>A detail needs checking.</p>
        <p>One section gets left for later.</p>
        <p>And something you genuinely meant to finish can quietly stay unfinished.</p>
      </section>

      <section className="sorted-letter-section sorted-letter-together">
        <h2>You Don’t Have To Do That Part Alone.</h2>
        <p>If you’d rather have someone help you work through your Family Safekeep and make sure it actually gets done, we can do that together.</p>
      </section>

      <section className="sorted-letter-offer">
        <h2>Your Family Safekeep, Sorted</h2>
        <p>A private Guided Completion where we work through your Family Safekeep with you, help you deal with anything that would otherwise slow you down, and stay with the process until it is properly completed and ready for your family.</p>
        <p>The goal isn’t simply to have a useful session.</p>
        <p>The goal is to get you from:</p>
        <p className="sorted-letter-quote">“I still need to finish that.”</p>
        <p>to:</p>
        <h2 className="sorted-letter-outcome">“It’s sorted.”</h2>
        <h3>Private Guided Completion — $97</h3>
        <button className="sorted-button" type="button" disabled>YES — HELP ME GET MY FAMILY SAFEKEEP FINISHED <ArrowRight aria-hidden="true" /></button>
      </section>
    </div>
  </main>;
}
