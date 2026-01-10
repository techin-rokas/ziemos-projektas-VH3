# ziemos-projektas-VH3

# Wrapperių / konteinerių taisyklės pagal mūsų HTML skeleton.

- `.app` = viso puslapio „apvalkalas“ (wrapperis).  
  Jis skirtas bendriems dalykams: global fonui, bendram layout’ui  
  (pvz. `min-height`), overflow kontrolei.  
  Į `.app` NEkeliam sekcijų layout’o (nedarom čia grid/flex,  
  kuris perstato visą puslapį), nebent suderinta.

- `.header`, `.hero`, `.partners`, `.implement`, `.uiux`,  
  `.features`, `.cta`, `.footer` = sekcijos „korpusas“.  
  Čia galima keisti sekcijos foną, dekoracijas, vertikalius tarpus  
  (padding/margin). Sekcijos klasės ir eiliškumo nekeičiam.

- `.container` = bendras puslapio turinio ribotuvas  
  (max-width + šoniniai padding).  
  Jis visur turi būti vienodas, todėl `.container` stiliaus  
  nekeičiam sekcijose (nedarom pvz. `.hero .container { ... }`).  
  Container nustatymai keičiami tik globaliai.

- `__inner` (pvz. `.header__inner`, `.hero__inner`,  
  `.partners__inner` ir t.t.) = sekcijos vidinis layout wrapperis.  
  Čia daromas visas išdėstymas: `display:flex/grid`, stulpeliai,  
  `gap`, `align-items`, elementų perrikiavimas tablet/mobile.  
  Tai pagrindinė vieta, kur kiekvienas dev’as tvarko savo layout’ą.

- Papildomi wrapperiai sekcijos viduje (`__content`, `__media` ir pan.)  
  kuriami tik jei reikia tvarkingam layout’ui/responsive  
  (pvz. tekstas atskirai nuo paveikslų).  
  Vengiame bereikalingų `div`.

- Paprasta taisyklė: GLOBAL (`.app`, `.container`, bendri komponentai)  
  keičiam tik global CSS, o sekcijų responsive/layout keičiam  
  tik savo `...__inner` ir sekcijos vidiniuose wrapperiuose.

  # CSS taisyklės pagal mūsų `style.css` (komandai)

- Viršutinė dalis „Setup environment / DO NOT EDIT WITHOUT AGREEMENT“  
  (`:root`, reset/base, `.sr-only`, `.app`, `.container`, `.btn`, `.input`)  
  yra GLOBAL. Jos neredaguojam be susitarimo, nes tai liečia visą projektą.

- `:root` kintamieji (`--clr-*`, `--ff-*`, `--container-*`, `--bp-*`)  
  yra vienintelė vieta keisti spalvas/šriftus/spacing ir breakpoint’us.  
  Sekcijose nekuriam naujų spalvų ar šriftų „iš oro“.

- `.app` – puslapio apvalkalas. Čia laikom tik globalius dalykus  
  (pvz. `overflow-x: hidden`), nedarom sekcijų layout’o.

- `.container` yra bendras turinio ribotuvas. Sekcijose jo neperrašom  
  (nedarom `.hero .container { ... }`). Jei reikia kitokio išdėstymo,  
  darom per `.__inner` (pvz. `.hero__inner`).

- Bendri komponentai:  
  - Mygtukai visur naudoja `.btn` + variantą (`.btn--primary`, `.btn--secondary`).  
    Sekcijose nekeičiam `.btn` bazinių stilių, tik naudojam.  
  - Inputai visur naudoja `.input`. Sekcijose nekeičiam bazinio `.input` dizaino.  
  - Plotis: `.btn--full` tik kai reikia full width.

- Kiekvienas DEV redaguoja TIK savo bloką žemiau komentarų:  
  pvz. Rokas redaguoja tik `.header` ir `.header__inner`,  
  Edvinas – tik `.hero` ir `.hero__inner`, ir t.t.  
  Nelendam į kitų blokų selektorius.

- Kur ką rašyti sekcijoje:  
  - Sekcijos korpusas (`.hero`, `.partners`...) – fonas, dekorai, vertikalūs tarpai.  
  - Vidinis wrapperis (`.__inner`) – layout (grid/flex), stulpeliai, gap, align, responsive.

- Responsive taisyklė:  
  Global breakpoint’ai aprašyti apačioje. Kiekvienas DEV gali pridėti savo  
  `@media` tik savo bloko viduje/šalia savo selektorių, bet neredaguoja  
  kitų blokų ir neperrašinėja globalių komponentų be susitarimo.