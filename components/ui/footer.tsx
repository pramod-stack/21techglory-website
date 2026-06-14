"use client";

import Link from "next/link";
import Image from "next/image";
import { DIcons } from "dicons";
import { useTheme } from "next-themes";
import React from "react";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center rounded-full border border-white/10 bg-white/5">
        <button
          onClick={() => setTheme("light")}
          className="bg-black mr-3 rounded-full p-2 text-white dark:bg-background dark:text-white"
        >
          <DIcons.Sun className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>

        <button type="button" onClick={handleScrollTop} className="text-gray-400 hover:text-white transition-colors">
          <DIcons.ArrowUp className="h-3 w-3" />
          <span className="sr-only">Top</span>
        </button>

        <button
          onClick={() => setTheme("dark")}
          className="dark:bg-black ml-3 rounded-full p-2 text-black dark:text-white"
        >
          <DIcons.Moon className="h-5 w-5" strokeWidth={1} />
          <span className="sr-only">T</span>
        </button>
      </div>
    </div>
  );
};

const navigation = {
  categories: [
    {
      id: "menu",
      name: "Menu",
      sections: [
        {
          id: "services",
          name: "Services",
          items: [
            { name: "Web Development", href: "/services/web-development" },
            { name: "SEO", href: "/services/seo" },
            { name: "AI Automation", href: "/services/ai-automation" },
            { name: "CRM Systems", href: "/services/crm" },
            { name: "Paid Ads", href: "/services/paid-ads" },
          ],
        },
        {
          id: "industries",
          name: "Industries",
          items: [
            { name: "Skincare", href: "/skincare" },
            { name: "Hospitals", href: "/hospitals" },
          ],
        },
        {
          id: "company",
          name: "Company",
          items: [
            { name: "About Us", href: "/about" },
            { name: "Our Work", href: "/work" },
            { name: "Contact", href: "/contact" },
          ],
        },
        {
          id: "legal",
          name: "Legal",
          items: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-white/10 bg-white/5 rounded-xl p-2.5 transition-transform text-gray-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10`;

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black">
      <div className="relative mx-auto grid max-w-7xl items-start justify-center gap-6 p-10 pb-0 lg:flex lg:justify-between">
        <div className="flex flex-col items-center lg:items-start max-w-sm mb-8 lg:mb-0">
          <Link href="/" className="group flex items-center justify-center lg:justify-start mb-4">
            <p className="flex items-center justify-center rounded-full">
              <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">21TG</span>
            </p>
          </Link>
          <p className="bg-transparent text-center text-sm leading-relaxed text-gray-400 lg:text-left">
            21TechGlory is a full-service digital agency helping local and growing businesses dominate online. We build websites, run ads, automate systems, and generate leads that convert to real revenue. Based in Bangalore — serving clients across India.
          </p>
        </div>
        
        <div className="w-full lg:w-auto">
          {navigation.categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 leading-6"
            >
              {category.sections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-white font-semibold mb-4 tracking-wider text-sm uppercase">{section.name}</h3>
                  <ul
                    role="list"
                    aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                    className="flex flex-col space-y-3"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="border-b border-white/10"> </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-y-6 px-10 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <Link
            aria-label="WhatsApp"
            href="https://wa.me/917795354043"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.WhatsApp className="h-5 w-5" />
          </Link>
          <Link
            aria-label="Instagram"
            href="https://www.instagram.com/21_tech_glory/?hl=en"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.Instagram className="h-5 w-5" />
          </Link>
          <Link
            aria-label="LinkedIn"
            href="https://linkedin.com/company/21techglory"
            rel="noreferrer"
            target="_blank"
            className={Underline}
          >
            <DIcons.LinkedIn className="h-5 w-5" />
          </Link>
        </div>
        <ThemeToggle />
      </div>

      <div className="mx-auto mb-10 mt-10 flex flex-col justify-between text-center text-sm md:max-w-7xl text-gray-500">
        <div className="flex flex-row items-center justify-center gap-1">
          <span> © </span>
          <span>{new Date().getFullYear()}</span>
          <span className="font-semibold text-gray-300">21TechGlory</span>
          <span>. Built to grow your business.</span>
        </div>
      </div>
    </footer>
  );
}
