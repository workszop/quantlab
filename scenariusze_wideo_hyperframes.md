# Plan scenariuszy animacji produktowych (HyperFrames / HeyGen)

Plan produkcji ośmiu animacji (po ok. 60 sekund) prezentujących produkty i usługi Quantica Lab
z kart katalogowych w tym katalogu. Każdy scenariusz opisuje produkt, sposób działania
i korzyści dla klienta. Język: polski. Platforma: https://hyperframes.heygen.com

---

## 1. Ramy wspólne dla wszystkich odcinków

### 1.1. Format i rytm

| Parametr | Wartość |
|---|---|
| Długość | 55-62 s |
| Proporcje | 16:9 (1920x1080); opcjonalnie wersja 9:16 do social media |
| Liczba scen | 6 |
| Tempo narracji | ok. 130-145 słów lektora na odcinek (spokojne, eksperckie tempo) |
| Muzyka | neutralny, minimalistyczny podkład; bez uderzeń "epickich" |

### 1.2. Stała struktura 60 sekund

| Scena | Czas | Funkcja |
|---|---|---|
| S1 Hook / problem | 0:00-0:08 | jedno zdanie o bolączce odbiorcy, animowany tekst na pełnym ekranie |
| S2 Przedstawienie produktu | 0:08-0:16 | nazwa + jednozdaniowa definicja (tagline z karty katalogowej), logo Q |
| S3 Jak to działa, krok 1-2 | 0:16-0:30 | animowany schemat wejście - przetwarzanie |
| S4 Jak to działa, krok 3 + wyróżnik | 0:30-0:40 | wynik działania + kluczowy wyróżnik technologiczny |
| S5 Korzyści | 0:40-0:52 | 3-4 korzyści jako animowana lista z ikonami Lucide |
| S6 CTA | 0:52-0:60 | logo, adres, wezwanie kontaktowe z karty |

### 1.3. Brand (obowiązkowe, z systemu projektowego Quantica Lab)

- Kolor przewodni: Quantica Pink `#d20757` na białym tle; czerń tekstu `#111111`, nigdy `#000`.
- Typografia: Satoshi (nagłówki i tekst), Geist Mono (etykiety, dane, timecody).
- Ikony: wyłącznie Lucide (kontur, ok. 2 px), domyślnie w kolorze Quantica Pink. Bez emoji.
- Eyebrow: WERSALIKI z rozstrzelonym światłem (np. "KARTA KATALOGOWA", "JAK TO DZIAŁA").
- Nagłówki: sentence case. Bez wykrzykników. W tekstach polskich dywiz z odstępami " - ", nie pauza em.
- Gradienty tylko jako akcenty, nigdy jako tło całej sceny. Karty z pełnym obrysem, bez lewego paska akcentu.
- Logo: `quantica-logo-color.png` na białym tle, `quantica-logo-white.png` / `quantica-q-mark-white.png` na tle w kolorze marki.

### 1.4. Zasady językowe scenariuszy

- Treść merytoryczna wyłącznie z kart katalogowych - bez wymyślania nowych obietnic, liczb i funkcji.
- Ton: ekspercki, spokojny, B2G/B2B; bez wykrzykników, bez kolokwializmów.
- Stały zwrot CTA (z kart): "Napisz do nas - pokażemy [produkt] w działaniu." + kontakt@quanticalab.ai, www.quanticalab.ai.
- Lektor: jeden głos (spójny dla całej serii), kobiecy lub męski, neutralna polszczyzna.

### 1.5. Powtarzalne wzorce animacji (do użycia w HyperFrames)

- **Tekst hooka**: pojawianie słowo po słowie (fade + delikatny slide w górę).
- **Schemat "jak to działa"**: trzy węzły połączone rysującą się linią; węzły wjeżdżają kolejno, linia animowana stroke-dashoffset.
- **Lista korzyści**: wiersze wjeżdżają z lewej co ok. 0,8 s, ikona Lucide skaluje się z 0 do 1.
- **Licznik**: animowany count-up dla liczb (np. 25 typów dokumentów, 500 tys. zapytań).
- **CTA**: logo fade-in, pod nim adresy; tło białe lub Quantica Pink z białym logo.
- Ruch: wyłącznie fade i slide; bez obrotów 3D, bez odbić, bez efektów "bounce".

### 1.6. Proces produkcji (dla każdego odcinka)

1. Skopiuj scenariusz odcinka (poniżej) jako storyboard w projekcie HyperFrames.
2. Nagraj lub wygeneruj lektora (TTS) z tekstu "Lektor"; zweryfikuj długość ~60 s.
3. Zbuduj sceny wg timecode'ów; teksty ekranowe przenieś dosłownie (są zgodne z kartami).
4. Kontrola jakości: brak wykrzykników i em-dash, kolory tylko z tokenów, ikony Lucide,
   test czytelności na 100% i 50% skali, zgodność liczb z kartą katalogową.
5. Render + eksport; wersja 9:16 przez przeniesienie układów, nie przez kadrowanie.

### 1.7. Kolejność produkcji (rekomendowana)

1. Klara (najprostszy przekaz, pilot serii ustalający styl)
2. Zagłoba
3. Papkin
4. Dyndalski
5. Protazy
6. Gerwazy
7. Ocena modeli i systemów AI
8. Szkolenia AI (inny układ - oferta 4 szkoleń)

---

## 2. Scenariusze odcinków

---

### Odcinek 1 - Klara, bezpieczny chat AI

**Przekaz główny:** pracownicy dostają wygodny chat AI, a organizacja zachowuje kontrolę
nad danymi, modelami i kosztami.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | Pracownicy i tak korzystają z AI. Pytanie brzmi: czy pod kontrolą organizacji, czy poza nią? | Tekst "shadow AI" rozpada się na wiele ikon chmur i chatów; eyebrow: BEZPIECZEŃSTWO AI |
| S2 | 0:08-0:16 | Klara to bezpieczny chat AI - jeden interfejs dla pracowników, pełna kontrola dla organizacji. | Logo Q + napis "Klara - bezpieczny chat AI"; tagline: "Kontrolowane wykorzystanie generatywnej AI" |
| S3 | 0:16-0:30 | Pracownik pisze jak w zwykłym chacie. W tle Klara analizuje każde zapytanie: ocenia bezpieczeństwo i złożoność zadania. | Mockup okna chatu; nad zapytaniem pojawiają się dwie etykiety: "bezpieczeństwo" i "złożoność" (ikony Lucide: shield, gauge) |
| S4 | 0:30-0:40 | Dane poufne trafiają do modelu lokalnego. Proste zadania również. Płatne modele zewnętrzne, jak GPT czy Gemini, są używane tylko wtedy, gdy naprawdę są potrzebne. | Schemat routingu: zapytanie rozdziela się na dwie ścieżki - "model lokalny" (ikona server) i "model zewnętrzny" (ikona cloud); linia rysuje się animacją |
| S5 | 0:40-0:52 | Efekt: mniej shadow AI, ochrona danych, niższe i przewidywalne koszty oraz pełny wgląd w wykorzystanie AI. | Lista 4 korzyści z ikonami: shield-check, lock, coins, bar-chart-3 |
| S6 | 0:52-0:60 | Napisz do nas - pokażemy Klarę w działaniu. | Logo, kontakt@quanticalab.ai, www.quanticalab.ai |

**Teksty ekranowe (S5):** Ograniczenie shadow AI · Ochrona danych organizacji · Niższe koszty AI · Kontrola i monitoring

---

### Odcinek 2 - Zagłoba, inteligentny asystent wiedzy

**Przekaz główny:** system RAG, który odpowiada na pytania na podstawie wiedzy organizacji,
ze wskazaniem źródeł i z zachowaniem uprawnień.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | Wiedza organizacji jest rozproszona między dokumentami, repozytoriami i systemami. Jej szukanie kosztuje czas. | Ikony plików rozsypane po ekranie; eyebrow: ZARZĄDZANIE WIEDZĄ |
| S2 | 0:08-0:16 | Zagłoba to inteligentny asystent wiedzy - system RAG, który daje szybki i bezpieczny dostęp do informacji. | Logo Q + "Zagłoba - inteligentny asystent wiedzy" |
| S3 | 0:16-0:30 | Użytkownik zadaje pytanie w naturalnym języku. Zagłoba przeszukuje źródła organizacji: Microsoft 365, SharePoint, zasoby S3 - i znajduje najtrafniejsze informacje. | Pole pytania; pod spodem trzy kafle źródeł (ikony: folder, database, cloud); linie wyszukiwania rysują się do kafli |
| S4 | 0:30-0:40 | Odpowiedź powstaje wyłącznie na podstawie tych źródeł i zawiera cytowania. Gdy danych brak, system to komunikuje zamiast zgadywać. Uprawnienia użytkowników są dziedziczone. | Karta odpowiedzi z przypisami [1][2]; obok plakietka "uprawnienia zachowane" (ikona key) |
| S5 | 0:40-0:52 | Korzyści: szybszy dostęp do wiedzy, weryfikowalne odpowiedzi, praca na istniejących systemach i możliwość wdrożenia w pełni lokalnego. | Lista 4 korzyści z ikonami: zap, file-check, plug, server |
| S6 | 0:52-0:60 | Za Zagłobą stoi zespół współtworzący modele PLLuM i asystenta w aplikacji mObywatel. Napisz do nas - pokażemy Zagłobę w działaniu. | Licznik "ok. 500 tys. zapytań miesięcznie" (mObywatel), potem logo i kontakt |

**Teksty ekranowe (S5):** Szybszy dostęp do wiedzy · Odpowiedzi ze źródłami · Integracja z systemami · Wdrożenie lokalne

---

### Odcinek 3 - Papkin, inteligentny protokolant AI

**Przekaz główny:** ze spotkania automatycznie powstaje transkrypcja, protokół, podsumowanie
i lista zadań - przetwarzane lokalnie.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | Każde spotkanie kończy się tak samo: kto spisze ustalenia, protokół i zadania? | Ikona mikrofonu i pusta kartka; eyebrow: DOKUMENTACJA SPOTKAŃ |
| S2 | 0:08-0:16 | Papkin to inteligentny protokolant AI. Zamienia przebieg spotkania w gotową, uporządkowaną dokumentację. | Logo Q + "Papkin - inteligentny protokolant AI" |
| S3 | 0:16-0:30 | Papkin transkrybuje spotkanie na żywo lub z nagrania. Rozpoznawanie mowy i modele językowe są zoptymalizowane pod język polski - system poprawia i porządkuje zapis. | Fala dźwiękowa zamienia się w płynące linie tekstu; etykieta "PL" przy silniku ASR |
| S4 | 0:30-0:40 | Z transkrypcji powstają protokoły, podsumowania, ustalenia i listy zadań. Papkin rozróżnia mówców i może automatycznie rozesłać materiały uczestnikom. | Jeden dokument rozdziela się na 4 karty: protokół, podsumowanie, ustalenia, zadania (ikony: file-text, list, check-circle, send) |
| S5 | 0:40-0:52 | Całość działa lokalnie, w infrastrukturze organizacji - nagrania i transkrypcje nie trafiają do chmury. Organizacja zachowuje pełną wiedzę o spotkaniach i spójny standard dokumentacji. | Ikona server z tarczą; lista korzyści: pamięć ustaleń, szybsze działania, standaryzacja, tłumaczenie PL-EN |
| S6 | 0:52-0:60 | Napisz do nas - pokażemy Papkina w działaniu. | Logo, kontakt@quanticalab.ai, www.quanticalab.ai |

**Teksty ekranowe (S5):** Pełna wiedza o spotkaniach · Od rozmowy do działania · Jednolita dokumentacja · Transkrypcja i tłumaczenie PL-EN

---

### Odcinek 4 - Dyndalski, inteligentny generator dokumentów

**Przekaz główny:** z krótkiego opisu sprawy powstaje kompletny dokument urzędowy
zgodny ze wzorcem gatunkowym, generowany lokalnymi modelami.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | Uchwała, zawiadomienie, protokół, umowa - każdy z tych dokumentów ma własną strukturę, styl i zasady redagowania. | Cztery nazwy gatunków wjeżdżają kolejno jako nagłówki dokumentów; eyebrow: DOKUMENTY URZĘDOWE |
| S2 | 0:08-0:16 | Dyndalski to inteligentny generator dokumentów. Tworzy profesjonalne pisma zgodne z normą językową i standardami organizacji. | Logo Q + "Dyndalski - inteligentny generator dokumentów" |
| S3 | 0:16-0:30 | Użytkownik wybiera typ dokumentu i w prostym formularzu podaje informacje o sprawie - nawet skrótowo, bez znajomości urzędowej terminologii. | Formularz z polami wypełnianymi animowanym tekstem; wybór gatunku z listy |
| S4 | 0:30-0:40 | Dyndalski generuje kompletny dokument: właściwa struktura, styl, poprawność językowa i formatowanie. W wersji beta obsługuje dwadzieścia pięć gatunków urzędowych. | Dokument "składa się" sekcja po sekcji; licznik count-up do "25 typów dokumentów" |
| S5 | 0:40-0:52 | System działa na lokalnie uruchamianych modelach dostrojonych do polszczyzny, opracowanych z ekspertami Uniwersytetu Łódzkiego - dane nie wychodzą poza organizację. Efekt: szybciej, spójniej i z mniejszą liczbą błędów. | Plakietka "modele lokalne" (ikona server); lista korzyści: szybkość, spójność, mniej błędów, kontrola nad danymi |
| S6 | 0:52-0:60 | Napisz do nas - pokażemy Dyndalskiego w działaniu. | Logo, kontakt@quanticalab.ai, www.quanticalab.ai |

**Teksty ekranowe (S5):** Szybsze przygotowanie dokumentów · Spójna dokumentacja · Mniej błędów · Pełna kontrola nad danymi

---

### Odcinek 5 - Protazy, inteligentny agent e-mail

**Przekaz główny:** agentowa obsługa skrzynki - analiza spraw, propozycje odpowiedzi
z wiedzy organizacji i kierowanie do właściwych osób, z człowiekiem w pętli.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | Do firmowej skrzynki codziennie wpływają dziesiątki spraw. Każdą trzeba przeczytać, sklasyfikować i przekazać dalej. | Piętrząca się lista maili; eyebrow: OBSŁUGA KORESPONDENCJI |
| S2 | 0:08-0:16 | Protazy to inteligentny agent e-mail. Analizuje korespondencję wraz z załącznikami i organizuje jej obsługę. | Logo Q + "Protazy - inteligentny agent e-mail" |
| S3 | 0:16-0:30 | Dla każdej wiadomości Protazy rozpoznaje temat sprawy, kategorię i priorytet. Wyszukuje informacje w procedurach i regulaminach organizacji i na tej podstawie proponuje odpowiedź ze wskazaniem źródeł. | Mail z pojawiającymi się etykietami: kategoria, priorytet; obok karta "propozycja odpowiedzi" z przypisem źródła |
| S4 | 0:30-0:40 | Sprawy rutynowe może obsłużyć automatycznie. Pozostałe kieruje do właściwych osób - z pełnym kontekstem i rekomendacją działań. Zawsze zgodnie z zasadą Human-in-the-Loop: to organizacja decyduje, co wymaga zatwierdzenia. | Rozgałęzienie: "automatycznie" / "do pracownika" (ikony: bot, user-check); plakietka "Human-in-the-Loop" |
| S5 | 0:40-0:52 | Korzyści: krótszy czas obsługi, sprawy od razu u właściwych osób, wiedza organizacji dostępna w codziennej pracy i spójna komunikacja. | Lista 4 korzyści z ikonami: timer, route, book-open, message-square |
| S6 | 0:52-0:60 | Protazy integruje się m.in. z Microsoft Outlook 365 i systemami ticketowymi. Napisz do nas - pokażemy Protazego w działaniu. | Pasek logotypów integracji jako tekst; logo i kontakt |

**Teksty ekranowe (S5):** Krótszy czas obsługi spraw · Właściwe osoby od razu · Wiedza organizacji w użyciu · Spójna komunikacja

---

### Odcinek 6 - Gerwazy, inteligentny strażnik zgodności

**Przekaz główny:** automatyczna ocena zgodności dokumentacji z regulacjami (np. NIS2, AI Act),
identyfikacja luk i rekomendacje działań naprawczych.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | NIS2, AI Act, normy branżowe, wewnętrzne polityki. Ręczna ocena zgodności dokumentacji zajmuje tygodnie. | Nazwy regulacji pojawiają się jako pieczęcie nad stosem dokumentów; eyebrow: ZGODNOŚĆ REGULACYJNA |
| S2 | 0:08-0:16 | Gerwazy to inteligentny strażnik zgodności. Automatycznie porównuje dokumentację organizacji z wymaganiami. | Logo Q + "Gerwazy - inteligentny strażnik zgodności" |
| S3 | 0:16-0:30 | Gerwazy analizuje procedury, polityki, regulaminy i umowy. Można korzystać z gotowych zestawów wymagań, jak NIS2 czy AI Act, albo definiować własne listy kontrolne. | Dwie kolumny: "dokumentacja" i "wymagania"; linie dopasowań rysują się między nimi |
| S4 | 0:30-0:40 | Analizę prowadzi zespół współpracujących agentów AI - jak zespół ekspertów. Wynikiem jest raport: poziom spełnienia wymagań, luki i rekomendacje działań naprawczych, z uzasadnieniem opartym na konkretnych fragmentach dokumentów. | Cztery węzły agentów łączą się w jeden raport; karta raportu z paskami poziomu zgodności |
| S5 | 0:40-0:52 | Efekt: krótszy czas oceny zgodności, szybsza identyfikacja niezgodności, lepsze przygotowanie do zmian regulacyjnych i powtarzalny, przejrzysty proces. Dokumenty poufne mogą być analizowane w pełni lokalnie. | Lista 4 korzyści z ikonami: timer, search-check, calendar-check, shield |
| S6 | 0:52-0:60 | Napisz do nas - pokażemy Gerwazego w działaniu. | Logo, kontakt@quanticalab.ai, www.quanticalab.ai |

**Teksty ekranowe (S5):** Krótszy czas oceny zgodności · Szybka identyfikacja luk · Gotowość na nowe regulacje · Analiza lokalna i bezpieczna

---

### Odcinek 7 - Ocena modeli i systemów AI (benchmark)

**Przekaz główny:** wybór modelu AI powinien opierać się na benchmarku zbudowanym
na danych i zadaniach organizacji, nie na popularności i materiałach producentów.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | Setki modeli AI, nowe wersje co kilka miesięcy. Największym wyzwaniem nie jest dziś dostępność modeli, ale wybór właściwego. | Siatka nazw modeli (GPT, Claude, Gemini, LLaMA, Mistral) przewija się; eyebrow: WYBÓR TECHNOLOGII |
| S2 | 0:08-0:16 | Quantica Lab pomaga wybrać rozwiązanie w oparciu o benchmark - uporządkowane porównanie modeli na tych samych zadaniach i danych. | Logo Q + "Ocena modeli i systemów AI" |
| S3 | 0:16-0:30 | Publiczne rankingi rzadko odzwierciedlają realne zadania organizacji - i rzadko sprawdzają jakość polszczyzny. Dlatego benchmark budujemy na Waszych danych i scenariuszach użycia. | Kontrast dwóch kart: "benchmark publiczny" vs "benchmark na danych organizacji" (wyróżniona ramka pink) |
| S4 | 0:30-0:40 | Proces ma cztery kroki: identyfikacja scenariuszy, analiza istniejących benchmarków, testy modeli na danych organizacji i wybór modelu oraz architektury rozwiązania. | Pozioma oś 1-2-3-4 z podpisami; kroki podświetlają się kolejno |
| S5 | 0:40-0:52 | Wynik: mierzalne porównanie jakości, kosztów i wydajności zamiast opinii i deklaracji marketingowych. Benchmark pokazuje też, czy potrzebna jest adaptacja modelu, na przykład fine-tuning - i którą ścieżką iść. | Wykres słupkowy porównania modeli animowany od zera; plakietka "racjonalna decyzja technologiczna" |
| S6 | 0:52-0:60 | Jesteśmy współautorami benchmarków modeli językowych. Napisz do nas - omówimy scenariusz współpracy. | Logo, kontakt@quanticalab.ai, www.quanticalab.ai |

**Teksty ekranowe (S4):** 1 Scenariusze zastosowań · 2 Analiza benchmarków · 3 Testy na danych organizacji · 4 Wybór modelu i architektury

---

### Odcinek 8 - Szkolenia AI dla organizacji

**Przekaz główny:** cztery praktyczne programy - od AI literacy dla wszystkich pracowników
po warsztaty strategiczne dla zarządu; praca na realnych procesach i danych organizacji.

Uwaga produkcyjna: to jedyny odcinek o strukturze "oferta", nie "produkt" - scena S3-S4
prezentuje cztery programy zamiast schematu działania.

| Scena | Czas | Lektor | Ekran / animacja |
|---|---|---|---|
| S1 | 0:00-0:08 | AI Act wymaga od organizacji zapewnienia pracownikom kompetencji AI. A shadow AI już dziś tworzy realne ryzyko operacyjne i prawne. | Napisy "AI literacy" i "shadow AI" na dwóch kartach; eyebrow: KOMPETENCJE AI |
| S2 | 0:08-0:16 | Quantica Lab oferuje praktyczne szkolenia AI - od podstaw dla pracowników po warsztaty strategiczne dla zarządu. | Logo Q + "Szkolenia AI dla organizacji" |
| S3 | 0:16-0:32 | Program obejmuje cztery ścieżki: AI Literacy - wspólny język i bezpieczne korzystanie z AI; warsztaty projektowe dla kadry kierowniczej; warsztaty strategiczne dla zarządów; oraz Supermoce z AI - praktyczną pracę z narzędziami. | Cztery karty programów wjeżdżają kolejno (ikony: graduation-cap, kanban, compass, sparkles - lub najbliższe dostępne w Lucide) |
| S4 | 0:32-0:42 | Pracujemy warsztatowo, na rzeczywistych procesach i danych organizacji. Jesteśmy praktykami - tworzymy i wdrażamy rozwiązania AI, dlatego unikamy ogólnych przykładów i modnych narracji. | Ujęcie "warsztat": tablica z mapowaniem procesu, karteczki układają się w macierz wpływ/wykonalność |
| S5 | 0:42-0:52 | Efektem są konkretne rezultaty: uporządkowana wiedza i zasady korzystania z AI, zidentyfikowane inicjatywy o realnym sensie biznesowym i plan pierwszych kroków wdrożeniowych. | Lista 3 rezultatów z ikonami: book-check, list-todo, map |
| S6 | 0:52-0:60 | Napisz do nas - omówimy program szkoleń dopasowany do Twojej organizacji. | Logo, kontakt@quanticalab.ai, www.quanticalab.ai |

**Teksty ekranowe (S3):** AI Literacy · AI dla kadry kierowniczej - projekty · AI dla kadry kierowniczej - strategia · Supermoce z AI

---

## 3. Kontrola spójności serii (checklist przed publikacją)

- [ ] Każdy odcinek 55-62 s; lektor zmieścił się bez przyspieszania.
- [ ] Wszystkie liczby i nazwy funkcji zgodne z kartą katalogową produktu.
- [ ] Zero wykrzykników, zero emoji, zero em-dash w tekstach ekranowych.
- [ ] Kolory wyłącznie z tokenów marki (pink `#d20757`, `#111111`, biel); brak czystych szarości pośrednich.
- [ ] Ikony wyłącznie Lucide, jednolita grubość kresek.
- [ ] Identyczna scena CTA (S6) w całej serii; ten sam lektor i podkład muzyczny.
- [ ] Nazwy plików wyjściowych: `ql_wideo_<produkt>_60s_16x9.mp4` (oraz `_9x16` dla wersji pionowej).
