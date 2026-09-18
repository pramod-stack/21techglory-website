"use client";

// Lightweight analytics tracking layer for 21TechGlory Conversion Engine
// Supports GA4 (window.gtag) and console debug mode in development

type EventPayload = Record<string, any>;

export function trackEvent(eventName: string, payload?: EventPayload) {
  if (typeof window === "undefined") return;

  // Log in dev
  if (process.env.NODE_ENV === "development") {
    console.log(`[21TG Analytics] ${eventName}`, payload || {});
  }

  // Push to dataLayer if available
  if (Array.isArray((window as any).dataLayer)) {
    (window as any).dataLayer.push({
      event: eventName,
      ...payload,
      timestamp: new Date().toISOString(),
    });
  }

  // Push to GA4 gtag if initialized
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", eventName, payload);
  }
}

// Predefined event helpers matching prompt spec
export const Analytics = {
  event: (eventName: string, payload?: EventPayload) =>
    trackEvent(eventName, payload),

  problemCardClick: (problemId: string, problemTitle: string) =>
    trackEvent("problemCardClick", { problemId, problemTitle }),

  moduleToggle: (moduleId: string, action: "added" | "removed", currentModules: string[]) =>
    trackEvent("moduleToggle", { moduleId, action, currentModules }),

  systemPreset: (presetName: string, modules: string[]) =>
    trackEvent("systemPreset", { presetName, modules }),

  auditStart: (auditType: "growth" | "website") =>
    trackEvent("auditStart", { auditType }),

  auditComplete: (auditType: "growth" | "website", score: number, details?: EventPayload) =>
    trackEvent("auditComplete", { auditType, score, ...details }),

  webAuditSubmit: (url: string, businessType?: string) =>
    trackEvent("webAuditSubmit", { url, businessType }),

  ctaView: (zone: string, label: string) =>
    trackEvent("ctaView", { zone, label }),

  ctaClick: (zone: string, label: string, destination: string) =>
    trackEvent("ctaClick", { zone, label, destination }),

  formStep: (step: number, stepName: string, intent?: string) =>
    trackEvent("formStep", { step, stepName, intent }),

  formSubmit: (payload: EventPayload) =>
    trackEvent("generate_lead", payload),

  whatsappClick: (location: string) =>
    trackEvent("whatsappClick", { location }),

  caseStudyOpen: (caseStudyId: string, clientName: string) =>
    trackEvent("caseStudyOpen", { caseStudyId, clientName }),

  caseStudyRecommendationClick: (caseStudyId: string, targetPreset: string) =>
    trackEvent("caseStudyRecommendationClick", { caseStudyId, targetPreset }),

  footerLink: (column: string, label: string) =>
    trackEvent("footerLink", { column, label }),
};
