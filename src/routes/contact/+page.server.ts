import { validationEmail } from '$lib/utils/validation';
import { fail, type Actions } from "@sveltejs/kit";
import Nodemailer from "nodemailer";
import { env } from "$env/dynamic/private" 
export const actions: Actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const email = data.get("email");
        const description = data.get("description");
        const subject = data.get("subject");
        if(!email && !description){
            return fail(400, { success: false, message: "please fill your email & description"})
        }

        if(!email){
            return fail(400, { success: false, message: "please fill your email"})
        }else if(!validationEmail(email as string)){
            return fail(400, {success: false, message: "email is not a valid email"})
        }else if(!description){
            return fail(400, { success: false, message: "please fill your description"})
        }else if(!subject){
            return fail(400, { success: false, message: "please fill your subject"})
        }

        const options = {
            from: email,
            to: env.PRIVATE_USER_EMAIL,
            subject,
            text: `From : ${email} \n Message: ${description}`
        }

        const tp = Nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.PRIVATE_USER_EMAIL,
                pass: env.PRIVATE_PASSWORD_EMAIL
            }
        });
        try{
            await tp.sendMail(options);
        }catch(error){
            return fail(500, { success: false, message: `error: ${error}`})
        }

        return {
            success: true,
            message: "success send the data",
        }
    }
}