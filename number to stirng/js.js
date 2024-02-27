let number = document.querySelector("h2"), text = document.querySelector("p"), btn = document.querySelector("button");
btn.addEventListener("click",  () => { 
  window.location.reload();
})
let a = '', son = +prompt("Iltimos son kiriting!!!");

if (son.toString().length <= 12 && son != "") {
  let yuzMilliard = parseInt(son / 100000000000)
  switch (yuzMilliard) {
    case 1: a = a + " bir yuz"; break;
    case 2: a = a + " ikki yuz"; break;
    case 3: a = a + " uch yuz"; break;
    case 4: a = a + " tort yuz"; break;
    case 5: a = a + " besh yuz"; break;
    case 6: a = a + " olti yuz"; break;
    case 7: a = a + " yetti yuz"; break;
    case 8: a = a + " sakkiz yuz"; break;
    case 9: a = a + " to'qqiz yuz"; break;
  }
  let onMilliard = parseInt(son / 10000000000) % 10
  switch (onMilliard) {
    case 1: a = a + " o'n"; break;
    case 2: a = a + " yigirma"; break;
    case 3: a = a + " o'ttiz"; break;
    case 4: a = a + " qirq"; break;
    case 5: a = a + " ellik"; break;
    case 6: a = a + " otmish"; break;
    case 7: a = a + " yetmish"; break;
    case 8: a = a + " sakson"; break;
    case 9: a = a + " to'qson"; break;
  }
  let milliard = parseInt(son / 1000000000) % 10
  switch (milliard) {
    case 1: a = a + " bir milliard"; break;
    case 2: a = a + " ikki milliard"; break;
    case 3: a = a + " uch milliard"; break;
    case 4: a = a + " to'rt milliard"; break;
    case 5: a = a + " besh milliard"; break;
    case 6: a = a + " olti milliard"; break;
    case 7: a = a + " yetti milliard"; break;
    case 8: a = a + " sakiz milliard"; break;
    case 9: a = a + " to'qqiz milliard"; break;
    case 0: a = a + " milliard"; break; 
  }
  let yuzMillion = parseInt(son / 100000000) % 10
  switch (yuzMillion) {
    case 1: a = a + " bir yuz"; break;
    case 2: a = a + " ikki yuz"; break;
    case 3: a = a + " uch yuz"; break;
    case 4: a = a + " tort yuz"; break;
    case 5: a = a + " besh yuz"; break;
    case 6: a = a + " olti yuz"; break;
    case 7: a = a + " yetti yuz"; break;
    case 8: a = a + " sakkiz yuz"; break;
    case 9: a = a + " to'qqiz yuz"; break;
  }
  let onMillion = parseInt(son / 10000000) % 10
  switch (onMillion) {
    case 1: a = a + " o'n"; break;
    case 2: a = a + " yigirma"; break;
    case 3: a = a + " o'ttiz"; break;
    case 4: a = a + " qirq"; break;
    case 5: a = a + " ellik"; break;
    case 6: a = a + " otmish"; break;
    case 7: a = a + " yetmish"; break;
    case 8: a = a + " sakson"; break;
    case 9: a = a + " to'qson"; break;
  }
  let million = parseInt(son / 1000000) % 10
  switch (million) {
    case 1: a = a + " bir million"; break;
    case 2: a = a + " ikki million"; break;
    case 3: a = a + " uch million"; break;
    case 4: a = a + " to'rt million"; break;
    case 5: a = a + " besh million"; break;
    case 6: a = a + " olti million"; break;
    case 7: a = a + " yetti million"; break;
    case 8: a = a + " sakiz million"; break;
    case 9: a = a + " to'qqiz million"; break;
    case 0: a = a + " million"; break; 

  }
  let yuzMing = parseInt(son / 100000) % 10
  switch (yuzMing) {
    case 1: a = a + " bir yuz"; break;
    case 2: a = a + " ikki yuz"; break;
    case 3: a = a + " uch yuz"; break;
    case 4: a = a + " tort yuz"; break;
    case 5: a = a + " besh yuz"; break;
    case 6: a = a + " olti yuz"; break;
    case 7: a = a + " yetti yuz"; break;
    case 8: a = a + " sakkiz yuz"; break;
    case 9: a = a + " to'qqiz yuz"; break;
  }
  let onMing = parseInt(son / 10000) % 10
  switch (onMing) {
    case 1: a = a + " o'n"; break;
    case 2: a = a + " yigirma"; break;
    case 3: a = a + " o'ttiz"; break;
    case 4: a = a + " qirq"; break;
    case 5: a = a + " ellik"; break;
    case 6: a = a + " otmish"; break;
    case 7: a = a + " yetmish"; break;
    case 8: a = a + " sakson"; break;
    case 9: a = a + " to'qson"; break;
  }
  let ming = parseInt(son / 1000) % 10
  switch (ming) {
    case 1: a = a + " bir ming"; break;
    case 2: a = a + " ikki ming"; break;
    case 3: a = a + " uch ming"; break;
    case 4: a = a + " to'rt ming"; break;
    case 5: a = a + " besh ming"; break;
    case 6: a = a + " olti ming"; break;
    case 7: a = a + " yetti ming"; break;
    case 8: a = a + " sakiz ming"; break;
    case 9: a = a + " to'qqiz ming"; break;
    case 0: a = a + " ming"; break; 
  }
  let yuz = parseInt(son / 100) % 10
  switch (yuz) {
    case 1: a = a + " bir yuz"; break;
    case 2: a = a + " ikki yuz"; break;
    case 3: a = a + " uch yuz"; break;
    case 4: a = a + " tort yuz"; break;
    case 5: a = a + " besh yuz"; break;
    case 6: a = a + " olti yuz"; break;
    case 7: a = a + " yetti yuz"; break;
    case 8: a = a + " sakkiz yuz"; break;
    case 9: a = a + " to'qqiz yuz"; break;
  }
  let on = parseInt(son / 10) % 10
  switch (on) {
    case 1: a = a + " o'n"; break;
    case 2: a = a + " yigirma"; break;
    case 3: a = a + " o'ttiz"; break;
    case 4: a = a + " qirq"; break;
    case 5: a = a + " ellik"; break;
    case 6: a = a + " otmish"; break;
    case 7: a = a + " yetmish"; break;
    case 8: a = a + " sakson"; break;
    case 9: a = a + " to'qson"; break;
  }
  let bir = son % 10
  switch (bir) {
    case 1: a = a + " bir"; break;
    case 2: a = a + " ikki"; break;
    case 3: a = a + " uch"; break;
    case 4: a = a + " to'rt"; break;
    case 5: a = a + " besh"; break;
    case 6: a = a + " olti"; break;
    case 7: a = a + " yetti"; break;
    case 8: a = a + " sakiz"; break;
    case 9: a = a + " to'qqiz"; break;
  }
  number.innerHTML = `siz kiritgan son ${son.toString().length} xonali ${son}`
  text.innerHTML = a
}
else{
  text.innerHTML = `hali bunday sonni ustida ishlaganimiz yo'q KECHIRASIZ!`
}

