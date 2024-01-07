import nodemailer from 'nodemailer';

export default async function ContactAPI (req, res) {
    const { name, email, message } = req.body;
    const data = {
        name,
        email,
        message,
    }
    
    
const emailid =  process.env.EMAIL_ID;
const pass = process.env.EMAIL_PASS;
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com.",
        port: 465,
        secure: true,
        auth: {
            user: emailid,
            pass: pass
            ,
        },
    });
    try{
        const mail= await transporter.sendMail({
            from: emailid,  
            to: emailid,
            subject: `New Message from ${data.name}`,
            html: `<div>
                <h1>${data.name}</h1>
                <h2>${data.email}</h2>
                <p>${data.message}</p>
            </div>`,
        })
            res.status(200).json({ 
                message:"Message sent successfully",
            });
            console.log("Message sent: %s", mail.messageId);
            
    }
    catch(error){
        console.log(error);
        res.status(500).json({ 
            message:"Could not send the message",
         });
    }
}