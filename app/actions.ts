'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['francocarranza144@gmail.com'],
            subject: `Portfolio Contact: ${subject}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error('Resend error:', error);
            return { error: 'Something went wrong. Please try again later.' };
        }

        return { success: 'Message sent successfully!' };
    } catch (e) {
        console.error('Action error:', e);
        return { error: 'Internal server error.' };
    }
}
