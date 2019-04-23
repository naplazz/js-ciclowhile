//creo array nomi

var nomi = ['mario', 'luigi', 'gaia'];


//var newName = prompt('inserisci il tuo nome');
var i = 0;

while (i < nomi.length) {

  document.getElementById("lista-nomi").innerHTML = "<li>" + nomi[i] + "</li>";
  console.log(nomi[i]);
  i++;
}

// nomi.push(newName);
// nomi.sort();
// document.writeln(nomi);
