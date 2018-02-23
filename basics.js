//implicit global változó lesz a szoveg
//global: a szoveg valtozo mindenhol elérhető lesz a kódban
//implicit global változót lehetőleg ne használjunk!
szoveg='6';

console.log(szoveg);

//szekvencia:a program az utasításokat, soronként hajtja végre hajtja egymás után.

//innentől minden strict mode-ban fut
(function () {
  'use strict';
  // minden amit ide írok az strict mode-ban fog futni
  //a strict mode szigorubb szabalyokkal futtatja
  // a javascript kodot, és több hibát fog kiírni a böngésző
  //amit enélkül nem tenne meg
    
  //ez egy ujradeklarálható változó lesz:
  var szoveg2='valami';
  console.log(szoveg2);
    
  //erre nem kapunk hibát mert a var kulcsszóval deklarált változót ujradeklarálhatjuk:
  var szoveg2='valami';
    
  let szoveg3='szoveg3 ezt let-el hoztuk letre';
  console.log(szoveg3);
    
  // a let kulcsszoval letrehozott valtozokat nem lehet ujradeklaralni,
  //a kovetkezo sort ha nem komenntezzuk, hibat kapunk:
  //let szoveg3="szoveg3 ezt let-el hoztuk letre";
    
  //ez egy értékadás, nem deklarálás:
  //automatic semicolon insertion,
  //ha kihagyjuk a pontosvesszőt, akkor a javascript
  //megpróbálja betenni helyettünk, (ez néha sikerül néha nem...)
  //https://github.com/twbs/bootstrap/issues/3057
    
  szoveg3='uj erteket kap a szoveg3';
    
  //a console.log egy fugveny, aminek átadjuk a szoveg3 valtozot
  // a console.log egy más ember által írt kód, ami azt csinálja
  //a neki adott változoval, hogy kiírja a console-ra
  console.log(szoveg3);
    
  //kiirathatunk egyszerre szoveget és változot is:
  let szam1=94;
  console.log('a szam1 valtozo értéke '+szam1);
  //a szoveg tipusa string:
  console.log('a szoveg3 tipusa:'+typeof(szoveg3));
  //a szam1 tipusat is kiíratjuk:
  console.log('szam1 valtozo tipusa: '+typeof(szam1));
    
  szam1 = 34;
    
  let a=3;
  let b=9;
  console.log('a értéke: '+a+' b értéke: '+b);
    
  //kicseréljük két változó értékét, egy harmadik (segédváltozó) segítségével
  let c=a;
  a=b;
  b=c;
  console.log('a értéke: '+a+' b értéke: '+b);

    
  //: boolean változó típus
  //logikai változó, két értéke lehet, true vagy false
  let kapcsolo = true;
    
    
  //elágazás, ha a feltételben lévő rész igaz, akkor a {}-ban lévő rész lefut
  if(kapcsolo===true) {
    console.log('A kapcsolo be van kapcsolva');
        
  }
  else{//különben
    console.log('a kapcsolo ki van kapcsolva');
  }
    
  let nev='Geza';
  // három darab egyenlőségjellel hasonlítunk össze értékeket!!
  //a három darab egyenlőségjel a típust is hasonlítja
  //a kettő darab egyenlőségjel nem hasonlít tipust: pl
  // 3 =='3' > true
  //3 ==='3' > false
  if (nev==='Geza'){
    console.log('Geza itt van');
  }
    
  if ( a>b){
    console.log('a nagyobb mint b');
  }else {
    console.log('a nem nagyobb mint b');
  }
    
  //ha nem egyenlőséget vizsgálunk akkor azt igy kell:
  //itt is ha 2 db egyenlőségjel van akkor vizsgáljuk a típust is
  //ha csak egy lenne akkor nem vizsgálnánk a típust...
  //if (a !==)....
    
  //hoisting
  console.log('a palack értéke: '+palack); //ebben a sorban már létezik a palack változó, csak még nem kapott értéket, ezért "undefined"
  //csak a var kulcsszóval deklarált változókra érvényes a hoisting
  var palack= 'szilva';
    
  let szam=0;
  //ez olyan mint ha az írnám hogy szam=szam+1
  szam++;
  szam+=1;
  console.log('szam értéke: '+szam);
   
  console.log('uj sort a \n karakterrel lehet csinálni');
    
    
  //---------------------------ciklusok ------------------------------
  //-----------------------------------------------------------
  //a {} -ban lévő rész addig fut, amíg a while-ban lévő feltétel 
  //igaz
  while(szam>=0) {
    console.log('szam-bol levontunk egyet: '+szam);
    szam--;
    
  }
  //végtelen ciklus:
  //while (true){}
    
  //ez a változó típust tömbnek hívjuk
  //több elemet tartalmazhat a tömb
  let szamok = [3,4,5,7,4,8,9];
  console.log('a szamok tipusa '+typeof (szamok));
  console.log('a tomb nulladik eleme: '+szamok[0]);
  //a tömb 7 elemű de nincs 7edik eleme mert nullától indexeljük
  //a tömböket
  console.log('a tomb hetedik eleme: '+szamok[7]);
    
    
  //for ciklusban meg kell adni, hogy mettől meddig menjünk
  //és azt is hgyo hányasával lépkedjünk, az i++ azt jelenti, hogy
  //egyessével megyünk
  for(let i=0; i<szamok.length;i++){
    //a szamok i-edik elemét kiírjuk:
    console.log('a szam: '+szamok[i]);
  }
    
  //ellenőrizzük, hogy van e 9-es a tömbben:
  for(let i=0; i<szamok.length;i++){
    if (szamok[i]===9){
      console.log('van a szamok kozott 9-es');
    }
  }
    
  let j=0;
  while(j<szamok.length){
    console.log('a szam: '+szamok[j]);
    j++;
  }
    
  //----------------------------------------------------------------------
  //---------------------------Függvények--------------------------------
  //---------------------------------------------------------------------
    
  //1.function statement
  //erre érvényes a hoisting, ezt a kódban korábban is használhatjuk
  //ez egy olyan kódrész, amit később újra fel tudunk használni
  //az osszeadas fügvénynek két bemeneti paramétere van
  function osszeadas(szam1, szam2) {
    //a szam1 és a szam2 number típusu kell hogy legyen (mindkettő feltétel igaz kell hogy legyen, ezért rakunk && (AND) jelet)
    if( (typeof(szam1) === 'number') && (typeof(szam2) === 'number')){
      let eredmeny=szam1+szam2;
      console.log('az eredmeny: '+eredmeny);
    }else {
      console.log('error, nem számot kaptam!');
    }
  }
    
  //itt használjuk fel az osszeadas függvényt
  osszeadas(6, 9);
  osszeadas('34', 9);
    
  //2.Function Expression
  //erre nem érvényes a hoisting
  let convertToNumber = function(szam) {
    let konvertaltSzam = parseInt(szam);
    if (isNaN(konvertaltSzam)){
      konvertaltSzam = 0;
      console.log('NaN-t kaptunk ezert nullázzuk');
    }else{
      console.log('konvertalas sikeres volt');
    }
        
  };
  convertToNumber('34');
  convertToNumber('sdfsdf');
    
  //camelCasing = a MásodikSzótolMindentNagyBetűvelÍrok
  //javascript-ben gyakran használjuk
  function pontosIdo() {
    //lokális változó, csak ebben a függvényben van értelme
    //variable scope:local
    let ido = 5;
    console.log('a pontos ido: '+ido);
    //fugveny-re is érvényes a scope, ezt csak a pontosIdo-n belül tudom hasznalni
    //closure:ha ketto fuggvény van egymásban akkor a belső függvény hozzáfér a kulso függvény változihoz
    function pontosIdo2(){
      console.log('az ido értéke. '+ido);
        
    }
      
    pontosIdo2();
  }
  //itt használjuk a pontosIdo függvényt
  pontosIdo();
    
  //pontosIdo2();
  //az ido változonak nincs értelme, mert csak a pontosIdo fgv-en belül
  //deklaráltuk,
  //console.log('a pontos ido. '+ido);
    
  //IIFE: immidiatelly invoked function expression:
  //ez egy névtelen függvény
    
  (function() {
    console.log('ez egyből meghívódik');
  })();
    
}()); //itt van vége a strict mode-nak, ez utan mar nem fog strict mode-ban futni a kod



