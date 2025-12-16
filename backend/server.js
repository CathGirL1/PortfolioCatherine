
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config({ path: "./seguridad.env" });

const servidor = express();
const PUERTO = process.env.PUERTO || 5000;

servidor.use(cors());
servidor.use(express.json());

servidor.post("/enviar-mensaje", async (solicitud, respuesta) => {
  
  const { nombre, email, mensaje } = solicitud.body;

    const conexionCorreo = nodemailer.createTransport({
      service: "gmail",
      auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }

});

  const opcionesCorreo = {
    from: `"Contacto Portfolio" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: "Nuevo mensaje de: " + nombre,
    text: mensaje
  };

  try {
    await conexionCorreo.sendMail(opcionesCorreo);
    respuesta.status(200).send("Correo enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el mensaje: ", error);
    respuesta.status(500).send("Error al enviar el correo");
  }
});


servidor.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO}`);
});


