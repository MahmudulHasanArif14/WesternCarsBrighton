'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, ArrowRight, Clock3 } from 'lucide-react';

const BOOKING='https://westerncars.webbooker.icabbi.com/';
const PHONE='tel:+441273220220';

export function Header(){
 const [open,setOpen]=useState(false);
 const links=[['Home','/'],['Services','/services/'],['About','/about/'],['Contact','/contact/']];
 return <>
  <div className="bg-[#06172b] text-white text-sm"><div className="container-wide flex min-h-10 items-center justify-between gap-4"><span className="flex items-center gap-2"><Clock3 size={15}/> Open 24 hours, 7 days a week</span><a href={PHONE} className="flex items-center gap-2 font-semibold hover:underline"><Phone size={15}/> 01273 220220</a></div></div>
  <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur"><div className="container-wide flex h-18 items-center justify-between">
   <Link href="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}><span className="grid size-10 place-items-center rounded-xl bg-[#0b63ce] text-lg font-black text-white">W</span><span><span className="block text-lg font-black tracking-tight text-[#071a2f]">Western Cars</span><span className="block text-[11px] font-bold uppercase tracking-[.2em] text-[#0b63ce]">Brighton & Hove</span></span></Link>
   <nav className="hidden items-center gap-8 md:flex">{links.map(([label,href])=><Link key={href} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-[#0b63ce]">{label}</Link>)}<a href={BOOKING} target="_blank" rel="noreferrer" className="rounded-full bg-[#0b63ce] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-[#084fa5]">Book a taxi</a></nav>
   <button aria-label="Open menu" onClick={()=>setOpen(!open)} className="rounded-lg p-2 md:hidden">{open?<X/>:<Menu/>}</button>
  </div>{open&&<nav className="border-t border-slate-200 bg-white p-4 md:hidden">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className="block rounded-lg px-3 py-3 font-semibold hover:bg-slate-50">{label}</Link>)}<a href={BOOKING} target="_blank" rel="noreferrer" className="mt-2 block rounded-lg bg-[#0b63ce] px-3 py-3 text-center font-bold text-white">Book a taxi</a></nav>}</header>
 </>;
}

export function Footer(){return <footer className="bg-[#06172b] text-slate-300"><div className="container-wide grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]"><div><div className="mb-4 text-xl font-black text-white">Western Cars</div><p className="max-w-md text-sm leading-7">24/7 private hire in Brighton & Hove for local journeys, airport transfers, corporate travel, groups and special occasions.</p></div><div><h3 className="mb-4 font-bold text-white">Explore</h3><div className="grid gap-3 text-sm"><Link href="/services/">Services</Link><Link href="/about/">About us</Link><Link href="/contact/">Contact</Link><Link href="/terms/">Terms & conditions</Link></div></div><div><h3 className="mb-4 font-bold text-white">Contact</h3><div className="grid gap-3 text-sm"><a href={PHONE}>01273 220220</a><a href="mailto:info@westerncarsbrighton.co.uk">info@westerncarsbrighton.co.uk</a><span>Mocatta House, Trafalgar Place,<br/>Brighton, BN1 4DU</span></div></div></div><div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© 2026 Western Cars Private Hire Limited · Registered in England & Wales No. 09243357</div></footer>}

export function BookingCTA({compact=false}:{compact?:boolean}){return <section className={compact?'py-8':'section'}><div className="container-wide"><div className="overflow-hidden rounded-3xl bg-[#0b63ce] p-7 text-white shadow-2xl shadow-blue-900/15 md:p-10"><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="mb-2 text-sm font-bold uppercase tracking-[.2em] text-blue-100">Ready when you are</p><h2 className="text-3xl font-black tracking-tight md:text-4xl">Book your Brighton taxi online</h2><p className="mt-2 max-w-xl text-blue-50">Get a quote and arrange your journey through our secure online booking system.</p></div><a href={BOOKING} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#0b63ce] transition hover:bg-slate-100">Book online <ArrowRight size={18}/></a></div></div></div></section>}
