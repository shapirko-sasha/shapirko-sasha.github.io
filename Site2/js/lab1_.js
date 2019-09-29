//alert("Hello world!");
/*
//1
var str = "Hello world!";
alert(str);

//2
var str1="Hi ";
var str2="World";
alert(str1 + str2);

//3 Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя
var name =prompt("Enter your name,pls: ","Sasha");
alert("Your name " + name);

//4 Написать программу для вывода суммы чисел в диапазоне от до  


var a = prompt("Enter number a, pls: ");
a = parseInt(a);
var b = prompt("Enter number b, pls: ");
b = parseInt(b);

var sum = 0;

for(var i = a; i < b; i++)
{
	sum += i;
}

alert("Sum numbers between a and b: " + sum);
document.write("<h2>Sum Numbers : " + sum + "</h2>");


//5 Вычислить факториал числа  


var number = prompt("Enter number, pls: ");

var factorial = 1;
for(var i = 1; i < number; i++)
{
	factorial *= i; 
}

alert("Number factorial: " + factorial);
document.write("<h2>Factorial Numbers : " + factorial + "</h2>");


//6   Вывести число наоборот введенному 


var number6 = prompt("Enter number, pls: ");

for(var i = number6.length - 1; i >= 0; i--)
{
	document.write(number6[i]);
}



//7  Найти суму целых положительных чисел, больших 20, меньших 100 и кратных 3 

var sum7 = 0;

for(var i = 20; i < 100; i++)
{
	if(i % 3 == 0)
	{
		sum7 += i;
	}
}

document.write("<h2>That is " + sum7 + "</h2>");

*/

//8  Вычислить число в степени.

var number8 = prompt("Enter number: ", 3);
number8 = parseInt(number8);

var userPow = prompt("Enter pow: ", 2);
userPow = parseInt(userPow);

var pow = 1;

for(var i = 0; i < userPow; i++)
{
	pow *= num; 
}

document.write("<h2>Thats number " + number8 + " ^ " + userPow + " = " + pow + " </h2> ");
























//var r=+prompt("enter rows","");
//var c=+prompt("enter col","");
