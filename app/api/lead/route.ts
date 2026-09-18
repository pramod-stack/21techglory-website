import { NextRequest, NextResponse } from 'next/server';

interface LeadPayload {
  intent?: string;
  modules?: string[];
  businessType?: string;
  website?: string;
  name: string;
  phone: string;
  email?: string;
  source?: string;
  auditScore?: number | null;
  visitorPath?: string[];
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadPayload;

    // Server-side validation
    if (!body.name || typeof body.name !== 'string' || body.name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Valid customer name is required.' },
        { status: 400 }
      );
    }

    if (!body.phone || typeof body.phone !== 'string' || body.phone.trim().length < 8) {
      return NextResponse.json(
        { error: 'Valid phone/WhatsApp number is required.' },
        { status: 400 }
      );
    }

    const sanitizedLead = {
      intent: body.intent || 'build_my_system',
      modules: Array.isArray(body.modules) ? body.modules : ['website', 'crm', 'whatsapp'],
      businessType: body.businessType || 'Local Business',
      website: body.website ? body.website.trim() : '',
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email ? body.email.trim() : '',
      source: body.source || 'website_direct',
      auditScore: typeof body.auditScore === 'number' ? body.auditScore : null,
      visitorPath: Array.isArray(body.visitorPath) ? body.visitorPath : [],
      receivedAt: new Date().toISOString(),
      status: 'pending_specialist_review',
      slaHours: 4,
    };

    // Forward to CRM Webhook or notification handler if configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sanitizedLead)
        });
      } catch (err) {
        console.error('[21TG Lead Webhook Error]', err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Lead received successfully. System architecture review scheduled within 4 business hours.',
        leadId: `21TG-${Math.floor(100000 + Math.random() * 900000)}`,
        data: sanitizedLead
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[21TG Lead API Error]', error);
    return NextResponse.json(
      { error: 'Unable to process lead submission at this time.' },
      { status: 500 }
    );
  }
}
