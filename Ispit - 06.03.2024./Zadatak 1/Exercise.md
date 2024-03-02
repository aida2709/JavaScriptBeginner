## Random thing to do
1. U index.html cete primjetiti button sa tekstom `Tell me what to do`
2. Takodjer mozete primjetiti listu sa id-em `todoList`
3. Klikom na button iz koraka 1. treba da se dohvate podaci sa API rute `https://www.boredapi.com/api/activity`
4. Ukoliko su sa API-a uspjesno dohvaceni podaci, kreirati novi list item (li) u `todoList` list. li treba da ima klasu `list-group-item`. List item treba da bude vrijednost property-a `activity`. 
Napomena: Svaki put kada se klikne na button, u listu treba da se doda novi li sa novom aktivnosti.
5. Ukoliko poziv ka API-u padne, ispisati poruku o greski u konzoli.