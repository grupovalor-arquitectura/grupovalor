import InnerPageLayout from "../components/InnerPageLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <InnerPageLayout
        overlayHeader
        headerBackground="primary.main"
    >
      <SEO
        title="Contacto"
        description="Ponte en contacto con Grupo Valor para más información sobre nuestros proyectos y servicios."
        path="/contacto"
      />

      <ContactHero />
    <ContactForm />  
        
    </InnerPageLayout>
  );
}