import nodemailer, { createTransport } from "nodemailer";
import { createToJSONSchemaMethod } from "zod/v4/core";

const sendMail = async ({ email, subject, html }) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "amal@gmail.com",
      pass: "amal123",
    },
  });
  await transport.sendMail({
    from: "amal1@gmail.com",
    to: email
  })
};

export default sendMail;