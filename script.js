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
// var num1, num2;
// num11 = window.prompt("Input the First integer", "0");
// num22 = window.prompt("Input the second integer", "0");
// num33 = window.prompt("Input the third integer", "0");
// num44 = window.prompt("Input the forth integer", "0");
// num55 = window.prompt("Input the fifth integer", "0");
                                                 
// if(parseInt(num11, 10) > parseInt(num22, 10) parseInt(num33, 10) parseInt(num44, 10) parseInt(num55, 10)) 
//   { 
//   console.log("The larger of "+ num11+ " "+ num22+ " "+ num33+ " "+ num44+ " "+ num55+ " is "+ num11+ ".");
//   }   
// else
//   if(parseInt(num22, 10) > parseInt(num11, 10) parseInt(num33, 10) parseInt(num44, 10) parseInt(num55, 10)) 
//   {
//   console.log("The larger of "+ num11+ " "+ num22+ " "+ num33+ " "+ num44+ " "+ num55+ " is "+ num22+ ".");
//   }   
// else
//   if(parseInt(num33, 10) > parseInt(num22, 10) parseInt(num11, 10) parseInt(num44, 10) parseInt(num55, 10)) 
//   {
//   console.log("The largest of "+ num11+ " "+ num22+ " "+ num33+ " "+ num44+ " "+ num55+ " is "+ num33+ ".");
//   }    
// else
//   if(parseInt(num44, 10) > parseInt(num22, 10) parseInt(num33, 10) parseInt(num11, 10) parseInt(num55, 10)) 
//   {
//   console.log("The largest of "+ num11+ " "+ num22+ " "+ num33+ " "+ num44+ " "+ num55+ " is "+ num44+ ".");
//   }    
// else
//   if(parseInt(num55, 10) > parseInt(num22, 10) parseInt(num33, 10) parseInt(num44, 10) parseInt(num11, 10)) 
//   {
//   console.log("The largest of "+ num11+ " "+ num22+ " "+ num33+ " "+ num44+ " "+ num55+ " is "+ num55+ ".");
//   }    
// else
//   {
//    console.log("The values "+ num11+ " "+ num22+ " "+ num33+ " "+ num44+ " "+ num55+ " are equal.");
//   }
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
