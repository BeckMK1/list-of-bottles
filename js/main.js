"use strict";
let beers = [{
    name: "tuborg",
    image:"images/tuborg.jpg",
    country: "Denmark"
},{
    name:"Elgoods",
    image:"images/elgoods.jpg",
    country: "England"
}, {
    name:"looseleaf",
    image:"images/looseleaf.png",
    country: "USA"
},{
    name:"corona",
    image:"images/corona.jpg",
    country: "Mexico"
}
]
// appends the list of beer to DOM
function appendBeers(beers){
for(let index  = 0; index < beers.length; index++){
let beer = beers[index];
document.querySelector("#list-container").innerHTML +=`
<articel onclick="showDetailView(${index})">
<div class="beer">
<img src='${beer.image}'>
<p>${beer.name}</p>
</div>
</articel>
`
console.log(beer)
};
};
appendBeers(beers);

// show the detailed view
function showDetailView(index){
 let selecetedBeer = beers[index];
  document.querySelector("#detail-view").innerHTML=`
  <header class="title"><h2>${selecetedBeer.name}</h2></header>
  <div class="seleceted-container">
  <img src="${selecetedBeer.image}">
  <p>country of origin: ${selecetedBeer.country}</p>
  <button onclick="navigateTo('list')">home</button>
  </div>
  `;
console.log(selecetedBeer)
navigateTo("detail-view")
}




// allows the user to add a new beer to the list of beer
function addNewBeer(){
 let name = document.querySelector("#name").value;
 let image =document.querySelector("#urlImage").value;

let newBeer ={
name: name,
image: image
}
beers.push(newBeer);
document.querySelector("#list-container").innerHTML="";
appendBeers(beers);
}