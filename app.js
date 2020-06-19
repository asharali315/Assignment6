// Chapter 21-25
// Task1:
// var firstName = prompt("Enter first name"); 
// var lastName = prompt("Enter last name");
// var fullName = firstName+" "+lastName;
// alert("Welcome to app.js \n"+fullName); 

// Task2:
// var mobile = prompt("Enter your favourite mobile brand name:");
// alert("your favourite mobile brand is"+" "+mobile+"\n length of string is "+mobile.length); 

// Task 3:
// var word = prompt("Enter a word").toLowerCase();
// var letterToFind=prompt("enter a letter to find in word").toLowerCase();
// var index = word.indexOf(letterToFind);
// if(index == -1)
// {
// alert("letter not found in word");
// }
// else
// {
// alert(letterToFind+" is at "+index+" index");
// }

// Task 4:
// var index=-1;
// var word = prompt("Enter a word").toLowerCase();
// var letterToFind=prompt("enter a letter to find in word").toLowerCase();
// for (let i = 0; i < word.length; i++) {
//         if(word[i]===letterToFind)
//         {
//           index=i;  
//         }    
// }
// if (index == -1) {
//     alert("letter not found");
// }
// else
// {
//   alert("string is : "+word+" \n"+letterToFind+" is at "+index+" lastly");  
// }

// Task 5
// var word = prompt("Enter a word").toLowerCase();
// if(word.length>2)
// {
// alert("string is: "+word+"\n"+"element at 3rd index is: "+word[2]);
// }
// else
// {
// alert("string is: "+word+"\n"+"no word at 3rd index ");
// }

// Task 6:
// var firstName = prompt("Enter first name"); 
// var lastName = prompt("Enter last name");
// var fullName = firstName.concat(lastName);
// alert("Welcome to app.js \n"+fullName); 

// task 7:

// var word = "Hyderabad";
// var exchange="Islam";
// word=word.replace("Hyder",exchange);
// alert(word);

// Task 8
// var massage = "Ali and Sami are best friend.They play cricket and football together";
// massage=massage.split("and").join("&");
// alert(massage);

// Task 9:
// var string="472";
// alert("type string: "+string);

// var num = parseInt(string);
// alert("type number: "+num);

// Task 10:
// var input =prompt("enter input");
// alert("input: "+input);
// var converted= input.toUpperCase();
// alert("converted: "+converted);


// Task 11:
// var input =prompt("enter input");
// alert("input: "+input);
// var firstChar= input.slice(0,1).toUpperCase(); 
// var otherChar= input.slice(1).toLowerCase(); 
// var converted= firstChar+otherChar; 
// alert("converted: "+converted);


// Task no 12:
// var number =35.56;
// var string = number.toString();
// string = string.replace(".","");
// alert("number : "+number); 
// alert("string : "+string); 

// Task 13:
// var input = prompt("enter userName");
// if(input.includes("@") || input.includes("!") || input.includes(".") || input.includes(",") );
// alert("Give proper username without character");

// Task 14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search =prompt("enter a meal to find").toLowerCase();
// var index=-1;
// index = A.indexOf(search);
// if(index ==-1)
// {
// alert("Meal not found");    
// }
// else
// {
// alert("meal found at "+index+" index");
// }

// Task 15:
// var password =prompt("Enter your password");
// if(password[0]>=30 || password[0]<=39)
// {
//  alert(" password can not start with number \n password must start with a-z A-Z ")   
// }
// else if(password[0]==("@") || password[0]==("!") || password[0]==(".") || password[0]==(","))
// {
//     alert(" password can not start with character \n password must start with a-z A-Z ")   
// }

// Task 16:
// var university = "University of Karachi";

// for (let index = 0; index < university.length; index++) {
//     document.write(university[index]+"<br>");
    
// }


// Task 17:
// var input =prompt("Enter input");
// alert("input is :"+input);
// input= input.slice(input.length-1);
// alert("last character is :"+input);

// Task 18:
//  var massage="The quick brown fox jumps over the lazy dog";
// var array = massage.match(/\w[a-z]{0,}/gi);
//   var result = array[0];
//     var count=0;
//   for(let i = 1 ; i < array.length ; i++)
//   {
//     if(result.toLowerCase() == "the")
//     {
//     count++;
//     } 
//     result=array[i];
//   }
//  document.write("the is repeated "+count+" times in \n The quick brown fox jumps over the lazy dog");



// CHAPTER 26 to 30:
// Task 1:
// var number=+prompt("Enter a positive number");
// alert("number : "+number);
// var num1 =Math.round(number);
// alert("rounded :"+num1);
// var num2 = Math.floor(number);
// alert("floored :"+num2);
// var num3 = Math.ceil(number);
// alert("ciel :"+num3);

// Task 2:
// var number=+prompt("Enter a negative number");
// alert("number :  "+number);
// var num1 =Math.round(number);
// alert("rounded :  "+num1);
// var num2 = Math.floor(number);
// alert("floored :  "+num2);
// var num3 = Math.ceil(number);
// alert("ciel :  "+num3);

// Task 3:
// var number=+prompt("Enter a number");
// alert("number is :  "+number+ " and its absolute value is : "+Math.abs(number));

// Task 4:
// var dice = Math.random()*6;
// alert("roll diced on : "+Math.floor(dice));

// Task 5:
// var toss=Math.random()*2;
// if(Math.floor(toss)==1)
// {
// alert("Its a head");    
// }
// else
// {
// alert("Its a tail")    
// }
        
// Task 6
        
// var number=Math.random()*100;
// document.write("Random number between 1-100 is :  "+Math.floor(number));

// Task no 7:
// var weight = prompt("Enter your weight in kilograms");
// var array= [""],number="";
// for (let index = 0; index < weight.length; index++) {
//     array[index] = weight[index];
//     if(weight.charAt[index]>=65 || weight.charAt[index]<=90 ||weight.charAt[index]>=97 || weight.charAt[index]<=122)
//     {
//         break;
//     }
    
// }
// for (let index = 0; index < array.length; index++) {
//     if(array[index].match(/[a-z A-Z]/))
//     {
//      break;   
//     }
//     number=number+array[index];
// }
// var num = parseFloat(number);
// alert("user weight is "+num+"  Kilograms");

// Task no 8:
// var number = Math.random()*10;
// var user =+prompt("Enter a number 1-10");
// if(Math.floor(user) ==Math.floor(number) )
// {
//     alert("Computer number is : "+Math.floor(number)+"  user number is:  "+Math.floor(user));  
//   alert("Congrats your number matched");  
// }
// else
// {
//     alert("Computer number is : "+Math.floor(number)+"  user number is:  "+Math.floor(user));  
//     alert("Sorry your number does not match matched");  

// }


// CHAPTER # 31 to 34:
// Task no 1:
// var date = new Date();
// var b =date.toString();
// alert(b);
var monthName = ["jan","feb","march","april","may","june","july","sept","oct","nov","dec"];
var dayName =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// Task 2:
// var date = new Date();
// var month =date.getMonth();
// month =monthName[month];
// alert("current Month : "+month);

// Task no 3:
// var date = new Date();
// var day =date.getDay();
// day =dayName[day];
// alert("current Day : "+day);

// Task no 4:
// var date = new Date();
// var day =date.getDay();
// if(day == 0 || day ==6)
// {
// alert("Its a fun day");
// }

// Task no 5:
// var date = new Date();
// var today =date.getDate();
// today = parseInt(today);
// alert("todays date is : "+today);
// if(today< 16)
// {
// alert("First fifteen days of the month");
// }
// else
// {
//  alert("Last days of the month");   
// }

// Task no 6:
// var date = new Date("Jan 1 , 1970");
// var milSecond = date.getTime();
// var today = new Date();
// var todayMilSecond = today.getTime();
// var diff = todayMilSecond- milSecond;
// document.write("elapsed millisecond since jan 1 1970 : "+diff+"<br>");
// var min = diff/(1000*60*60);
// document.write("elapsed miunutes since jan 1 1970 : "+min+"<br>");

// Task no 7:
// var date = new Date();
// var hours= date.getHours();
// hours = parseInt(hours);
// if(hours>=12)
// {
//  document.write("Its P.M");   
// }
// else
// {
// document.write("Its A.M");   
// }

// Task no 8:
// var laterDate= new Date("Dec 31,2020");
// alert("LaterDate: "+laterDate);

// Task no 9;
// var date = new Date("june 18,2015");
// var day = date.getTime();
// day= day/(1000*60*60*24);
// var today = new Date();
// var todays = today.getTime();
// todays= todays/(1000*60*60*24);
// var daysPassed = todays-day;
// document.write(Math.round(daysPassed)+" day has passed since june 18,2015");


// Task no 10:
// var date = new Date("jan 1,2015");
// var second = date.getTime();
// second= second/(1000);
// var refDate = new Date("dec 5,2015");
// var todays = refDate.getTime();
// todays= todays/(1000);
// var secondPassed = todays-second;
// document.write(Math.round(secondPassed)+" second has passed since jab 1,2015 to "+refDate);


// Task no 11:
// var currentDate = new Date();
// var another = new Date();
// another.setHours(currentDate.getHours()+1);
// document.write("Current Date :"+currentDate+"<br>");
// document.write("1 hour ahead :"+another+"<br>");

// Task no 12:
// var currentDate = new Date();
// var another = new Date();
// another.setFullYear(currentDate.getFullYear()-100);
// document.write("Current Date :"+currentDate+"<br>");
// document.write("100 years ago :"+another+"<br>");

// Task no 13:
// var currentDate = new Date();
// var age =+prompt("Enter your age");
// currentDate.setFullYear(currentDate.getFullYear()-age);
// document.write("Your age is : "+age+"<br> Your birth Year is : "+currentDate.getFullYear());

// Task 14:
// var Name =prompt("Enter Customer Name: ");
// var date = new Date();
// var number =date.getMonth();
// var month = monthName[number];
// var numberOfUnit = +prompt("enter number of unit : ");
// var chargesPerUnit=6;
// var netAmount = numberOfUnit*chargesPerUnit;
// var latePayment =350;
// var GrossAmount = netAmount+latePayment;
// document.write("Name : "+Name+"<br> Month : "+month+"<br>");
// document.write("number of unit : "+numberOfUnit+"<br> Charges Per Unit : "+chargesPerUnit+"<br>");
// document.write("Net Amount(Payable Within due time) : "+netAmount+"<br> Late Charges : "+latePayment+"<br>");
// document.write("Gross Amount(Payable after due time) : "+GrossAmount);




// Chapter 35 to 38
// Task no 1:
// function getTime(date)
// {
//  document.write(date);   
// }
// var date=new Date();
// getTime(date);

// Task no 2:
// function greet(firstName,lastName)
// {
// alert("welcome to app.js \n "+firstName+" "+lastName);
// }
// var fName=prompt("Enter First Name");
// var lName=prompt("Enter Last Name");
// greet(fName,lName);

// Task no 3:
// function sum(num1,num2){
//   return num1+num2;  
// }
// var num1=+prompt("Enter 1st number");
// var num2=+prompt("Enter 2nd number");
// var result = sum(num1,num2);
// document.write("sum of "+num1+" and "+num2+" is :"+result);

// Task no 4:
// function calculator(num1,num2,operator)
// {
//  if(operator =="+")
//  {
//     document.write(num1+" + "+num2+" = "+(num1+num2));   
//  } else
//  if(operator =="-")
//  {
//     document.write(num1+" - "+num2+" = "+(num1-num2));   
//  }else
//  if(operator =="*")
//  {
//     document.write(num1+" X "+num2+" = "+(num1*num2));   
//  }else
//  if(operator =="/")
//  {
//     document.write(num1+" / "+num2+" = "+(num1/num2));   
//  }
//  else
//  if(operator =="%")
//  {
//     document.write(num1+" % "+num2+" = "+(num1%num2));   
//  }
// }
// calculator(4,3,"%");

// Task no 5:
// function square(num)
// {
//  document.write("sqaure of the "+num+" is :"+Math.pow(num,2));   
// }
// square(5);

// Task no 6:
// function fact(num)
// {
// if(num ==0)
// return 1;

// return num*fact(num-1);
// }
// var number =+prompt("Enter a number");
// var result=fact(number);
// document.write("factorial of "+number+" is : "+result);

// Task no 7
// function print(num1,num2){
//   for (let i = num1; i <= num2; i++) {
//       document.write(i+"<br>");
      
//   }  
// }
// var num1=+prompt("Enter starting number");
// var num2=+prompt("Enter ending number");
// print(num1,num2);

// Task no 8:
// function rightTriangle(base,per){
//   return square(base)+square(per);
  
//   function square(num)
//   {
//   return num*num;    
//   }
// }
// var base=+prompt("Enter base of triangle");
// var per=+prompt("Enter perpendicular of triangle");
// var hyp =Math.sqrt(rightTriangle(base,per));
// document.write("Hypoteneous of right triangle is : "+hyp+"<br>")
// document.write("With base : "+base+"<br>");
// document.write("With Hypoteneous : "+per+"<br>");

// Task no 9:
// function areaOfTriangle(width,height)
// {
//  return width*height;   
// }

// var area = areaOfTriangle(3,5);
// document.write("Area of triangle is : "+area+"<br>");

// var width=+prompt("Enter width for triangle")
// var height=+prompt("Enter height for triangle")
// var area = areaOfTriangle(width,height);
// document.write("Area of triangle is : "+area);

// Task no 10:
// function pelindrom(word)
// {
//     var array=[""];
//     var dup="",counter=0;
//  for (let i = word.length-1; i >=0 ; i--) {
//      array[counter++]=word[i];
//  }
//  for (let i = 0; i < array.length; i++) {
//      dup=dup+array[i];
//  }
//  alert(dup);
//  alert(word);
//  if(dup === word)
//  {
//   return true;   
//  }   
//  else
//  {
//   return false;
//  }
// }
// var word=prompt("Enter a word to check if it is a pelindrome");
// var result = pelindrom(word);
// if(result)
// {
//  document.write(word+" is a pelindrome");   
// }
// else
// {
//     document.write(word+" is not a pelindrome");   
// }

// Task 11:
// function upperCase(sentance)
// {
//   var array = sentance.split(" ");
//   var newArray = [];
    
//   for(let i = 0; i < array.length; i++){
//       newArray.push(array[i].charAt(0).toUpperCase()+array[i].slice(1));
//   }
//   return newArray.join(" ");
// }
// var result = upperCase("the quick brown fox");
// document.write(result);

// Task no 12:
// function longestWord(sentanve)
// {
//   var array = sentance.match(/\w[a-z]{0,}/gi);
//   var result = array[0];

//   for(let i = 1 ; i < array.length ; i++)
//   {
//     if(result.length < array[i].length)
//     {
//     result = array[i];
//     } 
//   }
//   return result;
// }

// var sentance =prompt("Enter a sentance");
// var result = longestWord(sentance);
// document.write("longest word in  "+sentance+"<br> is : "+result);

// Task no 13:
// function counter(sentance,letter)
// {
//     var count=0;
//  for (let i = 0; i < sentance.length; i++) {
//     if(sentance[i]=== letter)
//     {
//     count++;
//     }
     
//  }
//  return count;   
// }

// var sentance=prompt("Enter sentance: ");
// var letter=prompt("Enter a letter to find: ");
// var count = counter(sentance,letter);
// document.write(sentance+"<br>");
// document.write(letter+" is found "+count+" times");

// Task no 14:
// function Circumference(radius)
// {
// return Math.PI*2*radius
// }

// function AreaOfCircle(radius)
// {
// return Math.PI*Math.pow(radius,2);
// }

// var radius=+prompt("Enter radius of circle in cms");
// var circumference = Circumference(radius);
// var area = AreaOfCircle(radius);

// document.write("The radius of circle is : "+radius+"<br>");
// document.write("The circumference of circle is : "+circumference+"<br>");
// document.write("The area of circle is : "+area+"<br>");