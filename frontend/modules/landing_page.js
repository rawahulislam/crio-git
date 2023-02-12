import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  try{
  const res = await fetch("http://3.108.240.231:8082/cities")
  const data = await res.json()
  return data}
  catch(err){
    return null
  }
  // .then( function (res) {

  //    return res.json()
  // })
  // data1.then( function(cities){
  //  let data = cities
  //  return data
  // })
  // .catch(function (err) {
  //   return err
  // });

  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

//Implementation of DOM manipulation to add cities
}
//fetchCities().then(beta=>{console.log(beta)})
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

  

let col = document.createElement('div')
col.setAttribute('class','col-12 col-sm-6 col-lg-3 mb-4')
col.setAttribute('id',id)
let parent = document.getElementById('data')
parent.append(col)


let address = document.createElement('a')
address.setAttribute=('id', id)
address.href="/frontend/pages/adventures/?city="+`${id}`
col.append(address)


let title = document.createElement('div')
title.setAttribute('class','tile')
address.append(title)

let pic = document.createElement('img')
pic.setAttribute('src',image)
title.append(pic)

let ele = document.createElement('div')
ele.setAttribute('class','tile-text text-center')
title.append(ele)

let heading= document.createElement('h5')
heading.textContent = city;
ele.append(heading)

let para = document.createElement('p')
para.textContent = description;
ele.append(para)


 
}

export { init, fetchCities, addCityToDOM };
