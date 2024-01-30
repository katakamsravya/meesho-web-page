//import BagsAndFootwear from "./path/to/BagsAndFootwear.js";
//import BeautyAndHealth from "./path/to/BeautyAndHealth.js";
//import Electronics from "./path/to/Electronics.js";
//import HomeAndKitchen from "./path/to/HomeAndKitchen.js";
//import JewelleryAndAccessory from "./path/to/JewelleryAndAccessories.js";
//import Kids from "./path/to/kids.js";
//import Men from "./path/to/Men.js";
//import WomenEthnic from "./data/WomenEthnic.js";

/*WomenEthics*/
//let WomenEthnic = document.getElementById("WomenEthic")
//console.log(WomenEthnic);
//function disableSortBy(selectElement) {
  //  if (selectElement.value !== '') {
    //  selectElement.options[0].disabled = true;
    //}
  //}
  

 const downArrow = document.getElementById('downArrow');
 
const upArrow = document.getElementById('upArrow');
const disc = document.getElementById('disc');


  downArrow.addEventListener('click', function() {
  downArrow.classList.add('hidden');
  upArrow.classList.remove('hidden');
  disc.classList.remove('hidden');
 
});

  upArrow.addEventListener('click', function() {
  upArrow.classList.add('hidden');
  downArrow.classList.remove('hidden');
  disc.classList.add('hidden');
  
  
});
const down = document.getElementById('down');
const up = document.getElementById('up');
const Gender = document.getElementById('Gender');
down.addEventListener('click', function() {
    down.classList.add('hidden');
    Gender.classList.remove('hidden');
  up.classList.remove('hidden');
});
up.addEventListener('click', function() {
    down.classList.remove('hidden');
    Gender.classList.add('hidden');
  up.classList.add('hidden');
});
const down2 = document.getElementById('down2');
const up2 = document.getElementById('up2');
const Color = document.getElementById('Color');

down2.addEventListener('click', function() {
    down2.classList.add('hidden');
    Color.classList.remove('hidden');
  up2.classList.remove('hidden');

});
up2.addEventListener('click', function() {
    down2.classList.remove('hidden');
    Color.classList.add('hidden');
  up2.classList.add('hidden');
 
});
const down3 = document.getElementById('down3');
const up3 = document.getElementById('up3');
const rating = document.getElementById('rating');


  down3.addEventListener('click', function() {
  down3.classList.add('hidden');
  up3.classList.remove('hidden');
  rating.classList.remove('hidden');
  
});

  up3.addEventListener('click', function() {
  up3.classList.add('hidden');
  down3.classList.remove('hidden');
  rating.classList.add('hidden');
  
});
const down4 = document.getElementById('down4');
const up4 = document.getElementById('up4');
const combo= document.getElementById('combo');
down4.addEventListener('click', function() {
    down4.classList.add('hidden');
    up4.classList.remove('hidden');
    combo.classList.remove('hidden');
  
});
up4.addEventListener('click', function() {
    up4.classList.add('hidden');
    down4.classList.remove('hidden');
    combo.classList.add('hidden');
});
//const inputFrom =document.getElementById('inputFrom');
//const closeSearch=document.getElementById('closeSearch');
//inputFrom.addEventListener('click', function(){
  //inputFrom.classList.add('hidden');
  //inputFrom.classList.add('hidden');
//})
