"use a strict"
/*

tableau vide 
-> ajouter "Vincent", "Paul" et "Arthur"
+ " va à la pêche " à toutes les valeurs 
-> console.log(... va à la pêche)
*/

let names=[];
names.push('Vincent',"Paul",'Arthur'); // ajouter dans le tableau dans l'odre donné

names.forEach(name =>{  //juste écrire après CHAQUE nom "va à la page"
    name += ' va a la pêche ';
    console.log(name)
})
