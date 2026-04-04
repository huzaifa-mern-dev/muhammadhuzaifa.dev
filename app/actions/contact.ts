/**
 * app/actions/contact.ts — Next.js Server Action
 *
 * Handles contact form submissions.
 * Currently simulates a send delay and returns success.
 * Wire Resend/Nodemailer here in Phase 5.
 */
'use server';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactActionResult> {
  // Basic server-side validation
  if (!formData.name?.trim()) {
    return { success: false, error: 'Name is required.' };
  }
  if (!formData.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return { success: false, error: 'A valid email address is required.' };
  }
  if (!formData.message?.trim() || formData.message.trim().length < 10) {
    return { success: false, error: 'Message must be at least 10 characters.' };
  }

  // TODO (Phase 5): Replace this block with Resend / Nodemailer
  // ─────────────────────────────────────────────────────────────
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: '...', to: '...', ... });
  // ─────────────────────────────────────────────────────────────

  // Simulate network latency of a real email provider
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
