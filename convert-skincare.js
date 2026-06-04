const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const htmlPath = 'c:/Users/pramo/OneDrive/Documents/21techglory 2.0/21techglory-salon-landing-page-premium.html';
const outPath = 'c:/Users/pramo/OneDrive/Documents/21techglory 2.0/21techglory/app/skincare/page.tsx';
const dir = path.dirname(outPath);

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const rawHTML = fs.readFileSync(htmlPath, 'utf8');

const $ = cheerio.load(rawHTML);

// 1. Extract styles
const styleContent = $('style').html();

// 2. Remove nav and footer from body
$('nav').remove();
$('footer').remove();

// 3. Find CTA buttons and update them
// Button classes usually include 'btn' or 'btn-primary'
$('a.btn').each((i, el) => {
    const text = $(el).text().toLowerCase();
    const href = $(el).attr('href');
    
    // If it's a whatsapp button
    if (text.includes('whatsapp') || (href && href.includes('wa.me'))) {
        $(el).attr('href', 'https://wa.me/917795354043');
    } else if (text.includes('email') || (href && href.includes('mailto:'))) {
        // Leave email alone or handle it if necessary
    } else {
        // Change to modal trigger
        $(el).attr('href', '#');
        $(el).attr('data-modal-trigger', 'true'); // We'll replace this with onClick in string later
    }
});

// Remove script tags from body
const scriptContents = [];
$('script').each((i, el) => {
    if ($(el).html()) {
        scriptContents.push($(el).html());
    }
    $(el).remove();
});

// We'll wrap the body content
let bodyInner = $('body').html();

// 4. String replacements for JSX
bodyInner = bodyInner.replace(/class=/g, 'className=');
bodyInner = bodyInner.replace(/for=/g, 'htmlFor=');
bodyInner = bodyInner.replace(/<!--[\s\S]*?-->/g, ''); // Remove HTML comments
bodyInner = bodyInner.replace(/<br>/g, '<br />');
bodyInner = bodyInner.replace(/<hr>/g, '<hr />');

// Fix unclosed img tags
bodyInner = bodyInner.replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />');

// Fix unclosed input tags
bodyInner = bodyInner.replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />');

// Replace style="key: value" with style={{key: 'value'}}
// A simplistic approach:
bodyInner = bodyInner.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const objStr = rules.map(rule => {
        let [key, val] = rule.split(':').map(s => s.trim());
        if (!key) return '';
        // camelCase key, but ignore CSS variables
        if (!key.startsWith('--')) {
            key = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        }
        return `"${key}":"${val}"`;
    }).filter(Boolean).join(',');
    return `style={{${objStr}}}`;
});

// Fix any raw `<` that aren't tags
bodyInner = bodyInner.replace(/< (?=\d)/g, '&lt; '); // specifically handles `< 1s` etc.

// Replace data-modal-trigger with onClick
bodyInner = bodyInner.replace(/data-modal-trigger="true"/g, `onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}`);

// Fix svg tags missing closing or having issues - cheerio handles most of it, but let's make sure
// svgs are usually fine if parsed by cheerio properly, but viewBox vs viewbox
bodyInner = bodyInner.replace(/viewbox=/g, 'viewBox=');
bodyInner = bodyInner.replace(/stroke-width=/g, 'strokeWidth=');
bodyInner = bodyInner.replace(/stroke-linecap=/g, 'strokeLinecap=');
bodyInner = bodyInner.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
bodyInner = bodyInner.replace(/fill-rule=/g, 'fillRule=');
bodyInner = bodyInner.replace(/clip-rule=/g, 'clipRule=');
bodyInner = bodyInner.replace(/stop-color=/g, 'stopColor=');
bodyInner = bodyInner.replace(/text-anchor=/g, 'textAnchor=');
bodyInner = bodyInner.replace(/font-weight=/g, 'fontWeight=');
bodyInner = bodyInner.replace(/font-size=/g, 'fontSize=');
bodyInner = bodyInner.replace(/stroke-dasharray=/g, 'strokeDasharray=');
bodyInner = bodyInner.replace(/stroke-dashoffset=/g, 'strokeDashoffset=');
bodyInner = bodyInner.replace(/marker-end=/g, 'markerEnd=');

// Find the main DOMContentLoaded script to put in useEffect
// In the original file, it was a gsap script

// Remove the wa-float element
bodyInner = bodyInner.replace(/<a[^>]*class="wa-float"[^>]*>[\s\S]*?<\/a>/g, '');
let effectScript = `
    const ScrollTrigger = window.ScrollTrigger;
    const gsap = window.gsap;
    
    // Just a safeguard if GSAP isn't loaded globally via script tags in Next.js yet, 
    // but the original used CDNs. For Next.js, we should let them load or assume they are there if the user handles it.
    // Given the hospital page used vanilla IntersectionObserver for most, we should check if GSAP is used.
`;

const jsScript = scriptContents.find(s => s.includes('gsap') || s.includes('ScrollTrigger'));
if (jsScript) {
    // strip the DOMContentLoaded wrapper if present
    let innerJs = jsScript.replace(/document\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{/g, '');
    if (innerJs !== jsScript) {
        innerJs = innerJs.substring(0, innerJs.lastIndexOf('}')); // remove the closing of DOMContentLoaded
    }
    
    // strip window.addEventListener('load', () => { ... })
    let loadMatch = innerJs.match(/window\.addEventListener\('load',\s*\(\)\s*=>\s*\{/);
    if (loadMatch) {
        innerJs = innerJs.replace(/window\.addEventListener\('load',\s*\(\)\s*=>\s*\{/, '');
        // We also need to remove the closing `});` for the load event.
        // It's usually the last `});` before the exit intent CTA. Let's just do a string replacement for the exact structure or use a simpler approach.
        innerJs = innerJs.replace(/\s*\}\);\s*\/\*\s*=====\s*ROI Calculator/g, '\n  /* ===== ROI Calculator');
    }
    
    effectScript = innerJs;
}

const componentCode = `// @ts-nocheck
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
          ${effectScript}
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
      <style dangerouslySetInnerHTML={{ __html: \`
        ${styleContent}
      \` }} />
      
      ${bodyInner}
      
      <Footer />
      <StartProjectModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      
    </div>
  );
}
`;

fs.writeFileSync(outPath, componentCode, 'utf8');
console.log("Conversion complete!");
