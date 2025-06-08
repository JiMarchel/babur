import validator from "validator";
import { Button } from "@/components/ui/button";
import { Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

//schema validation
const contactFormSchema = z.object({
    name: z.string().min(1, "Name Can not be empty"),
    phone: z.string().refine(validator.isMobilePhone, "Phone number not valid"),
    message: z.string().min(1, "Subject can not be empty"),
});
interface ContactFormInterface {
    isSubmitted: boolean;
    setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ContactForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { t } = useLanguage();

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
        // In a real app, this would send the form data to a server
        try {
            const message = `Nama: ${values.name}
      No HP: ${values.phone}
      Pesan: ${values.message}`;
            const data = {
                appkey: import.meta.env.VITE_APP_KEY,
                authkey: import.meta.env.VITE_APP_AUTH_KEY,
                to: values.phone,
                message,
            };

            const response = await fetch(
                "https://app.wapanels.com/api/create-message",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                },
            );
            if (response.ok) {
                // Handle success
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
                                        <FormLabel>
                                            {t.contact.fullName}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nama Lengkap"
                                                {...field}
                                            />
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
                                        <FormLabel>
                                            {t.contact.phoneNumber}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="+628xxx"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {t.contact.message}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder={
                                                    t.contact.howCanWeHelp
                                                }
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
    );
};
