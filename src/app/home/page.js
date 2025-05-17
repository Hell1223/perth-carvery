  import AboutPreview from "@/components/AboutPreview";
  import Hero from "@/components/Hero";
  import MenuHighlights from "@/components/MenuHighlights";
  import SpecialEvents from "@/components/SpecialEvents";
  import ContactPage from "../contact/page";

  export default function HomePage() {
    return (
      <main className="bg-white">
        <Hero />
        <AboutPreview />
        <MenuHighlights />
        <SpecialEvents />
        <ContactPage />
      </main>
    );
  }
