# GitStat

to run this app run 

``` bash
nom run build
npm run start
```

# Test

``` bash
npm run cypress
```

# Kjente feil og mangler

 * Noen kolonner i tabellen viser ikke hele teksten.  Det er gjort
   slik for å legge inn noe styling for hover.  løsning kan være å
   sette høyde med javascript, eller sette height til auto, men da
   får man ikke noen animasjon.
   
 * Det gis ikke noen tilbakemelding til brukeren ved netverk eller
   server feil. En enkel løsning er å legge inn en vanlig alert()
   poppup. Hvis man ønsker noe mer fancy, så kan man returnere
   feilmeldingen fra data-"store" som et object, og teste returverdien
   før man viser tabellen. 
   
 * I mobil-visning burde man gjøre om paging til en drop-down.  Det
   funger ok nå, men serveren returnerer mer en 100 elementer, kan
   paging listen bli for lang.
   
 * Siden er ikke tilrettelagt for svaksynte.
   pager kunne for eksempel wrappes med <nav>
   knappene kunne ha aria-label={`gå til side ${index} i tabellen`}
   header i tabellen kunne også ha en egen aria-label.
   
 * Tester av komponentene er ikke implementert. Som et minimum burde
   komponentene testes at de kan monteres. Pager komponenten bør bl.a
   teste at alle elementene kan vises (at navigasjonen dekker alle
   sidene).
   
