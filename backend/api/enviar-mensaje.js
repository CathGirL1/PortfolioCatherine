//import nodemailer from "nodemailer";

const nodemailer = require("nodemailer");

module.exports = async function (req, res){ 

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, email, mensaje } = req.body; 

  const conexionCorreo = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const opcionesCorreo = {
    from: `"Contacto Portfolio" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: "Nuevo mensaje de: " + nombre,
    text: mensaje,
  };

  try {
    await conexionCorreo.sendMail(opcionesCorreo);
    return res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
      console.error("ERROR COMPLETO:", error);
      return res.status(500).json({ 
        error: "Error al enviar el correo",
          detalle: error.message
    });
  }
}