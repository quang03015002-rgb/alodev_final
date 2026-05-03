import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />

      {/* Mobile sticky CTA */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 40,
        }}
        className="mobile-cta"
      >
        <a
          href="#lien-he"
          style={{
            padding: "13px 28px",
            borderRadius: "99px",
            background: "var(--brand)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 700,
            boxShadow: "0 8px 32px rgba(244,129,26,0.45)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            whiteSpace: "nowrap",
          }}
        >
          💬 Tư vấn miễn phí
        </a>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
