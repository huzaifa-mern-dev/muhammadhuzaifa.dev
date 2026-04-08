'use server';

import { Resend } from 'resend';

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface ContactActionResult {
  success: boolean;
  message?: string;
  error?: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactActionResult> {
  if (!formData.name?.trim()) {
    return { success: false, error: 'Name is required.' };
  }
  if (!formData.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return { success: false, error: 'A valid email address is required.' };
  }
  if (!formData.message?.trim() || formData.message.trim().length < 10) {
    return { success: false, error: 'Message must be at least 10 characters.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'muhammadhuzaifa.dev <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'mhuzaifa3737@gmail.com',
      subject: `New Contact Request: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    return { success: false, error: 'Internal Server Error' };
  }
}
