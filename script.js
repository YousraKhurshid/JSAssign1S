//Ques1
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
//ques2
num = window.prompt("Input the number", "0");
if (num>0)
{
       alert("The sign is +");
}
else
  if (num<0)
{
       alert("The sign is -");
}      
//ques3
var = numb1, numb2, numb3, numb4, numb5 
numb1 = + prompt ("Enter First Number");
numb2 = + prompt ("Enter Second Number");
numb3 = + prompt ("Enter Third Number");
numb4 = + prompt ("Enter Forth Number");
numb5 = + prompt ("Enter Fifth Number");
let = Largest;
if(numb1 > numb2 && numb1 > numb3 && numb1 > numb4 && numb1 > numb5){
 Largest = numb1;
}
else 
if(numb2 > numb1 && numb2 > numb3 && numb2 > numb4 && numb2 > numb5){
 Largest = numb2;
}
else (numb3 > numb1 && numb3 > numb2 && numb3 > numb4 && numb3 > numb5){
 Largest = numb3;
}
else (numb4 > numb1 && numb4 > numb3 && numb4 > numb2 && numb4 > numb5){
 Largest = numb4;
}
else (numb5 > numb1 && numb5 > numb3 && numb5 > numb4 && numb5 > numb2){
 Largest = numb5;
}
console.log("The Largest number is " + Largest)
//question4
for (var x=0; x<=15; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}
//ques5
var students = [['Ali', 60], ['Aslam', 47], ['Abid', 80], ['Umna', 89], ['Qirat', 91]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}
//ques6
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log(" FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(" Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(" Buzz" );
  }
  else
  {
    console.log(i);
  }
}
//ques7
var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}
