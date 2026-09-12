'use client';
import {useState} from 'react';
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogDescription} from '@/components/ui/dialog';
import './oto.css';
export default function FinalWishesPage(){
 const [open,setOpen]=useState(false);
 return <main className="oto"><article className="oto-letter">
 <header className="oto-opening"><h1>Your Family Can Now Find Everything They Need.</h1><h2>But There’s One Thing The ICE Vault Can’t Tell Them.</h2></header>
 <div className="oto-prose">
 <p>It can show them where the accounts are.</p>
 <p>Where the insurance details are.</p>
 <p>Where the passwords, documents and important information are kept.</p>
 <p>But it can’t tell them <strong>what you wanted</strong>.</p>
 <p>Would they know whether you wanted to be buried or cremated?</p>
 <p>Who you’d want contacted?</p>
 <p>What should happen to your pets?</p>
 <p>Which personal possessions mattered to you — and who you wanted to have them?</p>
 <p>What you’d want done with your photos, social accounts and personal files?</p>
 <p>Or whether there was anything you wanted your family to know?</p>
 <p>Those are the things nobody else can fill in for you.</p>
 <div className="oto-rule"/>
 <section><h2>Introducing The No-Guessing Final Wishes Pack</h2>
 <p>A simple private record of the decisions and wishes your family could otherwise only guess at.</p>
 <p>Complete it once and keep it alongside your ICE Vault.</p>
 <p>Then, if they ever need it, they won’t be left wondering:</p>
 <p><strong>“What would she have wanted us to do?”</strong></p></section>
 <div className="oto-rule"/>
 <section><h2>Record The Things Only You Can Decide</h2>
 <p>Inside, you can leave clear instructions for:</p>
 <p><strong>Funeral &amp; Memorial Wishes</strong><br/>Burial or cremation, service preferences, music, readings, flowers and anything important to you.</p>
 <p><strong>People To Contact</strong><br/>Friends, relatives, old colleagues, clubs or anyone your immediate family may not know to tell.</p>
 <p><strong>Personal Possessions</strong><br/>Who you’d like certain sentimental items to go to — and, if you want, why they matter.</p>
 <p><strong>Pets</strong><br/>Who should care for them, their routines, vet details and anything else someone would need to know.</p>
 <p><strong>Digital Wishes</strong><br/>What you want done with your photos, social accounts, files and other parts of your digital life.</p>
 <p><strong>Personal Messages</strong><br/>A place for the words that don’t belong in a will or financial record.</p></section>
 <div className="oto-rule"/>
 <section><h2>The ICE Vault Tells Them Where Everything Is.</h2>
 <h2>The First 48 Hours Guide Tells Them What To Do First.</h2>
 <h2>This Tells Them What You Wanted.</h2>
 <p>That’s the missing piece.</p>
 <p>And it’s one of the few parts of your family’s future that <strong>only you can make clear now</strong>.</p></section>
 <div className="oto-rule"/>
 <section className="oto-close" id="complete"><h2>Finish The Job While The Answers Are Still Yours To Give.</h2>
 <p>Add <strong>The No-Guessing Final Wishes Pack</strong> to your order today for <strong>$37</strong>.</p>
 <button className="button oto-accept" onClick={()=>setOpen(true)}>YES — ADD MY FINAL WISHES PACK — $37</button>
 <p className="oto-reassurance"><em>Immediate access. Complete it at your own pace.</em></p>
 <a className="oto-decline" href="/oto2"><strong>No thanks, I’ll continue with my ICE Vault.</strong></a></section>
 </div></article>
 <Dialog open={open} onOpenChange={setOpen}><DialogContent className="checkout-dialog"><DialogHeader><DialogTitle>The No-Guessing Final Wishes Pack</DialogTitle><DialogDescription>This is a checkout preview. No payment will be taken.</DialogDescription></DialogHeader><div className="checkout-line"><span>The No-Guessing Final Wishes Pack</span><strong>$37</strong></div><a className="button" href="/oto2">Continue</a></DialogContent></Dialog>
 </main>;
}
