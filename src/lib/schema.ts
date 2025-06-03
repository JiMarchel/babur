import validator from "validator";
import { z } from "zod";
export const contactFormSchema = z.object({
    name: z.string().min(1, "Name Can not be empty"),
    phone: z.string().refine(validator.isMobilePhone, "Phone number not valid"),
    subject: z.string().min(1, "Subject can not be empty"),
    message: z.string().min(1, "Subject can not be empty"),
});
