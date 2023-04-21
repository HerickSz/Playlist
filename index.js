var NumberOfWords = 20
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "TE AMO" 
words[2] = "TE ADORO" 
words[3] = "TE ENVIO UMA FOTO" 
words[4] = "TE MANDO UM NUDE" 
words[5] = "TORÇO PRO FLAMENGO" 
words[6] = "TE MANDO UMA FOTO DE AGORA" 
words[7] = "TE MANDO UMA MÚSICA" 
words[8] = "TE MANDO UMA PLAYLIST" 
words[9] = "TE DEVO UM AÇAÍ" 
words[10] = "SAIO CONTIGO" 
words[11] = "TE DEVO UM BEIJO" 
words[12] = "GOSTO DE VOCÊ" 
words[13] = "ASSISTO UM FILME CONTIGO" 
words[14] = "TE SIGO NO INSTAGRAM" 
words[15] = "TE PASSO O MEU NÚMERO" 
words[16] = "COR FAVORITA" 
words[17] = "FILME FAVORITO" 
words[18] = "MÚSICA FAVORITA" 
words[19] = "COMPARTILHO MINHA NETFLIX COM VOCÊ" 
words[20] = "S3X0" 

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}
function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("WordForm");
  var copyText = document.getElementById("wordbox");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  /* Copy the text inside the text field */
  document.execCommand("copy");
}
function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
