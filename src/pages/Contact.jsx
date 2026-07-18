import InnerPageLayout from "../components/InnerPageLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <InnerPageLayout
        overlayHeader
        headerBackground="primary.main"
    >

      <ContactHero />
    <ContactForm />  
        
    </InnerPageLayout>
  );
}