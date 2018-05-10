//here logic goes

//Вывести в браузер результаты первый четырех заданий из arrays.js
var actorsArr = document.querySelectorAll('.list > li');
var result = document.querySelector('#result');
console.log(actorsArr)

function getActorsBeforeYear(year) {
    result.innerHTML = '';
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

function sortByAge() {
    let resultArr = document.querySelectorAll('#result > li');
    result.appendChild(actorsArr[0].cloneNode(true))
    for (let i = 1; i < actorsArr.length; i++) {
        resultArr = document.querySelectorAll('#result > li');
        for (let j = 0; j < resultArr.length; j++) {
            if (resultArr[j].lastChild.innerHTML < actorsArr[i].lastChild.innerHTML) {
                result.insertBefore(actorsArr[i], resultArr[j]);
                break;
            } else {
                result.appendChild(actorsArr[i]);
            }
        }
    }
}

function getTotalAge(){
    let num = 0;
    for (let i = 0; i < actorsArr.length; i++) {
        num += 2018-actorsArr[i].lastChild.innerText;
    }
    result.innerHTML = num;
}