export async function sendContactForm(formData) {
  const response = await fetch("/api/contact", {

    
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

   console.log("Status:", response.status);
   console.log("OK:", response.ok);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "No fue posible enviar el mensaje.");
  }

  return data;
}