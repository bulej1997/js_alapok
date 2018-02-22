console.log ("hello");


(function () {
    'use strict'
    // minden amit ide írok az strict mode-ban fog futni
    //a strict mode szigorubb szabalyokkal futtatja
    // a javascript kodot, és több hibát fog kiírni a böngésző
    //amit enélkül nem tenne meg
    
    //ez egy ujradeklarálható változó lesz:
    var szoveg2="valami";
    console.log(szoveg2);
    
    //erre nem kapunk hibát mert a var kulcsszóval deklarált változót ujradeklarálhatjuk:
    var szoveg2="valami";
    
    let szoveg3="szoveg3 ezt let-el hoztuk letre";
    console.log(szoveg3);
    
    // a let kulcsszoval letrehozott valtozokat nem lehet ujradeklaralni,
    //a kovetkezo sort ha nem komenntezzuk, hibat kapunk:
    //let szoveg3="szoveg3 ezt let-el hoztuk letre";
    
    //ez egy értékadás, nem deklarálás:
    szoveg3="uj erteket kap a szoveg3";
    
    //a console.log egy fugveny, aminek átadjuk a szoveg3 valtozot
    // a console.log egy más ember által írt kód, ami azt csinálja
    //a neki adott változoval, hogy kiírja a console-ra
    console.log(szoveg3);
    
    //kiirathatunk egyszerre szoveget és változot is:
    let szam1=94;
    console.log("a szam1 valtozo értéke "+szam1);
    
}()); //itt van vége a strict mode-nak, ez utan mar nem fog strict mode-ban futni a kod


//implicit global változó lesz a szoveg
//global: a szoveg valtozo mindenhol elérhető lesz a kódban
//implicit global változót lehetőleg ne használjunk!
szoveg="6";

console.log(szoveg);
