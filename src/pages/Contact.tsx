import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
    const { t } = useLanguage();

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 pt-20">
                {/* Header Section */}
                <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
                    <div className="container relative z-10">
                        <div className="max-w-3xl mx-auto text-center animate-fade-in">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                {t.contact.title}
                            </h1>
                            <p className="text-muted-foreground text-lg mb-6">
                                {t.contact.subtitle}
                            </p>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
                        <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
                    </div>
                </section>

                {/* Contact Information & Form */}
                <section className="section">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div className="animate-fade-in [animation-delay:100ms]">
                                <h2 className="text-2xl font-bold mb-6">
                                    {t.contact.getInTouch}
                                </h2>

                                <div className="glass-card p-6 space-y-6 mb-8">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                {t.contact.address}
                                            </h3>
                                            <span className="text-muted-foreground">
                                                Griya Bhayangkara Blok i5/06
                                                <br />
                                                Masangan Kulon, Sukodono,
                                                Sidoarjo
                                                <br />
                                                Jawa Timur, Indonesia
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                {t.contact.phone}
                                            </h3>
                                            <a
                                                href="https://api.whatsapp.com/send?phone=6281227162297"
                                                className="text-muted-foreground"
                                            >
                                                +62 812-2716-2297
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                {t.contact.email}
                                            </h3>
                                            <span className="text-muted-foreground">
                                                info@tendamembran.com
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                                            <Clock className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">
                                                {t.contact.receptionHours}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Senin - Minggu
                                                <br />
                                                {t.contact.checkInTime}
                                                <br />
                                                {t.contact.checkOutTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="aspect-video rounded-xl overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9773115726397!2d112.68335707497637!3d-7.378262072409432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjInNDEuNyJTIDExMsKwNDEnMDguMCJF!5e0!3m2!1sen!2sid!4v1628613152777!5m2!1sen!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        title="Lokasi Kami"
                                    />
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="animate-fade-in [animation-delay:300ms]">
                                <h2 className="text-2xl font-bold mb-6">
                                    {t.contact.sendMessage}
                                </h2>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section bg-muted">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
                            <h2 className="text-3xl font-bold mb-4">
                                {t.contact.faq}
                            </h2>
                            <p className="text-muted-foreground">
                                {t.contact.faqSubtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in [animation-delay:200ms]">
                            {[
                                {
                                    questionKey: "checkInOut",
                                    icon: (
                                        <Clock className="h-5 w-5 text-primary" />
                                    ),
                                },
                                {
                                    questionKey: "parking",
                                    icon: (
                                        <MapPin className="h-5 w-5 text-primary" />
                                    ),
                                },
                                {
                                    questionKey: "pets",
                                    icon: (
                                        <MapPin className="h-5 w-5 text-primary" />
                                    ),
                                },
                                {
                                    questionKey: "breakfast",
                                    icon: (
                                        <MapPin className="h-5 w-5 text-primary" />
                                    ),
                                },
                                {
                                    questionKey: "transfers",
                                    icon: (
                                        <MapPin className="h-5 w-5 text-primary" />
                                    ),
                                },
                                {
                                    questionKey: "amenities",
                                    icon: (
                                        <MapPin className="h-5 w-5 text-primary" />
                                    ),
                                },
                            ].map((faq, index) => (
                                <div key={index} className="glass-card p-6">
                                    <h3 className="font-semibold text-lg mb-2">
                                        {
                                            t.contact.questions[faq.questionKey]
                                                .question
                                        }
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {
                                            t.contact.questions[faq.questionKey]
                                                .answer
                                        }
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
