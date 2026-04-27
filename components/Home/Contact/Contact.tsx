"use client";

import { useState, useEffect } from "react";
import SectionHeading from "@/components/Helper/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks } from "@/data";
import { Send, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions";

export default function Contact() {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
    
    useEffect(() => {
        if (status?.success) {
            const timer = setTimeout(() => {
                setStatus(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    async function handleSubmit(formData: FormData) {
        setIsPending(true);
        setStatus(null);

        const result = await sendEmail(formData);

        if (result.error) {
            setStatus({ error: result.error });
        } else {
            setStatus({ success: result.success });
            // Optional: reset form
            const form = document.querySelector('form') as HTMLFormElement;
            form?.reset();
        }

        setIsPending(false);
    }

    return (
        <div className="py-16 bg-gray-100 dark:bg-gray-950" id="contact">
            <SectionHeading
                title_1="Get In"
                title_2="Touch"
                description="Have a project in mind or just want to say hi? I´d love to hear from you."
            />
            <div className="w-[80%] mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* contact info */}
                    <div
                        data-aos="fade-right"
                        data-aos-delay="0"
                        data-aos-anchor-placement="top-center">
                        <div>
                            <div className="mb-4">
                                <h3 className="text-2xl font-semibold mb-4">Let´s talk</h3>
                                <p className="text-muted-foreground">I´m always open to discussing new projects, creative ideas,
                                    or opportunities to be part of your vision.</p>
                            </div>
                        </div>
                        <div className="space-y-4 mb-4">
                            {contactInfo.map((item) => {
                                return <a key={item.label} target="_blank"
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105
                                transition-all duration-300 group" >
                                    <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center 
                                    group-hover:bg-blue-600/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-blue-500 dark:text-white" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">{item.label}</p>
                                        <p className="font-medium" translate="no">{item.value}</p>
                                    </div>
                                </a>
                            })}
                        </div>
                        {/* social links */}
                        <div>
                            <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => {
                                    return <a href={link.href} key={link.label} target="_blank"
                                        className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center
                                        text-muted-foreground hover:text-blue-500 transition-colors">
                                        <link.icon className="w-5 h-5" />
                                    </a>
                                })}
                            </div>
                        </div>
                    </div>

                    {/* contact form */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay='150'
                        data-aos-anchor-placement="top-center">
                        <form action={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="name">
                                        Name
                                    </label>
                                    <Input id="name" name="name" placeholder="Your name" required
                                        className="bg-gray-100" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="email">
                                        Email
                                    </label>
                                    <Input id="email" name="email" type="email" placeholder="yourname@example.com" required
                                        className="bg-gray-100" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Subject
                                </label>
                                <Input id='subject' name='subject' placeholder='Project Inquiry' required
                                    className='bg-gray-100' />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea id='message' name='message' placeholder='Tell me about your project' required
                                    rows={5} className='bg-gray-100 h-40' />
                            </div>
                            
                            {status?.error && (
                                <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800">
                                    {status.error}
                                </p>
                            )}
                            {status?.success && (
                                <p className="text-green-500 text-sm bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800">
                                    {status.success}
                                </p>
                            )}

                            <Button disabled={isPending} type='submit' size={'lg'} className="w-full cursor-pointer">
                                {isPending ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}