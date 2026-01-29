"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import colors from "@/styles/colors";
import emailjs from "@emailjs/browser";

const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/admiral-denaldy-ampulembang/", icon: "/icons/linkedin.svg" },
    { name: "Instagram", href: "https://www.instagram.com/admiral_ampulembang", icon: "/icons/instagram.svg" },
    { name: "GitHub", href: "https://github.com/Admiral-Ampulembang", icon: "/icons/github.svg" },
];

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [sending, setSending] = useState(false);

    /* scroll lock */
    useEffect(() => {
        if (sending) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [sending]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const validate = () => {
        const newErrors = { name: "", email: "", subject: "", message: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setSending(true);

        const serviceId = "service_hetvo78";
        const templateId = "template_rmbmncw";
        const publicKey = "3zsorOm2cIN5KSRZ2";

        emailjs
            .send(serviceId, templateId, formData, publicKey)
            .then(() => {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
            })
            .catch((err) => {
            console.error(err);
            alert("Oops! Something went wrong. Please try again.");
            })
            .finally(() => setSending(false));
    };

    return (
    <>
        {/* Sending Overlay */}
        {sending && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(6px)",
                }}
            >
                <p
                    className="font-bold text-center px-6"
                    style={{
                        fontFamily: "Kiwi Maru",
                        fontSize: "clamp(28px, 4vw, 48px)",
                        color: colors.whiteSmoke
                    }}
                >
                ... sending message ...
                </p>
            </div>
        )}

        <section
            id="contactme"
            className="min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 py-16"
            style={{ backgroundColor: colors.beige, scrollMarginTop: "50px" }}
        >
            {/* title */}
            <h2
                className="font-bold mb-12 text-center"
                style={{
                fontFamily: "Kiwi Maru",
                color: colors.coral,
                fontSize: "clamp(36px, 4vw, 56px)",
                }}
            >
                Say Hello!
            </h2>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* left side */}
                <div className="flex justify-center">
                    {/* form */}
                    <div className="w-full max-w-md">
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            {/* name */}
                            <div className="flex flex-col">
                                <label htmlFor="name" style={{ fontFamily: "Kiwi Maru", color: colors.coral }}>
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    autoComplete="off"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="p-4 rounded-md border"
                                    style={{
                                        color: colors.darkgray, 
                                        backgroundColor: colors.whiteSmoke,
                                        border: `2px solid ${errors.name ? colors.coral : colors.lightgray}`
                                    }}
                                />
                                {errors.name && <span className="text-sm" style={{color: colors.coral}}>{errors.name}</span>}
                            </div>

                            {/* email */}
                            <div className="flex flex-col">
                                <label htmlFor="email" style={{ fontFamily: "Kiwi Maru", color: colors.coral }}>
                                    Email
                                </label>
                                <input
                                    id="email"
                                    autoComplete="off"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-4 rounded-md border"
                                    style={{
                                        color: colors.darkgray, 
                                        backgroundColor: colors.whiteSmoke,
                                        border: `2px solid ${errors.email ? colors.coral : colors.lightgray}`
                                    }}
                                />
                                {errors.email && <span className="text-sm" style={{color: colors.coral}}>{errors.email}</span>}
                            </div>

                            {/* subject */}
                            <div className="flex flex-col">
                                <label htmlFor="subject" style={{ fontFamily: "Kiwi Maru", color: colors.coral }}>
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    autoComplete="off"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="p-4 rounded-md border"
                                    style={{
                                        color: colors.darkgray, 
                                        backgroundColor: colors.whiteSmoke,
                                        border: `2px solid ${errors.subject ? colors.coral : colors.lightgray}`
                                    }}
                                />
                                {errors.subject && <span className="text-sm" style={{color: colors.coral}}>{errors.subject}</span>}
                            </div>

                            {/* message */}
                            <div className="flex flex-col">
                                <label htmlFor="message" style={{ fontFamily: "Kiwi Maru", color: colors.coral }}>
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="p-4 rounded-md resize-none"
                                    style={{
                                        color: colors.darkgray, 
                                        backgroundColor: colors.whiteSmoke,
                                        border: `2px solid ${errors.message ? colors.coral : colors.lightgray}`
                                    }}
                                />
                                {errors.message && <span className="text-sm" style={{color: colors.coral}}>{errors.message}</span>}
                            </div>

                            {/* submit button */}
                            <button
                                type="submit"
                                disabled={sending}
                                className="mt-4 py-3 rounded-md font-bold relative overflow-hidden cursor-pointer transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ fontFamily: "Kiwi Maru", backgroundColor: colors.whiteSmoke, color: colors.darkgray }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                <span
                                    className="absolute inset-0"
                                    style={{
                                        backgroundImage: "url('/batik_bg.svg')",
                                        backgroundSize: "cover",
                                        opacity: 0.3,
                                        pointerEvents: "none",
                                    }}
                                />
                                <span className="relative z-10 text-2xl">
                                    {sending ? "Sending..." : "SUBMIT"}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* right side */}
                <div className="flex flex-col items-center justify-center">
                    {/* image */}
                    <div className="relative w-[360px] h-[460px] mb-8">
                        <Image src="/contact_me.svg" alt="Contact illustration" fill className="object-contain" />
                    </div>

                    {/* social media icons */}
                    <div className="flex gap-6">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-full cursor-pointer"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    width={36}
                                    height={36}
                                    className="object-contain transition-transform duration-500"
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
