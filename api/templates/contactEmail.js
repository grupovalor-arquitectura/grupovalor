export function contactEmailTemplate({
  name,
  email,
  phone,
  company,
  contactMethod,
  message,
  newsletter,
}) {
  const contactMethodLabel = {
    email: "Correo electrónico",
    phone: "Llamada telefónica",
    whatsapp: "WhatsApp",
  }[contactMethod] || contactMethod;

  return `
    <!DOCTYPE html>
    <html lang="es">

    <head>
    <meta charset="UTF-8">

    <style>
    body{
        margin:0;
        padding:0;
        background:#f3f3f3;
        font-family:Arial, Helvetica, sans-serif;
    }

    .wrapper{
        width:100%;
        padding:40px 0;
    }

    .container{
        width:640px;
        max-width:92%;
        margin:auto;
        background:#ffffff;
        border-radius:12px;
        overflow:hidden;
        box-shadow:0 6px 18px rgba(0,0,0,.08);
    }

    .header{
        background:#421b1e;
        padding:40px;
        text-align:center;
    }

    .header h1{
        margin:0;
        color:#E8DDD8;
        font-size:28px;
        font-weight:600;
    }

    .subtitle{
        margin-top:8px;
        color:#BFB0AA;
        font-size:15px;
    }

    .content{
        padding:40px;
    }

    .section{
        margin-bottom:24px;
    }

    .label{
        display:block;
        font-size:12px;
        text-transform:uppercase;
        letter-spacing:.08em;
        color:#888;
        margin-bottom:6px;
    }

    .value{
        color:#222;
        font-size:16px;
    }

    .message{
        margin-top:10px;
        padding:20px;
        background:#F7F4F3;
        border-left:4px solid #C16242;
        border-radius:6px;
        white-space:pre-wrap;
        line-height:1.7;
    }

    .newsletter{
        margin-top:30px;
        padding-top:20px;
        border-top:1px solid #eee;
    }

    .footer{
        padding:24px 40px;
        background:#fafafa;
        color:#888;
        font-size:12px;
        text-align:center;
    }
    </style>

    </head>

    <body>

    <div class="wrapper">

    <div class="container">

    <div class="header">
    <h1>Grupo Valor</h1>
    <div class="subtitle">
    Nuevo contacto desde el sitio web
    </div>
    </div>

    <div class="content">

    <div class="section">
    <span class="label">Nombre</span>
    <div class="value">${name}</div>
    </div>

    <div class="section">
    <span class="label">Correo electrónico</span>
    <div class="value">
    <a href="mailto:${email}">
    ${email}
    </a>
    </div>
    </div>

    <div class="section">
    <span class="label">Teléfono</span>
    <div class="value">${phone}</div>
    </div>

    <div class="section">
    <span class="label">Empresa de interés</span>
    <div class="value">${company}</div>
    </div>

    <div class="section">
    <span class="label">Método de contacto</span>
    <div class="value">${contactMethodLabel}</div>
    </div>

    <div class="section">
    <span class="label">Mensaje</span>

    <div class="message">
    ${message}
    </div>

    </div>

    <div class="newsletter">

    <strong>Suscripción al boletín:</strong>
    ${newsletter ? "Sí" : "No"}

    </div>

    </div>

    <div class="footer">

    Este mensaje fue enviado automáticamente desde el formulario de contacto del sitio web de Grupo Valor.

    </div>

    </div>

    </div>

    </body>

    </html>
    `;
    }