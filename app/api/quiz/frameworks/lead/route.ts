import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { readFileSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const { firstName, email, score, level } = await request.json()

    if (!firstName || !email || score === undefined || !level) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'CaseBuddy <hello@casebuddy.xyz>',
      to: email,
      subject: `Your Framework Quiz Results: ${level}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 16px;">
          <h1 style="font-size: 24px; color: #1A1A1A;">Hey ${firstName},</h1>
          <p style="font-size: 16px; color: #3D3D3D; line-height: 1.6;">
            Thanks for taking the Framework Quiz! Here are your results:
          </p>
          <div style="background: #F9F5FF; border-radius: 16px; padding: 24px; margin: 24px 0; text-align: center;">
            <p style="font-size: 48px; font-weight: 600; color: #1A1A1A; margin: 0;">${score}/10</p>
            <p style="font-size: 20px; color: #7C3AED; font-weight: 600; margin: 8px 0 0;">${level}</p>
          </div>
          <p style="font-size: 16px; color: #3D3D3D; line-height: 1.6;">
            Attached is your <strong>1-page Framework Cheat Sheet</strong> — a quick reference for the most common consulting frameworks.
          </p>
          <p style="font-size: 16px; color: #3D3D3D; line-height: 1.6;">
            Want to put these frameworks into practice? CaseBuddy runs realistic AI mock interviews so you can drill cases anytime.
          </p>
          <div style="text-align: center; margin: 32px 0;">
            <a href="https://apps.apple.com/app/casebuddy-ai/id6746489925" style="display: inline-block; background: #7C3AED; color: white; text-decoration: none; padding: 12px 32px; border-radius: 999px; font-weight: 600; font-size: 16px;">
              Try CaseBuddy Free
            </a>
          </div>
          <p style="font-size: 13px; color: #9C9690; text-align: center;">
            You received this email because you took the CaseBuddy Framework Quiz.
            <br />
            <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #9C9690;">Unsubscribe</a>
          </p>
        </div>
      `,
      attachments: [
        {
          filename: 'CaseBuddy_Framework_Cheat_Sheet.pdf',
          content: readFileSync(join(process.cwd(), 'public', 'images', 'framework-cheat-sheet.pdf')),
        },
      ],
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Quiz lead error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
