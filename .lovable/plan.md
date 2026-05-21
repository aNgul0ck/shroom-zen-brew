
## Audyt zgodności (EFSA / GIS) — Shroom Drink

Bazując na: szkoleniu legal z 11.12.2025 (Kamila Knap), dokumencie "Shroom Kontekst Marketingowy" oraz skillu `shroom-legal-claims`.

**Złota zasada:** produkt NIGDY nie robi efektu zdrowotnego. Składnik może (tylko cynk i witamina C, w zatwierdzonym brzmieniu). Lion's Mane, żeń-szeń, L-teanina, chmiel, inulina, kofeina, kordyceps = ZERO claimów EFSA. Zakaz nazw chorób. Zakaz "wspiera odporność / koncentrację / pamięć / energię".

**Formatowanie:** w całej akcji nie używamy myślników em (—). Tylko zwykłe ".", "," lub półpauza " . " / nawias. To dotyczy zarówno copy, jak i kodu (np. opisy w `products.ts`, `data/about.ts`).

---

### 1. Krytyczne naruszenia (do natychmiastowej zamiany)

| Plik | Linia | Obecnie | Problem | Propozycja |
|---|---|---|---|---|
| `IngredientsCarousel.tsx` | 5 | "Supports brain function, boosts immune system" (Lion's Mane) | Bezpośredni zakazany claim | "Grzyb funkcjonalny z tradycji azjatyckiej. 500 mg w każdej butelce." |
| `IngredientsCarousel.tsx` | 9 | "Ochrona organizmu i odporność" (Vit C) | "Odporność" przy vit C jest dozwolona, ale nie "ochrona organizmu" | "Przyczynia się do normalnego funkcjonowania układu odpornościowego (EFSA)." |
| `Benefits.tsx` | 8 | "Cynk . Przyczynia się do funkcji poznawczych*" | OK, ale doprecyzować formułę | "Cynk przyczynia się do prawidłowej funkcji poznawczej (EFSA)." |
| `HowItWorks.tsx` | 36 | "Power: wyostrzone skupienie. Relax: spokój umysłu. Bez nerwowości, bez senności." | Claimy efektu produktu | "Power: rytuał poranny. Relax: rytuał wieczorny. Twój wybór smaku i pory dnia." |
| `HowItWorks.tsx` | 25 | "Naturalna aktywacja lub wyciszenie" | Claim efektu | Opis czysto składnikowy: "L-teanina, składniki botaniczne i witaminy . sprawdź skład na etykiecie." |
| `HowItWorks.tsx` | 47 | "Lion's Mane wspiera neuroplastyczność" | Twardy zakazany claim | "Lion's Mane to grzyb funkcjonalny z tradycji azjatyckiej. Regularny rytuał, świadomy wybór." |
| `IntroSection.tsx` | 7-23 | "Focus / Naturalna moc bez crashu / Wycisz się bez scrollowania" | Claimy benefitu | Reframe na: "Rano . Wieczór . Social . Capsules" + soft copy ("Twój rytuał dnia") |
| `FunctionalDrinks.tsx` | 11-25 | "Energia bez bullshitu / Aktywuj umysł i ciało / Wycisz się po intensywnym dniu / Regeneracja" | Claimy efektu | Soft: "Funkcjonalny napój na rano." / "Funkcjonalny napój na wieczór." / "Twój codzienny rytuał." |
| `MarqueeBanner.tsx` | 4-9 | "Adaptogens / Mood enhancing / ..." | "Mood enhancing" = claim | Usunąć "Mood enhancing". Zostawić: "Adaptogens", "Lion's Mane", "Zero alcohol", "Made in Poland". |
| `Hero.tsx` | 52 | "Energia, spokój i dobre samopoczucie" | "Energia" i "spokój" jako benefit produktu = ryzyko | "Funkcjonalne napoje z soplówką jeżowatą. Twój rytuał dobrego samopoczucia." (well-being jest safe) |
| `CuriosityPopup.tsx` | 104, 122, 132, 138 | "energii nie dodaje", "wspierają mitochondria", "Obniża i reguluje kortyzol", "Skupienie bez crashu" | Najmocniejsze naruszenia (fizjologia + porównania efektów) | Przepisać cały popup: zostawić wątek edukacyjny o ginsenozydach jako "ciekawostka botaniczna / tradycja"; usunąć tabelę porównującą efekty na kortyzol; usunąć "Skupienie bez crashu" jako tag. |
| `data/products.ts` Power | 117, 136, 142, 149-151, 161-162, 166-167 | "Naturalna energia bez crashu", "Energia bez crashu", "Tradycyjnie stosowana w celu wsparcia funkcji poznawczych", "Poczuj naturalną energię i skupienie", "Stabilna energia", "Skupienie i energia", "różnicę w koncentracji" | Claimy benefitu + reviews z claimami (reviews na stronie OK, ale nie w opisie produktu) | Tagline: "Twój poranny rytuał". Description: opis składnikowy. Benefity: zostawić tylko "Cynk (EFSA): funkcje poznawcze", "Wit. C (EFSA): zmęczenie/odporność", "0 g cukru", "500 mg Lion's Mane". Routine: opisy rytuału, nie efektu ("Poranny rytuał zamiast kawy"). Recenzje: usunąć fragmenty zdrowotne lub zachować z disclaimerem "opinia klienta, nie obietnica produktu". |
| `data/products.ts` Relax | 209, 215, 217, 245 | "Spokój bez senności", "wsparcia regeneracji", "wsparcia relaksacji", "wspiera naturalne wyciszenie organizmu" | Claimy | Zostawić soft language: "Wieczorny rytuał", "Bez alkoholu, bez kofeiny", opisy składnikowe bez "wspiera". FAQ "Czy powoduje senność?" → "Nie zawiera substancji nasennych. To napój, nie lek." |
| `data/products.ts` Diva | 279 | "Tradycyjnie stosowany jako adaptogen wspierający witalność" (żeń-szeń) | "wspierający witalność" = claim | "Żeń-szeń . roślina o wielowiekowej tradycji w kulturze koreańskiej." |
| `data/about.ts` | 93, 107, 114, 136 | "wspierających witalność", "wspierania spokoju i relaksu", "witamina C wspiera odporność i redukcję zmęczenia (EFSA)" | Pierwsze dwa = claim. Trzeci jest OK dla vit C, ale forma musi być standardowa | Przepisać pierwsze dwa na "tradycyjny składnik". Trzeci: "Witamina C przyczynia się do zmniejszenia uczucia zmęczenia i znużenia oraz do normalnego funkcjonowania układu odpornościowego (EFSA)." |
| `BrainBlissSection.tsx` | 52 | "Źródło cynku, który przyczynia się do prawidłowych funkcji poznawczych" | OK strukturalnie. Sprawdzić tylko, czy spełniony jest próg "źródło cynku" (15% RWS w 100g/100ml) . to działanie tylko produktowe, nie copy. | Zostawić. Dodać disclaimer "(EFSA)". |
| `Brief.tsx` | 995, 1107, 1113, 1131, 1423 | "Adaptogeny pomagają organizmom adaptować się do stresu", "zwiększanie odporności organizmu na stres", "Kosmonauci . by radzić sobie ze stresem", "grzyby wspierające organizm" | Cytaty historyczne mogą zostać, ale tylko jako badania/tradycja, nie powiązane z naszym produktem na tej samej stronie | Zostawić w sekcji edukacyjnej "co mówi nauka/historia", oznaczyć jako "kontekst kulturowy/badawczy". USUNĄĆ CTA "kup Shroom" z tej samej strony. |
| `Research.tsx` | 22, 36, 50, 64, 124-138 | Tytuły badań w oryginale ("Reduction of depression and anxiety...") + EFSA claims listed | Cytowanie badań jest OK na blogu/research page, jeśli nie ma na tej samej stronie CTA produktowego | Zostawić tytuły (to są realne tytuły badań, nie nasze claimy). Sprawdzić, że strona nie kończy się "Kup Shroom". Jeśli kończy . usunąć link/CTA. |
| `BlogPost.tsx` | 144 | "diagnozę ADHD" | Nazwa choroby w treści marki | Przepisać akapit bez nazwy choroby. Można mówić o "neuroróżnorodności" / "innym sposobie funkcjonowania mózgu". |
| `Reviews.tsx` | 9 + analogiczne | "Skupienie i energia bez nerwowości kawy" | Recenzja z claimem zdrowotnym | Reviews mogą zostać na stronie (Kamila to potwierdziła . OK jako social proof), ALE nie wolno ich używać w paid ads. Dodać oznaczenie "Opinia klienta. Nie stanowi obietnicy zdrowotnej." |
| `QuizPage.tsx` | 54, 100 | "Skupienia i produktywności", "spokój bez senności" | Claimy | Reframe: "Pora dnia: rano / popołudnie / wieczór" + "Twój rytuał: praca / odpoczynek / spotkanie". |
| `DayCycleClock.tsx` | 16, 21 | "Focus, deadline / 3pm slump? Not today / Saturday mood" | "3pm slump? Not today" sugeruje benefit | "3pm pause" / "Saturday brunch" . pora dnia, nie efekt. |
| `ComparisonSection.tsx` | 37, 68 | "Pomaga zwolnić obroty", "Grzyby, adaptogeny w czystej formule" + cała tabela porównawcza vs kawa/energetyki | Porównawcze marketing pod EU 2006/114 . jest OK, ale nie wolno porównywać EFEKTÓW zdrowotnych. Można porównywać skład (cukier/kofeina/alkohol/cena). | Tabela: ograniczyć kolumny do "Cukier", "Kofeina", "Alkohol", "Adaptogeny TAK/NIE", "Cena". Usunąć "Pomaga zwolnić obroty". |
| `about/AboutOrigin.tsx` | 33, 44 | "lat życia w warunkach pełnych stresu", "napój, który naprawdę wspiera ciało i umysł" | Drugi to claim | "lat życia w intensywnym tempie", "napój, który chcemy pić same co dzień." |
| `Subscriptions.tsx` | (cała sekcja benefitów) | Pewnie powtarza "wsparcie/regeneracja" | Audyt + przepisanie na język rytuału | Sprawdzić wszystkie wystąpienia "wspiera", "pomaga". |
| `Index.tsx` | 27 | meta keywords zawiera "zdrowy napój, wellness" | "Zdrowy" w meta to ryzyko (sugeruje claim zdrowotny) | Zamienić "zdrowy napój" na "funkcjonalny napój". |

---

### 2. Globalne reguły do wprowadzenia (przed pisaniem nowego copy)

1. **Zakazany słownik** (dopisać do `mem://legal/compliance-standards`):
   - "wspiera", "wzmacnia", "zwiększa", "poprawia", "pomaga na", "działa na", "rewitalizuje", "detoksykuje", "oczyszcza"
   - "odporność" (poza zatwierdzonym claimem przy witaminie C)
   - "koncentracja / pamięć / fokus / focus" jako efekt produktu (OK jako pora dnia: "praca głęboka")
   - "energia / energy / energizes" jako efekt produktu (OK jako kontekst: "poranny napój")
   - "spokój / wyciszenie / relaks" jako efekt produktu (OK jako rytuał: "wieczorny rytuał")
   - "regeneracja", "spokojny sen", "kortyzol", "hormony", "neuroplastyczność", "mitochondria"
   - Nazwy chorób: ADHD, Hashimoto, depresja, lęk, anxiety, burnout (medyczne), insomnia
   - "Mood enhancing", "boosts", "supports brain function"

2. **Zatwierdzone formuły** (jedyne, których wolno używać):
   - Cynk: "Cynk przyczynia się do prawidłowej funkcji poznawczej (EFSA)."
   - Cynk: "Cynk przyczynia się do ochrony komórek przed stresem oksydacyjnym (EFSA)."
   - Witamina C: "Witamina C przyczynia się do zmniejszenia uczucia zmęczenia i znużenia (EFSA)."
   - Witamina C: "Witamina C przyczynia się do prawidłowego funkcjonowania układu odpornościowego (EFSA)."
   - Witamina C: "Witamina C przyczynia się do prawidłowego funkcjonowania układu nerwowego (EFSA)."
   - Źródło cynku / źródło witaminy C / bez dodanego cukru . OK.

3. **Soft language** (bezpieczne wszędzie):
   - rytuał, codzienny rytuał, well-being, dobrostan, równowaga, balans, harmonia, świadomy wybór, dobre samopoczucie, "the choice of feeling good"

4. **Lion's Mane / żeń-szeń / L-teanina / chmiel / inulina** opisujemy tylko jako:
   - tradycja kulturowa ("od wieków stosowany w...")
   - kontekst badawczy ("badacze przyglądają się...")
   - opis składu ("ekstrakt 30:1, 500 mg w butelce")

5. **Recenzje klientów**: zostają na stronie (social proof OK), ale dodać globalny disclaimer pod każdą sekcją: "Opinie klientów. Nie stanowią obietnicy działania produktu." Recenzji NIE używamy w żadnych paid ads (osobna decyzja marketingowa, ale warto zapisać w `BACKEND_HANDOFF.md`).

6. **Strony edukacyjne (Brief, Research, Blog)**: mogą cytować badania, ale NIE mogą kończyć się CTA "Kup Shroom" na tej samej stronie (Kamila wprost: nie linkujemy research do produktu w tym samym kaflu / na tej samej stronie).

7. **Em dash banished**: zamienić wszystkie "—" w copy stringach na "." / "," / ", " / nawias. Skrypt: `rg "—" src/ -l` → ręczna podmiana w widocznych stringach (nie w kodzie technicznym).

---

### 3. Kolejność implementacji (3 PR-y, dla bezpieczeństwa)

**PR 1 . Krytyczne (najwyższy risk):**
`IngredientsCarousel.tsx`, `HowItWorks.tsx`, `Benefits.tsx`, `CuriosityPopup.tsx`, `Hero.tsx`, `MarqueeBanner.tsx`, `IntroSection.tsx`, `FunctionalDrinks.tsx`, `Index.tsx` meta keywords.

**PR 2 . Produktowe (core PDP + dane):**
`data/products.ts` (Power, Relax, Diva), `data/about.ts`, `ComparisonSection.tsx`, `Subscriptions.tsx`, `QuizPage.tsx`, `DayCycleClock.tsx`, `BrainBlissSection.tsx`.

**PR 3 . Edukacyjne + recenzje + ADHD + em dashes:**
`Brief.tsx` (usunąć CTA produktowe), `Research.tsx` (sprawdzić CTA), `BlogPost.tsx` (usunąć ADHD), `Reviews.tsx` (disclaimer + przegląd), `about/AboutOrigin.tsx`, globalna zamiana em dash, dodanie globalnego disclaimera EFSA w stopce.

Po każdym PR: ja przedstawiam Ci listę zmian z dokładnym before/after do akceptacji . zanim wejdzie na produkcję.

---

### 4. Co zostawiamy (już compliant)

- `Research.tsx` claims w wersji "przyczynia się do..." . prawidłowe brzmienie EFSA.
- `BrainBlissSection.tsx` opis "Źródło cynku, który przyczynia się..." . prawidłowo (pod warunkiem progu cynku 15% RWS).
- Diva: cała sekcja jest najbezpieczniejsza prawnie (lifestyle, brak claimów zdrowotnych). Tylko jeden fix przy żeń-szeniu.
- Składnikowe opisy bez słowa "wspiera" (np. "13 składników botanicznych", "0% alkoholu", "500ml").

---

### 5. Pytania do Ciebie przed startem

1. Czy "Lion's Mane" / "soplówka jeżowata" zostawiamy w nazwach sekcji i etykietach (sama nazwa składnika jest OK, claim NIE jest)? Zakładam: TAK.
2. Czy mogę usunąć całą tabelę "Kofeina vs Żeń-szeń" z `CuriosityPopup` (porównanie efektów fizjologicznych = ryzyko), i zostawić tylko edukacyjną treść o tradycji ginsenoidów?
3. Czy mogę wyciąć fragment o ADHD z `BlogPost.tsx`, czy to konkretny tekst gościa/autorki i wolisz, żebym najpierw skonsultował z Tobą alternatywną wersję?
4. Czy chcesz, żebym dodał globalny komponent `<EfsaDisclaimer />` w stopce każdej strony produktowej i edukacyjnej?

Po Twoich odpowiedziach przechodzę do implementacji PR 1.
