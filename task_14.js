/* #### Задача 14

Дано число `n=1000`. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную `num`.
*/

let n = 1000;
let num = 0;
let iter = 0;

do {
n=n/2;
num++;
} while (n>=50);

console.log(num);












