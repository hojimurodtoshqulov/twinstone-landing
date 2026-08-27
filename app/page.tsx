import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import ProductsSection from "@/components/ProductsSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import GraniteCatalog from "@/components/GraniteCatalog";
import QualitySection from "@/components/QualitySection";
import ProcessSteps from "@/components/ProcessSteps";
import LeadForm from "@/components/LeadForm";
import ProjectsMap from "@/components/ProjectsMap";
import CasesSection from "@/components/CasesSection";
import DeliverySection from "@/components/DeliverySection";
import PartnersLogos from "@/components/PartnersLogos";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroStats />
        <ProductsSection />
        <ApplicationsSection />
        <GraniteCatalog />
        <QualitySection />
        <ProcessSteps />
        <LeadForm />
        <ProjectsMap />
        <CasesSection />
        <DeliverySection />
        <PartnersLogos />
        <FaqSection />
      </main>
      <FooterCta />
      <Footer />
    </>
  );
}
