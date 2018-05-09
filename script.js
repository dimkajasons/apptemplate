//here logic goes

//Вывести в браузер результаты первый четырех заданий из arrays.js
var actorsArr = document.querySelectorAll('.list > li');
var result = document.querySelector('#result');
console.log(actorsArr)

function getActorsBeforeYear(year) {
    for (let i = 0; i < actorsArr.length; i++){
        if (actorsArr[i].dataset.year < year) {
            result.appendChild(actorsArr[i].cloneNode(true));
        }
    }
}

function getFullName() {
    let newArr = [];
    for (let i = 0; i < actorsArr.length; i++) {
        newArr.push(actorsArr[i].firstChild.innerText);
    }
    result.innerHTML = newArr;
}

// function sortByAge() {
//     for (let i = 0; i < actorsArr.length; i++){

//     }
// }

function getTotalAge(){
    let num = 0;
    for (let i = 0; i < actorsArr.length; i++) {
        num += 2018-actorsArr[i].lastChild.innerText;
    }
    result.innerHTML = num;
}