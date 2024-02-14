var numbers = [10, 15, 20, 25, 30]
var sum= 0

for (var i = 0; i < numbers.length; i++) {
    sum +=numbers[i]
}

var average= sum / numbers.length
console.log("Среднее значение в массиве:", average)
// - Напишите функцию, которая принимает неограниченное количество чисел и выводит среднюю арифметическую только положительных чисел. 
// То есть массив будет примерно таким: [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
// - Напишите функцию, которая принимает массив из чисел и возвращает сумму квадратов четных чисел
// - Напишите функцию, которая принимает одно число и в консоли выводит либо true, любо false.
//  True должно выйти, если число является простым. False выйдет, если число является составным.
// - Также я прикрепила файл с кодом. Вам надо найти ошибку в коде и исправить ее



//1
function averagePositiveNumbers() {
    var positiveNumbers = [];
    var sum = 0
    var count = 0

    for (var i = 0; i < arguments.length; i++) {
        var number = arguments[i]
        if (number > 0) {
            positiveNumbers.push(number)
            sum += number
            count++
        }
    }if (count > 0) {
        var average = sum / count
        console.log("Среднее значение положительных чисел:", average)
    }
}
averagePositiveNumbers(2, -78, 45, 4, -7, -6, -10, 26, 30, 8)



//2
function sumOfSquaresOfEvens(numbers) {
    var sum = 0

    for (var i = 0; i < numbers.length; i++) {
        var number = numbers[i]

        if (number % 2 === 0) {
            sum += number * number
        }
    }
    return sum
}

var result = sumOfSquaresOfEvens([2,5,7,9,234,9,0,3,1,3,5,])
console.log("Сумма квадратов четных чисел:", result)

//3
function isPrime(number) {
    if (number < 2) {
        console.log(false)
        return
    }
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(false)
            return
        }
    }
    console.log(true)
}
isPrime(2)
isPrime(14)
isPrime(7)