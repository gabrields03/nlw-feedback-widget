import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9f71fef59d14bd",
    pass: "4ae0993fe2c1a7"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Gabriel Domingos <gbdomingos03@gmail.com>',
    subject: subject,
    html: body,
  });

  };
}