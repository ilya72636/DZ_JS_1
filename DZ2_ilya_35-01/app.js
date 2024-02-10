// 1) Будет массив с числами [34, 65, 67, 89,8,9,23,21,10,23,28]. Вам нужно пройтись циклом for по этому массиву и вывести в консоли только четные числа.
// 2) Создайте объект кинотеатра. Главными сущностями будут сами фильмы/мультики. От них будет идти уже другая информация в виде:
// - жанр
// - дата премьеры 
// - продолжительность
// - главные актеры
// - цена билета 
// - измерение (2D, 3D)
// Правильно постройте архитектуру объекта, используя вложенность. 
// 3) Используя switch..case реализуйте следующую логику:
// - программа запрашивает цифру любую до 15, далее конвертирует ее и выводит в консоли в виде рисмкой цифры. Например: 2 -> II, 5 -> V и т.д.
var arrayNumbers=[56,23,456,8,34,23,347,658,91,856,34,23,34,563,67]
for(var i=0;i<arrayNumbers.length;i++){
    if(arrayNumbers[i] % 2 == 0){
        console.log(arrayNumbers[i])
    }
}





var cinema = {
    films:{
        title1:{
            title:"Знаменитости в Бишкеке",
            genre: "Камедия",
            premiereDate: "25.11.2026",
            duration: 59,
            mainActors: ["Филип", "Баста"],
            ticketPrice: 7,
            dimension: "2D"
        },
        title2:{
            title: "Пропавший сон",
            genre: "Мультфильм",
            premiereDate: "12.07.2029",
            duration: 78,
            mainActors: ["Саша", "Конь Юлий"],
            ticketPrice: 8,
            dimension: "3D"
        },
        city: "Бишкек",
        totalScreens: 3
    }
}
console.log(cinema)





var number=prompt('Введите цифру до 15: ')
switch(parseInt(number)){
    case 1:
        alert('I')
        break
    case 2:
        alert('II')
        break
    case 3:
        alert('III')
        break
    case 4: 
        alert('IV')
        break
    case 5:
        alert('V')
        break
    case 6:
        alert('VI')
        break
    case 7:
        alert('VII')
        break
    case 8:
        alert('VIII')
        break
    case 9:
        alert('IX')
        break
    case 10:
        alert('X')
        break
    case 11:
        alert('XI')
        break
    case 12:
        alert('XII')
        break
    case 13:
        alert('XIII')
        break
    case 14:
        alert('XIV')
        break
    case 15:
        alert('XV')
        break
    
    default:
         alert('число не соответствует промежудку от 1 до 15')
}




