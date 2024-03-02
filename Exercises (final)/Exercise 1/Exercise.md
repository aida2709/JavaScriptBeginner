## Dictionary

U ovoj aplikaciji cemo napraviti svoj engleski dictionary. Korisnik unosi rijec koja ga zanima, a nakon sto klikne na `Get` button. treba da se dohvate podaci sa rute `https://api.dictionaryapi.dev/api/v2/entries/en/${word}` i prikazu slijedeci detalji na web stranici:
- u paragraphu sa id-em `phonetic` ispisati text u formi `Phoenetic: ${phonetic dohvacene rijeci}`
- u listi sa id-em `meaningsList` za svaki item iz arraya `meanings` kojeg je API vratio ucitati po jedan list item (li) sa klasom `list-group-item`.
- Nakon sto se kliknulo na get i ucitali se podaci, ocistiti prethodnu vrijednost inputa.


Ukoliko korisnik klikne na Get, a ne unese nikakvu rijec, prikazati alert sa textom `Please enter a word`