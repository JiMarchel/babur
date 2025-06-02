import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { z } from "zod";
import validator from "validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

//schema validation
const contactFormSchema = z.object({
  name: z.string().min(1, "Name Can not be empty"),
  phone: z.string().refine(validator.isMobilePhone, "Phone number not valid"),
  subject: z.string().min(1, "Subject can not be empty"),
  message: z.string().min(1, "Subject can not be empty"),
});

export default function Contact() {
  const { t } = useLanguage();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    // In a real app, this would send the form data to a server
    try {
      const message = `${values.subject}
      
      Nama: ${values.name}
      No HP: ${values.phone}
      Pesan: ${values.message}`;
      const data = {
        appkey: import.meta.env.VITE_APP_KEY,
        authkey: import.meta.env.VITE_APP_AUTH_KEY,
        to: values.phone,
        message 
      };

      console.log("Form submitted:", JSON.stringify(data));
      const response = await fetch(
        "https://app.wapanels.com/api/create-message",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        // Handle success
        console.log("Form submitted successfully", response);
        setIsSubmitted(true);
        form.reset(); //reset form field nih bos, apa itu use state!?

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

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
                        Masangan Kulon, Sukodono, Sidoarjo
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
                      <h3 className="font-semibold mb-1">{t.contact.phone}</h3>
                      <span className="text-muted-foreground">
                        +62 813-3241-3700
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t.contact.email}</h3>
                      <span className="text-muted-foreground">
                        info@edilas.com
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

                <div className="glass-card p-6">
                  {!isSubmitted ? (
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t.contact.fullName}</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t.contact.phoneNumber}</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="+1 234 567 8900"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.fullName}</Label>
                          <Input 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe" 
                            required 
                          />
                        </div> */}

                          {/* <div className="space-y-2">
                            <Label htmlFor="phone">
                              {t.contact.phoneNumber}
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+1 234 567 8900"
                            />
                          </div> */}
                        </div>

                        <div className="space-y-2">
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t.contact.subject}</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Reservation Inquiry"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="subject">{t.contact.subject}</Label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Reservation Inquiry"
                            required
                          /> */}
                        </div>

                        <div className="space-y-2">
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t.contact.message}</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder={t.contact.howCanWeHelp}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          {/* <Label htmlFor="message">{t.contact.message}</Label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder={t.contact.howCanWeHelp}
                            className="w-full min-h-[150px] p-3 rounded-md border border-input bg-background"
                            required
                          /> */}
                        </div>

                        <Button type="submit" className="w-full btn-primary">
                          <Send className="mr-2 h-4 w-4" />
                          {t.contact.send}
                        </Button>
                      </form>
                    </Form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {t.contact.messageSent}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {t.contact.thankYou}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">{t.contact.faq}</h2>
              <p className="text-muted-foreground">{t.contact.faqSubtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in [animation-delay:200ms]">
              {[
                {
                  questionKey: "checkInOut",
                  icon: <Clock className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "parking",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "pets",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "breakfast",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "transfers",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
                {
                  questionKey: "amenities",
                  icon: <MapPin className="h-5 w-5 text-primary" />,
                },
              ].map((faq, index) => (
                <div key={index} className="glass-card p-6">
                  <h3 className="font-semibold text-lg mb-2">
                    {t.contact.questions[faq.questionKey].question}
                  </h3>
                  <p className="text-muted-foreground">
                    {t.contact.questions[faq.questionKey].answer}
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
