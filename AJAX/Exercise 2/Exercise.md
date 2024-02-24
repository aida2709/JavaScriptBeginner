## Dog image
1. Kreirati button sa tekstom `Show the dog` (mozete u index.html). Button treba da ima klase `btn btn-success`.
2. Klikom na ovaj button treba da se dohvate podaci sa API rute `https://dog.ceo/api/breeds/image/random`
3. Ukoliko su sa API-a uspjesno dohvaceni podaci, kreirati sliku ciji ce source biti jedak onom primljenom sa API-a. Napomena: ne zaboravite da setujete slici height i width.
4. Ukoliko poziv ka API-u padne, ispisati poruku o greski u koznoli.
5. Zadatak unaprijediti na slijedeci nacin:
   za vrijeme dok traje AJAX zahtjev, dodati buttonu ukloniti klasu `btn-success`, a dodati mu klasu `btn-danger`. Nakon sto se zavrsi AJAX zahtjev, ponovo mu vratiti klasu `btn-success`.
    