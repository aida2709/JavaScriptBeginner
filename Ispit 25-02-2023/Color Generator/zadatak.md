U ovom zadatku praviti cemo Color Generator aplikaciju. Aplikacija ima za cilj pregled odredjene boje, bilo u HEX formatu.

Korisnik unosi boju u hex formatu, te nakon sto klikne Set, divu sa id-em `coloredDiv` treba da se setuje background color jednak boji koja je unesena.

Pomoc:

1. 40 bodova
Implementirati setovanje boje po HEX standardu:

- U `index.html` primjetiti cete input sa id-em `hexColor`, te button sa id-em `setHexBtn`
- Takodjer tu je i div sa id-em `coloredDiv`
- Koristeci DOM, dohvatiti ove elemente
- Nakon sto korisnik klikne na Set button, pokupiti vrijednost koja je unesema u input `hexColor`. Ukoliko je boja unesena, divu sa id-em `coloredDiv` setovati boju pozadine (background color) jednaku unesenoj
- Takodjer u momentu kada se kliknulo na Set button, ukoliko boja nije unesena, implementirati i validaciju. U tom slucaju, Korisniku treba da se prikaze error pruka (`hexColorError`). Prikazati cete je tako sto joj uklonite klasu `hide`.

3. 10 bodova
Implementirati random promjenu boje div-a
- U `index.html` primjetiti cete checkbox sa id-em `randomGenerateColor`
- Kada korisnik klikne na ovaj checkbox, svako 3 sekunde, div treba da poprimi random generiranu novu boju pozadine
- Obratno, ako ovaj checkbox nije odabran - zaustaviti takvo ponasanje
- Mozete koristiti RGB format