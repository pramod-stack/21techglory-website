import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { url, businessType } = await req.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Valid URL is required' }, { status: 400 });
    }

    let targetUrl = url.trim();
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
      targetUrl = `https://${targetUrl}`;
    }

    const startTime = Date.now();
    let isHttps = targetUrl.startsWith('https://');
    let responseTimeMs = 0;
    let isReachable = false;
    let htmlSnippet = '';
    let hasViewport = false;
    let hasTitle = false;
    let hasH1 = false;
    let hasMetaDescription = false;
    let hasWhatsAppLink = false;
    let hasForm = false;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(targetUrl, {
        method: 'GET',
        headers: {
          'User-Agent': '21TechGlory-Performance-Bot/2.1 (+https://21techglory.com)'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      responseTimeMs = Date.now() - startTime;
      isReachable = res.ok || res.status < 400;

      if (isReachable) {
        htmlSnippet = await res.text();
        const lower = htmlSnippet.toLowerCase();

        hasViewport = lower.includes('name="viewport"') || lower.includes("name='viewport'");
        hasTitle = lower.includes('<title>') && !lower.includes('<title></title>');
        hasH1 = lower.includes('<h1');
        hasMetaDescription = lower.includes('name="description"') || lower.includes("name='description'");
        hasWhatsAppLink = lower.includes('wa.me') || lower.includes('api.whatsapp.com');
        hasForm = lower.includes('<form') || lower.includes('type="submit"');
      }
    } catch (fetchErr) {
      // If external fetch is blocked by CORS or network, return clean fallback
      isReachable = false;
    }

    // Honest capability reporting per Section 6.2
    if (!isReachable) {
      return NextResponse.json({
        url: targetUrl,
        businessType: businessType || 'General Service',
        status: 'requires_engineer_review',
        isHttps,
        responseTimeMs: null,
        message: 'The target domain could not be analyzed via automated scanner. A 21TG growth engineer will perform a manual technical diagnostic within 4 business hours.',
        checks: {
          https: isHttps,
          mobileViewport: null,
          titleTag: null,
          h1Tag: null,
          metaDescription: null,
          whatsappDirect: null,
          inquiryForm: null,
        },
        recommendations: [
          'Verify server DNS and SSL handshake protocols.',
          'Schedule manual 4-hour performance audit for deep core web vitals profiling.'
        ]
      });
    }

    const recommendations: string[] = [];
    if (!hasViewport) recommendations.push('Missing explicit mobile viewport configuration.');
    if (!hasWhatsAppLink) recommendations.push('No direct 1-click WhatsApp triage channel detected for mobile visitors.');
    if (!hasForm) recommendations.push('No structured inquiry capture form found above the primary fold.');
    if (!hasH1) recommendations.push('Missing single semantic <h1> heading hierarchy for primary local keyword.');
    if (responseTimeMs > 1500) recommendations.push(`Initial response latency (${responseTimeMs}ms) exceeds the sub-second conversion threshold.`);

    return NextResponse.json({
      url: targetUrl,
      businessType: businessType || 'General Service',
      status: 'analyzed',
      isHttps,
      responseTimeMs,
      checks: {
        https: isHttps,
        mobileViewport: hasViewport,
        titleTag: hasTitle,
        h1Tag: hasH1,
        metaDescription: hasMetaDescription,
        whatsappDirect: hasWhatsAppLink,
        inquiryForm: hasForm,
      },
      recommendations,
      engineerReviewAvailable: true,
      slaHours: 4
    });
  } catch (err) {
    console.error('[Site Scan API Error]', err);
    return NextResponse.json({ error: 'Diagnostic scan could not be completed.' }, { status: 500 });
  }
}
