import Hero from "@/components/Hero";
import AboutFotogrametria from "@/components/AboutFotogrametria";
import Categories from '@/components/Categories';
import Footer from "@/components/Footer";
import AboutKarolina from "@/components/AboutKarolina";

export default function Home() {

  const categoriesOrtofotomapy = {
    title: "Ortofotomapy",
    description: "prezentują aktualne odzwierciedlenie sytuacji panującej w terenie. Stanowią praktyczną bazę do wszelkiego rodzaju analiz przestrzennych, planowania, projektowania, szacowania strat lub porównywania stanu terenu w różnych okresach czasu. Gotowy produkt jest w pełni kompatybilny z programami typu CAD. Wysokorozdzielcze ortofotomapy wykonywane w KD Fotogrametria odzwierciedlają szczegóły terenowe nawet na poziomie poniżej 1 centymetra. Dzięki zastosowaniu modułu RTK przy pozyskiwaniu danych otrzymujemy opracowanie o georeferencji na poziomie 3-5 centymetrów.",
    image: 'background_4_blur.png',
    image2: 'background_4.jpg'
  };
  const categoriesModele3D = {
    title: "Modele 3D",
    description: "wiernie odwzorowują wymiary, kształty oraz proporcje. Na ich podstawie można uzyskać wiele cennych informacji na przykład na temat budynku czy innego obiektu. Model 3D stanowi opracowanie pomocne w analizie stanu obiektu - spękania, szczeliny, ubytki. Na jego podstawie można tworzyć przekroje, dokumentacje architektoniczne, analizy obiektów przed pracami rekonstrukcyjnymi czy rozbiórkowymi, wizualizacje zabytków i innych obiektów. Stanowią również idealne opracowanie w przypadku inspekcji obiektów wysokich jak kominy lub wysokie budynki.",
    image: 'background_5.png',
    image2: 'background_5.png'
  }
  const categoriesChmuryPunktów = {
    title: "Chmury punktów",
    description: "odwzorowują mierzone powierzchnie za pomocą milionów punktów o dokładnie obliczonych współrzędnych przestrzennych. Stanowią podstawę do dalszego projektowania czy modelowania 3D. Na ich podstawie można również dokonywać analiz terenu takich jak pomiary odległości, powierzchni, spadków i przewyższeń terenu a także generować przekroje poprzeczne i podłużne terenu. Chmura jest produktem wyjściowym do dalszych opracowań fotogrametrycznych natomiast już sama w sobie stanowi bardzo wartościowy produkt.",
    image: 'background_6_blur.png',
    image2: 'background_6.png'
  }
  const categoriesMonitoring = {
    title: "Monitoring w czasie",
    description: "wykorzystywany jest głównie podczas procesu budowlanego placów budowy, obiektów wielkopowierzchniowych, na żwirowniach czy obiektach, gdzie sytuacja terenowa często ulega zmianom. Można go wykonywać z różną częstotliwością w zależności od zróżnicowania terenu lub upodobań Klienta. Produkty końcowe przy monitoringu to przede wszystkim wysoko rozdzielcze ortofotomapy, modele 3D oraz zdjęcia z powietrza. Każde z opracowań jest wykonywane z najwyższą dokładnością, przez co na ich podstawie można kontrolować najmniejsze szczegóły terenowe.",
    image: 'background_7_blur.png',
    image2: 'background_7.png'
  }
  const categoriesInspekcje = {
    title: "Inspekcje miejsc trudno dostępnych",
    description: "z pomocą bezzałogowego statku powietrznego są bardzo przydatnym rozwiązaniem w przypadku obiektów niebezpiecznych, wysokich lub ciężko dostępnych dla ludzi. Najczęściej wykorzystywane są do kontroli stanu turbin wiatrowych, dachów, kominów przemysłowych, masztów BTS lub słupów energetycznych o wysokim napięciu. Takie rozwiązanie technologiczne pozwala na bezinwazyjne uzyskanie informacji o stanie infrastruktury, bez konieczności każdorazowego angażowania sprzętu wysokościowego oraz narażania zdrowia i życia osób pracujących na wysokościach.",
    image: 'background_8_blur.jpg',
    image2: 'background_8.jpg'
  }
  const categoriesPomiary = {
    title: "Pomiary mas ziemnych",
    description: "to rozwiązanie w szczególności przydatne w kopalniach odkrywkowych, żwirowniach, wysypiskach śmieci ale nie tylko. Podczas prowadzenia prac budowlanych na obiektach drogowych równie często wykonuje się pomiary mas ziemnych. Jest to rozwiązanie niezwykle dokładne, ponieważ błędy szacowane są na poziomie około 1%. Dzięki zastosowaniu technologii fotogrametrii niskiego pułapu nie jest konieczne wstrzymywanie prac na danym obiekcie aby wykonać pomiar. Dron zbiera dane maksymalnie w kilkadziesiąt minut a opracowane dane możesz otrzymać nawet tego samego dnia, w którym wykonywany był pomiar.",
    image: 'background_9_blur.png',
    image2: 'background_9.png'
  }
  const categoriesPrzekroje = {
    title: "Przekroje poprzeczne i podłużne",
    description: "obrazują ukształtowanie terenu szczególnie przydatne w budownictwie, architekturze oraz geologii. Możliwość generowania przekrojów na podstawie danych fotogrametrycznych pozwala na przeprowadzenie szczegółowych analiz terenów rozległych na przykład pod projekty drogowe, kolejowe lub do wyznaczania zlewni w opracowaniach hydrologicznych.",
    image: 'background_10_blur.png',
    image2: 'background_10.png'
  }
  const categoriesDokumentacjaGIS = {
    title: "Analizy przestrzenne",
    description: "prezentują wyniki badań i obliczeń wykonywanych na poszczególnych opracowaniach fotogrametrycznych. Do tej kategorii danych zaliczyć można przede wszystkim obliczenia powierzchni upraw rolnych zniszczonych w wyniku niekorzystnych warunków pogodowych lub działalności zwierząt. Dokumentacja w postaci ortofotomapy jest podstawą do graficznej prezentacji uszkodzenia. Dane fotogrametryczne można z powodzeniem łączyć z innymi danymi przestrzennymi takimi jak na przykład granice działek ewidencyjnych czy budynki ewidencyjne. ",
    image: 'background_11_blur.png',
    image2: 'background_11.jpg'
  }
  const categoriesZdjeciaIFilmy = {
    title: "Zdjęcia i filmy",
    description: "z lotu ptaka stanowią oryginalne i bardzo atrakcyjne rozwiązanie do wizualizacji terenów rekreacyjnych, osiedli mieszkaniowych lub nieruchomości przeznaczonych do sprzedaży. Zdjęcia i filmy mają ogromny potencjał także jako podstawowy monitoring czy inspekcja, ponieważ pozwalają na uchwycenie istotnych szczegółów terenowych lub udokumentowanie aktualnego stanu obiektu lub terenu.",
    image: 'background_12_blur.png',
    image2: 'background_12.jpg'
  }

  return (
    <main className="flex flex-col text-black bg-zinc-200">
      <Hero />
      <AboutKarolina />
      <AboutFotogrametria />
      <Categories {...categoriesOrtofotomapy} />
      <Categories {...categoriesModele3D} />
      <Categories {...categoriesChmuryPunktów} />
      <Categories {...categoriesMonitoring} />
      <Categories {...categoriesInspekcje} />
      <Categories {...categoriesPomiary} />
      <Categories {...categoriesPrzekroje} />
      <Categories {...categoriesDokumentacjaGIS} />
      <Categories {...categoriesZdjeciaIFilmy} />
      <Footer />
    </main>
  )
}