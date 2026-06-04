"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';

export default function HospitalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },{threshold:.12,rootMargin:'0px 0px -60px 0px'});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    
    // FAQ toggle
    document.querySelectorAll('.faq-q').forEach(q=>{
      q.addEventListener('click',()=>{
        const item=q.parentElement;
        item?.classList.toggle('open');
      });
    });
    
    // Counter animation
    const counterObserver=new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          const el = e.target as HTMLElement;
          const target = parseFloat(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          const isFloat = String(target).includes('.');
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now-start)/dur, 1);
            const eased = 1-Math.pow(1-p,3);
            const val = isFloat ? (target*eased).toFixed(1) : Math.floor(target*eased);
            el.textContent = val + suffix;
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        }
      });
    },{threshold:.4});
    document.querySelectorAll('[data-target]').forEach(el=>counterObserver.observe(el));
    
    // Parallax aurora subtle on mouse
    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX/window.innerWidth-.5)*20;
      const y = (e.clientY/window.innerHeight-.5)*20;
      const aurora = document.querySelector('.aurora') as HTMLElement;
      if (aurora) {
          aurora.style.transform = `translate(${x}px,${y}px)`;
      }
    };
    document.addEventListener('mousemove', onMouseMove);

    return () => {
        document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="hospitals-page-container">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <style dangerouslySetInnerHTML={{ __html: `
/* ============ RESET & BASE ============ */
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{
  font-family:'Inter',sans-serif;
  background:#050507;
  color:#e7e7ea;
  overflow-x:hidden;
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block}
a{color:inherit;text-decoration:none}

/* ============ COLOR SYSTEM ============ */
:root{
  --bg:#050507;
  --bg-2:#0b0b12;
  --card:#0f0f17;
  --line:rgba(255,255,255,.08);
  --text:#e7e7ea;
  --muted:#9999a8;
  --accent:#7c5cff;       /* purple */
  --accent-2:#22d3ee;     /* cyan  */
  --accent-3:#10b981;     /* green for healthcare trust */
  --danger:#ff4d6d;
  --grad:linear-gradient(135deg,#7c5cff 0%,#22d3ee 100%);
  --grad-soft:linear-gradient(135deg,rgba(124,92,255,.18) 0%,rgba(34,211,238,.18) 100%);
}

/* ============ AMBIENT BACKGROUND ============ */
.aurora{
  position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;
}
.aurora::before,.aurora::after{
  content:"";position:absolute;border-radius:50%;filter:blur(120px);opacity:.35;
  animation:floatBlob 18s ease-in-out infinite;
}
.aurora::before{
  width:600px;height:600px;background:#7c5cff;top:-200px;left:-200px;
}
.aurora::after{
  width:700px;height:700px;background:#22d3ee;bottom:-250px;right:-250px;
  animation-delay:-9s;
}
@keyframes floatBlob{
  0%,100%{transform:translate(0,0) scale(1)}
  50%{transform:translate(60px,40px) scale(1.1)}
}
.grid-overlay{
  position:fixed;inset:0;z-index:-1;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse at center,black 30%,transparent 80%);
}

/* ============ NAV ============ */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:100;
  padding:18px 5%;
  display:flex;align-items:center;justify-content:space-between;
  backdrop-filter:blur(20px);
  background:rgba(5,5,7,.7);
  border-bottom:1px solid var(--line);
  transition:all .3s ease;
}
.logo{
  font-family:'Space Grotesk',sans-serif;
  font-weight:700;font-size:22px;letter-spacing:-.5px;
  display:flex;align-items:center;gap:8px;
}
.logo-dot{
  width:10px;height:10px;border-radius:50%;
  background:var(--grad);
  box-shadow:0 0 20px rgba(124,92,255,.6);
  animation:pulse 2s ease-in-out infinite;
}
@keyframes pulse{
  0%,100%{transform:scale(1);opacity:1}
  50%{transform:scale(1.3);opacity:.7}
}
.nav-links{display:flex;gap:32px;align-items:center}
.nav-links a{font-size:14px;color:var(--muted);transition:color .25s ease;font-weight:500}
.nav-links a:hover{color:var(--text)}
.nav-cta{
  padding:10px 22px;border-radius:100px;font-size:14px;font-weight:600;
  background:var(--grad);color:#fff;
  box-shadow:0 8px 24px -8px rgba(124,92,255,.6);
  transition:transform .25s ease, box-shadow .25s ease;
}
.nav-cta:hover{transform:translateY(-2px);box-shadow:0 12px 30px -8px rgba(124,92,255,.8)}
.menu-toggle{display:none;background:none;border:none;color:#fff;font-size:24px;cursor:pointer}
@media(max-width:900px){
  .nav-links{display:none}
  .menu-toggle{display:block}
}

/* ============ LAYOUT ============ */
section{padding:120px 5%;position:relative}
.container{max-width:1240px;margin:0 auto}
.eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  padding:6px 16px;border-radius:100px;
  border:1px solid var(--line);
  background:rgba(255,255,255,.03);
  font-size:13px;font-weight:500;color:var(--muted);
  margin-bottom:24px;
  text-transform:uppercase;letter-spacing:.5px;
}
.eyebrow::before{
  content:"";width:6px;height:6px;border-radius:50%;background:var(--accent-3);
  box-shadow:0 0 12px var(--accent-3);
  animation:pulse 2s infinite;
}
h1,h2,h3,h4{font-family:'Space Grotesk',sans-serif;font-weight:700;line-height:1.15;letter-spacing:-1px;color:#fff}
h1{font-size:clamp(40px,6vw,76px);font-weight:800;letter-spacing:-2px}
h2{font-size:clamp(32px,4.5vw,56px);margin-bottom:20px}
h3{font-size:clamp(22px,2.5vw,30px);margin-bottom:14px}
h4{font-size:20px;margin-bottom:10px}
.section-intro{font-size:18px;color:var(--muted);max-width:720px;margin:0 auto 70px;text-align:center}
.gradient-text{
  background:var(--grad);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;
}

/* ============ HERO ============ */
.hero{
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  text-align:center;padding-top:140px;padding-bottom:80px;
  position:relative;
}
.hero h1{margin-bottom:28px}
.hero h1 .line{display:block;opacity:0;transform:translateY(40px);animation:rise .9s cubic-bezier(.16,1,.3,1) forwards}
.hero h1 .line:nth-child(2){animation-delay:.15s}
.hero h1 .line:nth-child(3){animation-delay:.3s}
@keyframes rise{to{opacity:1;transform:translateY(0)}}
.hero-sub{
  font-size:20px;color:var(--muted);max-width:780px;margin:0 auto 40px;
  opacity:0;animation:rise .9s .55s cubic-bezier(.16,1,.3,1) forwards;
}
.hero-cta-row{
  display:flex;gap:16px;justify-content:center;flex-wrap:wrap;
  opacity:0;animation:rise .9s .75s cubic-bezier(.16,1,.3,1) forwards;
}
.btn{
  padding:16px 32px;border-radius:100px;font-size:15px;font-weight:600;
  display:inline-flex;align-items:center;gap:10px;cursor:pointer;
  transition:all .3s cubic-bezier(.16,1,.3,1);border:none;
}
.btn-primary{
  background:var(--grad);color:#fff;
  box-shadow:0 16px 40px -12px rgba(124,92,255,.6);
}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 22px 50px -12px rgba(124,92,255,.85)}
.btn-secondary{
  background:rgba(255,255,255,.05);color:#fff;
  border:1px solid var(--line);
  backdrop-filter:blur(10px);
}
.btn-secondary:hover{background:rgba(255,255,255,.1);transform:translateY(-3px)}

.hero-stats{
  display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:80px;
  max-width:900px;margin-left:auto;margin-right:auto;
  opacity:0;animation:rise .9s 1s cubic-bezier(.16,1,.3,1) forwards;
}
@media(max-width:700px){.hero-stats{grid-template-columns:repeat(2,1fr)}}
.hero-stat{
  padding:24px;border-radius:18px;
  background:rgba(255,255,255,.025);
  border:1px solid var(--line);
  backdrop-filter:blur(20px);
  transition:transform .3s ease, border-color .3s ease;
}
.hero-stat:hover{transform:translateY(-6px);border-color:rgba(124,92,255,.5)}
.hero-stat .num{font-family:'Space Grotesk',sans-serif;font-size:34px;font-weight:700;color:#fff;letter-spacing:-1px}
.hero-stat .num .gradient-text{display:inline}
.hero-stat .lbl{font-size:13px;color:var(--muted);margin-top:4px}

/* Floating medical icons in hero */
.floating-icons{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.float-icon{
  position:absolute;font-size:28px;opacity:.15;
  animation:floatY 12s ease-in-out infinite;
}
.float-icon:nth-child(1){top:18%;left:8%;animation-delay:0s}
.float-icon:nth-child(2){top:30%;right:10%;animation-delay:-3s}
.float-icon:nth-child(3){bottom:25%;left:12%;animation-delay:-6s}
.float-icon:nth-child(4){bottom:30%;right:8%;animation-delay:-9s}
.float-icon:nth-child(5){top:50%;left:5%;animation-delay:-4s}
.float-icon:nth-child(6){top:45%;right:5%;animation-delay:-7s}
@keyframes floatY{
  0%,100%{transform:translateY(0) rotate(0deg)}
  50%{transform:translateY(-30px) rotate(8deg)}
}

/* ============ PROBLEM SECTION ============ */
.problem-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px}
@media(max-width:900px){.problem-grid{grid-template-columns:1fr}}
.problem-card{
  padding:36px 30px;border-radius:22px;
  background:linear-gradient(180deg,rgba(255,77,109,.08) 0%,rgba(255,255,255,.02) 100%);
  border:1px solid rgba(255,77,109,.15);
  position:relative;overflow:hidden;
  transition:transform .4s cubic-bezier(.16,1,.3,1);
}
.problem-card:hover{transform:translateY(-8px)}
.problem-card::before{
  content:"";position:absolute;top:0;left:0;right:0;height:2px;
  background:linear-gradient(90deg,transparent,#ff4d6d,transparent);
  opacity:0;transition:opacity .4s ease;
}
.problem-card:hover::before{opacity:1}
.problem-icon{
  width:54px;height:54px;border-radius:14px;
  display:flex;align-items:center;justify-content:center;font-size:26px;
  background:rgba(255,77,109,.12);margin-bottom:20px;
}
.problem-card h3{color:#fff;font-size:22px}
.problem-card p{color:var(--muted);font-size:15px}

/* ============ FEATURES (SERVICES) ============ */
.features-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
@media(max-width:1000px){.features-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.features-grid{grid-template-columns:1fr}}
.feature-card{
  padding:32px 28px;border-radius:22px;
  background:var(--card);
  border:1px solid var(--line);
  position:relative;overflow:hidden;
  transition:all .4s cubic-bezier(.16,1,.3,1);
}
.feature-card::after{
  content:"";position:absolute;inset:0;border-radius:22px;padding:1px;
  background:var(--grad);
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);
  -webkit-mask-composite:xor;mask-composite:exclude;
  opacity:0;transition:opacity .4s ease;
  pointer-events:none;
}
.feature-card:hover{transform:translateY(-10px);background:#13131c}
.feature-card:hover::after{opacity:1}
.feature-icon{
  width:60px;height:60px;border-radius:16px;
  background:var(--grad-soft);
  display:flex;align-items:center;justify-content:center;
  font-size:28px;margin-bottom:24px;
  transition:transform .4s ease;
}
.feature-card:hover .feature-icon{transform:rotate(-8deg) scale(1.1)}
.feature-card h3{font-size:21px;color:#fff}
.feature-card p{color:var(--muted);font-size:15px;line-height:1.7}
.feature-tag{
  display:inline-block;padding:4px 12px;border-radius:100px;
  background:rgba(124,92,255,.12);color:#a78bfa;
  font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;
  margin-bottom:14px;
}

/* ============ MAPS SEO VISUAL ============ */
.maps-section{background:linear-gradient(180deg,transparent 0%,rgba(124,92,255,.04) 50%,transparent 100%)}
.maps-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
@media(max-width:900px){.maps-grid{grid-template-columns:1fr}}
.maps-visual{
  position:relative;border-radius:24px;overflow:hidden;
  border:1px solid var(--line);
  background:#0a0a14;
  padding:30px;min-height:420px;
}
.map-pin{
  position:absolute;width:32px;height:32px;border-radius:50%;
  background:var(--grad);
  display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;
  box-shadow:0 8px 20px rgba(124,92,255,.5);
  animation:pinFloat 3s ease-in-out infinite;
}
.map-pin::after{
  content:"";position:absolute;inset:-8px;border-radius:50%;
  border:2px solid var(--accent);opacity:.4;
  animation:ringPulse 2s ease-out infinite;
}
@keyframes ringPulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(2);opacity:0}}
@keyframes pinFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
.map-pin.p1{top:25%;left:20%;animation-delay:0s}
.map-pin.p2{top:55%;left:55%;animation-delay:-1s;background:linear-gradient(135deg,#10b981,#22d3ee)}
.map-pin.p3{top:35%;right:18%;animation-delay:-2s}
.map-pin.p4{bottom:25%;left:35%;animation-delay:-.5s}
.map-search-bar{
  position:absolute;top:20px;left:20px;right:20px;
  padding:14px 20px;border-radius:100px;background:rgba(255,255,255,.06);
  backdrop-filter:blur(20px);border:1px solid var(--line);
  font-size:14px;color:#fff;display:flex;align-items:center;gap:10px;
}
.map-blob{
  position:absolute;width:200px;height:200px;border-radius:50%;
  background:radial-gradient(circle,rgba(124,92,255,.2) 0%,transparent 70%);
  bottom:10%;right:10%;animation:floatBlob 8s ease-in-out infinite;
}
.maps-points{list-style:none;display:flex;flex-direction:column;gap:18px;margin-top:30px}
.maps-points li{
  display:flex;gap:14px;align-items:flex-start;font-size:15px;color:var(--muted);
}
.maps-points li .check{
  width:24px;height:24px;border-radius:50%;background:rgba(16,185,129,.15);
  color:#10b981;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0;
}
.maps-points li strong{color:#fff;font-weight:600}

/* ============ AI AUTOMATION ============ */
.ai-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
@media(max-width:900px){.ai-grid{grid-template-columns:1fr}}
.chat-mock{
  background:#0a0a14;border:1px solid var(--line);border-radius:24px;
  padding:24px;display:flex;flex-direction:column;gap:14px;
  box-shadow:0 30px 60px -20px rgba(0,0,0,.8);
}
.chat-header{
  display:flex;align-items:center;gap:12px;padding-bottom:16px;
  border-bottom:1px solid var(--line);
}
.chat-avatar{
  width:42px;height:42px;border-radius:50%;background:var(--grad);
  display:flex;align-items:center;justify-content:center;font-size:20px;
}
.chat-name{font-weight:600;color:#fff;font-size:15px}
.chat-status{font-size:12px;color:#10b981;display:flex;align-items:center;gap:6px}
.chat-status::before{content:"";width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 8px #10b981}
.chat-msg{
  padding:12px 16px;border-radius:18px;max-width:80%;font-size:14px;line-height:1.5;
  opacity:0;animation:msgIn .5s ease forwards;
}
@keyframes msgIn{to{opacity:1;transform:translateY(0)}}
.chat-msg.bot{
  background:rgba(255,255,255,.06);color:#e7e7ea;border-bottom-left-radius:6px;
  align-self:flex-start;transform:translateY(10px);
}
.chat-msg.user{
  background:var(--grad);color:#fff;border-bottom-right-radius:6px;
  align-self:flex-end;transform:translateY(10px);
}
.chat-msg.m1{animation-delay:.2s}
.chat-msg.m2{animation-delay:.7s}
.chat-msg.m3{animation-delay:1.2s}
.chat-msg.m4{animation-delay:1.7s}
.chat-msg.m5{animation-delay:2.2s}
.typing{display:flex;gap:4px;padding:14px 18px;background:rgba(255,255,255,.06);border-radius:18px;align-self:flex-start;width:fit-content}
.typing span{width:7px;height:7px;border-radius:50%;background:#fff;opacity:.5;animation:typing 1.4s infinite}
.typing span:nth-child(2){animation-delay:.2s}
.typing span:nth-child(3){animation-delay:.4s}
@keyframes typing{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-6px);opacity:1}}

/* ============ ROI SECTION ============ */
.roi-section{
  background:linear-gradient(180deg,rgba(16,185,129,.04) 0%,transparent 100%);
}
.roi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:60px}
@media(max-width:900px){.roi-grid{grid-template-columns:1fr}}
.roi-card{
  padding:40px 32px;border-radius:24px;
  background:var(--card);
  border:1px solid var(--line);
  position:relative;overflow:hidden;
  transition:transform .4s ease;
}
.roi-card:hover{transform:translateY(-8px)}
.roi-card .badge{
  display:inline-block;padding:5px 14px;border-radius:100px;
  background:rgba(16,185,129,.12);color:#10b981;
  font-size:12px;font-weight:600;letter-spacing:.5px;margin-bottom:18px;
}
.roi-card .scenario{font-size:14px;color:var(--muted);margin-bottom:12px;font-style:italic}
.roi-stat{display:flex;justify-content:space-between;padding:14px 0;border-bottom:1px dashed var(--line);font-size:14px}
.roi-stat:last-child{border-bottom:none}
.roi-stat .k{color:var(--muted)}
.roi-stat .v{color:#fff;font-weight:600}
.roi-card .result{
  margin-top:20px;padding:16px;border-radius:14px;
  background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);
  text-align:center;
}
.roi-card .result .label{font-size:12px;color:#10b981;text-transform:uppercase;letter-spacing:.5px;font-weight:600}
.roi-card .result .value{font-family:'Space Grotesk',sans-serif;font-size:32px;font-weight:700;color:#fff;margin-top:4px}

/* ============ TIMELINE / PROCESS ============ */
.process-wrapper{position:relative;margin-top:80px}
.process-wrapper::before{
  content:"";position:absolute;left:50%;top:0;bottom:0;width:2px;
  background:linear-gradient(180deg,transparent,var(--accent),var(--accent-2),transparent);
  transform:translateX(-50%);
}
@media(max-width:900px){.process-wrapper::before{left:24px}}
.process-step{
  display:grid;grid-template-columns:1fr 80px 1fr;gap:30px;align-items:center;
  margin-bottom:60px;
}
@media(max-width:900px){
  .process-step{grid-template-columns:60px 1fr;gap:20px}
  .process-step .step-content{grid-column:2}
  .process-step .step-spacer{display:none}
}
.process-step:nth-child(even) .step-content{grid-column:3;text-align:left}
.process-step:nth-child(even) .step-spacer{grid-column:1}
@media(max-width:900px){.process-step:nth-child(even) .step-content{grid-column:2;text-align:left}}
.step-number{
  width:60px;height:60px;border-radius:50%;
  background:var(--bg);border:2px solid var(--accent);
  display:flex;align-items:center;justify-content:center;
  font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:22px;color:#fff;
  margin:0 auto;position:relative;z-index:2;
  box-shadow:0 0 30px rgba(124,92,255,.4);
}
@media(max-width:900px){.step-number{margin:0}}
.step-content{
  padding:28px;border-radius:20px;
  background:var(--card);border:1px solid var(--line);
  text-align:right;
}
.process-step:nth-child(odd) .step-content{text-align:right}
@media(max-width:900px){.process-step:nth-child(odd) .step-content{text-align:left}}
.step-content h3{font-size:20px;margin-bottom:8px}
.step-content p{font-size:14px;color:var(--muted)}

/* ============ COMPARISON TABLE ============ */
.compare-table{
  margin-top:50px;border-radius:24px;overflow:hidden;
  border:1px solid var(--line);
  background:var(--card);
}
.compare-row{
  display:grid;grid-template-columns:2fr 1fr 1fr;
  padding:22px 30px;border-bottom:1px solid var(--line);
  align-items:center;
}
.compare-row:last-child{border-bottom:none}
.compare-row.header{
  background:rgba(255,255,255,.03);font-weight:600;
}
.compare-row .label{color:var(--muted);font-size:14px;font-weight:500}
.compare-row.header .label{color:#fff}
.compare-row .col{font-size:14px;text-align:center}
.compare-row .col.bad{color:#ff8a9b}
.compare-row .col.good{color:#10b981;font-weight:600}
.compare-row.header .col{color:#fff;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:.5px}
@media(max-width:700px){
  .compare-row{grid-template-columns:1.4fr 1fr 1fr;padding:16px;gap:8px;font-size:12px}
  .compare-row .label{font-size:12px}
  .compare-row .col{font-size:12px}
}

/* ============ FAQ ============ */
.faq-list{max-width:880px;margin:60px auto 0;display:flex;flex-direction:column;gap:14px}
.faq-item{
  border:1px solid var(--line);border-radius:16px;background:var(--card);
  overflow:hidden;transition:border-color .3s ease;
}
.faq-item:hover{border-color:rgba(124,92,255,.3)}
.faq-q{
  width:100%;padding:22px 28px;display:flex;justify-content:space-between;align-items:center;
  background:none;border:none;color:#fff;font-family:inherit;font-size:16px;font-weight:600;
  cursor:pointer;text-align:left;
}
.faq-q .arrow{transition:transform .3s ease;color:var(--accent)}
.faq-item.open .faq-q .arrow{transform:rotate(180deg)}
.faq-a{
  max-height:0;overflow:hidden;transition:max-height .4s ease, padding .4s ease;
  padding:0 28px;color:var(--muted);font-size:15px;line-height:1.7;
}
.faq-item.open .faq-a{max-height:400px;padding:0 28px 24px}

/* ============ FINAL CTA ============ */
.final-cta{
  text-align:center;padding:120px 5%;position:relative;overflow:hidden;
}
.final-cta::before{
  content:"";position:absolute;inset:5% 10%;border-radius:40px;
  background:var(--grad-soft);
  filter:blur(60px);z-index:-1;
}
.final-cta h2{font-size:clamp(36px,5vw,64px);margin-bottom:24px}
.final-cta p{font-size:18px;color:var(--muted);max-width:680px;margin:0 auto 40px}

/* ============ FOOTER ============ */
footer{
  padding:60px 5% 40px;border-top:1px solid var(--line);
  background:#040406;text-align:center;
}
footer p{color:var(--muted);font-size:14px}
footer a{color:var(--accent-2)}

/* ============ SCROLL ANIMATIONS ============ */
.reveal{opacity:0;transform:translateY(40px);transition:opacity .9s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1)}
.reveal.visible{opacity:1;transform:translateY(0)}
.reveal.delay-1{transition-delay:.1s}
.reveal.delay-2{transition-delay:.2s}
.reveal.delay-3{transition-delay:.3s}
.reveal.delay-4{transition-delay:.4s}

/* ============ SCROLLBAR ============ */
::-webkit-scrollbar{width:10px}
::-webkit-scrollbar-track{background:#050507}
::-webkit-scrollbar-thumb{background:#222230;border-radius:10px}
::-webkit-scrollbar-thumb:hover{background:#7c5cff}

/* ============ TYPOGRAPHY DETAILS ============ */
p{font-size:16px;color:var(--muted);line-height:1.8}
.section-body p{margin-bottom:18px}
.section-body p strong, .section-body strong{color:#fff;font-weight:600}
.section-body ul{margin:18px 0 24px 24px;color:var(--muted)}
.section-body ul li{margin-bottom:10px;line-height:1.7}
.section-body ul li strong{color:#fff}

/* ============ KPI BAND ============ */
.kpi-band{
  display:grid;grid-template-columns:repeat(4,1fr);gap:0;
  border-top:1px solid var(--line);border-bottom:1px solid var(--line);
  background:rgba(124,92,255,.03);
}
@media(max-width:700px){.kpi-band{grid-template-columns:repeat(2,1fr)}}
.kpi-cell{
  padding:50px 30px;text-align:center;border-right:1px solid var(--line);
}
.kpi-cell:last-child{border-right:none}
@media(max-width:700px){
  .kpi-cell:nth-child(2){border-right:none}
  .kpi-cell:nth-child(1),.kpi-cell:nth-child(2){border-bottom:1px solid var(--line)}
}
.kpi-cell .num{font-family:'Space Grotesk',sans-serif;font-size:48px;font-weight:800;letter-spacing:-2px}
.kpi-cell .lbl{font-size:13px;color:var(--muted);margin-top:6px;text-transform:uppercase;letter-spacing:1px}
` }} />
      


<div className="aurora"></div>
<div className="grid-overlay"></div>





<section className="hero">
  <div className="floating-icons">
    <span className="float-icon">🩺</span>
    <span className="float-icon">💊</span>
    <span className="float-icon">🏥</span>
    <span className="float-icon">❤️</span>
    <span className="float-icon">🧬</span>
    <span className="float-icon">📅</span>
  </div>
  <div className="container">
    <span className="eyebrow">Healthcare Industry · Clinic & Hospital Solutions</span>
    <h1>
      <span className="line">Clinic Website Development</span>
      <span className="line">& <span className="gradient-text">Patient Growth Solutions</span></span>
      <span className="line">That Actually Fill Your Appointments.</span>
    </h1>
    <p className="hero-sub">
      We build modern, mobile-responsive clinic websites with online appointment booking, WhatsApp reminders, Google Maps SEO, and AI automation — designed to turn anonymous Google searches into booked patients for doctors, clinics, hospitals, and healthcare centers across India.
    </p>
    <div className="hero-cta-row">
      <a href="#contact" className="btn btn-primary">Get a Free Clinic Website Audit →</a>
      <a href="#services" className="btn btn-secondary">See What We Build</a>
    </div>

    <div className="hero-stats">
      <div className="hero-stat">
        <div className="num" data-target="3.2" data-suffix="x">0x</div>
        <div className="lbl">Avg. Patient Bookings</div>
      </div>
      <div className="hero-stat">
        <div className="num" data-target="180" data-suffix="%">0%</div>
        <div className="lbl">Google Map Views ↑</div>
      </div>
      <div className="hero-stat">
        <div className="num" data-target="40" data-suffix="hrs">0hrs</div>
        <div className="lbl">Receptionist Time Saved/Wk</div>
      </div>
      <div className="hero-stat">
        <div className="num" data-target="24" data-suffix="/7">0/7</div>
        <div className="lbl">Automated Booking</div>
      </div>
    </div>
  </div>
</section>


<div className="kpi-band reveal">
  <div className="kpi-cell">
    <div className="num gradient-text">50+</div>
    <div className="lbl">Healthcare Clients</div>
  </div>
  <div className="kpi-cell">
    <div className="num gradient-text">10k+</div>
    <div className="lbl">Patient Bookings Generated</div>
  </div>
  <div className="kpi-cell">
    <div className="num gradient-text">&lt; 1s</div>
    <div className="lbl">Website Load Time</div>
  </div>
  <div className="kpi-cell">
    <div className="num gradient-text">98%</div>
    <div className="lbl">Client Retention</div>
  </div>
</div>


<section className="section-body">
  <div className="container">
    <div className="reveal" style={{"maxWidth":"900px","margin":"0 auto"}}>
      <span className="eyebrow">Why Healthcare Needs Different Web Solutions</span>
      <h2>Your patients are searching for you on <span className="gradient-text">Google right now.</span> Are they finding you — or your competitor?</h2>
      <p>Every single day, thousands of patients in your city open Google and type queries like <strong>"best dentist near me"</strong>, <strong>"skin specialist in [city]"</strong>, <strong>"hospital appointment booking online"</strong>, or <strong>"24-hour clinic near me"</strong>. The clinic that ranks first, looks credible, and offers instant online appointment booking captures that patient. Everyone else gets ignored.</p>
      <p>At <strong>21TechGlory</strong>, we don't just design pretty medical websites. We engineer complete <strong>clinic website development</strong> systems — combining doctor website design, hospital website development, clinic SEO services, healthcare website development, Google Maps optimization, and AI automation — into one unified patient acquisition engine. The result: more appointments, less receptionist work, and a practice that grows on autopilot.</p>
      <p>Whether you run a small dental clinic, a multi-specialty hospital, an Ayurvedic center, a physiotherapy unit, a diagnostic lab, or a chain of healthcare centers, the principles are the same. Patients today expect a website that loads in under one second, looks beautiful on mobile, lets them book an appointment in three taps, sends them a confirmation on WhatsApp, and reminds them before their visit. If your current website doesn't do all of that, you're losing patients every day — silently — and your competitor is welcoming them with open arms.</p>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"780px","margin":"0 auto"}}>
      <span className="eyebrow">The Silent Patient Leak</span>
      <h2>How Clinics Lose Patients Without a Modern Website</h2>
      <p className="section-intro">Most clinics don't realize they are losing 5–15 patients a week before they ever pick up the phone. Here's exactly where the leaks happen.</p>
    </div>

    <div className="problem-grid">
      <div className="problem-card reveal delay-1">
        <div className="problem-icon">📵</div>
        <h3>No Mobile-Friendly Site</h3>
        <p>Over 78% of healthcare searches happen on mobile. If your clinic website pinches, zooms, or breaks on a phone, patients close the tab in less than 3 seconds — and tap your competitor instead. A mobile responsive design is non-negotiable in 2025.</p>
      </div>
      <div className="problem-card reveal delay-2">
        <div className="problem-icon">📞</div>
        <h3>Phone-Only Booking</h3>
        <p>Modern patients hate phone calls. They want to book at 11pm after their child's fever spikes, or during a lunch break. If your only booking option is "Call us 10am–6pm", you're invisible to anyone outside those hours. A clinic appointment booking website captures these patients automatically.</p>
      </div>
      <div className="problem-card reveal delay-3">
        <div className="problem-icon">👻</div>
        <h3>Invisible on Google Maps</h3>
        <p>When patients search <em>"clinic near me"</em>, Google shows three pins — the "Local Pack". If your Google Business Profile is incomplete, has no reviews, or lacks proper Google Maps SEO, you don't even exist for high-intent local patients. Your competitor pockets them all.</p>
      </div>
      <div className="problem-card reveal delay-1">
        <div className="problem-icon">⭐</div>
        <h3>No Patient Reviews</h3>
        <p>89% of patients read reviews before booking. A clinic with 4 reviews loses to one with 240 reviews — even if your service is better. Without a structured patient review system, social proof never compounds and trust never builds.</p>
      </div>
      <div className="problem-card reveal delay-2">
        <div className="problem-icon">🙋</div>
        <h3>No Doctor Profiles or Credentials</h3>
        <p>Patients want to see the doctor before they book. Where did they study? How many years of experience? What conditions do they treat? Without rich doctor profiles, your medical website looks like a generic template — and templates don't build trust.</p>
      </div>
      <div className="problem-card reveal delay-3">
        <div className="problem-icon">🕒</div>
        <h3>Slow & Outdated Design</h3>
        <p>Google penalizes slow websites. So do patients. If your clinic site takes 4+ seconds to load, both your SEO ranking and your conversion rate collapse. Healthcare website development today demands sub-1-second load times and modern, trust-building design.</p>
      </div>
    </div>
  </div>
</section>


<section id="services" style={{"background":"linear-gradient(180deg,transparent,rgba(124,92,255,.03),transparent)"}}>
  <div className="container">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"780px","margin":"0 auto"}}>
      <span className="eyebrow">What We Build Inside Every Clinic Website</span>
      <h2>A Complete <span className="gradient-text">Patient Acquisition System</span> — Not Just a Website</h2>
      <p className="section-intro">Our clinic website development packages include every component a modern healthcare practice needs to attract, convert, and retain patients in 2025 and beyond.</p>
    </div>

    <div className="features-grid">
      <div className="feature-card reveal delay-1">
        <div className="feature-icon">📅</div>
        <span className="feature-tag">Booking</span>
        <h3>Online Appointment Booking</h3>
        <p>A patient-friendly clinic appointment booking website that lets visitors choose doctor, date, time slot, and consultation type in 3 taps. Real-time slot availability, automatic confirmation, calendar sync for doctors, and SMS/email confirmations — all out of the box.</p>
      </div>
      <div className="feature-card reveal delay-2">
        <div className="feature-icon">🗂️</div>
        <span className="feature-tag">CRM</span>
        <h3>Patient Management System</h3>
        <p>A built-in lightweight CRM that captures every patient inquiry, tracks first-visit vs return-visit, stores history, manages doctor schedules, and gives you a single dashboard of upcoming appointments. No more lost WhatsApp messages or paper registers.</p>
      </div>
      <div className="feature-card reveal delay-3">
        <div className="feature-icon">💬</div>
        <span className="feature-tag">Automation</span>
        <h3>WhatsApp Appointment Reminders</h3>
        <p>Automated WhatsApp messages confirm bookings instantly, send reminders 24 hours and 2 hours before the visit, share location and parking info, and follow up after the consultation. Result: 60–80% reduction in no-shows and zero work for your receptionist.</p>
      </div>
      <div className="feature-card reveal delay-1">
        <div className="feature-icon">📍</div>
        <span className="feature-tag">Local SEO</span>
        <h3>Google Maps SEO</h3>
        <p>We optimize your Google Business Profile, build local citations, run a structured review-generation system, post weekly updates, and use geo-targeted clinic SEO services so you dominate the Local Pack for "clinic near me" and your top specialty keywords.</p>
      </div>
      <div className="feature-card reveal delay-2">
        <div className="feature-icon">📱</div>
        <span className="feature-tag">Design</span>
        <h3>Mobile Responsive Design</h3>
        <p>A premium, conversion-optimized medical website design that looks stunning on every device — from a 5.5-inch phone to a 27-inch desktop. Built on Next.js for sub-1-second load times, perfect Core Web Vitals, and a design that builds instant credibility.</p>
      </div>
      <div className="feature-card reveal delay-3">
        <div className="feature-icon">👨‍⚕️</div>
        <span className="feature-tag">Trust</span>
        <h3>Detailed Doctor Profiles</h3>
        <p>Beautiful, schema-tagged profile pages for every doctor — qualifications, registration numbers, specialties, conditions treated, languages spoken, video introductions, and patient ratings. Each profile is individually SEO-optimized to rank for "doctor name + city" searches.</p>
      </div>
      <div className="feature-card reveal delay-1">
        <div className="feature-icon">⭐</div>
        <span className="feature-tag">Reputation</span>
        <h3>Patient Review System</h3>
        <p>Automated post-visit WhatsApp + email flows that politely ask happy patients for Google reviews and display verified testimonials on your website. Negative feedback is routed privately to you first — protecting your reputation while compounding social proof.</p>
      </div>
      <div className="feature-card reveal delay-2">
        <div className="feature-icon">🤖</div>
        <span className="feature-tag">AI</span>
        <h3>AI Chatbot & Assistant</h3>
        <p>A 24/7 AI assistant trained on your services that answers common patient questions ("Do you treat diabetes?", "What are your timings?", "How much does a root canal cost?"), books appointments inside chat, and escalates urgent cases to a human instantly.</p>
      </div>
      <div className="feature-card reveal delay-3">
        <div className="feature-icon">📊</div>
        <span className="feature-tag">Growth</span>
        <h3>Healthcare SEO Services</h3>
        <p>Specialty-specific clinic SEO services targeting high-intent keywords like "dental implants in Hyderabad", "cardiologist in Bangalore" or "IVF center in Chennai". Includes on-page optimization, medical content writing, backlinks from health directories, and monthly ranking reports.</p>
      </div>
    </div>
  </div>
</section>


<section className="maps-section">
  <div className="container">
    <div className="maps-grid">
      <div className="reveal">
        <span className="eyebrow">Local SEO For Clinics</span>
        <h2>How Google Maps Generates <span className="gradient-text">Free Patient Leads</span> Every Single Day</h2>
        <p>When a patient pulls out their phone and searches <em>"clinic near me"</em> or <em>"orthopedic doctor in [city]"</em>, Google shows three businesses in a map box at the top of the page — known as the Local Pack. These three results capture <strong>over 70% of all clicks</strong> for local healthcare searches.</p>
        <p>Most clinics never appear here because they treat their Google Business Profile as a one-time setup. We treat it as a living, ranking machine. Our clinic SEO services include:</p>

        <ul className="maps-points">
          <li><span className="check">✓</span><span><strong>Full GBP optimization</strong> — categories, services, attributes, hours, photos, Q&A, and weekly Google Posts.</span></li>
          <li><span className="check">✓</span><span><strong>NAP consistency</strong> across 50+ healthcare directories like Practo, Justdial, Lybrate, and Sulekha for stronger local signals.</span></li>
          <li><span className="check">✓</span><span><strong>Geo-tagged photos</strong> and virtual tours that signal real-world location authenticity to Google's algorithm.</span></li>
          <li><span className="check">✓</span><span><strong>Automated review generation</strong> via WhatsApp — turning every happy patient into a 5-star ranking signal.</span></li>
          <li><span className="check">✓</span><span><strong>Location-specific landing pages</strong> for multi-branch clinics & hospital chains to dominate every neighborhood you serve.</span></li>
          <li><span className="check">✓</span><span><strong>Local schema markup</strong> (MedicalClinic, Hospital, Physician) so Google understands exactly who you are and what you treat.</span></li>
        </ul>
        <p>The compounding effect is dramatic. Within 90 days, most of our clinics see their <strong>map views grow 150–250%</strong>, direction requests double, and direct calls from search rise by 40–60% — all without spending a rupee on ads.</p>
      </div>

      <div className="maps-visual reveal delay-2">
        <div className="map-search-bar">🔍 clinic near me</div>
        <div className="map-pin p1">1</div>
        <div className="map-pin p2">★</div>
        <div className="map-pin p3">2</div>
        <div className="map-pin p4">3</div>
        <div className="map-blob"></div>

        <div style={{"position":"absolute","bottom":"30px","left":"30px","right":"30px","padding":"18px","background":"rgba(255,255,255,.04)","border":"1px solid var(--line)","borderRadius":"16px","backdropFilter":"blur(20px)"}}>
          <div style={{"display":"flex","alignItems":"center","gap":"10px","marginBottom":"8px"}}>
            <div style={{"width":"36px","height":"36px","borderRadius":"8px","background":"var(--grad)","display":"flex","alignItems":"center","justifyContent":"center"}}>🏥</div>
            <div>
              <div style={{"fontWeight":"600","color":"#fff","fontSize":"14px"}}>Your Clinic — Top of Maps</div>
              <div style={{"color":"#10b981","fontSize":"12px"}}>★★★★★ 4.9 (240 reviews)</div>
            </div>
          </div>
          <div style={{"fontSize":"12px","color":"var(--muted)"}}>Open · Closes 9 PM · Book online</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="ai-grid">
      <div className="chat-mock reveal">
        <div className="chat-header">
          <div className="chat-avatar">🤖</div>
          <div>
            <div className="chat-name">Clinic AI Assistant</div>
            <div className="chat-status">Online · Replies instantly</div>
          </div>
        </div>
        <div className="chat-msg bot m1">Hello 👋 Welcome to SkyCare Clinic. How can I help you today?</div>
        <div className="chat-msg user m2">I need a dermatologist appointment tomorrow</div>
        <div className="chat-msg bot m3">Dr. Anjali Verma has slots at 11:00 AM, 1:30 PM and 5:00 PM tomorrow. Which works for you?</div>
        <div className="chat-msg user m4">5 PM please</div>
        <div className="chat-msg bot m5">✅ Booked for tomorrow 5:00 PM. Confirmation sent to your WhatsApp. Need directions or insurance info?</div>
      </div>

      <div className="reveal delay-2">
        <span className="eyebrow">AI Automation</span>
        <h2>How AI Automation <span className="gradient-text">Reduces Receptionist Work</span> by 70%</h2>
        <p>A typical clinic receptionist spends <strong>60% of her day</strong> answering the same 12 questions: timings, fees, directions, available doctors, follow-up dates, prescription queries, and rescheduling requests. That's expensive human attention spent on tasks a well-trained AI can handle in seconds — accurately, politely, and 24/7.</p>
        <p>We integrate a custom AI assistant into your clinic website, WhatsApp, and Google Business Profile. It is trained specifically on your services, doctors, pricing, FAQs, and protocols. Here's what it handles automatically:</p>
        <ul>
          <li><strong>Appointment booking & rescheduling</strong> — without human intervention, including emergency slots.</li>
          <li><strong>Pre-consultation intake</strong> — collects symptoms, medical history, insurance details before the visit.</li>
          <li><strong>Post-visit follow-ups</strong> — checks recovery, asks for reviews, suggests follow-up appointments.</li>
          <li><strong>Prescription refill reminders</strong> & medication adherence pings for chronic patients.</li>
          <li><strong>Insurance & pricing FAQs</strong> answered instantly, so you never lose a price-sensitive patient to silence.</li>
          <li><strong>Multilingual support</strong> in English, Hindi, Telugu, Tamil, Kannada, Malayalam and more — meeting patients in their preferred language.</li>
        </ul>
        <p>The outcome is striking. Our healthcare clients report saving <strong>30–45 hours of staff time per week</strong>, cutting no-shows by 65%, and capturing 3–5 extra appointments daily from after-hours inquiries that previously went unanswered.</p>
      </div>
    </div>
  </div>
</section>


<section style={{"background":"rgba(255,255,255,.01)"}}>
  <div className="container">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"780px","margin":"0 auto"}}>
      <span className="eyebrow">21TechGlory vs Typical Agency</span>
      <h2>Why Healthcare Practices Choose <span className="gradient-text">21TechGlory</span></h2>
      <p className="section-intro">Most agencies sell you a website. We engineer a patient acquisition engine that pays for itself within 90 days.</p>
    </div>

    <div className="compare-table reveal">
      <div className="compare-row header">
        <div className="label">Feature</div>
        <div className="col">Typical Agency</div>
        <div className="col">21TechGlory</div>
      </div>
      <div className="compare-row">
        <div className="label">Focus</div>
        <div className="col bad">Just delivers a website</div>
        <div className="col good">Builds a patient acquisition engine</div>
      </div>
      <div className="compare-row">
        <div className="label">Design</div>
        <div className="col bad">Generic WordPress templates</div>
        <div className="col good">Premium, custom medical UI</div>
      </div>
      <div className="compare-row">
        <div className="label">Appointment Booking</div>
        <div className="col bad">Static contact form</div>
        <div className="col good">Real-time booking + WhatsApp confirm</div>
      </div>
      <div className="compare-row">
        <div className="label">SEO</div>
        <div className="col bad">Basic keywords once</div>
        <div className="col good">Ongoing healthcare-specific SEO</div>
      </div>
      <div className="compare-row">
        <div className="label">Google Maps</div>
        <div className="col bad">One-time GBP setup</div>
        <div className="col good">Monthly Local Pack domination</div>
      </div>
      <div className="compare-row">
        <div className="label">Speed</div>
        <div className="col bad">3–5s WordPress load</div>
        <div className="col good">Sub-1s Next.js architecture</div>
      </div>
      <div className="compare-row">
        <div className="label">Automation</div>
        <div className="col bad">None — manual everything</div>
        <div className="col good">AI + WhatsApp + CRM end-to-end</div>
      </div>
      <div className="compare-row">
        <div className="label">ROI Reporting</div>
        <div className="col bad">"Hope it works"</div>
        <div className="col good">Monthly patient & revenue reports</div>
      </div>
    </div>
  </div>
</section>


<section className="roi-section" id="roi">
  <div className="container">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"780px","margin":"0 auto"}}>
      <span className="eyebrow">Real Numbers, Real Practices</span>
      <h2>ROI Examples From <span className="gradient-text">Healthcare Clients</span></h2>
      <p className="section-intro">Anonymized case studies from clinics, hospitals and doctors we've worked with across India. Numbers are based on the first 6 months post-launch.</p>
    </div>

    <div className="roi-grid">
      <div className="roi-card reveal delay-1">
        <span className="badge">Dental Clinic · Hyderabad</span>
        <div className="scenario">Single-doctor dental clinic with no online presence.</div>
        <div className="roi-stat"><span className="k">Investment</span><span className="v">₹35,000</span></div>
        <div className="roi-stat"><span className="k">Monthly online bookings (before)</span><span className="v">2</span></div>
        <div className="roi-stat"><span className="k">Monthly online bookings (after)</span><span className="v">47</span></div>
        <div className="roi-stat"><span className="k">Avg. treatment value</span><span className="v">₹6,500</span></div>
        <div className="roi-stat"><span className="k">Extra monthly revenue</span><span className="v">₹2.9 L</span></div>
        <div className="result">
          <div className="label">Payback Period</div>
          <div className="value">12 days</div>
        </div>
      </div>

      <div className="roi-card reveal delay-2">
        <span className="badge">Multi-Specialty Hospital · Bangalore</span>
        <div className="scenario">25-bed hospital, 14 doctors, drowning in phone calls.</div>
        <div className="roi-stat"><span className="k">Investment</span><span className="v">₹1.8 L</span></div>
        <div className="roi-stat"><span className="k">Phone calls/day (before)</span><span className="v">~280</span></div>
        <div className="roi-stat"><span className="k">Phone calls/day (after)</span><span className="v">~95</span></div>
        <div className="roi-stat"><span className="k">Online appointments/mo</span><span className="v">1,240</span></div>
        <div className="roi-stat"><span className="k">Receptionist hours saved/mo</span><span className="v">340</span></div>
        <div className="result">
          <div className="label">6-Month ROI</div>
          <div className="value">8.4x</div>
        </div>
      </div>

      <div className="roi-card reveal delay-3">
        <span className="badge">Skin & Hair Clinic Chain · Chennai</span>
        <div className="scenario">4 branches, weak Google Maps presence.</div>
        <div className="roi-stat"><span className="k">Investment</span><span className="v">₹2.4 L</span></div>
        <div className="roi-stat"><span className="k">Map views/mo (before)</span><span className="v">8,400</span></div>
        <div className="roi-stat"><span className="k">Map views/mo (after)</span><span className="v">31,600</span></div>
        <div className="roi-stat"><span className="k">Direction requests/mo</span><span className="v">+312%</span></div>
        <div className="roi-stat"><span className="k">New patients/mo</span><span className="v">+186</span></div>
        <div className="result">
          <div className="label">Avg. CAC</div>
          <div className="value">₹128</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"780px","margin":"0 auto"}}>
      <span className="eyebrow">Our Process</span>
      <h2>From Discovery Call to <span className="gradient-text">Patient Bookings</span> — In 30 Days</h2>
      <p className="section-intro">A proven, repeatable process refined across 50+ healthcare projects. No surprises, no scope creep, just results.</p>
    </div>

    <div className="process-wrapper">
      <div className="process-step reveal">
        <div className="step-content">
          <h3>Discovery & Audit</h3>
          <p>Free 45-minute consultation. We audit your current website, Google Business Profile, competitor landscape, and identify the exact keywords your future patients are searching.</p>
        </div>
        <div className="step-number">1</div>
        <div className="step-spacer"></div>
      </div>

      <div className="process-step reveal">
        <div className="step-spacer"></div>
        <div className="step-number">2</div>
        <div className="step-content">
          <h3>Strategy & Design</h3>
          <p>We craft a custom medical website design with your branding, doctor profiles, services structure, and conversion-focused user journey. You approve every screen before development begins.</p>
        </div>
      </div>

      <div className="process-step reveal">
        <div className="step-content">
          <h3>Development & Integration</h3>
          <p>Lightning-fast Next.js development with online appointment booking, patient management system, WhatsApp integration, payment gateway, and AI chatbot — all on your custom domain.</p>
        </div>
        <div className="step-number">3</div>
        <div className="step-spacer"></div>
      </div>

      <div className="process-step reveal">
        <div className="step-spacer"></div>
        <div className="step-number">4</div>
        <div className="step-content">
          <h3>SEO & Maps Launch</h3>
          <p>On-page optimization for all healthcare keywords, full Google Business Profile rebuild, citation building, schema markup, and the first wave of automated review collection from your existing patients.</p>
        </div>
      </div>

      <div className="process-step reveal">
        <div className="step-content">
          <h3>Automation & Training</h3>
          <p>We train your AI assistant on your services, set up WhatsApp reminders, configure no-show prevention flows, and onboard your team on the patient management dashboard.</p>
        </div>
        <div className="step-number">5</div>
        <div className="step-spacer"></div>
      </div>

      <div className="process-step reveal">
        <div className="step-spacer"></div>
        <div className="step-number">6</div>
        <div className="step-content">
          <h3>Growth & Reporting</h3>
          <p>Ongoing clinic SEO services, monthly ranking reports, conversion optimization, and quarterly strategy calls. Your dashboard shows exactly how many patients came from each channel.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section style={{"background":"linear-gradient(180deg,transparent,rgba(34,211,238,.03),transparent)"}}>
  <div className="container">
    <div className="reveal section-body" style={{"maxWidth":"980px","margin":"0 auto"}}>
      <span className="eyebrow">Specialties We Serve</span>
      <h2>Healthcare Practices We <span className="gradient-text">Specialize In</span></h2>
      <p>Healthcare is not one industry — it's hundreds of micro-niches, each with its own patient journey, decision triggers, and ranking opportunities. As a focused <strong>medical website design company</strong>, our doctor website development playbooks are battle-tested across:</p>
      <ul>
        <li><strong>Dental clinics & orthodontics</strong> — implants, aligners, smile design, kids' dentistry. We rank you for "dentist near me" and high-value procedure keywords.</li>
        <li><strong>Multi-specialty hospitals</strong> — full hospital website development with department pages, doctor directories, OPD booking, and emergency contact systems.</li>
        <li><strong>Dermatology & cosmetology</strong> — high-intent keywords like "hair transplant", "acne treatment", "PRP therapy" with before/after galleries.</li>
        <li><strong>Cardiology, neurology, orthopedics</strong> & other super-specialty practices needing authority content and patient trust.</li>
        <li><strong>Pediatric & women's health clinics</strong> — gentle, parent-friendly UX, vaccination trackers, and pregnancy journey integrations.</li>
        <li><strong>Fertility & IVF centers</strong> — long-funnel content, success story showcases, and discreet inquiry handling.</li>
        <li><strong>Ayurveda, homeopathy & wellness centers</strong> — niche keyword strategy and educational content marketing.</li>
        <li><strong>Diagnostic labs & imaging centers</strong> — home collection booking, report download portals, package comparison engines.</li>
        <li><strong>Physiotherapy, chiropractic & rehabilitation</strong> — condition-based landing pages and recovery-focused content.</li>
        <li><strong>Eye care & ENT clinics</strong> — service-specific funnels for LASIK, cataract, hearing aids, etc.</li>
        <li><strong>Veterinary clinics & pet hospitals</strong> — emotional UX with pet-parent focused booking flows.</li>
        <li><strong>Telemedicine & online consultation platforms</strong> — full-stack development with video integration, e-prescription, and pharmacy partnerships.</li>
      </ul>
      <p>Whether you're a solo practitioner building your first clinic website or a hospital group operating across multiple cities, our healthcare website development frameworks scale with you. We've built sites that serve 100 monthly visitors and platforms that serve 5 million.</p>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="reveal section-body" style={{"maxWidth":"920px","margin":"0 auto"}}>
      <span className="eyebrow">Why 21TechGlory</span>
      <h2>The Only <span className="gradient-text">Medical Website Design Company</span> That Thinks Like a Marketer</h2>
      <p>Most web agencies treat healthcare like any other industry. They slap a stock photo of a smiling doctor onto a template, throw in a contact form, and call it done. The result: beautiful brochures that look professional but generate zero patients. That's not what modern clinic website development should look like.</p>
      <p>At 21TechGlory, every clinic website we build is engineered backwards from a single question: <strong>"How does this site convert a Google searcher into a paying patient — at 2 AM, in 90 seconds, on a 4G connection?"</strong> Every design decision, every line of code, every SEO move flows from that question.</p>
      <p>Our doctor website design philosophy combines three disciplines most agencies treat as separate:</p>
      <ul>
        <li><strong>Performance engineering</strong> — Next.js, edge deployment, image optimization, and Core Web Vitals tuning so your site loads faster than 95% of healthcare sites in India.</li>
        <li><strong>Conversion psychology</strong> — trust signals, social proof placement, friction-free booking flows, and credibility cues calibrated specifically for medical decision-making.</li>
        <li><strong>Search dominance</strong> — technical SEO, medical content writing, schema markup, link building from healthcare authority sites, and relentless clinic SEO services execution.</li>
      </ul>
      <p>The hospital website development projects we deliver are particularly powerful. A modern hospital has 12+ departments, 30+ doctors, dozens of treatments, multiple branches, insurance partnerships, and emergency services — all of which must be discoverable, bookable, and credible. We design information architecture that scales without becoming a maze, with intelligent search, smart filtering, and conversion paths optimized for every visitor type — first-time patient, returning patient, family member, or insurance partner.</p>
      <p>For solo doctors and small clinics, we offer streamlined doctor website development packages that deliver enterprise-grade infrastructure at startup-friendly pricing. You get the same Next.js speed, the same Google Maps SEO playbook, the same WhatsApp automation, and the same patient management system that powers our hospital clients — just sized to your scale.</p>
      <p>And because healthcare is a trust-driven category, every site we build is fully compliant with privacy best practices, includes proper medical disclaimers, structured data for doctor credentials, accessibility standards (WCAG), and SSL encryption for any patient data captured through your clinic appointment booking website.</p>
    </div>
  </div>
</section>


<section style={{"background":"linear-gradient(180deg,transparent,rgba(124,92,255,.025),transparent)"}}>
  <div className="container">
    <div className="reveal section-body" style={{"maxWidth":"920px","margin":"0 auto"}}>
      <span className="eyebrow">The Healthcare Digital Playbook</span>
      <h2>The Modern Patient Journey — And How a <span className="gradient-text">Well-Built Clinic Website</span> Wins Every Step</h2>
      <p>Understanding why clinic website development matters today requires understanding how patients actually behave in 2025. The journey from <em>"I think I need a doctor"</em> to <em>"I&apos;m sitting in the waiting room"</em> has fundamentally changed in the last five years — and most healthcare practices have not caught up.</p>

      <h3 style={{"marginTop":"36px"}}>Step 1 — The Symptom Search (Top of Funnel)</h3>
      <p>It begins with a vague Google query: <em>"persistent back pain causes"</em>, <em>"why is my baby coughing"</em>, <em>"how to fix receding gums"</em>. At this stage, the patient is not yet looking for your clinic — they&apos;re looking for understanding. Clinics with strong medical content marketing capture these searchers early. Our healthcare website development packages include an SEO-optimized blog architecture with medically reviewed articles targeting these exact informational queries. We&apos;ve seen single articles generate 8,000–15,000 monthly organic visitors for our clients, with 4–7% converting into appointment requests.</p>

      <h3 style={{"marginTop":"32px"}}>Step 2 — The Local Intent Switch (Middle of Funnel)</h3>
      <p>Within minutes of the symptom search, the patient pivots to <em>"orthopedic doctor near me"</em> or <em>"dental clinic in [city] open now"</em>. This is the highest-value moment in the entire patient journey — and it&apos;s decided in Google&apos;s Local Pack within 30 seconds. Our Google Maps SEO process is engineered specifically to win these moments. We optimize every signal Google evaluates: proximity, relevance, prominence, review velocity, photo freshness, and engagement metrics. The doctor website design we build amplifies this with click-to-call, click-for-directions, and click-to-book buttons that convert local searchers into bookings before they ever scroll.</p>

      <h3 style={{"marginTop":"32px"}}>Step 3 — The Credibility Check</h3>
      <p>Before booking, the patient lands on your website and silently evaluates: <strong>"Can I trust this clinic with my health?"</strong> They scan for credentials, scroll for reviews, look for the doctor&apos;s photo, and check whether the site feels modern or dated. This 60-second silent evaluation determines whether your clinic gains a patient or loses one. Every element of our medical website design — typography, color, micro-animations, photo selection, doctor bio richness, certificate displays, patient testimonial layouts — is calibrated to pass this credibility check decisively.</p>

      <h3 style={{"marginTop":"32px"}}>Step 4 — The Booking Decision</h3>
      <p>If credibility passes, the patient looks for the booking button. If it&apos;s hidden, slow, requires creating an account, or asks for 14 fields, you lose them — even now. Our clinic appointment booking website flows are obsessively engineered for frictionless completion: 3 taps on mobile, 4 fields maximum, instant slot visibility, real-time availability, and an immediate WhatsApp confirmation that gives the patient psychological closure. This is where most clinics lose 40–60% of motivated patients — and where our system wins them.</p>

      <h3 style={{"marginTop":"32px"}}>Step 5 — The Pre-Visit Phase</h3>
      <p>The 24 hours between booking and visit is where most clinics quietly bleed revenue through no-shows. National average no-show rates in Indian healthcare hover at 22–35%. Our WhatsApp appointment reminder system — combined with intelligent timing, location sharing, parking instructions, doctor introduction videos, and gentle reconfirmation prompts — has consistently driven our clients&apos; no-show rates below 8%. That single improvement alone often pays for the entire website investment within the first month.</p>

      <h3 style={{"marginTop":"32px"}}>Step 6 — The Post-Visit Loop</h3>
      <p>After the consultation, automation continues working. Our patient management system triggers a post-visit WhatsApp asking about recovery, a Google review request when the patient is most satisfied (typically 24–48 hours later), a follow-up reminder if prescribed, and re-engagement prompts at the right intervals based on specialty. This is how a one-time visitor becomes a 10-year patient relationship — and how your Google review count grows from 12 to 240 in eighteen months, dramatically strengthening your Google Maps SEO and Local Pack ranking.</p>

      <h3 style={{"marginTop":"36px"}}>Why Generic Web Agencies Fail Healthcare Clients</h3>
      <p>The reason most clinic websites underperform is structural, not aesthetic. Generic agencies treat a clinic the same way they treat a restaurant, a real estate firm, or an e-commerce store. They use the same WordPress themes, the same plugins, the same boilerplate SEO. But healthcare is different in five fundamental ways that demand a specialized medical website design company:</p>
      <ul>
        <li><strong>Trust is the conversion currency.</strong> Unlike retail, a patient is staking their health on you. Every pixel must reinforce credibility — not just look pretty.</li>
        <li><strong>Local intent dominates.</strong> 76% of healthcare searches have local intent. Google Maps SEO and geo-targeted clinic SEO services are not optional — they are the primary growth lever.</li>
        <li><strong>Decision cycles vary wildly.</strong> A toothache patient books in 4 minutes. A cosmetic surgery patient researches for 4 weeks. The site must serve both effectively on the same domain.</li>
        <li><strong>Compliance and ethical advertising matter.</strong> Medical councils restrict claims. We design content that&apos;s persuasive without violating ethical advertising guidelines for healthcare.</li>
        <li><strong>The receptionist is overloaded.</strong> Without WhatsApp automation and AI assistants, growth scales linearly with staff cost. We break that ceiling.</li>
      </ul>

      <h3 style={{"marginTop":"36px"}}>What &apos;Authority-Level&apos; Healthcare SEO Actually Looks Like</h3>
      <p>Ranking #1 on Google for terms like <em>"best cardiologist in Hyderabad"</em>, <em>"IVF treatment cost in Bangalore"</em>, or <em>"24/7 emergency hospital near me"</em> is not luck. It is the cumulative result of dozens of disciplined moves stacked over months. Our clinic SEO services package includes:</p>
      <ul>
        <li><strong>Technical SEO foundation</strong> — clean URL structures, schema markup (MedicalClinic, Physician, MedicalProcedure), XML sitemaps, robots.txt optimization, and Core Web Vitals tuning across every page.</li>
        <li><strong>Medical content engine</strong> — 4–8 expert-reviewed articles per month targeting symptom queries, treatment queries, and "near me" queries, all internally linked into your service pages.</li>
        <li><strong>Authoritative backlinks</strong> — outreach to medical directories, healthcare publications, doctor association sites, and local news outlets covering health stories.</li>
        <li><strong>E-E-A-T optimization</strong> — Google&apos;s Experience, Expertise, Authoritativeness, Trust framework is especially strict for "Your Money or Your Life" queries like healthcare. We bake author bios, medical reviewer credentials, citation of medical sources, and last-updated timestamps into every page.</li>
        <li><strong>Review velocity engineering</strong> — a structured drip of fresh Google reviews each week, signaling continuous patient trust to the algorithm and lifting your Local Pack position.</li>
        <li><strong>Competitive gap analysis</strong> — quarterly audits of competitor sites identifying keyword opportunities, content gaps, and backlink opportunities you can take from them.</li>
      </ul>

      <p>This is the level of strategic depth our healthcare clients pay us for — and the reason a 21TechGlory clinic website outperforms not by 20%, but often by five to ten times compared to what they had before. When you combine premium doctor website design, ongoing clinic SEO services, conversion-tuned online appointment booking, AI automation, and disciplined Google Maps SEO into a single system, growth stops being a gamble and starts being a flywheel.</p>
    </div>
  </div>
</section>


<section id="faq">
  <div className="container">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"780px","margin":"0 auto"}}>
      <span className="eyebrow">FAQ</span>
      <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
      <p className="section-intro">Everything doctors, clinic owners, and hospital administrators ask us before getting started.</p>
    </div>

    <div className="faq-list reveal">
      <div className="faq-item">
        <button className="faq-q">How much does clinic website development cost? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>Our healthcare website development packages start at ₹15,000 for solo doctors and small clinics, ₹40,000–₹80,000 for full-featured clinic websites with online appointment booking and WhatsApp automation, and custom pricing for multi-specialty hospital website development with patient portals and multi-branch architecture. Every package includes mobile responsive design, Google Maps SEO setup, and three months of free support.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">How long does it take to build a doctor website? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>A standard doctor website with appointment booking goes live in 2–3 weeks. A complete clinic appointment booking website with patient management and WhatsApp integration takes 3–4 weeks. Full hospital website development projects with 10+ departments typically launch in 6–10 weeks. We share a detailed week-by-week timeline before kick-off.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">Do you provide ongoing clinic SEO services? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>Yes. Our monthly clinic SEO services include keyword tracking, on-page optimization, Google Business Profile management, weekly Google Posts, citation building, monthly content publishing, link building from medical directories, and detailed performance reporting. Most clients begin seeing significant Google Maps ranking improvements within 60–90 days.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">Can patients book appointments without an account? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>Absolutely. Our clinic appointment booking website is designed for zero-friction booking — patients enter name, phone, preferred slot, and they're done. No signup, no password, no app download. Existing patients can optionally create accounts to view history and rebook in one tap.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">How does WhatsApp appointment reminder integration work? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>We connect your clinic to WhatsApp Business API. Once integrated, every booking triggers an automatic confirmation, a 24-hour reminder, a 2-hour reminder, and a post-visit follow-up — all branded with your clinic name. You can also broadcast festival messages, health tips, and re-engagement campaigns to your patient list (with consent).</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">Will my clinic show up on Google Maps? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>Yes. Our Google Maps SEO process is structured to rank your clinic in the local 3-pack for high-intent searches in your service area. We optimize 30+ ranking factors including categories, NAP consistency, review velocity, photo geotags, citation profile, and Google Posts frequency. Realistic timeline: visible improvements in 30–45 days, top 3 rankings in 60–120 days for most specialties.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">Do you work with hospitals outside India? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>While most of our healthcare clients are in India, we also serve clinics and hospitals across the UAE, Singapore, the UK and the US. Our hospital website development frameworks are localized for region-specific compliance (HIPAA, GDPR, etc.) and language requirements.</p></div>
      </div>
      <div className="faq-item">
        <button className="faq-q">Can you migrate my existing website without losing SEO? <span className="arrow">▼</span></button>
        <div className="faq-a"><p>Yes. We perform full SEO migrations — preserving URL structure, setting up 301 redirects, transferring schema, and protecting your existing rankings. In most cases our clients see rankings improve post-migration because of the technical performance upgrade.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="final-cta" id="contact">
  <div className="container reveal">
    <span className="eyebrow">Ready to Grow Your Practice?</span>
    <h2>Let's Build a <span className="gradient-text">Patient Acquisition Engine</span> For Your Clinic</h2>
    <p>Book a free 45-minute strategy call. We'll audit your existing website, Google Business Profile, and competitors — and walk you through exactly what we'd build to double your monthly patient bookings within 6 months. Zero obligation, total clarity.</p>
    <div className="hero-cta-row" style={{"marginTop":"10px"}}>
      <a href="https://wa.me/917795354043" className="btn btn-primary">💬 Talk on WhatsApp</a>
      <a href="/cdn-cgi/l/email-protection#fb939e979794bbc9ca8f9e98939c97948982d5989496" className="btn btn-secondary">✉ Email Us</a>
    </div>
    <p style={{"marginTop":"30px","fontSize":"14px"}}>Trusted by 50+ healthcare practices across South India · 4.9★ client rating · 98% retention</p>
  </div>
</section>
      <Footer />
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
