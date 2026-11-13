# Religionsspåret

En svensk webbapp för Religion 1 om judendom, kristendom och islam. Appen har 18 lektioner, jämförelseteman, skrivträning, flashcards och tre övningslägen. Egna kort, anteckningar och framsteg sparas lokalt i webbläsaren.

## Kör lokalt

Öppna index.html eller kör `python3 -m http.server 8000` från projektmappen och besök http://localhost:8000.

## Publicera

Importera GitHub-repot i Vercel. Projektet är en statisk webbapp utan beroenden eller byggsteg.

## Maskotens animationer

Blinkning/vila, vinkning, glädjeskutt och tänkande använder transparenta WebP-atlaser
med 30 bildrutor per sekund. Mellanrutorna skapas med dubbelriktad optisk
flödesinterpolering från de ursprungliga 24 genererade poserna i `owl-motion.webp`.
Alla rörelser avslutas i samma vilopos. Systemets inställning för reducerad
rörelse respekteras och visar stillbilder.

Återskapa atlaserna och `owl-motion.css` med `python3 scripts/build_owl_motion.py`.
Det kräver Pillow, NumPy och OpenCV; inga av dessa behövs i webbappen.
