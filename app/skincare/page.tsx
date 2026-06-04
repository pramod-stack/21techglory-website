// @ts-nocheck
"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';


// Add GSAP via script injection if needed, or assume it's imported
import Script from 'next/script';

export default function SkincarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Poll for GSAP to be available before running animations
    let attempts = 0;
    const interval = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(interval);
        try {
          
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ===== Scroll progress bar ===== */
  const progress = document.getElementById('scrollProgress');
  function updateProgress(){
    const h = document.documentElement;
    const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    progress.style.width = pct + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive:true });
  updateProgress();

  /* ===== Cursor glow ===== */
  const glow = document.getElementById('cursorGlow');
  if (!('ontouchstart' in window)) {
    let tx=0, ty=0, cx=0, cy=0;
    window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
    function loop(){
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();
  } else {
    glow.style.display = 'none';
  }

  /* ===== Hero particles ===== */
  (function(){
    const wrap = document.getElementById('heroParticles');
    if (!wrap || prefersReduced) return;
    for (let i = 0; i < 22; i++){
      const p = document.createElement('span');
      p.className = 'particle';
      p.style.left = Math.random()*100 + '%';
      p.style.top = (60 + Math.random()*60) + '%';
      p.style.animationDuration = (10 + Math.random()*14) + 's';
      p.style.animationDelay = (-Math.random()*14) + 's';
      p.style.width = p.style.height = (2 + Math.random()*4) + 'px';
      p.style.opacity = (.3 + Math.random()*.5);
      wrap.appendChild(p);
    }
  })();

  /* ===== Magnetic buttons ===== */
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width/2) * 0.25;
      const y = (e.clientY - r.top - r.height/2) * 0.25;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'translate(0,0)'; });
  });

  /* ===== 3D tilt cards ===== */
  document.querySelectorAll('.tilt').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top)/r.height - 0.5) * -8;
      const ry = ((e.clientX - r.left)/r.width - 0.5) * 8;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  /* ===== Init GSAP after load ===== */
  
    if (!window.gsap) return;
    gsap.registerPlugin(ScrollTrigger);

    /* Reveal animations */
    document.querySelectorAll('.reveal').forEach(el => {
      gsap.fromTo(el, { y:40, opacity:0 }, {
        y:0, opacity:1, duration:.9, ease:'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' }
      });
    });

    /* Counters */
    document.querySelectorAll('.counter').forEach(el => {
      const target = parseFloat(el.dataset.target);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const isNeg = target < 0;
      const abs = Math.abs(target);
      const obj = { v: 0 };
      gsap.to(obj, {
        v: abs, duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
        onUpdate(){
          const num = (isNeg ? -1 : 1) * obj.v;
          el.textContent = prefix + num.toFixed(decimals) + suffix;
        }
      });
    });

    /* Hero parallax */
    gsap.to('.orb.o1', { y: 100, scrollTrigger:{ trigger:'body', start:'top top', end:'bottom top', scrub:1 }});
    gsap.to('.orb.o2', { y: -120, scrollTrigger:{ trigger:'body', start:'top top', end:'bottom top', scrub:1 }});
    gsap.to('.orb.o3', { y: 80, scrollTrigger:{ trigger:'body', start:'top top', end:'bottom top', scrub:1 }});

    /* Timeline fill */
    const fill = document.getElementById('timelineFill');
    const wrap = document.getElementById('processWrap');
    if (fill && wrap) {
      gsap.to(fill, {
        height: '100%',
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top 70%', end: 'bottom 70%', scrub: true }
      });
    }
  /* ===== ROI Calculator ===== */
  const bpd = document.getElementById('bpd');
  const ats = document.getElementById('ats');
  const ns = document.getElementById('ns');
  const mc = document.getElementById('mc');
  const bpdVal = document.getElementById('bpd-val');
  const atsVal = document.getElementById('ats-val');
  const nsVal = document.getElementById('ns-val');
  const mcVal = document.getElementById('mc-val');
  const lossOut = document.getElementById('lossOut');
  const recoverOut = document.getElementById('recoverOut');
  const annualOut = document.getElementById('annualOut');

  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');

  function calc(){
    const bookings = +bpd.value;
    const ticket = +ats.value;
    const noshow = +ns.value / 100;
    const missed = +mc.value;
    bpdVal.textContent = bookings;
    atsVal.textContent = '₹' + ticket;
    nsVal.textContent = (noshow*100).toFixed(0) + '%';
    mcVal.textContent = missed;

    // monthly losses
    const lossNoShow = bookings * 30 * noshow * ticket;
    const lossMissed = missed * 4.3 * ticket * 0.6; // 60% would have booked
    const total = lossNoShow + lossMissed;
    lossOut.textContent = fmt(total);
    // recover 80% of no-shows + 70% of missed calls
    const recover = (lossNoShow * 0.8) + (lossMissed * 0.7);
    recoverOut.textContent = fmt(recover);
    annualOut.textContent = fmt(recover * 12);
  }
  if (bpd){
    [bpd, ats, ns, mc].forEach(el => el.addEventListener('input', calc));
    calc();
  }

  /* ===== Exit intent CTA ===== */
  let shown = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !shown && !localStorage.getItem('exitShown')){
      shown = true;
      localStorage.setItem('exitShown','1');
      const m = document.createElement('div');
      m.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(8px);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;';
      m.innerHTML = `
        <div style="max-width:480px;width:100%;background:linear-gradient(180deg,#10101a,#08080d);border:1px solid rgba(245,166,35,.35);border-radius:24px;padding:36px 30px;text-align:center;position:relative;box-shadow:0 30px 80px rgba(0,0,0,.6);">
          <button id="exitClose" style="position:absolute;top:14px;right:18px;background:transparent;border:none;color:#888;font-size:22px;cursor:pointer;">×</button>
          <div style="font-size:13px;letter-spacing:.2em;text-transform:uppercase;color:#f5a623;font-weight:600;">Wait — Don't Miss This</div>
          <h3 style="color:#fff;font-size:26px;font-weight:800;margin:14px 0 10px;letter-spacing:-.02em;">Free 30-min <span style="background:linear-gradient(135deg,#f5a623,#ff6b9d);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Salon Growth Audit</span></h3>
          <p style="color:#cfcfd7;font-size:15px;line-height:1.6;margin:0 0 22px;">We'll show you exactly where your salon is losing bookings — and how to fix it. No pitch. Just insights.</p>
          <a href="https://wa.me/917795354043?text=Hi%2C%20I%27d%20like%20my%20free%20Salon%20Growth%20Audit" target="_blank" style="display:inline-block;padding:14px 26px;background:linear-gradient(135deg,#f5a623,#ff6b9d);color:#0a0a0b;border-radius:12px;font-weight:600;text-decoration:none;">Claim My Free Audit →</a>
        </div>`;
      document.body.appendChild(m);
      document.getElementById('exitClose').onclick = () => m.remove();
      m.onclick = (ev) => { if (ev.target === m) m.remove(); };
    }
  });

})();

        } catch (e) {
          console.error("GSAP Animation Error:", e);
        }
      } else if (attempts > 20) {
        clearInterval(interval); // give up after 10 seconds
        console.warn("GSAP not loaded in time.");
      }
      attempts++;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="skincare-page-container bg-[#05050a] text-[#e8e8ea]">
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />

      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <style dangerouslySetInnerHTML={{ __html: `
        
  :root{
    --ink:#05050a;
    --surface:#0a0a0f;
    --gold:#f5a623;
    --rose:#ff6b9d;
    --violet:#c471ed;
  }
  *{ -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
  html,body{ background:var(--ink); color:#e8e8ea; font-family:'Inter',system-ui,sans-serif; }
  html{ scroll-behavior:smooth; }
  body{ overflow-x:hidden; }

  /* ===== Type ===== */
  .h-display{ font-weight:800; letter-spacing:-.035em; line-height:1.02; }
  .h-serif-italic{ font-family:'Instrument Serif', serif; font-style:italic; font-weight:400; letter-spacing:-.02em; }
  .gradient-text{
    background:linear-gradient(110deg,#f5a623 0%,#ff6b9d 45%,#c471ed 90%);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }
  .gradient-text-soft{
    background:linear-gradient(110deg,#fff 0%,#cfcfd7 100%);
    -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
  }

  /* ===== Eyebrow chip ===== */
  .eyebrow{
    display:inline-flex; align-items:center; gap:8px;
    font-size:12px; letter-spacing:.22em; text-transform:uppercase; font-weight:600;
    color:#f5a623; padding:7px 14px; border-radius:999px;
    border:1px solid rgba(245,166,35,.25);
    background:linear-gradient(180deg,rgba(245,166,35,.10),rgba(245,166,35,.02));
    backdrop-filter: blur(8px);
  }
  .eyebrow .dot{ width:6px;height:6px;border-radius:50%;background:#f5a623;box-shadow:0 0 12px #f5a623; animation:pulse 2.4s infinite; }
  @keyframes pulse{ 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }

  /* ===== Background layers ===== */
  .bg-layers{ position:fixed; inset:0; z-index:-1; pointer-events:none; overflow:hidden; }
  .bg-grid{
    position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
    background-size: 60px 60px;
    mask-image: radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%);
  }
  .bg-noise{
    position:absolute; inset:0; opacity:.06; mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>");
  }
  .bg-mesh{
    position:absolute; inset:-20%;
    background:
      radial-gradient(40% 30% at 15% 20%, rgba(245,166,35,.18), transparent 60%),
      radial-gradient(35% 30% at 85% 30%, rgba(255,107,157,.15), transparent 60%),
      radial-gradient(40% 35% at 50% 90%, rgba(196,113,237,.12), transparent 60%);
    filter: blur(40px);
  }
  .orb{ position:absolute; border-radius:50%; filter:blur(60px); opacity:.55; will-change:transform; }
  .orb.o1{ width:520px; height:520px; background:radial-gradient(circle, #f5a623, transparent 70%); top:-120px; left:-120px;}
  .orb.o2{ width:480px; height:480px; background:radial-gradient(circle, #ff6b9d, transparent 70%); top:30%; right:-150px;}
  .orb.o3{ width:600px; height:600px; background:radial-gradient(circle, #c471ed, transparent 70%); bottom:-200px; left:30%;}

  /* Mouse follow glow */
  .cursor-glow{
    position:fixed; width:600px; height:600px; border-radius:50%; pointer-events:none; z-index:1;
    background:radial-gradient(circle, rgba(245,166,35,.10), transparent 60%);
    transform:translate(-50%,-50%); filter:blur(20px);
    transition: transform .12s ease-out;
  }

  /* ===== Glass card ===== */
  .glass{
    background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015));
    border: 1px solid rgba(255,255,255,0.08);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    border-radius: 22px;
  }
  .glass-strong{
    background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
    border: 1px solid rgba(255,255,255,0.10);
    backdrop-filter: blur(28px) saturate(160%);
    border-radius: 22px;
  }

  /* Glow border on hover */
  .glow-border{ position:relative; }
  .glow-border::before{
    content:""; position:absolute; inset:-1px; border-radius:inherit; padding:1px;
    background: linear-gradient(135deg, transparent, rgba(245,166,35,.0), transparent);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    transition: background .35s;
    pointer-events:none;
  }
  .glow-border:hover::before{
    background: linear-gradient(135deg, rgba(245,166,35,.7), rgba(255,107,157,.6), rgba(196,113,237,.5));
  }
  .glow-border:hover{ box-shadow: 0 30px 80px rgba(245,166,35,.12), 0 0 0 1px rgba(245,166,35,.2); }

  /* ===== Buttons ===== */
  .btn{
    display:inline-flex; align-items:center; justify-content:center; gap:10px;
    padding:14px 24px; font-weight:600; font-size:15px;
    border-radius:12px; text-decoration:none; cursor:pointer;
    transition: transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s, background .25s;
    will-change: transform;
  }
  .btn-primary{
    background: linear-gradient(135deg,#f5a623,#ff6b9d 60%, #c471ed);
    color:#0a0a0b;
    box-shadow: 0 10px 30px rgba(245,166,35,.30), inset 0 1px 0 rgba(255,255,255,.4);
  }
  .btn-primary:hover{ transform:translateY(-3px); box-shadow:0 18px 50px rgba(245,166,35,.45); }
  .btn-ghost{
    background: rgba(255,255,255,.04); color:#fff;
    border:1px solid rgba(255,255,255,.12);
    backdrop-filter: blur(10px);
  }
  .btn-ghost:hover{ background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.25); }

  /* Animated gradient border */
  .grad-border{
    position:relative; border-radius:24px;
    background: linear-gradient(180deg,#0d0d14,#08080c);
  }
  .grad-border::before{
    content:""; position:absolute; inset:0; padding:1.5px; border-radius:inherit;
    background: conic-gradient(from var(--angle,0deg), #f5a623, #ff6b9d, #c471ed, #f5a623);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    animation: rotate 6s linear infinite;
  }
  @property --angle{ syntax:'<angle>'; initial-value:0deg; inherits:false; }
  @keyframes rotate{ to{ --angle:360deg; } }

  /* Pulse button glow */
  .pulse-glow{ animation: pulseGlow 2.4s ease-in-out infinite; }
  @keyframes pulseGlow{
    0%,100%{ box-shadow: 0 10px 30px rgba(245,166,35,.3), 0 0 0 0 rgba(245,166,35,.5); }
    50%{ box-shadow: 0 14px 40px rgba(245,166,35,.45), 0 0 0 14px rgba(245,166,35,0); }
  }

  /* ===== Scroll progress ===== */
  .scroll-progress{
    position:fixed; top:0; left:0; height:3px; width:0;
    background: linear-gradient(90deg,#f5a623,#ff6b9d,#c471ed);
    z-index:80; box-shadow:0 0 16px rgba(245,166,35,.7);
  }

  /* ===== Float anim ===== */
  .float-y{ animation: floatY 7s ease-in-out infinite; }
  @keyframes floatY{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
  .float-y2{ animation: floatY2 9s ease-in-out infinite; }
  @keyframes floatY2{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(18px)} }

  /* ===== Marquee ===== */
  .marquee{ display:flex; gap:24px; width:max-content; animation: marquee 40s linear infinite; }
  .marquee:hover{ animation-play-state: paused; }
  @keyframes marquee{ from{ transform:translateX(0)} to{ transform:translateX(-50%)} }

  /* ===== FAQ ===== */
  .faq-item{ border:1px solid rgba(255,255,255,.07); border-radius:16px; background:linear-gradient(180deg,rgba(255,255,255,.025),rgba(255,255,255,0)); overflow:hidden; transition: border-color .25s, background .25s; }
  .faq-item[open]{ border-color: rgba(245,166,35,.35); background: linear-gradient(180deg,rgba(245,166,35,.06),rgba(255,107,157,.03)); }
  .faq-item summary{ list-style:none; cursor:pointer; padding:20px 24px; display:flex; justify-content:space-between; gap:18px; align-items:center; }
  .faq-item summary::-webkit-details-marker{ display:none; }
  .faq-item summary .chev{ transition: transform .35s cubic-bezier(.2,.8,.2,1); }
  .faq-item[open] summary .chev{ transform: rotate(180deg); }
  .faq-body{ padding:0 24px 22px 24px; color:#a5a5ab; font-size:16px; line-height:1.7; }

  /* Hover lift card */
  .lift{ transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s, border-color .35s; }
  .lift:hover{ transform: translateY(-6px); }

  /* tilt area */
  .tilt{ transform-style: preserve-3d; transition: transform .25s ease-out; }

  /* magnetic */
  .magnetic{ transition: transform .2s ease-out; }

  /* Section padding */
  section{ padding: 110px 0; position:relative; }
  @media (max-width: 768px){ section{ padding: 72px 0; } }

  /* Pain card pulse */
  .pain-card{ position:relative; overflow:hidden; }
  .pain-card::after{
    content:""; position:absolute; left:0; top:0; bottom:0; width:3px;
    background: linear-gradient(180deg,#ff4d6d,#ff8aa1);
    box-shadow: 0 0 18px rgba(255,77,109,.6);
    animation: warnPulse 2s infinite;
  }
  @keyframes warnPulse{ 0%,100%{opacity:1} 50%{opacity:.4} }

  /* Process timeline line */
  .timeline-line{
    position:absolute; left:50%; top:0; bottom:0; width:2px; transform: translateX(-50%);
    background: linear-gradient(180deg, rgba(245,166,35,.0), rgba(245,166,35,.4) 10%, rgba(255,107,157,.4) 50%, rgba(196,113,237,.4) 90%, transparent);
  }
  .timeline-fill{
    position:absolute; left:50%; top:0; width:2px; transform: translateX(-50%);
    background: linear-gradient(180deg,#f5a623,#ff6b9d,#c471ed);
    box-shadow: 0 0 24px rgba(245,166,35,.6);
    height: 0%;
  }
  @media (max-width: 900px){
    .timeline-line, .timeline-fill{ left: 22px; transform: none; }
  }

  /* Funnel */
  .funnel-step{ filter: drop-shadow(0 12px 30px rgba(245,166,35,.10)); }

  /* Floating WhatsApp */
  .wa-float{
    position:fixed; right:22px; bottom:22px; z-index:70;
    width:62px; height:62px; border-radius:50%;
    background: linear-gradient(135deg,#25D366,#128C7E);
    display:flex; align-items:center; justify-content:center;
    box-shadow: 0 14px 40px rgba(37,211,102,.45);
    animation: waPulse 2.4s infinite;
  }
  @keyframes waPulse{
    0%,100%{ box-shadow: 0 14px 40px rgba(37,211,102,.45), 0 0 0 0 rgba(37,211,102,.5); }
    50%{ box-shadow: 0 18px 50px rgba(37,211,102,.55), 0 0 0 16px rgba(37,211,102,0); }
  }

  /* Sticky consultation button */
  .sticky-cta{
    position:fixed; left:22px; bottom:22px; z-index:70;
  }
  @media (max-width: 640px){ .sticky-cta{ display:none; } }

  /* Comparison row */
  .vs-row{ display:grid; grid-template-columns: 1.8fr 1fr 1fr; align-items:center; gap:0; padding:18px 22px; border-bottom:1px solid rgba(255,255,255,.06); }
  .vs-row:last-child{ border-bottom:none; }
  .vs-head{ background: linear-gradient(180deg, rgba(245,166,35,.10), rgba(245,166,35,.02)); font-weight:700; color:#fff; }
  @media (max-width: 760px){ .vs-row{ grid-template-columns: 1fr; gap:6px; padding:14px 16px; } }

  /* tech logo card */
  .tech-card{
    background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.01));
    border:1px solid rgba(255,255,255,.07);
    border-radius:16px; padding:18px 14px; text-align:center;
    transition: all .3s;
  }
  .tech-card:hover{ border-color: rgba(245,166,35,.35); transform: translateY(-4px); }

  /* Reveal classes (initial state) */
  .reveal{ opacity:0; transform: translateY(40px); }
  .reveal-x{ opacity:0; transform: translateX(-40px); }

  /* Respect reduced motion */
  @media (prefers-reduced-motion: reduce){
    *, *::before, *::after{ animation: none !important; transition: none !important; }
    .reveal, .reveal-x{ opacity:1 !important; transform: none !important; }
  }

  /* Particles */
  .particles{ position:absolute; inset:0; pointer-events:none; }
  .particle{
    position:absolute; width:4px; height:4px; border-radius:50%;
    background: radial-gradient(circle, #f5a623, transparent 70%);
    opacity:.6; animation: floatUp linear infinite;
  }
  @keyframes floatUp{
    from{ transform: translateY(0) translateX(0); opacity:0;}
    10%{opacity:.7;}
    to{ transform: translateY(-100vh) translateX(40px); opacity:0;}
  }

  /* Dashboard preview */
  .dash-bar{ background: linear-gradient(180deg,#f5a623,#ff6b9d); border-radius:6px 6px 0 0; }
  .dash-row td{ padding:9px 12px; font-size:13px; border-bottom:1px solid rgba(255,255,255,.05); }

  /* range input style */
  input[type=range]{ -webkit-appearance:none; height:6px; background:rgba(255,255,255,.08); border-radius:999px; outline:none;}
  input[type=range]::-webkit-slider-thumb{
    -webkit-appearance:none; appearance:none; width:22px; height:22px; border-radius:50%;
    background: linear-gradient(135deg,#f5a623,#ff6b9d);
    box-shadow:0 6px 18px rgba(245,166,35,.5); cursor:pointer;
    border: 2px solid #0a0a0f;
  }

  /* Section divider */
  .divider-line{
    height:1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,.12), transparent);
  }

  .badge-trust{
    display:inline-flex; align-items:center; gap:8px;
    padding: 8px 14px; border-radius:999px;
    background: rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08);
    font-size:13px; color:#cfcfd7;
  }

      ` }} />
      
      


<div className="bg-layers">
  <div className="bg-grid"></div>
  <div className="bg-mesh"></div>
  <div className="orb o1 float-y"></div>
  <div className="orb o2 float-y2"></div>
  <div className="orb o3 float-y"></div>
  <div className="bg-noise"></div>
</div>


<div className="cursor-glow" id="cursorGlow"></div>


<div className="scroll-progress" id="scrollProgress"></div>

<div className="relative z-[2]">

  
  <section className="hero pt-32 lg:pt-40 pb-24 relative">
    
    <div className="particles" id="heroParticles"></div>

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        
        <div>
          <span className="eyebrow reveal"><span className="dot"></span>For Salons • Beauty Parlours • Spas • Skin Clinics</span>
          <h1 className="h-display text-[clamp(40px,6vw,72px)] mt-6 reveal">
            <span className="gradient-text-soft">Turn Your Salon Into A</span><br />
            <span className="gradient-text">Fully Booked,</span>
            <span className="h-serif-italic gradient-text">Auto-Pilot</span>
            <span className="gradient-text"> Business</span>
          </h1>
          <p className="mt-7 text-[19px] leading-relaxed text-zinc-300 max-w-[640px] reveal">
            We build premium salon websites, automated booking systems, WhatsApp &amp; Instagram marketing engines, and Google SEO that fills your chairs — 7 days a week, even while you sleep.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 reveal">
            <a href="#" className="btn btn-primary pulse-glow magnetic" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Get My Free Salon Growth Audit <span>→</span></a>
            <a href="#" className="btn btn-ghost magnetic" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>See What We Build</a>
          </div>

          
          <div className="mt-8 flex flex-wrap gap-2 reveal">
            <span className="badge-trust">⭐⭐⭐⭐⭐ 4.9 / 5 rating</span>
            <span className="badge-trust">🛡️ 50+ Salons Scaled</span>
            <span className="badge-trust">⚡ Live in 30 Days</span>
          </div>

          
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                <span className="counter" data-target="3.5" data-decimals="1" data-suffix="x">0x</span>
              </div>
              <div className="text-xs tracking-wider text-zinc-400 uppercase mt-1">More Bookings</div>
            </div>
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-extrabold text-white">
                <span className="counter" data-target="-68" data-suffix="%">0%</span>
              </div>
              <div className="text-xs tracking-wider text-zinc-400 uppercase mt-1">No-Shows</div>
            </div>
            <div className="reveal">
              <div className="text-3xl md:text-4xl font-extrabold gradient-text">#1</div>
              <div className="text-xs tracking-wider text-zinc-400 uppercase mt-1">Google Local</div>
            </div>
          </div>
        </div>

        
        <div className="relative reveal">
          
          <div className="absolute -inset-8 bg-gradient-to-br from-gold/30 via-rose/20 to-violet/20 blur-3xl opacity-50 rounded-full"></div>

          <div className="relative grad-border p-1 float-y" style={{"--angle":"0deg"}}>
            <div className="rounded-[22px] p-6 bg-gradient-to-br from-[#0f0f17] to-[#08080d]">
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
                </div>
                <div className="text-[11px] tracking-widest text-zinc-500 uppercase">Salon Dashboard • Live</div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="rounded-xl p-3 bg-white/[.03] border border-white/5">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Today</div>
                  <div className="text-xl font-bold text-white">42</div>
                  <div className="text-[11px] text-emerald-400">▲ 28%</div>
                </div>
                <div className="rounded-xl p-3 bg-white/[.03] border border-white/5">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Revenue</div>
                  <div className="text-xl font-bold text-white">₹68k</div>
                  <div className="text-[11px] text-emerald-400">▲ 41%</div>
                </div>
                <div className="rounded-xl p-3 bg-white/[.03] border border-white/5">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Reviews</div>
                  <div className="text-xl font-bold text-white">4.9★</div>
                  <div className="text-[11px] text-emerald-400">+12</div>
                </div>
              </div>

              
              <div className="rounded-xl p-4 bg-white/[.02] border border-white/5 mb-4">
                <div className="flex items-end gap-2 h-24">
                  <div className="dash-bar flex-1" style={{"height":"35%"}}></div>
                  <div className="dash-bar flex-1" style={{"height":"55%"}}></div>
                  <div className="dash-bar flex-1" style={{"height":"42%"}}></div>
                  <div className="dash-bar flex-1" style={{"height":"70%"}}></div>
                  <div className="dash-bar flex-1" style={{"height":"50%"}}></div>
                  <div className="dash-bar flex-1" style={{"height":"85%"}}></div>
                  <div className="dash-bar flex-1" style={{"height":"95%"}}></div>
                </div>
                <div className="text-[10px] text-zinc-500 mt-2 flex justify-between"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
              </div>

              
              <div className="rounded-xl bg-white/[.02] border border-white/5">
                <div className="px-4 py-2 text-[11px] uppercase tracking-widest text-zinc-500 border-b border-white/5">Next Bookings</div>
                <div className="px-4 py-2.5 flex items-center justify-between text-sm border-b border-white/5">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400"></span><span className="text-white">Priya S.</span> <span className="text-zinc-500">• Hair Spa</span></div>
                  <div className="text-zinc-400 text-xs">11:30 AM</div>
                </div>
                <div className="px-4 py-2.5 flex items-center justify-between text-sm border-b border-white/5">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="text-white">Meera R.</span> <span className="text-zinc-500">• Bridal Trial</span></div>
                  <div className="text-zinc-400 text-xs">1:00 PM</div>
                </div>
                <div className="px-4 py-2.5 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-400"></span><span className="text-white">Anita K.</span> <span className="text-zinc-500">• Facial</span></div>
                  <div className="text-zinc-400 text-xs">3:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="absolute -top-4 -left-6 glass px-4 py-2 rounded-2xl text-sm text-white float-y2 hidden md:flex items-center gap-2">
            💬 <span>+ New WhatsApp booking</span>
          </div>
          <div className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-2xl text-sm text-white float-y hidden md:flex items-center gap-2">
            ⭐ <span>+5 Google reviews</span>
          </div>
        </div>
      </div>

      
      <div className="mt-20 reveal">
        <p className="text-center text-xs uppercase tracking-[.25em] text-zinc-500 mb-6">Trusted by salons, spas &amp; beauty parlours across South India</p>
        <div className="overflow-hidden mask-fade">
          <div className="marquee">
            <div className="flex gap-8 items-center">
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Glow Unisex</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Bliss Beauty Studio</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Serene Spa</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Clear Skin Clinic</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Vogue Hair Lounge</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Bridal Atelier</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Nail Bar Co.</span>
              <span className="text-zinc-700">•</span>
            </div>
            <div className="flex gap-8 items-center" aria-hidden="true">
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Glow Unisex</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Bliss Beauty Studio</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Serene Spa</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Clear Skin Clinic</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Vogue Hair Lounge</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Bridal Atelier</span>
              <span className="text-zinc-700">•</span>
              <span className="text-zinc-400/70 text-xl font-semibold whitespace-nowrap">Nail Bar Co.</span>
              <span className="text-zinc-700">•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>The Real Problem</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          <span className="gradient-text-soft">Your Salon Is Talented.</span>
          <span className="gradient-text">Your Marketing Isn't.</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">You're a master at hair, beauty, and skin. But every empty chair, missed call, and no-show is silently draining your revenue. Sound familiar?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        
        <div className="pain-card lift glass p-7 reveal">
          <h4 className="text-rose-300 font-semibold text-lg mb-2">💸 Empty chairs during weekdays</h4>
          <p className="text-zinc-400 text-[15px]">Weekends are packed, but Monday–Thursday your stylists sit idle. You're paying rent and salaries for slots that aren't selling.</p>
        </div>
        <div className="pain-card lift glass p-7 reveal">
          <h4 className="text-rose-300 font-semibold text-lg mb-2">📵 Clients ghosting on appointments</h4>
          <p className="text-zinc-400 text-[15px]">30–40% no-show rates are normal in Indian salons. Every cancellation without notice is pure lost revenue you'll never recover.</p>
        </div>
        <div className="pain-card lift glass p-7 reveal">
          <h4 className="text-rose-300 font-semibold text-lg mb-2">📞 Endless calls &amp; WhatsApp chaos</h4>
          <p className="text-zinc-400 text-[15px]">Your receptionist is drowning in "What time can I come?" messages while real walk-in clients wait. No system. Just chaos.</p>
        </div>
        <div className="pain-card lift glass p-7 reveal">
          <h4 className="text-rose-300 font-semibold text-lg mb-2">🔍 Invisible on Google</h4>
          <p className="text-zinc-400 text-[15px]">When someone searches "best salon near me," your competitor 2 streets away shows up — and you don't. Every day, you're losing 50+ ready-to-pay customers.</p>
        </div>
        <div className="pain-card lift glass p-7 reveal">
          <h4 className="text-rose-300 font-semibold text-lg mb-2">📸 Instagram followers ≠ paying clients</h4>
          <p className="text-zinc-400 text-[15px]">You post beautiful reels, get likes and saves… but those followers never convert into actual bookings. Vanity metrics don't pay bills.</p>
        </div>
        <div className="pain-card lift glass p-7 reveal">
          <h4 className="text-rose-300 font-semibold text-lg mb-2">🔄 First-time clients never return</h4>
          <p className="text-zinc-400 text-[15px]">You spend money to acquire a customer once. They get a service. Then disappear forever. No follow-up, no loyalty, no repeat revenue.</p>
        </div>
      </div>

      <p className="text-center text-lg text-zinc-300 max-w-3xl mx-auto mt-14 reveal">
        If even <strong className="gradient-text">one</strong> of these is killing your salon — read on. We've fixed exactly this for <strong className="text-white">50+ beauty businesses</strong> across South India.
      </p>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Interactive Growth Funnel</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          From Stranger To <span className="gradient-text">Loyal Client</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">A visual map of how we turn cold strangers into repeat-paying salon customers — automatically.</p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
        
        <div className="reveal">
          <svg viewBox="0 0 600 480" className="w-full h-auto">
            <defs>
              <linearGradient id="fg1" x1="0" x2="1">
                <stop offset="0%" stopColor="#f5a623"></stop>
                <stop offset="100%" stopColor="#ff6b9d"></stop>
              </linearGradient>
              <linearGradient id="fg2" x1="0" x2="1">
                <stop offset="0%" stopColor="#ff6b9d"></stop>
                <stop offset="100%" stopColor="#c471ed"></stop>
              </linearGradient>
              <linearGradient id="fg3" x1="0" x2="1">
                <stop offset="0%" stopColor="#c471ed"></stop>
                <stop offset="100%" stopColor="#f5a623"></stop>
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur"></feGaussianBlur>
                <feMerge><feMergeNode in="blur"></feMergeNode><feMergeNode in="SourceGraphic"></feMergeNode></feMerge>
              </filter>
            </defs>

            
            <g className="funnel-step">
              <polygon points="40,30 560,30 500,110 100,110" fill="url(#fg1)" opacity=".25" stroke="url(#fg1)" strokeWidth="1.5"></polygon>
              <text x="300" y="70" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">1. Discover</text>
              <text x="300" y="92" textAnchor="middle" fill="#cfcfd7" fontSize="13">Google • Instagram • Word of Mouth</text>
            </g>
            
            <g className="funnel-step">
              <polygon points="100,130 500,130 450,210 150,210" fill="url(#fg2)" opacity=".25" stroke="url(#fg2)" strokeWidth="1.5"></polygon>
              <text x="300" y="170" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">2. Engage</text>
              <text x="300" y="192" textAnchor="middle" fill="#cfcfd7" fontSize="13">Website • Reels • DM Auto-replies</text>
            </g>
            
            <g className="funnel-step">
              <polygon points="150,230 450,230 410,310 190,310" fill="url(#fg3)" opacity=".30" stroke="url(#fg3)" strokeWidth="1.5"></polygon>
              <text x="300" y="270" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">3. Book</text>
              <text x="300" y="292" textAnchor="middle" fill="#cfcfd7" fontSize="13">Web + WhatsApp Booking System</text>
            </g>
            
            <g className="funnel-step">
              <polygon points="190,330 410,330 380,400 220,400" fill="url(#fg1)" opacity=".35" stroke="url(#fg1)" strokeWidth="1.5"></polygon>
              <text x="300" y="365" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="17">4. Convert</text>
              <text x="300" y="387" textAnchor="middle" fill="#cfcfd7" fontSize="12">Reminders • Deposit • Show Up</text>
            </g>
            
            <g className="funnel-step">
              <polygon points="220,420 380,420 360,470 240,470" fill="url(#fg2)" opacity=".45" stroke="url(#fg2)" strokeWidth="1.5"></polygon>
              <text x="300" y="450" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="16">5. Retain &amp; Refer</text>
            </g>
          </svg>
        </div>

        <div className="space-y-5 reveal">
          <div className="glass p-6 lift glow-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-gold/30 to-rose/20 text-xl">🎯</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Top of funnel — Discovery</h4>
                <p className="text-zinc-400 text-sm">Local SEO + Google Business Profile + Instagram organic make sure customers find you first.</p>
              </div>
            </div>
          </div>
          <div className="glass p-6 lift glow-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose/30 to-violet/20 text-xl">✨</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Mid funnel — Trust &amp; engagement</h4>
                <p className="text-zinc-400 text-sm">A premium website, reels, before/afters and review proof get visitors emotionally invested.</p>
              </div>
            </div>
          </div>
          <div className="glass p-6 lift glow-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet/30 to-gold/20 text-xl">📅</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Booking — frictionless conversion</h4>
                <p className="text-zinc-400 text-sm">30-second web + WhatsApp booking that runs 24/7, capturing every interested visitor.</p>
              </div>
            </div>
          </div>
          <div className="glass p-6 lift glow-border">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-400/30 to-gold/20 text-xl">🔁</div>
              <div>
                <h4 className="font-semibold text-white mb-1">Retention — your real profit center</h4>
                <p className="text-zinc-400 text-sm">Loyalty + win-back + referral programs turn one-time clients into a compounding revenue engine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section id="services">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>The 21TechGlory Solution</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          A Complete <span className="gradient-text">Salon Growth System</span> — Built Once, Profits Forever
        </h2>
        <p className="mt-5 text-lg text-zinc-400">We don't sell you a "website." We install a complete digital ecosystem that books appointments, retains clients, and dominates Google — all on autopilot.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        
        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">💻</div>
          <h3 className="text-xl font-semibold text-white mb-2">Premium Salon Website Design</h3>
          <p className="text-zinc-400 text-[15px]">A stunning, mobile-first website that reflects the luxury of your brand. Built on Next.js for lightning-fast loading, optimized for conversions, and engineered to turn every visitor into a confirmed booking.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Custom design — no templates</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Services menu with pricing &amp; images</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Stylist profiles &amp; specializations</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Before/after gallery</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Mobile-optimized booking flow</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">📅</div>
          <h3 className="text-xl font-semibold text-white mb-2">Online Appointment Booking System</h3>
          <p className="text-zinc-400 text-[15px]">A powerful salon booking software integrated into your website. Clients pick a service, a stylist, a date and time — and confirm in 30 seconds. Zero phone calls. Zero confusion. 24/7 availability.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Real-time stylist availability</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Service-based time blocks</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Auto sync with Google Calendar</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Advance payment / deposit option</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Multi-branch support</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">💬</div>
          <h3 className="text-xl font-semibold text-white mb-2">WhatsApp Booking Automation</h3>
          <p className="text-zinc-400 text-[15px]">97% of Indians open WhatsApp daily. We turn it into your #1 booking channel. Auto-replies, smart menus, appointment confirmations, and re-engagement sequences — all running 24/7 without lifting a finger.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>WhatsApp Business API setup</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Auto-booking via chat menu</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Reminder messages (cuts no-shows by 65%)</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Post-service feedback automation</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Win-back campaigns for dormant clients</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">📸</div>
          <h3 className="text-xl font-semibold text-white mb-2">Instagram Integration &amp; Funnel</h3>
          <p className="text-zinc-400 text-[15px]">Stop posting reels into the void. We turn your Instagram into a booking machine — comments, DMs, and story replies are auto-routed to WhatsApp, then converted into confirmed appointments.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Instagram-to-WhatsApp auto-DM</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>"Book Now" sticker integration</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Reels content strategy + monthly plan</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>UGC (client photo) collection system</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Story highlights optimization</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">⭐</div>
          <h3 className="text-xl font-semibold text-white mb-2">Google Reviews Automation</h3>
          <p className="text-zinc-400 text-[15px]">5-star reviews are the #1 ranking factor for local salons. We auto-send review requests to every happy client within 2 hours of service — and route negative feedback privately to you for resolution.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Auto review request via WhatsApp + SMS</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Google review link with direct CTA</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Smart filter for negative experiences</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Review reply templates</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Showcase reviews on website + IG</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">🎁</div>
          <h3 className="text-xl font-semibold text-white mb-2">Loyalty &amp; Referral Programs</h3>
          <p className="text-zinc-400 text-[15px]">Acquiring a new client costs 5x more than keeping an existing one. We build automated loyalty engines that reward visits, unlock tier-based perks, and turn happy customers into your unpaid sales team.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Points-per-visit system</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Tier-based rewards (Silver/Gold/Platinum)</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Birthday &amp; anniversary offers</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Refer-a-friend with auto rewards</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Membership packages &amp; gift cards</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">Beauty Salon SEO Services</h3>
          <p className="text-zinc-400 text-[15px]">We get your salon ranked #1 for "salon near me," "best beauty parlour in [your city]," and 50+ high-intent keywords. Real organic traffic. Real bookings. No paid ads required.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Google Business Profile optimization</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Local citations &amp; directory listings</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Service-page SEO (each treatment)</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Geo-targeted landing pages</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Monthly content + blog strategy</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">📊</div>
          <h3 className="text-xl font-semibold text-white mb-2">Salon Marketing Services</h3>
          <p className="text-zinc-400 text-[15px]">Meta Ads, Google Ads, retargeting, email &amp; SMS — fully managed. We don't burn your budget. We engineer every rupee to bring a booking, a review, or a returning customer.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>Meta (Instagram + Facebook) Ads</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Google Search &amp; Maps Ads</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Retargeting site visitors</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Email &amp; SMS campaigns</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Monthly performance reports</li>
          </ul>
        </div>

        <div className="glass lift glow-border p-7 tilt reveal">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-gold/20 to-rose/10 border border-white/5 mb-5">🤖</div>
          <h3 className="text-xl font-semibold text-white mb-2">AI Chatbot &amp; CRM</h3>
          <p className="text-zinc-400 text-[15px]">An AI receptionist that answers FAQs, books appointments, suggests upgrades, and qualifies leads — 24/7. Fully integrated with your CRM so no client ever falls through the cracks.</p>
          <ul className="mt-4 space-y-2 text-[14px] text-zinc-300">
            <li className="flex gap-2"><span className="text-gold">✓</span>AI chatbot on website + WhatsApp</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Trained on your services &amp; prices</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Lead capture &amp; auto-tagging</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>CRM with client history</li>
            <li className="flex gap-2"><span className="text-gold">✓</span>Upsell &amp; cross-sell prompts</li>
          </ul>
        </div>

      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Automation Workflow</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          Inside Our <span className="gradient-text">WhatsApp Booking Engine</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">A glimpse into the automated flow that runs silently behind every salon we ship — converting curious DMs into confirmed paid appointments.</p>
      </div>

      <div className="reveal">
        <svg viewBox="0 0 1100 320" className="w-full h-auto">
          <defs>
            <linearGradient id="flowG" x1="0" x2="1">
              <stop offset="0%" stopColor="#25D366"></stop>
              <stop offset="50%" stopColor="#f5a623"></stop>
              <stop offset="100%" stopColor="#ff6b9d"></stop>
            </linearGradient>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
              <path d="M0,0 L10,5 L0,10 Z" fill="#f5a623"></path>
            </marker>
          </defs>

          
          <path d="M70 160 Q 200 60, 320 160 T 570 160 T 820 160 T 1030 160" stroke="url(#flowG)" strokeWidth="2" fill="none" strokeDasharray="6 6" markerEnd="url(#arrow)" opacity=".7"></path>

          
          <g>
            <circle cx="70" cy="160" r="38" fill="#0d0d14" stroke="#25D366" strokeWidth="2"></circle>
            <text x="70" y="166" textAnchor="middle" fontSize="22" fill="#fff">💬</text>
            <text x="70" y="225" textAnchor="middle" fontSize="13" fill="#cfcfd7" fontWeight="600">Client DM</text>
            <text x="70" y="244" textAnchor="middle" fontSize="11" fill="#888">"Hi, free Sat?"</text>
          </g>
          <g>
            <circle cx="320" cy="160" r="38" fill="#0d0d14" stroke="#f5a623" strokeWidth="2"></circle>
            <text x="320" y="166" textAnchor="middle" fontSize="22" fill="#fff">📋</text>
            <text x="320" y="225" textAnchor="middle" fontSize="13" fill="#cfcfd7" fontWeight="600">Smart Menu</text>
            <text x="320" y="244" textAnchor="middle" fontSize="11" fill="#888">Service • Date • Stylist</text>
          </g>
          <g>
            <circle cx="570" cy="160" r="38" fill="#0d0d14" stroke="#ff6b9d" strokeWidth="2"></circle>
            <text x="570" y="166" textAnchor="middle" fontSize="22" fill="#fff">💳</text>
            <text x="570" y="225" textAnchor="middle" fontSize="13" fill="#cfcfd7" fontWeight="600">Deposit</text>
            <text x="570" y="244" textAnchor="middle" fontSize="11" fill="#888">UPI / Card link</text>
          </g>
          <g>
            <circle cx="820" cy="160" r="38" fill="#0d0d14" stroke="#c471ed" strokeWidth="2"></circle>
            <text x="820" y="166" textAnchor="middle" fontSize="22" fill="#fff">🔔</text>
            <text x="820" y="225" textAnchor="middle" fontSize="13" fill="#cfcfd7" fontWeight="600">Reminders</text>
            <text x="820" y="244" textAnchor="middle" fontSize="11" fill="#888">24h • 1h before</text>
          </g>
          <g>
            <circle cx="1030" cy="160" r="38" fill="#0d0d14" stroke="#f5a623" strokeWidth="2"></circle>
            <text x="1030" y="166" textAnchor="middle" fontSize="22" fill="#fff">⭐</text>
            <text x="1030" y="225" textAnchor="middle" fontSize="13" fill="#cfcfd7" fontWeight="600">Auto Review</text>
            <text x="1030" y="244" textAnchor="middle" fontSize="11" fill="#888">+ Win-back</text>
          </g>
        </svg>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Built For Every Beauty Business</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          Whether You Run One Chair Or A Chain — <span className="gradient-text">We Scale With You</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">Our salon growth systems are battle-tested across every kind of beauty business in India.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">💇‍♀️</div>
          <h4 className="font-semibold text-white">Unisex Salons</h4>
          <p className="text-zinc-400 text-sm mt-2">Hair, beard, color, treatments — all bookable online with stylist preference.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">💄</div>
          <h4 className="font-semibold text-white">Beauty Parlours</h4>
          <p className="text-zinc-400 text-sm mt-2">Bridal packages, threading, waxing, facials — premium positioning that justifies premium pricing.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">🧖‍♀️</div>
          <h4 className="font-semibold text-white">Spas &amp; Wellness</h4>
          <p className="text-zinc-400 text-sm mt-2">Therapy bookings, package memberships, gift cards, and serene digital experiences.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">✨</div>
          <h4 className="font-semibold text-white">Skin &amp; Hair Clinics</h4>
          <p className="text-zinc-400 text-sm mt-2">Consultations, treatments, before/afters, doctor profiles, and trust-building content.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">💅</div>
          <h4 className="font-semibold text-white">Nail Studios</h4>
          <p className="text-zinc-400 text-sm mt-2">Visual portfolios, design catalogs, and Instagram-first booking funnels.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">👰</div>
          <h4 className="font-semibold text-white">Bridal Studios</h4>
          <p className="text-zinc-400 text-sm mt-2">Lead capture forms, consultation bookings, package showcases — built for high-ticket conversions.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">🏬</div>
          <h4 className="font-semibold text-white">Multi-Branch Chains</h4>
          <p className="text-zinc-400 text-sm mt-2">Centralized booking, branch-wise analytics, unified branding, individual GMB management.</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-4xl mb-3">🏠</div>
          <h4 className="font-semibold text-white">At-Home Beauty Services</h4>
          <p className="text-zinc-400 text-sm mt-2">Location-based booking, pin-code targeting, route optimization, and trust-first design.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>The Outcomes</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          What Happens In <span className="gradient-text">90 Days</span> With Our Salon Growth System
        </h2>
        <p className="mt-5 text-lg text-zinc-400">We don't sell promises — we sell predictable, measurable business growth. Here's what our salon clients typically see.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text"><span className="counter" data-target="3.5" data-decimals="1" data-suffix="x">0x</span></div>
          <h4 className="font-semibold text-white mt-3">More Online Bookings</h4>
          <p className="text-zinc-400 text-sm mt-2">From 24/7 web + WhatsApp + Instagram funnels</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text"><span className="counter" data-target="-68" data-suffix="%">0%</span></div>
          <h4 className="font-semibold text-white mt-3">Fewer No-Shows</h4>
          <p className="text-zinc-400 text-sm mt-2">Thanks to auto-reminders and deposit booking</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text"><span className="counter" data-target="220" data-prefix="+" data-suffix="%">0%</span></div>
          <h4 className="font-semibold text-white mt-3">Repeat Customers</h4>
          <p className="text-zinc-400 text-sm mt-2">Driven by loyalty programs &amp; win-back automation</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text">#1</div>
          <h4 className="font-semibold text-white mt-3">Google Local Ranking</h4>
          <p className="text-zinc-400 text-sm mt-2">For "salon near me" + 50 local keywords</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text"><span className="counter" data-target="5" data-suffix="x">0x</span></div>
          <h4 className="font-semibold text-white mt-3">Google Reviews</h4>
          <p className="text-zinc-400 text-sm mt-2">Through automated review request engine</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text"><span className="counter" data-target="15" data-prefix="" data-suffix="+ hrs">0 hrs</span></div>
          <h4 className="font-semibold text-white mt-3">Time Saved Weekly</h4>
          <p className="text-zinc-400 text-sm mt-2">No more manual calls, follow-ups, or sheets</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text"><span className="counter" data-target="40" data-prefix="+" data-suffix="%">0%</span></div>
          <h4 className="font-semibold text-white mt-3">Average Ticket Size</h4>
          <p className="text-zinc-400 text-sm mt-2">From smart upsells &amp; package recommendations</p>
        </div>
        <div className="glass lift glow-border p-7 text-center reveal">
          <div className="text-5xl font-extrabold gradient-text">∞</div>
          <h4 className="font-semibold text-white mt-3">Peace Of Mind</h4>
          <p className="text-zinc-400 text-sm mt-2">Your salon books, markets &amp; follows up — automatically</p>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Revenue Calculator</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          See <span className="gradient-text">How Much Money</span> You're Leaving On The Table
        </h2>
        <p className="mt-5 text-lg text-zinc-400">Move the sliders. See the lost revenue you're losing each month — and what our salon growth system can recover.</p>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
        
        <div className="glass-strong p-8 reveal">
          <h3 className="text-xl font-semibold text-white mb-6">Your Salon Details</h3>

          <div className="space-y-7">
            <div>
              <div className="flex justify-between mb-2"><label className="text-zinc-300 text-sm">Avg bookings per day</label><span id="bpd-val" className="text-white font-semibold">15</span></div>
              <input id="bpd" type="range" min="2" max="80" value="15" className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2"><label className="text-zinc-300 text-sm">Avg ticket size (₹)</label><span id="ats-val" className="text-white font-semibold">₹800</span></div>
              <input id="ats" type="range" min="200" max="5000" step="50" value="800" className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2"><label className="text-zinc-300 text-sm">Current no-show rate</label><span id="ns-val" className="text-white font-semibold">30%</span></div>
              <input id="ns" type="range" min="0" max="60" value="30" className="w-full" />
            </div>
            <div>
              <div className="flex justify-between mb-2"><label className="text-zinc-300 text-sm">Missed calls / week</label><span id="mc-val" className="text-white font-semibold">25</span></div>
              <input id="mc" type="range" min="0" max="200" value="25" className="w-full" />
            </div>
          </div>
        </div>

        
        <div className="grad-border p-1 reveal">
          <div className="rounded-[22px] p-8 bg-gradient-to-br from-[#0f0f17] to-[#08080d] h-full flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500">Estimated Monthly Loss</div>
              <div className="text-5xl md:text-6xl font-extrabold gradient-text mt-2" id="lossOut">₹0</div>
              <p className="text-zinc-400 text-sm mt-3">From no-shows, missed calls, and lack of follow-up — money already in your pipeline that's silently leaking away.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="rounded-xl p-4 bg-white/[.03] border border-white/5">
                <div className="text-[11px] uppercase tracking-widest text-zinc-500">After 21TechGlory</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1" id="recoverOut">₹0</div>
                <div className="text-[12px] text-zinc-400">Estimated recovered / month</div>
              </div>
              <div className="rounded-xl p-4 bg-white/[.03] border border-white/5">
                <div className="text-[11px] uppercase tracking-widest text-zinc-500">Annual Upside</div>
                <div className="text-2xl font-bold text-white mt-1" id="annualOut">₹0</div>
                <div className="text-[12px] text-zinc-400">Pure new revenue / year</div>
              </div>
            </div>

            <a href="#" className="btn btn-primary mt-6 magnetic" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Recover This Revenue →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Our Process</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          How We <span className="gradient-text">Transform Your Salon</span> In 30 Days
        </h2>
        <p className="mt-5 text-lg text-zinc-400">A proven, repeatable system. No guesswork. No delays. Just predictable rollout from sign-up to scale.</p>
      </div>

      <div className="relative" id="processWrap">
        <div className="timeline-line hidden md:block"></div>
        <div className="timeline-fill hidden md:block" id="timelineFill"></div>

        <div className="space-y-10">
          
          <div className="grid md:grid-cols-2 gap-8 items-center process-step">
            <div className="md:text-right md:pr-12 reveal">
              <div className="text-xs uppercase tracking-widest text-gold">Step 01</div>
              <h3 className="text-2xl font-semibold text-white mt-2">Discovery &amp; Strategy Call</h3>
              <p className="text-zinc-400 mt-2">We audit your current digital presence, competitors, Google rankings, and customer journey. We map out exactly what's leaking revenue — and how to plug it.</p>
            </div>
            <div></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center process-step">
            <div></div>
            <div className="md:pl-12 reveal">
              <div className="text-xs uppercase tracking-widest text-gold">Step 02</div>
              <h3 className="text-2xl font-semibold text-white mt-2">Brand &amp; Website Design</h3>
              <p className="text-zinc-400 mt-2">Our designers create a premium, conversion-focused salon website that mirrors the luxury of your services and is built to convert mobile visitors in under 60 seconds.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center process-step">
            <div className="md:text-right md:pr-12 reveal">
              <div className="text-xs uppercase tracking-widest text-gold">Step 03</div>
              <h3 className="text-2xl font-semibold text-white mt-2">Booking &amp; Automation Setup</h3>
              <p className="text-zinc-400 mt-2">We install your online booking system, WhatsApp automations, Instagram integrations, and the Google Reviews engine. Everything is connected, tested, and live.</p>
            </div>
            <div></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center process-step">
            <div></div>
            <div className="md:pl-12 reveal">
              <div className="text-xs uppercase tracking-widest text-gold">Step 04</div>
              <h3 className="text-2xl font-semibold text-white mt-2">SEO &amp; Local Domination</h3>
              <p className="text-zinc-400 mt-2">We optimize your Google Business Profile, build local citations, write geo-targeted content, and set up tracking so you start climbing local rankings from week one.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center process-step">
            <div className="md:text-right md:pr-12 reveal">
              <div className="text-xs uppercase tracking-widest text-gold">Step 05</div>
              <h3 className="text-2xl font-semibold text-white mt-2">Launch &amp; Train Your Team</h3>
              <p className="text-zinc-400 mt-2">Your system goes live. We train your reception and stylist team on the dashboard, CRM, and how to handle the new flow of online bookings — all in under 60 minutes.</p>
            </div>
            <div></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center process-step">
            <div></div>
            <div className="md:pl-12 reveal">
              <div className="text-xs uppercase tracking-widest text-gold">Step 06</div>
              <h3 className="text-2xl font-semibold text-white mt-2">Optimize &amp; Scale</h3>
              <p className="text-zinc-400 mt-2">Each month, we analyze data, refine campaigns, test new offers, and continuously increase your bookings, ratings, and retention. You scale. We optimize.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Why 21TechGlory</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          Generic Web Agencies vs. <span className="gradient-text">A True Salon Growth Partner</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">We don't just hand you a website and disappear. We become the silent growth engine behind your salon.</p>
      </div>

      <div className="glass-strong overflow-hidden reveal">
        <div className="vs-row vs-head">
          <div>What You're Buying</div>
          <div className="text-zinc-400">Typical Agency</div>
          <div className="gradient-text">21TechGlory</div>
        </div>
        <div className="vs-row"><div className="text-zinc-300">Website</div><div className="text-rose-300/80">Generic WordPress template</div><div className="text-emerald-400 font-medium">Custom Next.js, &lt;1s load</div></div>
        <div className="vs-row"><div className="text-zinc-300">Booking System</div><div className="text-rose-300/80">Phone calls only</div><div className="text-emerald-400 font-medium">Web + WhatsApp + Instagram</div></div>
        <div className="vs-row"><div className="text-zinc-300">No-Show Prevention</div><div className="text-rose-300/80">None</div><div className="text-emerald-400 font-medium">Auto-reminders + deposits</div></div>
        <div className="vs-row"><div className="text-zinc-300">Google Reviews</div><div className="text-rose-300/80">"Ask clients manually"</div><div className="text-emerald-400 font-medium">Fully automated engine</div></div>
        <div className="vs-row"><div className="text-zinc-300">SEO</div><div className="text-rose-300/80">Basic keywords once</div><div className="text-emerald-400 font-medium">Continuous local domination</div></div>
        <div className="vs-row"><div className="text-zinc-300">Repeat Customer System</div><div className="text-rose-300/80">Nothing</div><div className="text-emerald-400 font-medium">Loyalty + win-back automation</div></div>
        <div className="vs-row"><div className="text-zinc-300">Support After Launch</div><div className="text-rose-300/80">"Pay extra for changes"</div><div className="text-emerald-400 font-medium">Dedicated growth manager</div></div>
        <div className="vs-row"><div className="text-zinc-300">Outcome</div><div className="text-rose-300/80">A pretty website</div><div className="text-emerald-400 font-medium">A predictable revenue machine</div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Technology Stack</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          Built On The <span className="gradient-text">Same Stack</span> As Modern SaaS Giants
        </h2>
        <p className="mt-5 text-lg text-zinc-400">We don't build on yesterday's tools. Your salon site runs on the same architecture as Linear, Notion and modern Indian unicorns.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
        <div className="tech-card"><div className="text-3xl mb-1">▲</div><div className="text-sm font-semibold text-white">Next.js</div><div className="text-xs text-zinc-500">Framework</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">🎨</div><div className="text-sm font-semibold text-white">Tailwind</div><div className="text-xs text-zinc-500">UI</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">⚡</div><div className="text-sm font-semibold text-white">Vercel</div><div className="text-xs text-zinc-500">Hosting</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">🧠</div><div className="text-sm font-semibold text-white">OpenAI</div><div className="text-xs text-zinc-500">AI Chatbot</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">💬</div><div className="text-sm font-semibold text-white">WhatsApp API</div><div className="text-xs text-zinc-500">Messaging</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">🔍</div><div className="text-sm font-semibold text-white">Google APIs</div><div className="text-xs text-zinc-500">Reviews/Maps</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">💳</div><div className="text-sm font-semibold text-white">Razorpay</div><div className="text-xs text-zinc-500">Payments</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">📅</div><div className="text-sm font-semibold text-white">Cal.com</div><div className="text-xs text-zinc-500">Booking</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">📊</div><div className="text-sm font-semibold text-white">PostHog</div><div className="text-xs text-zinc-500">Analytics</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">🗄️</div><div className="text-sm font-semibold text-white">Supabase</div><div className="text-xs text-zinc-500">Database</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">📧</div><div className="text-sm font-semibold text-white">Resend</div><div className="text-xs text-zinc-500">Email</div></div>
        <div className="tech-card"><div className="text-3xl mb-1">⚙️</div><div className="text-sm font-semibold text-white">n8n</div><div className="text-xs text-zinc-500">Automation</div></div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Google Maps Domination</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          How We Get You To <span className="gradient-text">#1 On Google Maps</span>
        </h2>
        <p className="mt-5 text-lg text-zinc-400">A 5-pillar local SEO process that consistently dominates the "near me" search results in your city.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        <div className="glass lift glow-border p-6 reveal">
          <div className="text-3xl mb-3">📍</div>
          <h4 className="font-semibold text-white mb-1">GBP Optimization</h4>
          <p className="text-zinc-400 text-sm">Complete Google Business Profile setup with photos, services, categories, posts and Q&amp;A.</p>
        </div>
        <div className="glass lift glow-border p-6 reveal">
          <div className="text-3xl mb-3">🔗</div>
          <h4 className="font-semibold text-white mb-1">Citations</h4>
          <p className="text-zinc-400 text-sm">Consistent NAP listings across Justdial, Sulekha, UrbanCompany, Yelp &amp; 60+ directories.</p>
        </div>
        <div className="glass lift glow-border p-6 reveal">
          <div className="text-3xl mb-3">⭐</div>
          <h4 className="font-semibold text-white mb-1">Reviews Velocity</h4>
          <p className="text-zinc-400 text-sm">Automated review collection + smart replies to keep Google's algorithm rewarding you.</p>
        </div>
        <div className="glass lift glow-border p-6 reveal">
          <div className="text-3xl mb-3">📝</div>
          <h4 className="font-semibold text-white mb-1">Local Content</h4>
          <p className="text-zinc-400 text-sm">Geo-targeted service pages: "Bridal Makeup in HSR Layout", "Spa near Indiranagar" and more.</p>
        </div>
        <div className="glass lift glow-border p-6 reveal">
          <div className="text-3xl mb-3">📈</div>
          <h4 className="font-semibold text-white mb-1">Tracking &amp; Iteration</h4>
          <p className="text-zinc-400 text-sm">Rank tracking + monthly competitor analysis + iteration until you own the local 3-pack.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>Real Salons. Real Results.</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          What Salon Owners Say About <span className="gradient-text">Working With Us</span>
        </h2>
      </div>
    </div>

    
    <div className="overflow-hidden">
      <div className="marquee">
        <div className="flex gap-6 px-3">
          
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"Before 21TechGlory, I was manually replying to 80 WhatsApp messages a day. Now my bookings happen automatically while I focus on my clients. My weekday occupancy went from 40% to 85% in just 3 months."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">P</div>
              <div><div className="text-white font-semibold">Priya Sharma</div><div className="text-zinc-500 text-sm">Owner, Glow Unisex Salon — Bangalore</div></div>
            </div>
          </div>
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"We were invisible on Google. After their SEO work, we're now #1 for 'best beauty parlour in HSR Layout'. We get 30+ walk-ins per week from Google alone. The ROI is insane."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">M</div>
              <div><div className="text-white font-semibold">Meera Reddy</div><div className="text-zinc-500 text-sm">Founder, Bliss Beauty Studio — Bangalore</div></div>
            </div>
          </div>
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"Their WhatsApp automation alone saved my reception 15 hours a week. And the deposit booking system cut my no-shows from 35% to under 10%. This is the best investment we've made in 8 years."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">R</div>
              <div><div className="text-white font-semibold">Rahul Menon</div><div className="text-zinc-500 text-sm">Director, Serene Spa &amp; Wellness — Kochi</div></div>
            </div>
          </div>
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"As a skin clinic, trust is everything. Their website + Google Reviews automation built our online reputation from 12 reviews to 380+ in 6 months. Consultations doubled. Game changer."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">N</div>
              <div><div className="text-white font-semibold">Dr. Nisha Iyer</div><div className="text-zinc-500 text-sm">Founder, Clear Skin Clinic — Chennai</div></div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6 px-3" aria-hidden="true">
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"Before 21TechGlory, I was manually replying to 80 WhatsApp messages a day. Now my bookings happen automatically while I focus on my clients. My weekday occupancy went from 40% to 85% in just 3 months."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">P</div>
              <div><div className="text-white font-semibold">Priya Sharma</div><div className="text-zinc-500 text-sm">Owner, Glow Unisex Salon — Bangalore</div></div>
            </div>
          </div>
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"We were invisible on Google. After their SEO work, we're now #1 for 'best beauty parlour in HSR Layout'. We get 30+ walk-ins per week from Google alone. The ROI is insane."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">M</div>
              <div><div className="text-white font-semibold">Meera Reddy</div><div className="text-zinc-500 text-sm">Founder, Bliss Beauty Studio — Bangalore</div></div>
            </div>
          </div>
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"Their WhatsApp automation alone saved my reception 15 hours a week. And the deposit booking system cut my no-shows from 35% to under 10%. This is the best investment we've made in 8 years."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">R</div>
              <div><div className="text-white font-semibold">Rahul Menon</div><div className="text-zinc-500 text-sm">Director, Serene Spa &amp; Wellness — Kochi</div></div>
            </div>
          </div>
          <div className="glass-strong p-7 w-[420px] flex-shrink-0">
            <div className="text-gold mb-3">★★★★★</div>
            <p className="italic text-zinc-200 leading-relaxed">"As a skin clinic, trust is everything. Their website + Google Reviews automation built our online reputation from 12 reviews to 380+ in 6 months. Consultations doubled. Game changer."</p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-rose flex items-center justify-center font-bold text-ink">N</div>
              <div><div className="text-white font-semibold">Dr. Nisha Iyer</div><div className="text-zinc-500 text-sm">Founder, Clear Skin Clinic — Chennai</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <section>
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>The Complete Guide</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          Why Every Modern Salon Needs A <span className="gradient-text">Digital Growth System</span>
        </h2>
      </div>

      <article className="space-y-10 text-[17px] leading-[1.8] text-zinc-300">
        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">The salon industry has changed forever.</h3>
          <p>Five years ago, owning a salon meant great service, a good location, and word-of-mouth. Today, your competitors aren't just the salon down the street — they're the salon with a slick Instagram, instant WhatsApp booking, 500 five-star Google reviews, and a website that loads in under a second. Customers today don't "call to book" — they Google, scroll Instagram, read reviews, and click a button. If you're not where they're searching, you're invisible. And in 2026, invisible salons close.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Why a salon website is your #1 sales asset.</h3>
          <p>Your salon website is no longer a digital brochure — it's your 24/7 sales representative. A well-built beauty salon website does five things at once: it builds trust through professional design, showcases your services with pricing transparency, accepts bookings without human intervention, captures leads from visitors who aren't yet ready to book, and signals authority to Google so you rank higher in local searches. The salons we build websites for see their booking-conversion rates jump from under 2% to over 11% — meaning every 100 visitors now book 11 appointments instead of 2. That's the difference between scraping by and scaling.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Online salon booking system: why phones are killing your business.</h3>
          <p>Every missed call is a lost customer who simply books your competitor instead. Research shows 62% of customers won't leave a voicemail or call back if a salon doesn't pick up on the first try. Modern customers expect Amazon-level convenience — pick a service, pick a time, click "Confirm." Our online salon booking system does exactly that. It works on your website, inside WhatsApp, and from Instagram. It checks real-time stylist availability, blocks out time accurately by service, accepts deposits to prevent no-shows, and syncs with Google Calendar so your team always knows what's coming. The result? Your salon is open for business 24/7 — including 11pm on a Sunday when a bride-to-be is panic-searching for a trial appointment.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">WhatsApp: the booking channel Indian salons ignore at their peril.</h3>
          <p>India has 535 million WhatsApp users. They open the app 23 times a day on average. Yet most salons still rely on phone calls and walk-ins. We turn WhatsApp into your highest-converting booking channel through the WhatsApp Business API. When a client messages "Hi" — they instantly see a menu: "Book Appointment / Check Offers / Talk To Staff." They tap, choose service, pick time, and get a confirmation — all without your team typing a word. Then 24 hours before the appointment, an automated reminder goes out. 1 hour before, another. After the service, a thank-you message + Google review request fires automatically. Three weeks later, a "We miss you" win-back message rekindles the relationship. This is what reduces no-shows by 68% and triples repeat customers.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Instagram is not a marketing channel. It's a booking funnel.</h3>
          <p>Most salons post reels, get likes, and stop. That's not marketing — that's hoping. We turn Instagram into a structured funnel. Every reel ends with a clear CTA. Every story has a "Book Now" sticker. Every DM and comment is auto-routed to WhatsApp where the booking automation closes the deal. We help you plan content monthly — transformation reels, before-and-afters, behind-the-scenes, client testimonials, and trending sounds — all optimized for the discovery algorithm. Beautiful posts don't grow salons. Beautiful posts plus structured funnels grow salons.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Google Reviews are the new word-of-mouth — and we automate it.</h3>
          <p>87% of customers read Google Reviews before choosing a salon. Salons with 50+ reviews and a 4.7+ rating get 5x more clicks than salons with under 20 reviews. So the obvious play is: get more reviews. But asking each client manually is awkward and your team forgets. Our Google Reviews automation fires within 2 hours of a completed service — exactly when satisfaction is peak. Happy clients are sent directly to your Google review page. Unhappy clients are routed privately to the owner for resolution — never bad-mouthing you in public. The result: you build a 5-star reputation publicly while privately fixing problems before they damage you.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Loyalty programs: the secret weapon of every 7-figure salon.</h3>
          <p>It costs 5x more to acquire a new customer than to retain an existing one. Yet most salons treat every client like a first-time visitor. We install a loyalty engine that automatically rewards visit frequency, unlocks tier benefits (Silver, Gold, Platinum members), gifts birthday and anniversary perks, and runs referral programs where existing clients earn rewards for bringing friends. Suddenly, your top 20% of customers are generating 60% of your revenue — and bringing in new clients at zero acquisition cost. This is how chains scale and individual salons explode.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Beauty salon SEO: the long game that compounds for years.</h3>
          <p>Paid ads stop the day you stop paying. SEO is the only marketing investment that compounds. When we get you to #1 on Google Maps for "salon near me," "best beauty parlour in [your area]," "bridal makeup [city]," and 50+ other keywords — you get free, ready-to-book traffic forever. Our salon SEO process covers Google Business Profile optimization (the single highest-ROI activity for local salons), local citation building, on-page SEO for every service you offer, geo-targeted landing pages for every area you serve, a monthly content engine targeting low-competition high-intent searches, and proactive review generation (which itself is a ranking factor). Six months in, you stop needing ads. Twelve months in, your salon is the default choice in your city.</p>
        </div>

        <div className="reveal">
          <h3 className="text-2xl font-semibold text-white mb-3">Why 21TechGlory is the salon partner you've been waiting for.</h3>
          <p>Most agencies sell you a website and disappear. We're not most agencies. We're an integrated growth team — designers, developers, SEO specialists, automation engineers, and salon marketing strategists — all working together to install one thing: a predictable, automated customer-acquisition system for your beauty business. We've built systems for over 50 salons, spas, parlours and skin clinics across Bangalore, Chennai, Hyderabad, Kochi, and beyond. We don't just understand websites. We understand the salon business — slot management, walk-in vs. appointment dynamics, stylist commission structures, peak-time pricing, package upselling, and the silent revenue killers that drain your margins every month. When you work with us, you're not hiring a vendor. You're installing a growth partner.</p>
        </div>
      </article>
    </div>
  </section>

  
  <section>
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-14 reveal">
        <span className="eyebrow"><span className="dot"></span>FAQs</span>
        <h2 className="h-display text-[clamp(32px,4vw,52px)] mt-5">
          Salon Owners' Most <span className="gradient-text">Common Questions</span>
        </h2>
      </div>

      <div className="space-y-3">
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">How long does it take to launch my salon website + booking system?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">Most projects go live in 15–30 days from kickoff. The website typically takes 2–3 weeks, with booking, WhatsApp, and SEO setups happening in parallel. We move fast, but never at the cost of quality.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">Do I need to be tech-savvy to run this?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">Not at all. Our dashboards are designed for salon owners — not engineers. We train your front desk in under 60 minutes. If you can use WhatsApp and Google, you can run our entire system.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">How is your booking system different from Fresha or Zenoti?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">Off-the-shelf platforms work, but they're rigid, expensive on scale, and your booking page lives on their domain. We build your booking system on your own website, fully branded, with WhatsApp + Instagram + SEO baked in — and no per-booking commissions ever.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">What if my salon is in a Tier-2 or Tier-3 city?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">Even better. Competition is lower, which means ranking #1 on Google is faster and cheaper. We've built systems for salons everywhere from Bangalore to small-town Tamil Nadu and Kerala.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">Can you handle multi-branch salons?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">Absolutely. Our system supports unlimited branches, individual GMB management, branch-wise analytics, centralized inventory, and unified branding. We've helped chains scale from 2 outlets to 12+.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">Do you guarantee results?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">We guarantee a system that's professionally built and fully functional. Real results depend on execution — but our 50+ salon clients consistently see 3x+ booking growth in 90 days. We share case studies on our discovery call.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">What does pricing look like?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">Salon packages start at ₹25,000 for a starter website + booking setup, going up to ₹2L+ for full multi-branch growth systems with ongoing SEO and marketing. We tailor every quote to your goals. Book a free audit to get pricing for your specific needs.</div>
        </details>
        <details className="faq-item reveal">
          <summary><span className="font-semibold text-white">What happens after launch?</span><span className="chev text-gold">⌄</span></summary>
          <div className="faq-body">You get a dedicated growth manager, monthly performance reports, and ongoing optimization on SEO, ads, automations, and content. We're not a "build and bounce" agency — we stick around to scale you.</div>
        </details>
      </div>
    </div>
  </section>

  
  <section id="contact" className="pb-32">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grad-border p-1 reveal">
        <div className="rounded-[22px] px-6 md:px-16 py-16 md:py-20 bg-gradient-to-br from-[#101019] via-[#0c0c14] to-[#08080d] text-center relative overflow-hidden">
          
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-rose/15 blur-3xl"></div>

          <span className="eyebrow"><span className="dot"></span>Limited Slots This Month</span>
          <h2 className="h-display text-[clamp(32px,4.5vw,56px)] mt-5">
            Your Competitor's Salon Is Already <span className="gradient-text">Booking Online.</span>
            <br />Will Yours Be Next?
          </h2>
          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
            Book a free 30-minute Salon Growth Audit. We'll review your current website, Google presence, and customer flow — and show you exactly where you're losing bookings, and how to fix it. No obligation. No pitch deck. Just real insights.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href="#" className="btn btn-primary pulse-glow magnetic" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Claim My Free Salon Audit →</a>
            <a href="https://wa.me/917795354043" target="_blank" rel="noopener" className="btn btn-ghost magnetic">💬 Chat On WhatsApp</a>
          </div>
          <p className="mt-7 text-sm text-zinc-500">⭐ Trusted by 50+ salons, spas &amp; beauty parlours across South India · ⚡ 100% money-back if your system isn't live in 30 days</p>
        </div>
      </div>
    </div>
  </section>

</div>


<a href="#" className="sticky-cta btn btn-primary pulse-glow" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>📅 Free Salon Audit</a>
<a href="https://wa.me/917795354043?text=Hi%2C%20I%27d%20like%20a%20free%20Salon%20Growth%20Audit" target="_blank" rel="noopener" className="wa-float" aria-label="Chat with us on WhatsApp">
  <svg viewBox="0 0 32 32" width="30" height="30" fill="#fff" aria-hidden="true">
    <path d="M19.11 17.18c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.14-.18.27-.7.87-.86 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.82-1.27.22-.62.22-1.16.16-1.27-.06-.11-.24-.18-.51-.31zM16 3C9.37 3 4 8.37 4 15c0 2.12.55 4.11 1.5 5.85L4 28l7.31-1.5A12.9 12.9 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3z"></path>
  </svg>
</a>













      
      <Footer />
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      
    </div>
  );
}
