import { Classes } from "@/components/Classes";
import { Contact } from "@/components/Contact";
import { Enrollment } from "@/components/Enrollment";
import { Essence } from "@/components/Essence";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatsAppFab } from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Essence />
        <Classes />
        <Gallery />
        <Enrollment />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
