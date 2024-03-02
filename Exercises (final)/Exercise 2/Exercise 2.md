## Task 1
Kreirati html stranicu sa table i button-om. Kada se klikne na button, prikazati rezultat sa API rute za prvih 10 planeta. Informacije koje treba u tabeli prikazati su:
* Planet Name
* Population
* Climate
* Gravity

**API URL: ** https://swapi.dev/api/planets/?page=1

## Task 2
Nakon sto je korisnik kliknuo na button da bi dohvatio prvih 10 planeta, ispod renderirane tabele prikazati button na kojem pise `Next 10`. Kada se klikne na ovaj button treba da se u tabeli obrisu stari podaci a ucitaju novi sa slijedece stranice `https://swapi.dev/api/planets/?page=2`.
Svaki put kada se klikne na next 10 button, treba da se sa slijedeceg page-a ucitaju slijedece planete.
 
**API URL: ** https://swapi.dev/api/planets/?page=2
