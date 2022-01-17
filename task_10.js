/*#### Задача 10
Отсортировать массив по возрастанию.

var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
**Внимание**!
- Не разрашается использовать специальные методы массивов.
*/

var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]


let isSwapped;
do
{
    isSwapped = false;
    for(i = 0; i < arr.length-1; i++)
    {
       if( arr[i] > arr[i+1] )
       {
          isSwapped = true;
          swap = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = swap;
       }
    }
}
while(isSwapped);

console.log(arr);

