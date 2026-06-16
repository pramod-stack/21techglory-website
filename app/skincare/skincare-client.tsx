'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import StartProjectModal from '@/components/ui/start-project-modal';

export default function SkincareClientPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exitModalOpen, setExitModalOpen] = useState(false);

  // ROI Calculator State
  const [bookings, setBookings] = useState(15);
  const [ticket, setTicket] = useState(800);
  const [noshow, setNoshow] = useState(30);
  const [missedCalls, setMissedCalls] = useState(25);

  const [loss, setLoss] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [annualUpside, setAnnualUpside] = useState(0);

  // Scroll Progress State
  const [scrollProgress, setScrollProgress] = useState(0);

  // Parallax / mouse move variables
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  // ROI Calculation logic
  useEffect(() => {
    const noshowFraction = noshow / 100;
    const lossNoShow = bookings * 30 * noshowFraction * ticket;
    const lossMissed = missedCalls * 4.3 * ticket * 0.6; // 60% would have booked
    const totalLoss = lossNoShow + lossMissed;

    const totalRecovered = (lossNoShow * 0.8) + (lossMissed * 0.7);
    const annual = totalRecovered * 12;

    setLoss(totalLoss);
    setRecovered(totalRecovered);
    setAnnualUpside(annual);
  }, [bookings, ticket, noshow, missedCalls]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      setScrollProgress(pct || 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move handler for glow
  useEffect(() => {
    if ('ontouchstart' in window) return;

    let localMouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      localMouse = { x: e.clientX, y: e.clientY };
      setMousePos(localMouse);
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;
    let currentGlow = { x: 0, y: 0 };

    const updateGlow = () => {
      currentGlow.x += (localMouse.x - currentGlow.x) * 0.08;
      currentGlow.y += (localMouse.y - currentGlow.y) * 0.08;
      setGlowPos({ x: currentGlow.x, y: currentGlow.y });
      animationId = requestAnimationFrame(updateGlow);
    };
    updateGlow();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Exit intent trigger
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 0 && !localStorage.getItem('exitShownSalon')) {
        localStorage.setItem('exitShownSalon', '1');
        setExitModalOpen(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  const formatCurrency = (n: number) => {
    return '₹' + Math.round(n).toLocaleString('en-IN');
  };

  // Generate particles array
  const [particles] = useState(() => {
    return Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 60 + Math.random() * 60,
      duration: 10 + Math.random() * 14,
      delay: -Math.random() * 14,
      size: 2 + Math.random() * 4,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  });

  return (
    <div className="relative min-h-screen bg-[#05050a] text-[#e8e8ea] overflow-x-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 z-[9999] transition-all duration-75"
        style={{ width: `${scrollProgress}%`, boxShadow: '0 0 16px rgba(245,166,35,0.7)' }}
      />

      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:60px_60px]" 
          style={{ maskImage: 'radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at 50% 0%, #000 0%, transparent 70%)' }}
        />
        {/* Dynamic mesh gradient */}
        <div className="absolute inset-[-20%] bg-[radial-gradient(40%_30%_at_15%_20%,rgba(245,166,35,0.12),transparent_60%),radial-gradient(35%_30%_at_85%_30%,rgba(255,107,157,0.1),transparent_60%),radial-gradient(40%_35%_at_50%_90%,rgba(196,113,237,0.08),transparent_60%)] filter blur-[40px]" />
        {/* Background blobs */}
        <div className="absolute top-[-120px] left-[-120px] w-[520px] h-[520px] rounded-full bg-amber-500/10 filter blur-[60px] animate-pulse" />
        <div className="absolute top-[30%] right-[-150px] w-[480px] h-[480px] rounded-full bg-rose-500/10 filter blur-[60px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-200px] left-[30%] w-[600px] h-[600px] rounded-full bg-violet-500/10 filter blur-[60px]" />
        {/* SVG Noise overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.6%22/></svg>')] pointer-events-none" />
      </div>

      {/* Cursor Follow Glow (Desktop only) */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-[1] opacity-50 bg-[radial-gradient(circle,rgba(245,166,35,0.08),transparent_60%)] filter blur-[20px] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ left: `${glowPos.x}px`, top: `${glowPos.y}px` }}
      />

      <div className="relative z-10">
        <Navbar onOpenModal={() => setIsModalOpen(true)} />

        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
          {/* Animated Particles inside Hero */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {particles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full bg-amber-500/50 filter blur-[1px]"
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  width: `${p.size}px`,
                  height: `${p.size}px`,
                  opacity: p.opacity,
                  animation: `floatUp ${p.duration}s linear infinite`,
                  animationDelay: `${p.delay}s`,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-16 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/25 bg-gradient-to-b from-amber-500/10 to-amber-500/5 backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_12px_#f5a623] animate-ping" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-amber-500 uppercase">For Salons • Beauty Parlours • Spas • Skin Clinics</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mt-6"
                >
                  <span className="text-zinc-100 bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">Turn Your Salon Into A</span><br />
                  <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">Fully Booked,</span>
                  <span className="font-serif italic bg-gradient-to-r from-rose-400 to-violet-400 bg-clip-text text-transparent ml-3 font-normal">Auto-Pilot</span>
                  <span className="bg-gradient-to-r from-rose-500 to-violet-500 bg-clip-text text-transparent"> Business</span>
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-[620px]"
                >
                  We build premium salon websites, automated booking engines, WhatsApp & Instagram marketing systems, and local Google SEO that fills your chairs — 7 days a week, on autopilot.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 hover:from-amber-600 hover:via-rose-600 hover:to-violet-600 text-[#0a0a0b] font-bold rounded-xl shadow-[0_10px_30px_rgba(245,166,35,0.3)] hover:shadow-[0_15px_35px_rgba(245,166,35,0.45)] transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Get My Free Salon Growth Audit →
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300"
                  >
                    See What We Build
                  </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">⭐⭐⭐⭐⭐ 4.9/5 rating</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">🛡️ 50+ Salons Scaled</span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">⚡ Live in 30 Days</span>
                </motion.div>

                {/* Quick stats grid */}
                <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">3.5x</div>
                    <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">More Bookings</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">-68%</div>
                    <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">No-Shows</div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">#1</div>
                    <div className="text-xs uppercase tracking-wider text-zinc-500 mt-1">Google Local</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive UI Mockup */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-rose-500/10 to-violet-500/20 blur-3xl rounded-full opacity-60" />
                <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f0f17] to-[#08080d] p-6 shadow-2xl">
                  {/* Browser Header dots */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/60" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/60" />
                      <span className="w-3 h-3 rounded-full bg-green-500/60" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">Salon Dashboard • Live</span>
                  </div>

                  {/* Micro dashboard layout */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="rounded-xl p-3 bg-white/[0.03] border border-white/5">
                      <div className="text-[9px] uppercase tracking-wider text-zinc-500">Today</div>
                      <div className="text-lg font-bold text-white mt-1">42</div>
                      <div className="text-[10px] text-emerald-400 mt-1">▲ 28%</div>
                    </div>
                    <div className="rounded-xl p-3 bg-white/[0.03] border border-white/5">
                      <div className="text-[9px] uppercase tracking-wider text-zinc-500">Revenue</div>
                      <div className="text-lg font-bold text-white mt-1">₹68k</div>
                      <div className="text-[10px] text-emerald-400 mt-1">▲ 41%</div>
                    </div>
                    <div className="rounded-xl p-3 bg-white/[0.03] border border-white/5">
                      <div className="text-[9px] uppercase tracking-wider text-zinc-500">Reviews</div>
                      <div className="text-lg font-bold text-white mt-1">4.9★</div>
                      <div className="text-[10px] text-emerald-400 mt-1">+12</div>
                    </div>
                  </div>

                  {/* Micro Chart area */}
                  <div className="rounded-xl p-4 bg-white/[0.02] border border-white/5 mb-5">
                    <div className="flex items-end gap-2.5 h-20">
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '35%' }} />
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '55%' }} />
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '42%' }} />
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '70%' }} />
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '50%' }} />
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '85%' }} />
                      <div className="bg-gradient-to-t from-amber-500 to-rose-500 w-full rounded-t" style={{ height: '95%' }} />
                    </div>
                    <div className="flex justify-between text-[9px] text-zinc-500 mt-2">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>

                  {/* Bookings log */}
                  <div className="rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <div className="px-4 py-2 text-[10px] uppercase tracking-widest text-zinc-500 border-b border-white/5">Upcoming Bookings</div>
                    <div className="px-4 py-2.5 flex items-center justify-between text-xs border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-zinc-200 font-medium">Priya S.</span>
                        <span className="text-zinc-500">• Hair Spa</span>
                      </div>
                      <span className="text-zinc-400">11:30 AM</span>
                    </div>
                    <div className="px-4 py-2.5 flex items-center justify-between text-xs border-b border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span className="text-zinc-200 font-medium">Meera R.</span>
                        <span className="text-zinc-500">• Bridal Trial</span>
                      </div>
                      <span className="text-zinc-400">1:00 PM</span>
                    </div>
                    <div className="px-4 py-2.5 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span className="text-zinc-200 font-medium">Anita K.</span>
                        <span className="text-zinc-500">• Facial</span>
                      </div>
                      <span className="text-zinc-400">3:30 PM</span>
                    </div>
                  </div>
                </div>

                {/* Floating tags */}
                <div className="absolute -top-4 -left-6 bg-gradient-to-r from-zinc-900 to-black/80 border border-white/10 px-4 py-2 rounded-xl text-xs text-white shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: '4s' }}>
                  <span>💬</span>
                  <span>+ New WhatsApp booking</span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-zinc-900 to-black/80 border border-white/10 px-4 py-2 rounded-xl text-xs text-white shadow-lg flex items-center gap-2 animate-bounce" style={{ animationDuration: '5s' }}>
                  <span>⭐</span>
                  <span>+5 Google reviews</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scrolling client list */}
          <div className="mt-24 border-t border-white/5 pt-10">
            <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">Trusted by salons, spas & beauty parlours across South India</p>
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
              <div className="flex w-max gap-12 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
                {Array.from({ length: 2 }).map((_, idx) => (
                  <div key={idx} className="flex gap-12 items-center text-zinc-500 text-lg font-semibold whitespace-nowrap">
                    <span>Glow Unisex</span>
                    <span>•</span>
                    <span>Bliss Beauty Studio</span>
                    <span>•</span>
                    <span>Serene Spa</span>
                    <span>•</span>
                    <span>Clear Skin Clinic</span>
                    <span>•</span>
                    <span>Vogue Hair Lounge</span>
                    <span>•</span>
                    <span>Bridal Atelier</span>
                    <span>•</span>
                    <span>Nail Bar Co.</span>
                    <span>•</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-500/5 text-xs font-semibold tracking-wider text-rose-400 uppercase">The Real Problem</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                <span className="text-zinc-100">Your Salon Is Talented. </span>
                <span className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">Your Marketing Isn't.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">You're a master at hair, beauty, and skin. But every empty chair, missed call, and client cancellation is silently draining your monthly profits.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: '💸 Empty chairs during weekdays', desc: 'Weekends are packed, but Monday–Thursday your stylists sit idle. You\'re paying rent and salaries for slots that aren\'t selling.' },
                { title: '📵 Clients ghosting on appointments', desc: '30–40% no-show rates are normal in Indian salons. Every cancellation without notice is pure lost revenue you\'ll never recover.' },
                { title: '📞 Endless calls & WhatsApp chaos', desc: 'Your receptionist is drowning in "What time can I come?" messages while real walk-in clients wait. No system. Just chaos.' },
                { title: '🔍 Invisible on Google', desc: 'When someone searches "best salon near me," your competitor 2 streets away shows up — and you don\'t. Every day, you\'re losing 50+ ready-to-pay customers.' },
                { title: '📸 Instagram followers ≠ paying clients', desc: 'You post beautiful reels, get likes and saves… but those followers never convert into actual bookings. Vanity metrics don\'t pay bills.' },
                { title: '🔄 First-time clients never return', desc: 'You spend money to acquire a customer once. They get a service. Then disappear forever. No follow-up, no loyalty, no repeat revenue.' }
              ].map((p, idx) => (
                <div key={idx} className="relative rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] p-7 transition-all duration-300 group hover:border-rose-500/30">
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-rose-500 to-rose-400/20 opacity-80 group-hover:shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                  <h4 className="text-rose-300 font-bold text-lg mb-3">{p.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-lg text-zinc-300 max-w-3xl mx-auto mt-14">
              If even <strong className="bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">one</strong> of these is limiting your business growth — read on. We've built systems to solve exactly this for <strong className="text-white">50+ salons and clinics</strong> across Bangalore, Chennai, and South India.
            </p>
          </div>
        </section>

        {/* Funnel Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">Interactive Growth Funnel</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                From Stranger To <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Loyal Client</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">A visual roadmap of how we convert cold online searchers into repeating, long-term premium salon customers.</p>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-16 items-center">
              {/* Left Side: Funnel SVG Graphic */}
              <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl">
                <svg viewBox="0 0 600 480" className="w-full h-auto">
                  <defs>
                    <linearGradient id="fg1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#f5a623" />
                      <stop offset="100%" stopColor="#ff6b9d" />
                    </linearGradient>
                    <linearGradient id="fg2" x1="0" x2="1">
                      <stop offset="0%" stopColor="#ff6b9d" />
                      <stop offset="100%" stopColor="#c471ed" />
                    </linearGradient>
                    <linearGradient id="fg3" x1="0" x2="1">
                      <stop offset="0%" stopColor="#c471ed" />
                      <stop offset="100%" stopColor="#f5a623" />
                    </linearGradient>
                  </defs>

                  <g className="transition-all duration-300 hover:opacity-100 opacity-90 cursor-pointer">
                    <polygon points="40,30 560,30 500,110 100,110" fill="url(#fg1)" opacity="0.25" stroke="url(#fg1)" strokeWidth="1.5" />
                    <text x="300" y="70" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">1. Discover</text>
                    <text x="300" y="92" textAnchor="middle" fill="#cfcfd7" fontSize="13">Google Map Pack • Instagram Explore • Citations</text>
                  </g>
                  
                  <g className="transition-all duration-300 hover:opacity-100 opacity-90 cursor-pointer">
                    <polygon points="100,130 500,130 450,210 150,210" fill="url(#fg2)" opacity="0.25" stroke="url(#fg2)" strokeWidth="1.5" />
                    <text x="300" y="170" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">2. Engage</text>
                    <text x="300" y="192" textAnchor="middle" fill="#cfcfd7" fontSize="13">Website Showcases • Salon Reels • DM Auto-menus</text>
                  </g>
                  
                  <g className="transition-all duration-300 hover:opacity-100 opacity-90 cursor-pointer">
                    <polygon points="150,230 450,230 410,310 190,310" fill="url(#fg3)" opacity="0.30" stroke="url(#fg3)" strokeWidth="1.5" />
                    <text x="300" y="270" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="18">3. Book</text>
                    <text x="300" y="292" textAnchor="middle" fill="#cfcfd7" fontSize="13">Frictionless 30s Web + WhatsApp Booking</text>
                  </g>
                  
                  <g className="transition-all duration-300 hover:opacity-100 opacity-90 cursor-pointer">
                    <polygon points="190,330 410,330 380,400 220,400" fill="url(#fg1)" opacity="0.35" stroke="url(#fg1)" strokeWidth="1.5" />
                    <text x="300" y="365" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="17">4. Convert</text>
                    <text x="300" y="387" textAnchor="middle" fill="#cfcfd7" fontSize="12">WhatsApp Reminders • Slots Syncing • Confirmation</text>
                  </g>
                  
                  <g className="transition-all duration-300 hover:opacity-100 opacity-90 cursor-pointer">
                    <polygon points="220,420 380,420 360,470 240,470" fill="url(#fg2)" opacity="0.45" stroke="url(#fg2)" strokeWidth="1.5" />
                    <text x="300" y="450" textAnchor="middle" fill="#fff" fontWeight="700" fontSize="16">5. Retain &amp; Refer</text>
                  </g>
                </svg>
              </div>

              {/* Right Side: Funnel cards */}
              <div className="space-y-4">
                {[
                  { icon: '🎯', title: 'Top of funnel — Discovery', desc: 'Google Maps Local 3-Pack, optimized GMB listings, geo-targeted SEO landing pages, and Instagram content ensure local prospects find you first.' },
                  { icon: '✨', title: 'Mid funnel — Trust & engagement', desc: 'A stunning, high-speed Next.js website, stylist profile videos, before/after hair/skin portfolios, and review proof get visitors excited.' },
                  { icon: '📅', title: 'Booking — frictionless conversion', desc: 'Frictionless web + WhatsApp self-scheduling channels operating 24/7. No password signups. Bookings sync directly with salon calendars.' },
                  { icon: '🔁', title: 'Retention — loyalty & referrals', desc: 'Automated points programs, birthday campaigns, review request collection, and refer-a-friend bonuses keep customers coming back.' }
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-white/5 bg-gradient-to-r from-white/[0.02] to-transparent p-5 hover:border-amber-500/30 transition-all duration-300">
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-lg border border-white/5">{item.icon}</div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-base">{item.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Growth System Solutions Section */}
        <section id="services" className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-xs font-semibold tracking-wider text-violet-400 uppercase">The 21TechGlory Solution</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                A Complete <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Salon Growth System</span> — Built Once, Profits Forever
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">We don't build basic standalone websites. We design unified customer booking systems that continuously fill slots, earn reviews, and dominate local search.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '💻',
                  title: 'Premium Salon Website Design',
                  desc: 'A stunning, custom web application built to represent your brand online. Fully responsive on mobile, loads instantly, and optimized to guide local visitors into making immediate bookings.',
                  bullet: ['Custom-coded pages — no stock templates', 'Dynamic services catalog & prices list', 'Stylist portfolios & specialties showcase', 'Before/after treatments gallery', 'Seamless call-to-actions (CTAs)']
                },
                {
                  icon: '📅',
                  title: 'Online Appointment Booking System',
                  desc: 'Enable clients to self-schedule directly via your site. Real-time availability blocks slots automatically, supports deposits to reduce cancellations, and syncs seamlessly with Google Calendar.',
                  bullet: ['Instant slot selection in 30 seconds', 'Automated calendar synchronization', 'Advance payments & deposit captures', 'Supports multi-branch allocation', 'No third-party commission percentages']
                },
                {
                  icon: '💬',
                  title: 'WhatsApp Booking Automation',
                  desc: 'Turn India\'s most popular messaging app into your primary bookings intake. Intelligent chatbots guide users from initial chat to a confirmed slot. Send automatic reminders to cut no-shows.',
                  bullet: ['WhatsApp Business API configuration', 'Self-scheduling chat menu scripts', 'Automated 24h & 2h appointment reminders', 'Post-service review collector messages', 'Re-engagement broadcasts to prior clients']
                },
                {
                  icon: '📸',
                  title: 'Instagram Integration & Funnel',
                  desc: 'Convert social profile engagement into booked appointments. Direct messages, story mentions, and post comments trigger automated bot flows that route users straight to booking channels.',
                  bullet: ['Comment-to-DM automated responder', 'Story sticker link placements', 'Monthly Reels styling & layout plans', 'Client photo sharing template kits', 'Optimized highlights architecture']
                },
                {
                  icon: '⭐',
                  title: 'Google Reviews Automation',
                  desc: 'Google reviews are critical for local maps SEO. Send review requests automatically to every happy client hours after checkout. Route negative reviews privately to management.',
                  bullet: ['Automatic review triggers via WhatsApp/SMS', 'Direct links straight to rating screen', 'Intelligent filter to check client sentiment', 'Pre-written response templates', 'Embed ratings directly on your site']
                },
                {
                  icon: '🎁',
                  title: 'Loyalty & Referral Programs',
                  desc: 'Turn one-time walk-ins into life-long salon advocates. Launch automated reward tiers, point systems, and digital gift cards. Motivate existing clients to refer friends for discounts.',
                  bullet: ['Point balance trackers per client', 'Silver, Gold & Platinum membership tiers', 'Automated birthday discount triggers', 'Unique referral codes and link rewards', 'Prepaid package deals and cards']
                },
                {
                  icon: '🔍',
                  title: 'Beauty Salon SEO Services',
                  desc: 'Rank at the absolute top of Google search results in your target service areas. Capture local intent searches for hairstyles, skin treatments, bridal setups, and spa services.',
                  bullet: ['Google Business Profile local optimization', 'NAP citations across 60+ directories', 'Optimized individual service pages', 'Targeted regional landing pages', 'Monthly content updates & local keyword map']
                },
                {
                  icon: '📊',
                  title: 'Salon Marketing Services',
                  desc: 'Expertly managed digital ads targeted at clients ready to book now. Run Instagram reels campaigns, Google search ads, and local geo-fenced retargeting to maximize client conversion.',
                  bullet: ['Highly optimized Meta (Instagram/FB) Ads', 'Google Maps search placement campaigns', 'Custom retargeting for website visitors', 'Local zip-code targeted offers', 'Transparent monthly ROI reporting']
                },
                {
                  icon: '🤖',
                  title: 'AI Chatbot & CRM',
                  desc: 'An AI assistant trained on your menu, policies, and availability. Answers customer questions 24/7, schedules visits, and synchronizes lead data directly into a unified CRM database.',
                  bullet: ['Multi-channel AI chat (Web + WhatsApp)', 'Trained on your custom salon prices', 'Automatic CRM data entries & tagging', 'Smart upgrade recommendations', 'Direct handoffs to human staff']
                }
              ].map((s, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent p-7 hover:border-violet-500/35 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl bg-white/5 border border-white/5 mb-5 group-hover:scale-110 transition-all duration-300">{s.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                  </div>
                  <ul className="space-y-2.5 border-t border-white/5 pt-5 text-xs text-zinc-300">
                    {s.bullet.map((b, i) => (
                      <li key={i} className="flex gap-2 items-center">
                        <span className="text-amber-500">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-xs font-semibold tracking-wider text-emerald-400 uppercase">Automation Workflow</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                Inside Our <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">WhatsApp Booking Engine</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">See how our automated booking systems work behind the scenes to guide prospects from inquiry to confirmed bookings.</p>
            </div>

            <div className="relative p-6 bg-white/[0.01] border border-white/5 rounded-2xl overflow-x-auto">
              <div className="min-w-[800px] py-4">
                <svg viewBox="0 0 1100 320" className="w-full h-auto">
                  <defs>
                    <linearGradient id="flowG" x1="0" x2="1">
                      <stop offset="0%" stopColor="#25D366" />
                      <stop offset="50%" stopColor="#f5a623" />
                      <stop offset="100%" stopColor="#ff6b9d" />
                    </linearGradient>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                      <path d="M0,0 L10,5 L0,10 Z" fill="#f5a623" />
                    </marker>
                  </defs>

                  <path d="M70 160 Q 200 60, 320 160 T 570 160 T 820 160 T 1030 160" stroke="url(#flowG)" strokeWidth="2" fill="none" strokeDasharray="6 6" markerEnd="url(#arrow)" opacity="0.7" />

                  {[
                    { cx: 70, icon: '💬', title: 'Client Message', desc: 'Sends message: "Do you have slots today?"' },
                    { cx: 320, icon: '📋', title: 'Interactive Menu', desc: 'Chatbot offers salon menu, service categories, and time slots' },
                    { cx: 570, icon: '💳', title: 'UPI / Card Payment', desc: 'Secure deposit request sent via Razorpay integration link' },
                    { cx: 820, icon: '🔔', title: 'Auto Reminders', desc: 'Confirmations, 24h and 2h follow-up alerts sent out' },
                    { cx: 1030, icon: '⭐', title: 'Review Collector', desc: 'Auto WhatsApp request fires to gather Google ratings' }
                  ].map((step, idx) => (
                    <g key={idx}>
                      <circle cx={step.cx} cy="160" r="36" fill="#0d0d14" stroke={idx === 0 ? '#25D366' : idx === 2 ? '#ff6b9d' : '#f5a623'} strokeWidth="2" />
                      <text x={step.cx} y="167" textAnchor="middle" fontSize="22" fill="#fff">{step.icon}</text>
                      <text x={step.cx} y="222" textAnchor="middle" fontSize="13" fill="#cfcfd7" fontWeight="600">{step.title}</text>
                      <text x={step.cx} y="242" textAnchor="middle" fontSize="11" fill="#888">{step.desc}</text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-xs font-semibold tracking-wider text-violet-400 uppercase">Built For Every Beauty Business</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                Whether You Run One Chair Or A Chain — <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">We Scale With You</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">Our custom booking solutions and local search systems are configured to fit your exact operational structure.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '💇‍♀️', title: 'Unisex Salons', desc: 'Haircuts, beard styling, colors, and spa treatments bookable online by specialist.' },
                { icon: '💄', title: 'Beauty Parlours', desc: 'Facials, wax setups, threadings, and bridal packages organized for conversion.' },
                { icon: '🧖‍♀️', title: 'Spas & Wellness', desc: 'Therapy slot blocks, recurring memberships, digital gift cards, and relaxing layouts.' },
                { icon: '✨', title: 'Skin & Hair Clinics', desc: 'Advanced skincare consults, treatment before/after arrays, and trust validation.' },
                { icon: '💅', title: 'Nail Studios', desc: 'Interactive nail art catalogs, color choice profiles, and Instagram-first funnels.' },
                { icon: '👰', title: 'Bridal Studios', desc: 'High-ticket consulting forms, custom date trackers, and bridal showcase albums.' },
                { icon: '🏬', title: 'Multi-Branch Chains', desc: 'Unified branding, separate location booking managers, and centralized reporting.' },
                { icon: '🏠', title: 'At-Home Services', desc: 'Location radius filters, booking pin-code verification, and smart routes.' }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] p-6 hover:border-amber-500/20 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-white mb-2 text-base">{item.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 90 Days Outcomes Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">The Outcomes</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                What Happens In <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">90 Days</span> With Our System
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">We focus on building automated channels that show measurable, positive ROI for your business.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: '3.5x', title: 'More Bookings', desc: 'Direct from 24/7 web + WhatsApp booking entrypoints' },
                { metric: '-68%', title: 'No-Show Rates', desc: 'Reduced through auto WhatsApp alerts and deposit bookings' },
                { metric: '+220%', title: 'Repeat Customers', desc: 'Brought back by loyalty systems and smart win-back sequences' },
                { metric: '#1', title: 'Google Maps Ranking', desc: 'Owner status for local searches across 50 key search terms' },
                { metric: '5x', title: 'Google Reviews', desc: 'Generated via our automated post-visit checkouts' },
                { metric: '15+ hrs', title: 'Time Saved Weekly', desc: 'No more booking entry sheets or manual WhatsApp follow-ups' },
                { metric: '+40%', title: 'Ticket Sizes', desc: 'Improved through automated service upgrade suggestions' },
                { metric: '100%', title: 'Owner Visibility', desc: 'A dashboard that manages schedules and tracking on auto-pilot' }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent p-6 text-center hover:border-amber-500/20 transition-all duration-300">
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">{item.metric}</div>
                  <h4 className="font-bold text-white mt-3 text-sm">{item.title}</h4>
                  <p className="text-zinc-500 text-xs mt-2 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Calculator Section */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/25 bg-rose-500/5 text-xs font-semibold tracking-wider text-rose-400 uppercase">Revenue Calculator</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                See <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">How Much Revenue</span> You're Leaving On The Table
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">Use the sliders below to estimate the business leakage happening due to manual scheduling and no-shows.</p>
            </div>

            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-stretch">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
                <h3 className="text-xl font-bold text-white mb-6">Your Salon Details</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-zinc-300 text-sm font-medium">Avg bookings per day</label>
                      <span className="text-white font-bold">{bookings}</span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="80" 
                      value={bookings} 
                      onChange={(e) => setBookings(Number(e.target.value))}
                      className="w-full accent-amber-500" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-zinc-300 text-sm font-medium">Avg ticket size (₹)</label>
                      <span className="text-white font-bold">₹{ticket}</span>
                    </div>
                    <input 
                      type="range" 
                      min="200" 
                      max="5000" 
                      step="50" 
                      value={ticket} 
                      onChange={(e) => setTicket(Number(e.target.value))}
                      className="w-full accent-amber-500" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-zinc-300 text-sm font-medium">Current no-show rate</label>
                      <span className="text-white font-bold">{noshow}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="60" 
                      value={noshow} 
                      onChange={(e) => setNoshow(Number(e.target.value))}
                      className="w-full accent-amber-500" 
                    />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-zinc-300 text-sm font-medium">Missed calls / week</label>
                      <span className="text-white font-bold">{missedCalls}</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="200" 
                      value={missedCalls} 
                      onChange={(e) => setMissedCalls(Number(e.target.value))}
                      className="w-full accent-amber-500" 
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/20 p-8 bg-gradient-to-b from-[#0f0f17] to-[#08080d] flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Estimated Monthly Loss</div>
                  <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 bg-clip-text text-transparent mt-2">
                    {formatCurrency(loss)}
                  </div>
                  <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
                    Estimated monthly revenue leakage occurring due to missed customer calls, no-show slots, and zero retention follow-ups.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="rounded-xl p-4 bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Recovered / Month</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">{formatCurrency(recovered)}</div>
                    <div className="text-[11px] text-zinc-400 mt-1">Expected recovery with 21TechGlory</div>
                  </div>
                  <div className="rounded-xl p-4 bg-white/[0.03] border border-white/5">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Annual Upside</div>
                    <div className="text-xl font-bold text-white mt-1">{formatCurrency(annualUpside)}</div>
                    <div className="text-[11px] text-zinc-400 mt-1">New annual growth target</div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 mt-6 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 hover:from-amber-600 hover:via-rose-600 hover:to-violet-600 text-zinc-950 font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Recover This Revenue →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">Our Process</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                How We <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Scale Your Salon</span> In 30 Days
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">A clear, phased implementation timeline. No guesswork. No launch delays.</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/40 via-rose-500/40 to-violet-500/10 -translate-x-1/2" />

              <div className="space-y-12">
                {[
                  { step: '01', title: 'Discovery & Strategy Call', desc: 'We audit your current Google map ranking, citations directory presence, and salon booking intake setup to map optimization objectives.' },
                  { step: '02', title: 'Brand & Website Design', desc: 'Our team designs a premium, customized salon website optimized to load instantly and convert mobile traffic efficiently.' },
                  { step: '03', title: 'Booking & Automation Setup', desc: 'We integrate online appointment scheduling options, deploy custom WhatsApp message notifications, and configure GMB review requests.' },
                  { step: '04', title: 'SEO & Local Domination', desc: 'We build local NAP directory citations, execute target on-page keyword maps, and format schema data layers.' },
                  { step: '05', title: 'Launch & Team Handover', desc: 'The systems go live. We train your staff on using the scheduling calendar, managing CRM databases, and tracking checkouts in under an hour.' },
                  { step: '06', title: 'Optimize & Scale', desc: 'We track monthly traffic profiles, target search query improvements, analyze customer return metrics, and update ad campaigns.' }
                ].map((p, idx) => (
                  <div key={idx} className="relative flex flex-col md:flex-row gap-8 items-start">
                    <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-end md:text-right' : 'md:order-2 md:justify-start md:text-left'} pl-12 md:pl-0`}>
                      <div className="max-w-md">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-500">Step {p.step}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{p.title}</h3>
                        <p className="text-zinc-400 text-sm mt-2 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>

                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-amber-500 -translate-x-1/2 flex items-center justify-center text-xs font-bold text-amber-500 z-10">
                      {p.step}
                    </div>

                    <div className="w-full md:w-1/2 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agency Comparison Section */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-xs font-semibold tracking-wider text-violet-400 uppercase">Why 21TechGlory</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                Generic Web Agencies vs. <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">21TechGlory</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">We construct comprehensive digital scheduling engines designed to run autonomously and generate profits.</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0c0c14] overflow-hidden shadow-xl">
              <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-white/10 bg-white/[0.02] p-5 text-sm font-bold text-white uppercase tracking-wider">
                <div>Feature</div>
                <div className="text-zinc-500">Typical Agency</div>
                <div className="text-amber-500">21TechGlory</div>
              </div>
              <div className="divide-y divide-white/5 text-sm">
                {[
                  { name: 'Website Code', typical: 'Generic WordPress template', tech: 'Custom Next.js App, <1s load' },
                  { name: 'Scheduling Intake', typical: 'Phone calls or form emails', tech: 'Website + WhatsApp + Instagram' },
                  { name: 'Cancellations Protection', typical: 'None', tech: 'WhatsApp reminders + card deposit options' },
                  { name: 'GMB Reviews', typical: 'Ask customers manually', tech: 'Fully automated feedback funnel' },
                  { name: 'SEO Optimization', typical: 'Basic meta tags setup once', tech: 'Continuous maps Local Pack optimization' },
                  { name: 'Retention Automation', typical: 'None', tech: 'Points system + winback automations' },
                  { name: 'Launch Support', typical: 'Billed updates / hourly rates', tech: 'Dedicated growth manager included' },
                  { name: 'Expected Result', typical: 'A static website', tech: 'A compounding customer machine' }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-[1.5fr_1fr_1fr] p-5 hover:bg-white/[0.01] transition-all duration-200">
                    <div className="text-zinc-300 font-semibold">{row.name}</div>
                    <div className="text-rose-400/80">{row.typical}</div>
                    <div className="text-emerald-400 font-semibold">{row.tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">Technology Stack</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                Built On The <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Same Stack</span> As Modern Web Giants
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">Your site runs on modern framework technology architectures for security and performance stability.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { label: 'Next.js', sub: 'Framework', icon: '▲' },
                { label: 'Tailwind CSS', sub: 'Design Layouts', icon: '🎨' },
                { label: 'Vercel', sub: 'Cloud Hosting', icon: '⚡' },
                { label: 'OpenAI API', sub: 'AI Chatbot', icon: '🧠' },
                { label: 'WhatsApp Cloud API', sub: 'Messaging Engine', icon: '💬' },
                { label: 'Google API', sub: 'Local Maps/Reviews', icon: '🔍' },
                { label: 'Razorpay', sub: 'Payments Intake', icon: '💳' },
                { label: 'Cal.com', sub: 'Calendars Sync', icon: '📅' },
                { label: 'PostHog', sub: 'Analytics', icon: '📊' },
                { label: 'Supabase', sub: 'Database Layers', icon: '🗄️' },
                { label: 'Resend', sub: 'Email Triggers', icon: '📧' },
                { label: 'n8n', sub: 'Automations', icon: '⚙' }
              ].map((t, idx) => (
                <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.01] hover:border-amber-500/30 p-5 text-center transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-2">{t.icon}</div>
                  <h4 className="font-bold text-white text-sm">{t.label}</h4>
                  <p className="text-zinc-500 text-[10px] mt-1">{t.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO Process Section */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-xs font-semibold tracking-wider text-violet-400 uppercase">Google Maps Domination</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                How We Get You To <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">#1 On Google Maps</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-400">Our structured local SEO workflow drives Google Local Pack search visibility.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: '📍', title: 'GBP Optimization', desc: 'Complete setup of your Google Business Profile with geotagged service photos, categories list, posts, and Q&A optimization.' },
                { icon: '🔗', title: 'NAP Citations', desc: 'Deploy consistent Name, Address, and Phone listings across key local directories Yelp, Justdial, Sulekha, and 50+ directory catalogs.' },
                { icon: '⭐', title: 'Review Velocity', desc: 'Setup automated post-appointment review messages. High ratings frequency is a core Google Maps search ranking signal.' },
                { icon: '📝', title: 'Local Content Mapping', desc: 'Author geo-targeted page copies like "Bridal Studio in Indiranagar", "Hair Spa in HSR Layout" to rank for transactional keywords.' },
                { icon: '📈', title: 'Rank Auditing & Tuning', desc: 'Track Maps rankings, audit local competitor changes, and continuously tune citation records to solidify rank status.' }
              ].map((item, idx) => (
                <div key={idx} className="rounded-xl border border-white/5 bg-white/[0.01] p-6 hover:border-violet-500/30 transition-all duration-300">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-white text-base mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">Testimonials</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                What Salon Owners Say About <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Working With Us</span>
              </h2>
            </div>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex w-max gap-6 px-4 animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
              {Array.from({ length: 2 }).map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: 'Priya Sharma', role: 'Owner, Glow Unisex Salon — Bangalore', text: 'Before 21TechGlory, I was manually replying to 80 WhatsApp messages a day. Now my bookings happen automatically while I focus on my clients. My weekday occupancy went from 40% to 85% in just 3 months.' },
                    { name: 'Meera Reddy', role: 'Founder, Bliss Beauty Studio — Bangalore', text: 'We were invisible on Google. After their SEO work, we\'re now #1 for \'best beauty parlour in HSR Layout\'. We get 30+ walk-ins per week from Google alone. The ROI is insane.' },
                    { name: 'Rahul Menon', role: 'Director, Serene Spa & Wellness — Kochi', text: 'Their WhatsApp automation alone saved my reception 15 hours a week. And the deposit booking system cut my no-shows from 35% to under 10%. This is the best investment we\'ve made in 8 years.' },
                    { name: 'Dr. Nisha Iyer', role: 'Founder, Clear Skin Clinic — Chennai', text: 'As a skin clinic, trust is everything. Their website + Google Reviews automation built our online reputation from 12 reviews to 380+ in 6 months. Consultations doubled. Game changer.' }
                  ].map((t, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-[#0c0c14] p-7 w-[420px] flex-shrink-0 flex flex-col justify-between">
                      <div>
                        <div className="text-amber-500 mb-3">★★★★★</div>
                        <p className="text-zinc-300 text-sm italic leading-relaxed">"{t.text}"</p>
                      </div>
                      <div className="flex items-center gap-3 mt-6 border-t border-white/5 pt-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center font-bold text-zinc-950 text-sm">
                          {t.name[0]}
                        </div>
                        <div>
                          <div className="text-white font-bold text-xs">{t.name}</div>
                          <div className="text-zinc-500 text-[10px] mt-0.5">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expanded Educational Article for Skincare/Salon SEO */}
        <section className="py-24 border-t border-white/5 bg-black/20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/5 text-xs font-semibold tracking-wider text-violet-400 uppercase">The Complete Guide</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                Why Every Modern Salon Needs A <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Digital Growth System</span>
              </h2>
            </div>

            <article className="prose prose-invert max-w-none text-zinc-300 space-y-8 text-base sm:text-lg leading-relaxed">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">The salon and beauty parlour industry has changed forever.</h3>
                <p>Five years ago, owning a salon meant providing great service, securing a good location, and hoping for word-of-mouth. Today, your competitors aren't just the shops down the street — they're the salons with a sleek Instagram, instant WhatsApp booking widgets, 500 five-star Google reviews, and a website that loads in under a second. Customers today don't "call to book" — they Google, scroll Instagram, read reviews, and click a button. If you're not where they're searching, you're invisible. And in 2026, invisible salons close.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why a salon website is your #1 sales asset.</h3>
                <p>Your salon website is no longer a digital brochure — it's your 24/7 sales representative. A well-built beauty salon website does five things at once: it builds trust through professional design, showcases your services with pricing transparency, accepts bookings without human intervention, captures leads from visitors who aren't yet ready to book, and signals authority to Google so you rank higher in local searches. The salons we build websites for see their booking-conversion rates jump from under 2% to over 11% — meaning every 100 visitors now book 11 appointments instead of 2. That's the difference between scraping by and scaling.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Online salon booking system: why phones are killing your business.</h3>
                <p>Every missed call is a lost customer who simply books your competitor instead. Research shows 62% of customers won't leave a voicemail or call back if a salon doesn't pick up on the first try. Modern customers expect Amazon-level convenience — pick a service, pick a time, click "Confirm." Our online salon booking system does exactly that. It works on your website, inside WhatsApp, and from Instagram. It checks real-time stylist availability, blocks out time accurately by service, accepts deposits to prevent no-shows, and syncs with Google Calendar so your team always knows what's coming. The result? Your salon is open for business 24/7 — including 11pm on a Sunday when a bride-to-be is panic-searching for a trial appointment.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">WhatsApp: the booking channel Indian salons ignore at their peril.</h3>
                <p>India has 535 million WhatsApp users. They open the app 23 times a day on average. Yet most salons still rely on phone calls and walk-ins. We turn WhatsApp into your highest-converting booking channel through the WhatsApp Business API. When a client messages "Hi" — they instantly see a menu: "Book Appointment / Check Offers / Talk To Staff." They tap, choose service, pick time, and get a confirmation — all without your team typing a word. Then 24 hours before the appointment, an automated reminder goes out. 1 hour before, another. After the service, a thank-you message + Google review request fires automatically. Three weeks later, a "We miss you" win-back message rekindles the relationship. This is what reduces no-shows by 68% and triples repeat customers.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Instagram is not a marketing channel. It's a booking funnel.</h3>
                <p>Most salons post reels, get likes, and stop. That's not marketing — that's hoping. We turn Instagram into a structured funnel. Every reel ends with a clear CTA. Every story has a "Book Now" sticker. Every DMs and comment is auto-routed to WhatsApp where the booking automation closes the deal. We help you plan content monthly — transformation reels, before-and-afters, behind-the-scenes, client testimonials, and trending sounds — all optimized for the discovery algorithm. Beautiful posts don't grow salons. Beautiful posts plus structured funnels grow salons.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Google Reviews are the new word-of-mouth — and we automate it.</h3>
                <p>87% of customers read Google Reviews before choosing a salon. Salons with 50+ reviews and a 4.7+ rating get 5x more clicks than salons with under 20 reviews. So the obvious play is: get more reviews. But asking each client manually is awkward and your team forgets. Our Google Reviews automation fires within 2 hours of a completed service — exactly when satisfaction is peak. Happy clients are sent directly to your Google review page. Unhappy clients are routed privately to the owner for resolution — never bad-mouthing you in public. The result: you build a 5-star reputation publicly while privately fixing problems before they damage you.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Loyalty programs: the secret weapon of every 7-figure salon.</h3>
                <p>It costs 5x more to acquire a new customer than to retain an existing one. Yet most salons treat every client like a first-time visitor. We install a loyalty engine that automatically rewards visit frequency, unlocks tier benefits (Silver, Gold, Platinum members), gifts birthday and anniversary perks, and runs referral programs where existing clients earn rewards for bringing friends. Suddenly, your top 20% of customers are generating 60% of your revenue — and bringing in new clients at zero acquisition cost. This is how chains scale and individual salons explode.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Beauty salon SEO: the long game that compounds for years.</h3>
                <p>Paid ads stop the day you stop paying. SEO is the only marketing investment that compounds. When we get you to #1 on Google Maps for "salon near me," "best beauty parlour in [your area]," "bridal makeup [city]," and 50+ other keywords — you get free, ready-to-book traffic forever. Our salon SEO process covers Google Business Profile optimization (the single highest-ROI activity for local salons), local citation building, on-page SEO for every service you offer, geo-targeted landing pages for every area you serve, a monthly content engine targeting low-competition high-intent searches, and proactive review generation (which itself is a ranking factor). Six months in, you stop needing ads. Twelve months in, your salon is the default choice in your city.</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Why 21TechGlory is the salon partner you've been waiting for.</h3>
                <p>Most agencies sell you a website and disappear. We're not most agencies. We're an integrated growth team — designers, developers, SEO specialists, automation engineers, and salon marketing strategists — all working together to install one thing: a predictable, automated customer-acquisition system for your beauty business. We've built systems for over 50 salons, spas, parlours and skin clinics across Bangalore, Chennai, Hyderabad, Kochi, and beyond. We don't just understand websites. We understand the salon business — slot management, walk-in vs. appointment dynamics, stylist commission structures, peak-time pricing, package upselling, and the silent revenue killers that drain your margins every month. When you work with us, you're not hiring a vendor. You're installing a growth partner.</p>
              </div>
            </article>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">FAQs</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-5">
                Salon Owners' Most <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Common Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'How long does it take to launch my salon website + booking system?', a: 'Most projects go live in 15–30 days from kickoff. The website typically takes 2–3 weeks, with booking, WhatsApp, and SEO setups happening in parallel. We move fast, but never at the cost of quality.' },
                { q: 'Do I need to be tech-savvy to run this?', a: 'Not at all. Our dashboards are designed for salon owners — not engineers. We train your front desk in under 60 minutes. If you can use WhatsApp and Google, you can run our entire system.' },
                { q: 'How is your booking system different from Fresha or Zenoti?', a: 'Off-the-shelf platforms work, but they\'re rigid, expensive on scale, and your booking page lives on their domain. We build your booking system on your own website, fully branded, with WhatsApp + Instagram + SEO baked in — and no per-booking commissions ever.' },
                { q: 'What if my salon is in a Tier-2 or Tier-3 city?', a: 'Even better. Competition is lower, which means ranking #1 on Google is faster and cheaper. We\'ve built systems for salons everywhere from Bangalore to small-town Tamil Nadu and Kerala.' },
                { q: 'Can you handle multi-branch salons?', a: 'Absolutely. Our system supports unlimited branches, individual GMB management, branch-wise analytics, centralized inventory, and unified branding. We\'ve helped chains scale from 2 outlets to 12+.' },
                { q: 'Do you guarantee results?', a: 'We guarantee a system that\'s professionally built and fully functional. Real results depend on execution — but our 50+ salon clients consistently see 3x+ booking growth in 90 days. We share case studies on our discovery call.' },
                { q: 'What does pricing look like?', a: 'Salon packages start at ₹25,000 for a starter website + booking setup, going up to ₹2L+ for full multi-branch growth systems with ongoing SEO and marketing. We tailor every quote to your goals. Book a free audit to get pricing for your specific needs.' },
                { q: 'What happens after launch?', a: 'You get a dedicated growth manager, monthly performance reports, and ongoing optimization on SEO, ads, automations, and content. We\'re not a "build and bounce" agency — we stick around to scale you.' }
              ].map((item, idx) => (
                <details key={idx} className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent overflow-hidden transition-all duration-300 open:border-amber-500/35">
                  <summary className="list-none cursor-pointer p-5 flex justify-between items-center gap-4 text-white font-bold">
                    <span>{item.q}</span>
                    <span className="text-amber-500 transform group-open:rotate-180 transition-transform duration-300">⌄</span>
                  </summary>
                  <div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA section */}
        <section id="contact" className="py-24 border-t border-white/5 pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#101019] via-[#0c0c14] to-[#08080d] p-8 sm:p-16 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-[-100px] left-[-100px] w-80 h-80 rounded-full bg-amber-500/10 filter blur-3xl pointer-events-none" />
              <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-rose-500/10 filter blur-3xl pointer-events-none" />

              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-500/5 text-xs font-semibold tracking-wider text-amber-500 uppercase">Limited Slots This Month</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-6 leading-tight">
                Your Competitor's Salon Is Already <span className="bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">Booking Online.</span>
                <br />Will Yours Be Next?
              </h2>
              <p className="mt-6 text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                Book a free 30-minute Salon Growth Audit. We'll review your current website, Google Maps local rankings, and client scheduling flow to show you exactly how to capture more bookings.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 hover:from-amber-600 hover:via-rose-600 hover:to-violet-600 text-zinc-950 font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Claim My Free Salon Audit →
                </button>
                <a 
                  href="https://wa.me/917795354043" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
                >
                  💬 Chat On WhatsApp
                </a>
              </div>
              <p className="mt-7 text-xs text-zinc-500">⭐ Trusted by 50+ salons, spas & beauty parlours across South India · ⚡ 100% money-back guarantee if your system isn't live in 30 days</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Floating CTA buttons */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed left-6 bottom-6 z-50 px-5 py-3.5 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 text-zinc-950 font-bold rounded-xl shadow-[0_10px_30px_rgba(245,166,35,0.35)] hover:shadow-[0_15px_35px_rgba(245,166,35,0.45)] transition-all duration-300 transform hover:-translate-y-0.5 hidden sm:flex items-center gap-2"
      >
        📅 Free Salon Audit
      </button>

      <a 
        href="https://wa.me/917795354043?text=Hi%2C%20I%27d%20like%20a%20free%20Salon%20Growth%20Audit" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden="true">
          <path d="M19.11 17.18c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.14-.18.27-.7.87-.86 1.05-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.11 2.82.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.82-1.27.22-.62.22-1.16.16-1.27-.06-.11-.24-.18-.51-.31zM16 3C9.37 3 4 8.37 4 15c0 2.12.55 4.11 1.5 5.85L4 28l7.31-1.5A12.9 12.9 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3z" />
        </svg>
      </a>

      {/* Exit Intent Pop-up Modal */}
      <AnimatePresence>
        {exitModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExitModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative max-w-md w-full bg-gradient-to-b from-[#10101a] to-[#08080d] border border-amber-500/30 rounded-2xl p-8 shadow-2xl z-10 text-center"
            >
              <button 
                onClick={() => setExitModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white text-xl font-bold cursor-pointer"
              >
                ×
              </button>
              <span className="text-[11px] font-bold tracking-[0.2em] text-amber-500 uppercase">Wait — Don't Miss This</span>
              <h3 className="text-2xl font-extrabold text-white mt-3 mb-2">
                Free 30-min <span className="bg-gradient-to-r from-amber-500 to-rose-400 bg-clip-text text-transparent">Salon Growth Audit</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                We'll show you exactly where your salon is losing bookings — and how to fix it. No pitch. Just insights.
              </p>
              <a 
                href="https://wa.me/917795354043?text=Hi%2C%20I%27d%20like%20my%20free%20Salon%20Growth%20Audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-violet-500 hover:from-amber-600 hover:via-rose-600 hover:to-violet-600 text-zinc-950 font-bold rounded-xl shadow-lg transition-all duration-300"
              >
                Claim My Free Audit →
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
