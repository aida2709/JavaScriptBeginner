Cilj ovog zadatka je validacija forme.

Klikom na dugme `Spremi`, treba da se odradi validacija forme. Ako ima nevalidnih polja, ispisati errore. Inace ako je sve uredu, prikazati alert `Podaci uspjesno spremljeni`.

Slijedeca validacija treba biti implementirana:
- Sva polja u formi su obavezna osim checkbox-a
- Za polje godine, dodatno jos provjeriti da je unesena vrijednost broj
- Primjetiti cete div sa id-em `emailDiv`. On je po defaultu sakriven (ima klasu `hide`). Tek ukoliko se klikne na checkbox, ovaj div treba da se prikaze (skloniti mu klasu `hide`). Takodjer prilikom validacije, ako je checkbox checkiran email je obavezno polje, inace ako checkbox nije checkiran, email nije obavezno polje.

Ispod svakog inputa mozete primjetiti div koji u sebi sadrzi error poruku. Npr. `prezimeError`. Svaki od ovih
div-ova po defaultu ima klasu `hide`. Ukoliko zelite da odredjeni error bude prikazan, dovoljno je da samo uklonite
klasu `hide`. Te obratno, ako zelite ukloniti neki error - samo dodate klasu `hide`.

U prilogu imate slike koje pokazuju kako sve treba na kraju izgledati.
