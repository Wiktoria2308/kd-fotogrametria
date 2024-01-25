
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Categories from '@/components/Categories';

export default function Home() {

  const categoriesOrtofotomapy = {
    title: "Ortofotomapy",
    description: "prezentują aktualne odzwierciedlenie sytuacji panującej w terenie. Stanowią praktyczną bazę do wszelkiego rodzaju analiz przestrzennych, planowania, projektowania, szacowania strat lub porównywania stanu terenu w różnych okresach czasu. Gotowy produkt jest w pełni kompatybilny z programami typu CAD. Wysokorozdzielcze ortofotomapy wykonywane w KD Fotogrametria odzwierciedlają szczegóły terenowe nawet na poziomie poniżej 1 centymetra. Dzięki zastosowaniu modułu RTK przy pozyskiwaniu danych otrzymujemy opracowanie o georeferencji na poziomie 3-5 centymetrów.",
    imageSources: ["ortofotomapa1.jpeg", "ortofotomapa2.jpeg", "ortofotomapa3.jpeg", "ortofotomapa4.jpg"],
  };
  const categoriesModele3D = {
    title: "Modele 3D",
    description: "wiernie odwzorowują wymiary, kształty oraz proporcje. Na ich podstawie można uzyskać wiele cennych informacji na przykład na temat budynku czy innego obiektu. Model 3D stanowi opracowanie pomocne w analizie stanu obiektu - spękania, szczeliny, ubytki. Na jego podstawie można tworzyć przekroje, dokumentacje architektoniczne, analizy obiektów przed pracami rekonstrukcyjnymi czy rozbiórkowymi, wizualizacje zabytków i innych obiektów. Stanowią również idealne opracowanie w przypadku inspekcji obiektów wysokich jak kominy lub wysokie budynki.",
    imageSources: ["model3D_1.png", "model3D_2.jpg", "model3D_2.jpg", "model3D_4.jpg"],
  }
  const categoriesChmuryPunktów = {
    title: "Chmury punktów",
    description: "odwzorowują mierzone powierzchnie za pomocą milionów punktów o dokładnie obliczonych współrzędnych przestrzennych. Stanowią podstawę do dalszego projektowania czy modelowania 3D. Na ich podstawie można również dokonywać analiz terenu takich jak pomiary odległości, powierzchni, spadków i przewyższeń terenu a także generować przekroje poprzeczne i podłużne terenu. Chmura jest produktem wyjściowym do dalszych opracowań fotogrametrycznych natomiast już sama w sobie stanowi bardzo wartościowy produkt.",
    imageSources: ["chmura1.png", "chmura2.jpg", "chmura3.jpg", "chmura4.jpg"],
  }
  const categoriesMonitoring = {
    title: "Monitoring w czasie",
    description: "wykorzystywany jest głównie podczas procesu budowlanego placów budowy, obiektów wielkopowierzchniowych, na żwirowniach czy obiektach, gdzie sytuacja terenowa często ulega zmianom. Można go wykonywać z różną częstotliwością w zależności od zróżnicowania terenu lub upodobań Klienta. Produkty końcowe przy monitoringu to przede wszystkim wysoko rozdzielcze ortofotomapy, modele 3D oraz zdjęcia z powietrza. Każde z opracowań jest wykonywane z najwyższą dokładnością, przez co na ich podstawie można kontrolować najmniejsze szczegóły terenowe.",
    imageSources: ["monitoring1.jpg", "monitoring2.jpg", "monitoring3.jpg", "monitoring4.jpg"],
  }
  const categoriesInspekcje = {
    title: "Inspekcje miejsc trudno dostępnych",
    description: "z pomocą bezzałogowego statku powietrznego są bardzo przydatnym rozwiązaniem w przypadku obiektów niebezpiecznych, wysokich lub ciężko dostępnych dla ludzi. Najczęściej wykorzystywane są do kontroli stanu turbin wiatrowych, kominów, masztów TBS lub słupów energetycznych o wysokim napięciu. Takie rozwiązanie technologiczne pozwala na bezinwazyjne uzyskanie informacji o stanie infrastruktury, bez konieczności każdorazowego angażowania sprzętu wysokościowego oraz narażania zdrowia i życia osób pracujących na wysokościach.",
    imageSources: ["inspekcje1.jpg", "inspekcje2.jpg", "inspekcje3.jpg", "inspekcje4.jpg"],
  }
  const categoriesPomiary = {
    title: "Pomiary mas ziemnych",
    description: "to rozwiązanie w szczególności przydatne w kopalniach odkrywkowych, żwirowniach, wysypiskach śmieci ale nie tylko. Podczas prowadzenia prac budowlanych na obiektach drogowych równie często wykonuje się pomiary mas ziemnych. Jest to rozwiązanie niezwykle dokładne, ponieważ błędy szacowane są na poziomie około 1%. Dzięki zastosowaniu technologii fotogrametrii niskiego pułapu nie jest konieczne wstrzymywanie prac na danym obiekcie aby wykonać pomiar. Dron zbiera dane maksymalnie w kilkadziesiąt minut a opracowane dane możesz otrzymać nawet tego samego dnia, w którym wykonywany był pomiar.",
    imageSources: ["pomiary_mas1.jpg", "pomiary_mas2.jpg", "pomiary_mas3.jpg", "pomiary_mas4.jpg"],
  }
  const categoriesPrzekroje = {
    title: "Przekroje poprzeczne i podłużne",
    description: "obrazują ukształtowanie terenu szczególnie przydatne w budownictwie, architekturze oraz geologii. Możliwość generowania przekrojów na podstawie danych fotogrametrycznych pozwala na przeprowadzenie szczegółowych analiz terenów rozległych na przykład pod projekty drogowe, kolejowe lub do wyznaczania zlewni w opracowaniach hydrologicznych.",
    imageSources: ["przekrój1.jpg", "przekrój2.jpg", "przekrój3.jpg", "przekrój4.jpg"],
  }
  const categoriesDokumentacjaGIS = {
    title: "Dokumentacja i opracowania GIS",
    description: "prezentują wyniki badań i analiz przestrzennych wykonywanych na poszczególnych opracowaniach fotogrametrycznych. Do tej kategorii danych zaliczyć można przede wszystkim obliczenia powierzchni upraw rolnych zniszczonych w wyniku niekorzystnych warunków pogodowych lub działalności zwierząt. Dokumentacja w postaci ortofotomapy jest podstawą do graficznej prezentacji uszkodzenia. Dane fotogrametryczne można z powodzeniem łączyć z innymi danymi przestrzennymi takimi jak na przykład granice działek ewidencyjnych czy budynki ewidencyjne.",
    imageSources: ["analiza_gis1.png", "analiza_gis2.jpg", "analiza_gis3.jpg", "analiza_gis4.jpeg"],
  }
  const categoriesZdjeciaIFilmy = {
    title: "Zdjęcia i filmy",
    description: "z lotu ptaka stanowią oryginalne i bardzo atrakcyjne rozwiązanie do wizualizacji terenów rekreacyjnych, osiedli mieszkaniowych lub nieruchomości przeznaczonych do sprzedaży. Zdjęcia i filmy mają ogromny potencjał także jako podstawowy monitoring czy inspekcja, ponieważ pozwalają na uchwycenie istotnych szczegółów terenowych lub udokumentowanie aktualnego stanu obiektu lub terenu.",
    imageSources: ["zdjęcie1.jpg", "zdjęcie2.jpg", "zdjęcie3.jpg", "zdjęcie4.jpg"],
  }

  return (
    <main className="flex flex-col text-black ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
          <div className="backdrop-grayscale-0 bg-white/45">
        <Hero />
        <AboutSection />
        </div>
        </div>
        <div className="bg-gradient-to-r from-black via-zinc-600 to-zinc-300">
        <Categories {...categoriesOrtofotomapy} />
        <Categories {...categoriesModele3D} />
        <Categories {...categoriesChmuryPunktów} />
        <Categories {...categoriesMonitoring} />
        <Categories {...categoriesInspekcje} />
        <Categories {...categoriesPomiary} />
        <Categories {...categoriesPrzekroje} />
        <Categories {...categoriesDokumentacjaGIS} />
        <Categories {...categoriesZdjeciaIFilmy} />
        </div>
    </main>
  )
}