//here logic goes

//Вывести в браузер результаты первый четырех заданий из arrays.js

var actors = [
    { firstName: "Tom", lastName: "Cruise", year: 1962 },
    { firstName: "Jackie", lastName: "Chan", year: 1954 },
    { firstName: "Brad", lastName: "Pitt", year: 1963 },
    { firstName: "Jean-Claude", lastName: "Van Damme", year: 1960 },
    { firstName: "Bruce", lastName: "Willis", year: 1955 },
    { firstName: "Arnold", lastName: "Schwarzenegger", year: 1946 },
    { firstName: "Silvester", lastName: "Stallone", year: 1947 },
]

var actorsList = document.querySelectorAll('#actor');
var mainDiv = document.querySelector('#actors-list');
var button = document.querySelector('#button')

function hideElem() {
    actorsList.forEach(function (el, i) {
        if (i !== 0) { el.classList.add('hidden') }
    })
}
hideElem();

button.addEventListener('click', function() {
    actorsList.forEach((el) => el.classList.remove('hidden'))
})

mainDiv.addEventListener('click', function(e) {
    actorsList.forEach((el) => el.classList.add('hidden'))
    e.target.classList.remove('hidden')
})



























// var actorsArr = document.querySelectorAll('.list > li');
// var result = document.querySelector('#result');
// var button = document.querySelector('#button');
// var button2 = document.querySelector('#button2');

// asyncFuncCallerTrue = function() {
//     asyncFunc(true, actors)
// }
// asyncFuncCallerFalse = function () {
//     asyncFunc(false, actors)
// }
// button.addEventListener('click', asyncFuncCallerTrue);
// button2.addEventListener('click', asyncFuncCallerFalse);

// function asyncFunc (order, arr) {
//     result.innerHTML = '';
//     let localActors = arr.slice();
//     if (!order) {
//         localActors.forEach(function (actor, index) {
//             let actorHtmlElement = document.createElement('div');
//             actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`
//             setTimeout(function () {
//                 result.appendChild(actorHtmlElement);
//             }, (arr.length - index) * 100);
//         })
//     } else {
//         localActors.forEach(function(actor, index){
//             let actorHtmlElement = document.createElement('div');
//             actorHtmlElement.textContent = `${actor.firstName} ${actor.lastName}`
//                 setTimeout(function(){  
//                         result.appendChild(actorHtmlElement); 
//                 }, index * 100 );
//         })
//     }
// }
