## Random thing to do
1. U index.html cete primjetiti button sa tekstom `Tell me what to do`
2. Takodjer mozete primjetiti tabelu sa klasom `table`
3. Klikom na button iz koraka 1. treba da se dohvate podaci sa API rute `https://www.boredapi.com/api/activity`
4. Ukoliko su sa API-a uspjesno dohvaceni podaci, kreirati novi red (tr) u prethodno kreiranoj tabeli. Taj red treba da ima celije sa vrijednostima property-a `activity`, `participants`, `type` i `price`. 
Napomena: Svaki put kada se klikne na button, u tabelu treba da se doda novi red sa novom aktivnosti.
1. Ukoliko poziv ka API-u padne, ispisati poruku o greski u konzoli.