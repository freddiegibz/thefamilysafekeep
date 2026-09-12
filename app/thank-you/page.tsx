import './thanks.css';


export default function ThankYouPage(){
 return <main className="thanks">
  <header className="thanks-nav"><a href="/">THE FAMILY SAFEKEEP<span>IN CASE OF EVERYTHING.</span></a></header>
  <section className="thanks-hero">
   <span className="thanks-check" aria-hidden="true">✓</span>
   <p className="thanks-eyebrow">FOR THE PEOPLE WHO MATTER MOST</p>
   <h1>Thank you for taking<br/><em>this step for your family.</em></h1>
   <p>You’ve been meaning to get it all written down.<br/>Now you have a place to start.</p>
   <div className="thanks-download"><button className="button" disabled aria-describedby="download-status"><span aria-hidden="true">↓</span> Download Your Binder</button><p id="download-status">Download link not connected yet.</p></div>
  </section>
  <section className="thanks-start" aria-labelledby="start-heading">
   <div><p className="thanks-eyebrow">START SMALL. KEEP GOING.</p><h2 id="start-heading">You don’t have to<br/>finish it all today.</h2><p>Set aside a little time, open your binder and start with the details you already know. You can come back to anything you need to look up.</p><p><strong>Every answer you write down is one less thing your family has to figure out.</strong></p></div>
   <img src="/family-safekeep-product.png" alt="The Family Safekeep digital binder on a laptop, tablet and phone" width="1536" height="1024"/>
  </section>
  <section className="thanks-steps" aria-labelledby="next-heading">
   <h2 id="next-heading">Three simple next steps.</h2>
   <ol>
    <li><span aria-hidden="true">01</span><div><h3>Fill in one section.</h3><p>Start with your accounts or the bills you handle. Write down what you know, then make a note of anything you still need to find.</p></div></li>
    <li><span aria-hidden="true">02</span><div><h3>Keep it somewhere safe.</h3><p>Choose a secure place for your completed binder. Protect digital copies and keep printed copies somewhere only the right people can access.</p></div></li>
    <li><span aria-hidden="true">03</span><div><h3>Tell someone you trust.</h3><p>Sit down together and show them where to start. Make sure they know where the binder is and how to access it if they ever need it.</p></div></li>
   </ol>
  </section>
  <section className="thanks-note"><p>It doesn’t have to be perfect to be useful.</p><h2>Just start getting the important things<br/><em>out of your head.</em></h2><a className="button" href="/">Return to The Family Safekeep</a></section>
  <footer className="thanks-footer"><strong>THE FAMILY SAFEKEEP</strong><p>Preview page · No payment has been taken. Download delivery is not connected yet.</p></footer>
 </main>;
}
