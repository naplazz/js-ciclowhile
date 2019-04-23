var nomi = ['mario', 'luigi', 'gaia'];
var i = 0;
var newName = prompt("Inserisci un Nome")
nomi.push(newName);
while (i < nomi.length) {

  nomi.sort();
  document.getElementById("lista-nomi").innerHTML += "<li>" + nomi[i] + "</li>";
  //console.log(nomi[i]);
  i++;
}
