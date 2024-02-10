var validMonths = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']

var inputMonth = prompt('Введите месяц рождения:')
var inputDey= parseInt(prompt('Введите день рождения:'))  

if(validMonths.indexOf(inputMonth)===-1){
    console.log('месяц не подходит')
}else{
    var daysInMonth={
        'январь':31,
        'февраль':28,
        'март':31,
        'апрель':30,
        'май':31,
        'июнь':30,
        'июль':31,
        'август':31,
        'сентябрь':30,
        'октябрь':31,
        'ноябрь':30,
        'декабрь':31
    }
    
    if(inputDey < 1 || inputDey > daysInMonth[inputMonth]){
    console.log('не правельный день')
    }else{
        if((inputMonth === 'март' && inputDey >=21) || (inputMonth === 'апрель' && inputDey <=20)){
        console.log('ваш знак задиака: Овен')

        }else if((inputMonth === 'апрель' && inputDey >=21) || (inputMonth === 'май' && inputDey <=20)){
            console.log('ваш знак задиака: Телец')

        }else if((inputMonth === 'май' && inputDey >=21) || (inputMonth.toLowerCase() === 'июнь' && inputDey <=21)){
            console.log('ваш знак задиака: Близнецы')

        }else if((inputMonth === 'июнь' && inputDey >=22) || (inputMonth === 'июль' && inputDey <=22)){
            console.log('ваш знак задиака: Рак')

        }else if((inputMonth === 'июль' && inputDey >=23) || (inputMonth === 'август' && inputDey <=23)){
            console.log('ваш знак задиака: Лев')

        }else if((inputMonth === 'август' && inputDey >=24) || (inputMonth === 'сентябрь' && inputDey <=23)){
            console.log('ваш знак задиака: Дева')

        }else if((inputMonth === 'сентябрь' && inputDey >=24) || (inputMonth === 'октябрь' && inputDey <=23)){
            console.log('ваш знак задиака: Весы')

        }else if((inputMonth === 'октябрь' && inputDey >=24) || (inputMonth === 'ноябрь' && inputDey <=22)){
            console.log('ваш знак задиака: Скорпион')

        }else if((inputMonth === 'ноябрь' && inputDey >=23) || (inputMonth === 'декабрь' && inputDey <=21)){
            console.log('ваш знак задиака: Стрилец')

        }else if((inputMonth === 'декабрь' && inputDey >=22) || (inputMonth === 'январь' && inputDey <=20)){
            console.log('ваш знак задиака: Козерок')

        }else if((inputMonth === 'январь' && inputDey >=21) || (inputMonth === 'февраль' && inputDey <=20)){
            console.log('ваш знак задиака: Водолей')

        }else if((inputMonth === 'февраль' && inputDey >=21) || (inputMonth === 'март' && inputDey <=20)){
            console.log('ваш знак задиака: Рыбы')
        }else{
            console.log('Не удалось определить знак зодиака')
        }
        
    }

}                          
