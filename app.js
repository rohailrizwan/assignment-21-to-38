// chap 21
// var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities");
//  }
//  }

// chap 22

// var cities=prompt("enter city name")
// var first=cities.slice(0,1)
// first=first.toUpperCase()
// console.log(first)
// var other=cities.slice(1)
// console.log(other)
// var mycity=first+other
// console.log(mycity)
// first=cities.slice(2,5)
// console.log(first)

// var cityToCheck=prompt()
// var firstChar = cityToCheck.slice(0, 1);
//  var otherChars = cityToCheck.slice(1);
//  firstChar=firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;
//  console.log(cappedCity)

// var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  }

// var str = prompt("Enter some text");
// var numChars = str.length;
// // var space=false;
// for (var i = 0; i < numChars; i++) {
//  if (str.slice(i, i + 2) === "  ") 
//  {
//  console.log(" double spaces! found at index" +i);
// //  space=true

// }
//  }

// chap 23
// var text="Sparked by the 1939 Nazi invasion World War II was the World War II and deadlies"
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//      text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      console.log(text)
//      }
//  }

// var i=text.indexOf("World War II")

// if(i!==-1){
//     text=text.slice(0,i)+"rohail"+text.slice(i+12)
//     console.log(text)
// }

// var i=text.lastIndexOf("World War II")

// if(i!==-1){
//     text=text.slice(0,i)+"rohail"+text.slice(i+12)
//     console.log(text)
// }

// chap 24

// var name="rohail"
// var f_char=name.charAt(0);
// var r_char=name.charAt(name.length-1)
// console.log(f_char+"</br>"+r_char)

// var text="roahil ! rizwan"
// for (var i = 0; i < text.length; i++) {
//  if (text.charAt(i) === "!") {
//  alert("Exclamation point found!");
//  break;
//  }
//  }

// chap 25
// var text="Sparked by the 1939 Nazi invasion World War II was the World War II and deadlies"
// // var newText = text.replace("World War II", "the Second World War");
// // text=text.replace("World War II","rohail rizwan")
// var newText = text.replace(/World War II /g, "the Second World War");
// // console.log(text)
// console.log(newText)

// chap26 and 27

// var scoreAvg = Math.ceil(.000001);
// console.log(scoreAvg)
// var scoreAvg = Math.floor(.000005);
// console.log(scoreAvg)
// var scoreAvg = Math.random(scoreAvg);

// console.log(scoreAvg)

// var r=5.2
// r = Math.random(r)
// console.log(r)

// var bigDecimal = Math.random();
//  var improvedNum = (bigDecimal * 6) ;
//  var numberOfStars = Math.floor(improvedNum);
// numberOfStars=numberOfStars.toFixed(2)
//  console.log(numberOfStars)

//chap 28 29 30

//  var currentAge = prompt("Enter your age.");
//  var yearsEligibleToVote = currentAge - 18;
// console.log(yearsEligibleToVote)

// var profit = "200" - "150";
// console.log(profit)
// var profit = "200" - "duck";
// console.log(profit)
// var result = "200" + 150;
// console.log(result)

// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(qualifyingAge)

//  var integerString = "24"
// //  var num = Number(integerString);
//  console.log(integerString)
//  var floatString = "24.568"
// //  var num = Number(floatString);
//  console.log(floatString)
// var num=+prompt("enter number")
// var str = num.toString();
//  if (str.charAt(str.length - 1) === "5") {
//  str = str.slice(0, str.length - 1) + "6";
//  }
//  num = Number(str);
//  prettyNum = num.toFixed(2);
//  console.log(prettyNum)

// chap 31 32 33 34
var rightNow = new Date();
// var dateString = rightNow.toString();
// console.log(dateString)

// var month=rightNow.getMonth()
// var monthString=month.toString()
// console.log(monthString)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// console.log(nameOfToday)

// var day=rightNow.getDay()
// var string=day.toString()
// console.log(string)

// var year=rightNow.getFullYear()
// var string=year.toString()
// console.log(string)

// var date=rightNow.getDate()
// var string=date.toString()
// console.log(string)

// var time= rightNow.getTime()
// console.log(time)

// var hour=rightNow.getHours()
// console.log(hour)
// var min=rightNow.getMinutes()
// console.log(min)
// var sec=rightNow.getSeconds()
// console.log(sec)
// var m_seconds=rightNow.getMilliseconds()
// console.log(m_seconds)

// var d = new Date("July 21, 1983 13:25:00");
// console.log(d)

// chap 35 36 37 38
// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
//      }
//      tellTime()

// function greetUser() {
//     alert("Hello, there.");
//     }

//     function greetUser(greeting) {
//          alert(greeting);
//          }

//     greetUser("heelo,there")
//     var whatever = "Hello, woeld.";
//  greetUser(whatever);

// function showMessage(m, string, num)
// {
//  alert(m + string + num);
//  }
//  var month="july"
//  showMessage(month,"winner",20)

// var merchTot=+prompt("amount")
// function calcTot(merchTot) {
//     var orderTot;
//     if (merchTot >= 100) {
//         orderTot = merchTot;
//     }
//     else if (merchTot < 50.01) {
//         orderTot = merchTot + 5;
//     }
//     else {
//         orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//     }
//     return orderTot;
// }
// function calcTax(merchTot){
//     return merchTot
// }
// var totalToCharge = calcTot(merchTot);
// console.log(totalToCharge)
// var orderTot = merchTot + calcTax(merchTot);
// console.log(orderTot)

//global variable
// var theSum

//  function addNumbers() {
//      theSum = 2 + 2;
//      }
//    addNumbers()  
//    alert(theSum)

//local

//  function addNumbers() {
// var theSum     
//  theSum = 2 + 2;
//      }
//    addNumbers()  
//    alert(theSum)