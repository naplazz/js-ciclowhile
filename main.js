//creo array nomi

var nomi = ['mario', 'luigi', 'gaia'];


//var newName = prompt('inserisci il tuo nome');
var i = 0;

while (i < nomi.lenght)


document.getElementById("lista-nomi").innerHTML = nomi;
nomi.push(newName);
nomi.sort();
document.writeln(nomi);
