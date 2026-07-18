import { Resend } from "resend";
import { contactEmailTemplate } from "./templates/contactEmail.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Solo permitir solicitudes POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método no permitido.",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      contactMethod,
      message,
      newsletter,
    } = req.body;

    await resend.emails.send({
      from: "Grupo Valor <onboarding@resend.dev>",
      to: "grupovalor.database@gmail.com",
      subject: "Grupo Valor | Nuevo contacto desde el sitio web",

      html: contactEmailTemplate({
        name,
        email,
        phone,
        company,
        contactMethod,
        message,
        newsletter,
      }),
    });

    return res.status(200).json({
      success: true,
      message: "Correo enviado correctamente.",
    });

  } catch (error) {
    console.error("Error enviando correo:", error);

    return res.status(500).json({
      success: false,
      message: "No fue posible enviar el correo.",
      error: error.message,
    });
  }
}