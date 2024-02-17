// 1) Написать функцию, которая будет принимать фамилию, имя и отчество, а возвращать его краткую форму. Например: function("Бекова", "Айдана", "Бековна") -> "Бекова А.Б."
// 2) Напишите функцию, куда может прилетать неограниченный список названия книг. Функция должна выводить только те книги, в названиях которых есть буква «у» и отдельным списком уже все остальные книги. Используйте методы массива 
// 3) Создайте массив внутри которого будут объекты с именем и с датой рождения пользователей (объектов должно быть не меньше 5). Далее пройдитесь по этому массиву, выведите в консоли каждый объект в следующем виде:
// - Пользователь {имя} родился {дата рождения} (данные с объекта получить должна)
// Используйте метод массива для вывода данных


//1
function formatFullName(lastName, firstName, middleName) {
    const firstInitial = firstName.charAt(0)
    const middleInitial = middleName.charAt(0)

    const shortFullName = `${lastName} ${firstInitial}.${middleInitial}.`
    return shortFullName
}

const result = formatFullName("Хохулин", "Илья", "Николаевичь")
console.log(result)



console.log('');


//2
function filterBooks(books) {
    const booksWithU = books.filter(book => book.includes('у'))
    const booksWithoutU = books.filter(book => !book.includes('у'))

    console.log('Книги с буквой "у":', booksWithU)
    console.log('Остальные книги:', booksWithoutU)
}

const bookList = ["уоульу", "фывыа", "тгжть"]
filterBooks(bookList)



console.log('');



//3
const usersArray = [
    { name: "Петя", birthDate: "03.15.2000" },
    { name: "Маша", birthDate: "31.012.2007" },
    { name: "Катя", birthDate: "12.07.1990" },
    { name: "Юля", birthDate: "06.05.1965" },
    { name: "Наташа", birthDate: "23.11.1981" }
]

usersArray.forEach(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`);
})




//4

function isPalindrome(inputStr) {

    const cleanedStr = inputStr.toLowerCase().replace(/[^a-z0-9]/g, '')
    return cleanedStr === cleanedStr.split('').reverse().join('')
}

const inputString = "A man, a plan, a canal, Panama"
const results = isPalindrome(inputString)

if (results) {
    console.log(`"${inputString}" - это палиндром!`)
} else {
    console.log(`"${inputString}" - это не палиндром.`)
}