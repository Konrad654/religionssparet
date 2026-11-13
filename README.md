# Religionsspåret

En svensk webbapp för Religion 1 om judendom, kristendom och islam. Appen har 18 lektioner, jämförelseteman, skrivträning, flashcards och tre övningslägen. Egna kort, anteckningar och framsteg sparas lokalt i webbläsaren.

## Kör lokalt

Öppna index.html eller kör `python3 -m http.server 8000` från projektmappen och besök http://localhost:8000.

## Publicera

Importera GitHub-repot i Vercel. Projektet är en statisk webbapp utan beroenden eller byggsteg.

## Maskotens animationer

Ugglan är en vektorfigur med separata leder för huvud, vinge, blick, ögonlock,
bok, mantel och fötter. CSS animerar delarnas positioner och rotationer
kontinuerligt vid skärmens uppdateringsfrekvens. Inga bildrutor eller
bildinterpolering används. Vinkning, tänkande och glädjeskutt aktiveras med
knappar och quizets återkoppling. Blicken följer pekaren i viloläget.
Reducerad rörelse ger stilla uttryck. Inga externa bibliotek behövs.

Formen definieras i `mascot.js`, rörelserna i `owl-puppet.css`.
