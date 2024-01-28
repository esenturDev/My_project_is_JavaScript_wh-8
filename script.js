// Задача 1.

function checkForNumber(arr) {
  return arr.some(function(element){
    return typeof element === 'number';
  });
}

let array1 = [1, 'two', 3, 'four', 5];
let array2 = ['one', 'two', 'three'];

console.log(checkForNumber(array1));
console.log(checkForNumber(array2));

// Задача 2.

const arr1 = ["Азамат агай", "Esentur", "amantur", "Seka"];
const arr2 = [{city: "Bishkek city",}, 2, undefined, 5];

function getArray (array11, array22) {
  const resultArray = array11.concat(array22)
  console.log(resultArray);
}

const resultFuntion = getArray(arr1, arr2);
console.log(resultFuntion);

// Задача 3.

const books = ["Сынган кылыч"];

console.log(books.indexOf("Сынган кылыч"));

// Задача 4.

const text = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const gmail_com = prompt("Type email");
const userGmail_com = gmail_com.match(text);

if(userGmail_com) {
  alert("your email is good")
}else {
  alert("email is not valid")
}
