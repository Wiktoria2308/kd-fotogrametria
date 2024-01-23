
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Categories from '@/components/Categories';

export default function Home() {

  const categoriesOrtofotomapy  = {
    title: "Ortofotomapy",
    longText: "prezentują aktualne odzwierciedlenie sytuacji panującej w terenie. Stanowią praktyczną bazę do wszelkiego rodzaju analiz przestrzennych, planowania, projektowania, szacowania strat lub porównywania stanu terenu w różnych okresach czasu. Gotowy produkt jest w pełni kompatybilny z programami typu CAD. Wysokorozdzielcze ortofotomapy wykonywane w KD Fotogrametria odzwierciedlają szczegóły terenowe nawet na poziomie poniżej 1 centymetra. Dzięki zastosowaniu modułu RTK przy pozyskiwaniu danych otrzymujemy opracowanie o georeferencji na poziomie 3-5 centymetrów.",
    imageSources: ["ortofotomapa1.jpeg", "ortofotomapa2.jpeg", "ortofotomapa3.jpeg", "ortofotomapa4.jpg"],
  };

  return (
    <main className="flex min-h-screen flex-col text-black bg-hero-pattern bg-cover bg-no-repeat">
      <div className="backdrop-grayscale-0 bg-white/45 min-h-screen">

        <Hero />
        <AboutSection />
        <Categories {...categoriesOrtofotomapy} />

      </div>

    </main>
  )
}