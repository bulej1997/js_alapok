(function() {
  'use strict';
    
  //---------------------------------------------------------------
  //------------------------------- Objektumok -------------------
  //--------------------------------------------------------------
    
  //EcmaScript
  //https://en.wikipedia.org/wiki/ECMAScript
    
  //EcmaScript 2015= ES6
  //pl a let kulcsszó ES6-ban jelent meg
    
  
    
  //intelisence code completion> kód kiegészítés (amikor felajánlja a dolgokat az editor)
  //syntax checker, vagy linter> a kódban lévő hibákra
  //hívja fel a figyelmet
    
  //ez egy üres object, így jelöljük
  let myObject={};
  console.log('a myObject típusa: '+typeof(myObject));
    
  let myPlayer = {
    'name': 'John', //kulcs: érték párok sorozata...
    'health': 100, //"key": value
    'alive': true
  };
    
  console.log('a jatekos neve: '+myPlayer.name);
  //véletlen számot generálunk 200 és 1 között
  let shoot=Math.floor((Math.random() * 200)+1);
  if(myPlayer.alive) {
    myPlayer.health= myPlayer.health-shoot;
    console.log(shoot+'-al meglőttünk a játékost');
        
    if(myPlayer.health <=0){
      myPlayer.alive=false;
    }
  }
    
  //a felkiáltójel tagadást jelent
  if (!myPlayer.alive){
    console.log(myPlayer.name+' is dead!!!');
  }else{
    console.log(myPlayer.name+'is alive!! Hurray!!');
  }
  console.log(myPlayer.name+' has '+myPlayer.health+'healt left');
    
  myPlayer.level=1; //ezzel kibővítjük a myPlayer-t még egy propertyvel
    
  //kibővítjuk a myPlayer object-et de most egy függvényt kap nem egy változót:
  myPlayer.levelUp= function() {
    myPlayer.level++;
    myPlayer.health = myPlayer.health + ( myPlayer.level*100 );
  };
    
  //meghivjuk a myPlayer object levelup property-jét ami egy fuggvény, ezért kell a zárójel
  myPlayer.levelUp();
  console.log(myPlayer.name+' has '+myPlayer.health+'healt, at level: '+myPlayer.level);
    
  // hot to loop trough object
  for (let key in myPlayer){
    console.log('cheking...'+key+'.....');
    console.log(key+'értéke: '+myPlayer[key]);    
  }
    
  //object-eket tartalmazó tömb
  let animals=[
    { name: 'Cirmi', class: 'cat' },
    { name: 'Bodri', class: 'dog' },
    { name: 'Jago', class: 'bird' },
    { name: 'Pali', class: 'bird' },
    { name: 'Buffy', class: 'dog' }
  ];
  console.log(animals);
    
  
    
  //kigyutjuk egy tömbbe a kutyákat, ehhez kell egy tömb, ami kezdetben még üres.
  let dogs= [];
  //how to loop trough array:
  //itt 'of' kulcsszót használunk, objectnél 'in-t
  //requireres ES6+
  for ( let animal of animals) {
    if(animal.class==='dog'){
      dogs.push(animal);
    }
  }//end of for
    
  console.log(dogs);
    
  class Dog {
    constructor(name){
      this.name=name;
      this.legscount=4;
    }
    bark(){
      console.log(this.name+':vau vau!');
    }
  }
    
  let dog1=new Dog('Bodri');
  console.log('A kutya neve:'+dog1.name);
  dog1.bark();
    
  class MutantDog extends Dog{
    //mivel ez egy alosztály azért kell a super() fgv.... a this kulcsszót
    //nem tudjuk használni egy alosztályban amíg nem hívjukl meg a super()-t
    constructor (name){
      super(name);
      this.legscount=3;
    }
  }
  let dog2 = new MutantDog('ASAS');
  console.log('a kutya neve:'+dog2.name);
    
}) ();