/*------------------------------------------------1----------------------------------------------*/
console.log('*------------------------------------------------1----------------------------------------------*');

const originArrayNumbers = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const positiveArrayNumbers = originArrayNumbers.filter((element) => element > 0); ///Масив тільки з позитивних елементів. Далі у інших завданнях буду користуватись ним

let sumArrayValues = positiveArrayNumbers.reduce(function(resultSumArrayValues, numbers) {
    return resultSumArrayValues + numbers;
}, 0);
console.log('Кількість позитивних елементів:', positiveArrayNumbers.length);
console.log('Сума позитивних елементів масиву:', sumArrayValues);

/*------------------------------------------------2----------------------------------------------*/
console.log('*------------------------------------------------2----------------------------------------------*');
let indexOfMinElement = 0;

let minElementOfArray = originArrayNumbers.reduce(function(previousValue, currentValue, index, array) {
    if (previousValue < currentValue) {
        indexOfMinElement = array.indexOf(previousValue);
        return previousValue;
    } else {
        return currentValue;
    }
});

console.log('Мінімальний елемент масиву:', minElementOfArray);
console.log('Порядковий номер(індекс) цього елементу:', indexOfMinElement);

/*------------------------------------------------3----------------------------------------------*/
console.log('*------------------------------------------------3----------------------------------------------*');

let indexOfMaxElement = 0;

let maxElementOfArray = originArrayNumbers.reduce(function(previousValue, currentValue, index, array) {
    if (previousValue < currentValue) {
        indexOfMaxElement = array.indexOf(currentValue);
        return currentValue;
    } else {
        return previousValue;
    }
});

console.log('Максимальний елемент масиву:', maxElementOfArray);
console.log('Порядковий номер(індекс) цього елементу:', indexOfMaxElement);

/*------------------------------------------------4----------------------------------------------*/
console.log('*------------------------------------------------4----------------------------------------------*');

const negativeArrayNumbers = originArrayNumbers.filter((element) => element < 0); 
console.log('Кількість негитивних елементів у масиві:', negativeArrayNumbers.length);

/*------------------------------------------------5----------------------------------------------*/
console.log('*------------------------------------------------5----------------------------------------------*');

let notEvenArrayPositiveNumbers = positiveArrayNumbers.filter((element) => element % 2 !== 0);
console.log('Кількість непарних позитивних елементів:', notEvenArrayPositiveNumbers.length);

/*------------------------------------------------6----------------------------------------------*/
console.log('*------------------------------------------------6----------------------------------------------*');

let evenArrayPositiveNumbers = positiveArrayNumbers.filter((element) => element % 2 === 0);
console.log('Кількість парних позитивних елементів:', evenArrayPositiveNumbers.length);

/*------------------------------------------------7----------------------------------------------*/
console.log('*------------------------------------------------7----------------------------------------------*');

let sumEvenArrayValues = evenArrayPositiveNumbers.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
}, 0);

console.log('Сума парних позитивних елементів:', sumEvenArrayValues);

/*------------------------------------------------8----------------------------------------------*/
console.log('*------------------------------------------------8----------------------------------------------*');

let sumNotEvenArrayValues = notEvenArrayPositiveNumbers.reduce(function (prevValue, currentValue) {
    return prevValue + currentValue;
}, 0);

console.log('Сума непарних позитивних елементів:', sumNotEvenArrayValues);

/*------------------------------------------------9----------------------------------------------*/
console.log('*------------------------------------------------9----------------------------------------------*');

let miltiplyPositiveArrayNumbers = positiveArrayNumbers.reduce (function(previousValue, currentValue) {
    return previousValue * currentValue;
}, 1);

console.log('Добуток усіх позитивних елементів у масиві:', miltiplyPositiveArrayNumbers);

/*------------------------------------------------10----------------------------------------------*/
console.log('*------------------------------------------------10----------------------------------------------*');

const arrayWithNullElements = originArrayNumbers.map(function (value) {
        if (value === 76) {
            return 76;
        } else {
            return 0;
        }
});
console.log(arrayWithNullElements);