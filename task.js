// Условия, общие для всех спосособов решения задачи.

let objArr = [
    { x: 3, y: 5 },
    { x: 4, y: 6 },
    { x: 10, y: 8 },
    { x: 7, y: 12 },
    { x: 15, y: 3 },
    { x: 20, y: 18 },
    { x: 6, y: 9 },
    { x: 11, y: 14 }
];

const mousePosition =  { x: 6, y: 9 };

// Первый способ (Сомнительно, но окЭй)

// function findObj (objArr, mousePosition) {
//   let result;
//   for ( let i = 0; i < objArr.length; i += 2 ) {
//     return result = objArr.some((obj) => obj.x === mousePosition.x && obj.y === mousePosition.y)
//   } 
//   if ( !result ) {
//      for ( let i = 1; i < objArr.length; i += 2 ) {
//      return result = objArr.some((obj) => obj.x === mousePosition.x && obj.y === mousePosition.y)
//     } 
//   } else {
//     console.log("Элемент не найден!")
//   }
//   return result;
// }

// const result = findObj(objArr, mousePosition);
// console.log("Содержит ли точка указанные координаты:", result);

// Конец первого способа







// Второй способ. 
// Сортируем массив по увеличению значения Х.
// Далее находим индекс элемента, который находится посередине массива (middleIndex).
// Делим наш массив objArr пополам по среднему индексу. 
// Сравниваем значение middleIndex с mousePosition. 
// Если mousePosition меньше или равно middleIndex, то ищем в первой половине массива, а если больше, то во второй половине.

// function findAMouse (objArr, mousePosition) {
//     let result;
//     const sortedArr = [...objArr].sort( (a, b) => a.x - b.x );
//     const middleIndex = Math.floor( sortedArr.length / 2 );
//     const firstHalf = sortedArr.slice( 0, middleIndex );
//     const secondHalf = sortedArr.slice( middleIndex )

//     if ( mousePosition.x <= sortedArr[middleIndex].x ) {
//        return result = firstHalf.some((obj) => obj.x === mousePosition.x && obj.y === mousePosition.y);
//     }
//     else {
//         return result = secondHalf.some((obj) => obj.x === mousePosition.x && obj.y === mousePosition.y);
//     };
// };

// const result = findAMouse(objArr, mousePosition);
// console.log("Содержит ли точка указанные координаты:", result);

// Конец второго способа






// Третий способ (Хеш-таблица).

// 1. Создаем Хеш-таблицу
// 2. Проходимся циклом по всем элементам массива objArr и добавляем их в Хеш-таблицу, устанавливая значение true
// 3. Создаем переменную keyToCheck, которая несет в себе значение mousePosition для поиска в Хеш-таблице
// 4. По результатам поиска выводим в консоль либо успех,либо неудачу.

// const hashTable = {};
// for (const point of objArr) {
//     hashTable[point] = true;
// }

// const keyToCheck = mousePosition;
// if (keyToCheck in hashTable) {
//     console.log("Точка с указанными координатами существует в массиве.");
// } else {
//     console.log("Точка с указанными координатами не найдена.");
// }


// Конец третьего способа






// Четвертый способ: Использование Set

// 1. Создаем Set с уникальными значениями элементов массива objArr. 
// 2. С помощью метода map преобразуем формат каждого элемента массива в такой вид: `${point.x},${point.y}`.
// 3. Создаем переменную keyToCheck, в которой храниться приведенная к такому же формату mousePosition, как в пункте 2. 
// 4. Проверяем наличие ключа в Set

// const pointSet = new Set(objArr.map(point => `${point.x},${point.y}`));

// const keyToCheck = `${mousePosition.x},${mousePosition.y}`;

// if (pointSet.has(keyToCheck)) {
//     console.log("Точка с указанными координатами существует в массиве.");
// } else {
//     console.log("Точка с указанными координатами не найдена.");
// }


// Конец четвертого способа





