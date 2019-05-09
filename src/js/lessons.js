//example 1

// var inputOne = prompt("Hey, please give me a number"); 
// var inputTwo = prompt("Type a bigger number");
// var userNumberOne = parseInt(inputOne); 
// var userNumberTwo = parseInt(inputTwo);

// var dieRoll = ( Math.floor(Math.random() * (userNumberTwo - userNumberOne  + 1 )) + userNumberOne );


// alert("Good for you! Here is your random number from " + userNumberTwo+ " to"+ " " + userNumberOne + " : " + dieRoll);

//_____________________




//example 2 
// var correctGuess = false
// var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt("I am thinking the number is between 1 and 6. What is it?");
// if ( parseInt(guess) === randomNumber ) {
// 	correctGuess = true;
// } else if (parseInt(guess) < randomNumber) {
// 	var guessMore = prompt("Try again. The number is more than " + guess);
// 	if (parseInt(guessMore) === randomNumber) {
// 		correctGuess = true;
// 	}
// } else if (parseInt(guess) > randomNumber) {
// 	var guessLess = prompt("Try again. The number is less than " + guess );
// 	if (parseInt(guessLess) === randomNumber) {
// 		correctGuess = true;
// 	}
// }
	
// if (correctGuess) {
// 	alert("God for you! You guessed!");
// } else {
// 	alert ("Please don\`t play 1X-bet. It\`s not yours. Believe me, friend");
// }
//example 3 

// var randomNumber = Math.floor(Math.random() * 6 ) + 1;
// var guess = prompt("I am thinking the number is between 1 and 6. What is it?");
// if ()


// //example 4
// //I`m making a quiz, with 5 questions. 1 score for a question. 
// // at be beginning 
// var score = 0;
// var answerQuantity = 0
// var correctAnswer = false

// // declaration a function to check every answer and change score, answer quantity. 

// function checkAnswer() {

// 	if (correctAnswer === true ) {
// 		answerQuantity += 1;
// 		score += 1;
// 		if (score === 1) {
// 			alert("You are right! " + "You have  " + score + " right answer from " + answerQuantity);
// 		} else {
// 			alert("You are right! " + "You have  " + score + " right answers from " + answerQuantity);
// 		}
// 	} else {
// 			answerQuantity += 1;
// 			alert("Not right. But Keep trying. Your score is: " + score + " from " + answerQuantity)
// 	}

// 	if (answerQuantity === 5)  {
// 		if (score === 5){
// 			alert ("My congratulation! You have 5 from 5. And we rank you with the GOLD crown!!!")
// 		} else if (score === 4 || score === 3) {
// 			alert("Your result is " + score + ". My congratulations! Silver crown is your!");
// 		} else if (score === 2 || score === 1) {
// 			alert("Your result is " + score + ". " + " My congratulations! Bronze crown is your!");
// 		} else {
// 			alert("Your result is " + score + ". Keep trying and next time will be better.");
// 		}
// 	}
// }
// // asking a question and calling the function to check it.

// var question1 = prompt("How many planets are in the Solar System? Please type your answer with the number");
// if (parseInt(question1) === 8 )  { 
// 		correctAnswer = true; 
// 	} else {
// 		correctAnswer = false;
// 	}
// checkAnswer();

// var question2 = prompt("What is the nearest planet to the Sun?");
// if  (question2.toUpperCase() === "MERCURY") {
// 		correctAnswer = true; 
// 	} else {
// 		correctAnswer = false;
// 	}

// checkAnswer ();

// var question3 = prompt("What planet in the Solar System is the second possible one for people survival?");
// if  (question3.toUpperCase() === "MARS") {
// 		correctAnswer = true; 
// 	} else {
// 		correctAnswer = false;
// 	}

// checkAnswer();

// var	question4 = prompt("How many days in a year?");
// if (parseInt(question4) ===  365 ||  parseInt(question4) === 366)  { 
// 	correctAnswer = true; 
// } else {
// 	correctAnswer = false;
// }
// checkAnswer();

// var	question5 = prompt("What day of the March people celebrate International Woman Day?");
// if ( parseInt(question5) === 8 )  { 
// 	correctAnswer = true; 
// } else {
// 	correctAnswer = false;
// }
// checkAnswer();


// // end  of example 4 


//example 5 

// function getRandomNumber ( upper) {
// 	var randomNumber =  Math.floor(Math.random() * upper ) + 1;
// 	return randomNumber; 
//  }



// alert(getRandomNumber(10));
// alert(getRandomNumber(100));

// //example 6 
// /*
// this is randomizer, in which user can set minimum and maximem value
// */


// var userMinValue = 0; 
// var userMaxValue = 0;

// function getRandomNumber (minValue, maxValue) {
// 	var dieRoll = Math.floor(Math.random() * (maxValue - minValue)) + minValue; 
// 	return dieRoll; 
// }

// function checkUserValue (value) {

// 	if ( isNaN(value) ) {

// 		value = parseInt(prompt('This field requires a number! Please repeat input'));

// 		if ( isNaN(value)) {
// 			throw new Error ('Error message');
// 			return value = 0;
// 			alert(value)

// 		} else {
// 			return value;
// 			alert ("if число нормальне тут маэ бути значення " + value);
// 		}

// 	} else {
// 		 return value;
// 		 alert ("if число нормальне тут маэ бути значення " + value);
// 	}
// }

// userMinValue = prompt('Please put a minimum value for you random number'); 
// var min = parseInt(checkUserValue (userMinValue));

// userMaxValue = prompt('Type maximum number in this field');

// var max = parseInt(checkUserValue (userMaxValue));

// // alert(min);
// // alert(max);


// alert('Here is your random number ' + getRandomNumber(min, max));
// //end of example 6 
//____________________________________________________________________

//example 7 . loops
//computer needs to guess a generated random number



// var upper = 10000; 
// var randomNumber = getRandomNumber(upper); 
// var	guess; 
// var attempts = 0; 

// function getRandomNumber (upper) {
// 	return Math.floor(Math.random() * upper) + 1; 
// }
 
// while ( guess !== randomNumber ) {
// 	guess = getRandomNumber(upper);
// 	attempts++;

// }

// alert("The random number was: " + randomNumber );
// alert("It took the computer " + attempts + " attempts to get it.");

//// end of example 7 

// example 8 

// var randomNumber = getRandomNumber(10); 
// var guess; 
// var guessCount = 0; 

// function getRandomNumber(upper) {
// 	var num = Math.floor(Math.random() * upper) + 1; 
// 	return num; 
// }

// do {
// 	guess = prompt("Guess the random number between 1 and 10"); 
// 	guessCount++; 
// 	if (parseInt(guess) === randomNumber) {
// 	alert("You guessed. It took for you " + guessCount + " tries . And the random number is " + randomNumber);
// 	} 

// } while ( parseInt(guess) !== randomNumber) 

//end of example 8 

//example 9 
// var html = '';
// var rgbColor;

// function getRandomColor() {
//   var randomColor = Math.floor(Math.random() * 256 );
//   return randomColor;
// }

// function getRGBColor() {
//   var color = 'rgb('; 
//   color += getRandomColor()+ ",";
//   color += getRandomColor() + ","; 
//   color += getRandomColor() + ")";
//   return color;
// }

// function print(message) {
//   document.write(message);
// }

// for (var i = 1; i <=10; i++){
//   rgbColor = getRGBColor();
//   html += '<div style="background-color:' + rgbColor + '"></div>';
// }

// print(html);


// /// example 10; 

// var playList = [
// 	"Sia - Chandelier", 
// 	"Pink - Try", 
// 	"Elton John - Sorry", 
// 	"Imagine Dragons - Yesterday", 
// 	"Michael Jackson - One more time"
// ];


// function print(message) {
// 	document.write(message); 
// }

// function createOL(list) {

// 	var html = ''; 

// 	html = "<ol>"; 

// 	for (var i = 0; i < list.length; i++) {
		
// 		html += "<li>" + list[i] + "</li>"; 
// 	}

// 	html += "</ol>"; 
// 	print(html); 
// }
	
// createOL(playList); 


// end of ex10


// // ex 11

// var inStock = [ 
// 	'apples', 
// 	'eggs', 
// 	'milk', 
// 	'cookies', 
// 	'cheese', 
// 	'bread', 
// 	'lettuce',
// 	'carrot', 
// 	'broccoli', 
// 	'pizza', 
// 	'potato', 
// 	'crackers', 
// 	'onion', 
// 	'tofu', 
// 	'frozen dinner', 
// 	'cucumber'
//  ];
// var search;
// var shoppingList = [ ]; 

// function print(message) {
//   document.write( '<p>' + message + '</p>');
// }

// while (true) {
// 	search = prompt("Search for a product in our store. Type 'list' to show all of the products and 'quit' to  exit");

// 	if (search.toLowerCase() === 'exit') {
// 		break; 
// 	} else if ( search.toLowerCase() === 'list') {
// 		alert(inStock.join(", "));
// 	} else if ( inStock.indexOf(search.toLowerCase()) === -1 ) {
// 		alert("Sorry, this product is not available in our store. ");
// 	} else if ( inStock.indexOf(search.toLowerCase()) <= inStock.length - 1 ) {
// 		alert("You succesfully added the product to your shopping list"); 
// 		shoppingList.push(search); 
// 	}
// }


// print("You added these products to your shopping list: " + shoppingList + " ."); 


// //ex11

// var playList = [
// 	["Sia", "Chandelier"], 
// 	["Pink", "Try"], 
// 	["Elton John", "Sorry"], 
// 	["Imagine Dragons", " Yesterday"], 
// 	["Michael Jackson", "One more time"]
// ];


// function print(message) {
// 	document.write(message); 
// }

// function printSongs(songs) {

// 	var html = ''; 

// 	html = "<ol>"; 

// 	for (var i = 0; i < songs.length; i++) {
		
// 		html += "<li>" + songs[i][1] + " by "+ songs[i][0] + "</li>"; 
// 	}

// 	html += "</ol>"; 
// 	print(html); 
// }
	
// printSongs(playList); 


// //end of ex11


// //ex12

// var correct = 0; 
// var correctAnswers = []; 
// var wrongAnswers = []; 
// var html; 

// function print(message) {
// 	var outputDiv = document.getElementById("testExample"); 
// 	outputDiv.innerHTML = message;

// }

// function buildList (arr) {
// 	var listHTML = "<ol>"; 
// 	for (var i = 0; i < arr.length; i++) {
// 		listHTML += "<li>" + arr[i] + "</li>"; 
// 	}
// 	return listHTML +="</ol>"; 
// }

// var quiz = [
// 	[
// 		'How many planets are in the Solar System?', 
// 		'8'
// 	], 
// 	[
// 		'How is named our Solar system star?', 
// 		'sun'
// 	], 
// 	[
// 		'What planet is the second nearest to the Sun?', 
// 		'venera'
// 	]
// ]; 	

// for (var i = 0; i < quiz.length; i++) {
// 	var answer = (prompt(quiz[i][0])).toLowerCase(); 
// 	if (answer === quiz[i][1]) {
// 		correct++; 
// 		correctAnswers.push(quiz[i][0]); 

// 	} else {
// 		wrongAnswers.push(quiz[i][0]);
// 	}

// }

// html = 	"<h2> You have " + correct + " answer(s) correct </h2>"; 
// html += buildList(correctAnswers); 
// html += "<h2> Questions that you answered wrong: " + ( quiz.length - correct) + "</h2>"; 
// html +=  buildList(wrongAnswers); 
// print(html); 


// //ex13

// var person = {
// 	name: 'Sarah', 
// 	country: 'Ukraine', 
// 	age: 35, 
// 	treeHouseStudent: true,
// 	skills: ['JavaScript', 'HTML', 'CSS']
// };

// function print(message) {
// 	var outputDiv = document.getElementById('testExample'); 
// 	outputDiv.innerHTML = message; 
// }

// var message = "<p> + Hello my name is " + person.name + "</p>"; 

// print(message); 

// //end of ex13


// //ex14 --- 'for in' loop using 
//  var person = {
// 	name: 'Sarah', 
// 	country: 'Ukraine', 
// 	age: 35, 
// 	treeHouseStudent: true,
// 	skills: ['JavaScript', 'HTML', 'CSS']
// };

// for ( var key in person){
// 	alert(person[key]); 
// }


// //end of ex14


//feature of console
// for ( var key in person){
//	alert(key, ": "); 
//}

// //ex15 updated ex12

// var correct = 0; 
// var correctAnswers = []; 
// var wrongAnswers = []; 
// var html; 

// function print(message) {
// 	var outputDiv = document.getElementById("testExample"); 
// 	outputDiv.innerHTML = message;

// }

// function buildList (arr) {
// 	var listHTML = "<ol>"; 
// 	for (var i = 0; i < arr.length; i++) {
// 		listHTML += "<li>" + arr[i] + "</li>"; 
// 	}
// 	return listHTML +="</ol>"; 
// }

// var quiz = [
// 	{
// 		question: 'How many planets are in the Solar System?', 
// 		answer: '8'
// 	}, 
// 	{
// 		question: 'How is named our Solar system star?', 
// 		answer: 'sun'
// 	}, 
// 	{
// 		question: 'What planet is the second nearest to the Sun?', 
// 		answer: 'venera'
// 	}
// ];

//  for (var i = 0; i < quiz.length; i++) {
// 	var answer = (prompt(quiz[i].question)).toLowerCase(); 
// 	if (answer === quiz[i].answer) {
// 		correct++; 
// 		correctAnswers.push(quiz[i].question); 

// 	} else {
// 		wrongAnswers.push(quiz[i].question);
// 	}

// }

// html = 	"<h2> You have " + correct + " answer(s) correct </h2>"; 
// html += buildList(correctAnswers); 
// html += "<h2> Questions that you answered wrong: " + ( quiz.length - correct) + "</h2>"; 
// html +=  buildList(wrongAnswers); 
// print(html); 
//END OF EX15
//_______________________________________________________________________



// //ex 16

// var html; 
// var studentsList = []; 

// var students = [
// 	{
// 		Student: 'Kate', 
// 		Track: 'Front End Development', 
// 		Achievments: 64,
// 		points: 1235
// 	}, 
// 	{
// 		Student: 'Dave', 
// 		Track: 'Back End Development', 
// 		Achievments: 123,
// 		points: 5565
// 	}, 
// 	{
// 		Student: 'George', 
// 		Track: 'JavaScript', 
// 		Achievments: 21,
// 		points: 554
// 	}, 
// 	{
// 		Student: 'Molly', 
// 		Track: 'Full Stack', 
// 		Achievments: 1236,
// 		points: 65489
// 	}, 
// 	{
// 		Student: 'John', 
// 		Track: 'Ruby', 
// 		Achievments: 656,
// 		points: 98965
// 	}, 
// ]; 

// function print(message) {
// 	var outputDiv = document.getElementById('testExample'); 
// 	outputDiv.innerHTML = message; 
// }


// function buildList (arr) {
// 	var listHTML = "<h2> Students: </h2>"; 
// 	for (var i = 0; i < arr.length ; i++) {
// 		// console.log((i % 4) == 0);
// 		if((i % 4) == 0) {
// 			listHTML += "<h2>" + arr[i] + "</h2>";
// 		} else {
// 			listHTML += "<p>" + arr[i] + "</p>";
// 		}  

// 	}
// 	return listHTML; 
// }

// for (var i = 0; i < students.length; i++){

// 	for (var prop in students[i]) {
// 		studentsList.push (prop + " : " + students[i][prop]); 
// 	}

// }

// html = buildList(studentsList)
 

//  print(html); 


//ex17
// //чистовик
// var request;
// var html = '';  
// var studentsList = []; 
// var notFoundStudents = "<h6> Not found student(s) :</h6> <ol>";
// var printMatches;

// var students = [
// 	{
// 		Student: 'Kate', 
// 		Track: 'Front End Development', 
// 		Achievments: 64,
// 		Points: 1235
// 	}, 
// 	{
// 		Student: 'Dave', 
// 		Track: 'Back End Development', 
// 		Achievments: 123,
// 		Points: 5565
// 	}, 
// 	{
// 		Student: 'George', 
// 		Track: 'JavaScript', 
// 		Achievments: 21,
// 		Points: 554
// 	}, 
// 	{
// 		Student: 'Molly', 
// 		Track: 'Full Stack', 
// 		Achievments: 1236,
// 		Points: 65489
// 	}, 
// 	{
// 		Student: 'John', 
// 		Track: 'Ruby', 
// 		Achievments: 656,
// 		Points: 98965
// 	}, 
// ]; 


// var matches = [];

// while (true){
// 	request = prompt('Search the student records by the name. Or just type "quit" to exit.').toLowerCase();
// 	var requestLow = request.toLowerCase();
// 	var index;
// 	if (hasStudent(requestLow)) {
// 		addMatch( getStudentIndex(requestLow) );

// 	} else if ( requestLow === "quit") {
// 		break; 
// 	}

// 	else {
// 		alert("Sorry, student " + request + " is not found in our data base. Please try again.");
// 	}

// } 

// printMatches = buildList(matches);

// print(printMatches);


// function hasStudent(name) {
// 	for (var i = 0; i < students.length; i++) {
// 		if (name === (students[i].Student).toLowerCase()) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function addMatch(index) {
// 	for (var prop in students[index]) {
// 		matches.push(prop + " : " + students[index][prop]); 
// 	}
// }


// function getStudentIndex(name) {
// 	for (var i = 0; i < students.length; i++) {
// 		if (name === (students[i].Student).toLowerCase()) {
// 			return i;
// 			break;
// 		}
// 	}
// }


//  function print(message) {
// 	var outputDiv = document.getElementById('testExample'); 
// 	outputDiv.innerHTML = message; 
// }

// function buildList (arr) {
// 	var listHTML = ''; 
// 	for (var i = 0; i < arr.length ; i++) {
// 		if((i % 4) == 0) {
// 			listHTML += "<h2>" + arr[i] + "</h2>";
// 		} else {
// 			listHTML += "<p>" + arr[i] + "</p>";
// 		}  

// 	}
// 	return listHTML; 
// }


// чорновик




// function print(message) {
// 	var outputDiv = document.getElementById('testExample'); 
// 	outputDiv.innerHTML = message; 
// }


// function buildList (arr) {
// 	var listHTML = ''; 
// 	for (var i = 0; i < arr.length ; i++) {
// 		if((i % 4) == 0) {
// 			listHTML += "<h2>" + arr[i] + "</h2>";
// 		} else {
// 			listHTML += "<p>" + arr[i] + "</p>";
// 		}  

// 	}
// 	return listHTML; 
// }


// // creating full array with Students

// for (var i = 0; i < students.length; i++){

// 	for (var prop in students[i]) {
// 		studentsList.push (prop + " : " + students[i][prop]); 
// 	}

// }
// end of creating array



// search window loop 



// do {
// 	request = prompt('Search the student records by the name. Or just type "quit" to exit.').toLowerCase();
// 	var requestLow = request.toLowerCase();
// 	var searchToPrint = []; 
// 	var found = false;
// 	for (var i = 0; i < students.length; i++) {
// 		if (requestLow === (students[i].Student).toLowerCase()) {
// 			for (var prop in students[i]) {
// 				searchToPrint.push(prop + " : " + students[i][prop]); 
// 			}
// 			html +=buildList(searchToPrint); 
// 			found = true;
// 		}
// 	}
// 	if (! found) {
// 		alert("Sorry, student " + request + " is not found in our data base. Please try again.");
// 	}
	
// } while ( requestLow !== "quit" )

// notFoundStudents += "/ol"; 

// print( "<h2> Found students: </h2>" + html + notFoundStudents); 

// end of ex 16
// const toggleListBtn = document.getElementById('toggleList');
// const listDiv = document.querySelector('.list'); 
// const descInput = document.querySelector('input.description'); 
// const descP = document.querySelector('p.description'); 
// const descButton = document.querySelector('button.description'); 
// const addItemInput = document.querySelector('input.addItemInput'); 
// const addItemBtn = document.querySelector('button.addItemBtn'); 

// toggleListBtn.addEventListener('click', () => {
// 	if (listDiv.style.display === "none") {
// 		toggleListBtn.innerHTML = "Show the button"; 
// 		listDiv.style.display = "block"; 
// 	} else {
// 		toggleListBtn.innerHTML = "Hide the button"

// 		listDiv.style.display = "none"; 
// 	}
// })

// descButton.addEventListener('click',() => {
// 	descP.textContent = descInput.value + ':'; 
// })


// addItemInputBtn.addEventListener('click', () => {
// 	let li = document.createElement('li'); 
// 	li.textContent = addItemInput.value; 
// })


