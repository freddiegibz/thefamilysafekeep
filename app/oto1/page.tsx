import { ArrowRight } from 'lucide-react';
import './setup.css';

export default function SafekeepSortedPage() {
  return <main className="sorted-letter-page">
    <header className="sorted-letter-header"><span className="sorted-logo-mark" aria-hidden="true">✳</span><span>FAMILY SAFEKEEP</span></header>
    <section className="sorted-letter-hero"><div className="sorted-letter-copy">
      <h1>Congratulations — Your Order Is Confirmed.</h1>
      <p>You’ve just done something most people mean to do…</p>
      <p>but never quite get around to.</p>
      <p>You’ve taken the first real step towards making sure that, if something ever happened to you, your family wouldn’t be left panicking, searching through paperwork, guessing passwords or trying to work out where everything is.</p>
      <p>That matters.</p>
      <p>Because the whole point of your Family Safekeep is to make things easier for them at the moment they may need that help most.</p>
    </div></section>
    <figure className="sorted-letter-image"><img src="/oto1-guided-session.png" alt="A customer and guide working through a Family Safekeep together" /></figure>

    <div className="sorted-letter-body">
      <section className="sorted-letter-section">
        <h2>But There’s One Thing That Can Still Undo That Good Intention.</h2>
        <p>Not finishing it.</p>
        <p>Because a Family Safekeep that sits half-completed on your laptop does not give your family the protection you bought it for.</p>
        <p>A missing account is still a missing account.</p>
        <p>A document you meant to add later is still something they may have to search for.</p>
        <p>A section you skipped because you weren’t sure what to put there is still a gap they may have to deal with at exactly the wrong time.</p>
        <p>And that is the frustrating part.</p>
        <p>You can buy the right system, have every intention of completing it…</p>
        <p>and still end up thinking:</p>
        <p className="sorted-letter-pull">“I really need to finish that.”</p>
        <p>weeks or months later.</p>
      </section>

      <section className="sorted-letter-section">
        <h2>You Don’t Have To Let That Happen.</h2>
        <p>There is an easier way to get from <strong>“I’ve bought it”</strong> to <strong>“It’s properly done.”</strong></p>
        <h2>Your Family Safekeep, Sorted</h2>
        <p>A private Guided Completion where we work through your Family Safekeep with you and get it finished properly.</p>
        <p>You are not left to work out every section yourself.</p>
        <p>You are not left wondering whether you have missed something important.</p>
        <p>You are not left stopping and starting every time you need to find a document or check a detail.</p>
        <p>And you are not left with another important job sitting unfinished in the background.</p>
        <p>Instead, you have someone beside you who knows the process, keeps things moving and helps you work through the parts that would otherwise slow you down.</p>
      </section>
    </div>

    <section className="sorted-letter-comparison">
      <h2>The Difference Is Simple.</h2>
      <div className="sorted-letter-comparison-grid">
        <article className="sorted-letter-alone">
          <h3>Do It Alone</h3>
          <p>You open it when you have time.</p>
          <p>You get through a few sections.</p>
          <p>Something needs finding.</p>
          <p>Something is unclear.</p>
          <p>You put it down.</p>
          <p>Life takes over.</p>
          <p>And the thing you bought to give you peace of mind becomes another job you still need to finish.</p>
        </article>
        <article className="sorted-letter-together">
          <h3>Do It With Us</h3>
          <p>You sit down with someone who knows what needs to happen.</p>
          <p>We work through it together.</p>
          <p>We spot gaps before they become problems.</p>
          <p>We deal with the awkward or unclear bits as they come up.</p>
          <p>And we keep going until your Family Safekeep is properly completed.</p>
        </article>
      </div>
    </section>

    <div className="sorted-letter-body">
      <section className="sorted-letter-section sorted-letter-resolution">
        <p>So instead of:</p>
        <p className="sorted-letter-pull">“I hope I’ve covered everything.”</p>
        <p>you get:</p>
        <h2>“It’s done. It’s clear. My family will know where to start.”</h2>
        <p>That is the outcome you bought the Family Safekeep for in the first place.</p>
        <p>Not another folder.</p>
        <p>Not another task.</p>
        <p><strong>Peace of mind that the important things are actually sorted.</strong></p>
      </section>
      <section className="sorted-letter-offer">
        <h2>The Easiest Way To Make Sure Your Family Safekeep Does The Job You Bought It To Do.</h2>
        <h3>Private Guided Completion — $97</h3>
        <p>We’ll work through your Family Safekeep with you, help you avoid the gaps and mistakes that are easy to make on your own, and stay with the process until it is properly finished and ready for your family.</p>
        <button className="sorted-button" type="button" disabled>YES — HELP ME GET MY FAMILY SAFEKEEP FINISHED — $97 <ArrowRight aria-hidden="true" /></button>
      </section>
      <a className="sorted-letter-decline" href="/oto2">No thanks — I’m happy to complete it myself.</a>
    </div>
  </main>;
}
