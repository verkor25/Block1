/*####Задача 8
Написать код который посчитает сумму всех четных элементов в массиве, в суммировании уча́ствуют только элементы больше 3.

var arr = [1,2,3,4];
**Внимание**!
- Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4];

let sum=0; 
for (i = 0; i<arr.length; i++) {
    if(arr[i]%2===0 && arr[i]>3) {
        sum += arr[i];
    }
}

console.log(sum);



