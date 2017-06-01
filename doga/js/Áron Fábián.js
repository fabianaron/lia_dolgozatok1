var szam = 4;

if (szam > 4){
console.log("a szam nagyobb mint 4");
}

if (szam < 4){
console.log("a szam kisebb mint 4");
}


if (szam === 4){
console.log("szam egyenlő 4");
}



let tomb = ["Jani","Béla","Jancsi","Pista"]
for ( var i = 0; i <= tomb.length; i++) {
if ( tomb [i] == "Pista") {
van = true;
aszam = i;
}
}
if (van=true){
console.log("A tömben benne van a Pista, és a  "+aszam+"-dik eleme");
} else {
console.log("a tömben nincs Pista");
}



let tomb2 = [11, 21, 32, 44, 69];
var osszeg = 0;
for( var i = 0; i < tomb2.length; i++) {
osszeg+=tomb2[i];
}