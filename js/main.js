document.querySelector(".calculator__clean").addEventListener("click", cleanCalculator);
document.querySelector(".calculator__delete").addEventListener("click", removeLastElem);
document.querySelector(".calculator__total").addEventListener("click", calculateTotal);
const calculatorButtons = document.querySelectorAll(".calculator__buttons .calculator__btn");
const numbers = document.querySelectorAll(".calculator__buttons .calculator__number"); // Кнопки с символами
const operators = document.querySelectorAll(".calculator__buttons .calculator__operator"); // Кнопки с операторами
const output = document.querySelector(".calculator__screen-output"); // Поле вывода результата
const dotBtn = document.querySelector(".calculator__dot");
const dotClick = document.querySelector(".calculator__dot").addEventListener("click", dotClicked);
let numberStr = "";
let mainStr = "";
let mainArr = [];
let numberFlag = false;
let operatorFlag = false;
let dotFlag = false;


for(let i = 0; i < calculatorButtons.length; i++){
	calculatorButtons[i].addEventListener('mousedown', calculatorButtonsActive);
	function calculatorButtonsActive(){
		this.classList.add("calculator__btn_active");
		setTimeout(() => {
			this.classList.remove("calculator__btn_active");
		}, 350);
	}
}

function dotClicked(){
	dotBtn.setAttribute("disabled", "");
}


function numberClick(){
	for(let i = 0; i < numbers.length; i++){
		numbers[i].addEventListener('click', numberAction);
	}
	for(let i = 0; i < operators.length; i++){
		operators[i].addEventListener('click', operatorAction);
	}
}
function numberAction(){
	if(numberFlag === false){
		operatorFlag = false;
		mainArr.push(this.value);
		console.log(mainArr);
		numberFlag = true;
		mainStr = mainArr.join("");
		output.value  = mainStr;
	}else{
		mainArr[mainArr.length - 1] += this.value;
		mainStr = mainArr.join("");
		output.value  = mainStr;
		console.log(mainArr);
	}

}
function operatorAction(){
	if(mainArr.length % 2 !== 0){
		numberFlag = false;
		operatorFlag = true;
		mainArr.push(this.value);
		console.log(mainArr);
		mainStr = mainArr.join("");
		output.value  = mainStr;
		dotBtn.removeAttribute("disabled", "");
	}else{
		mainArr.pop();
		mainArr.push(this.value);
		console.log(this.value);
		console.log(mainArr);
		mainStr = mainArr.join("");
		output.value  = mainStr;
		dotBtn.removeAttribute("disabled", "");
	}

}
function cleanCalculator(){
	numberStr = "";
	mainStr = "";
	mainArr = [];
	numberFlag = false;
	operatorFlag = false;
	dotFlag = false;
	output.value  = mainStr;
}
function removeLastElem(){
	mainArr.pop();
	numberFlag = false;
	operatorFlag = false;
	mainStr = mainArr.join("");
	output.value  = mainStr;
	console.log(mainArr);
}

function calculateTotal(){
	if(mainArr.length % 2 !== 0){
		for(i = 0; i < mainArr.length; i++){
			if((mainArr[i] === "*") || mainArr[i] === "/"){
				if(mainArr[i] === "*"){
					a = mainArr[mainArr.indexOf(mainArr[i]) - 1];
					b = mainArr[mainArr.indexOf(mainArr[i]) + 1];
					(mainArr[mainArr.indexOf(mainArr[i]) - 1]) = a * b;
					mainArr.splice((mainArr.indexOf(mainArr[i]) + 1), 1);
					mainArr.splice((mainArr.indexOf(mainArr[i])), 1);
					console.log(mainArr);
				}else{
					a = mainArr[mainArr.indexOf(mainArr[i]) - 1];
					b = mainArr[mainArr.indexOf(mainArr[i]) + 1];
					mainArr[mainArr.indexOf(mainArr[i]) - 1] = a / b;
					mainArr.splice((mainArr.indexOf(mainArr[i]) + 1), 1);
					mainArr.splice((mainArr.indexOf(mainArr[i])), 1);
					console.log(mainArr)
			}
		}
	}
	mainStr = mainArr.join('');
	mainArr = [];
	mainArr.push(eval(mainStr));
	mainStr = mainArr.join('');
	output.value  = mainStr;
	console.log(eval(mainArr));
	console.log(eval(mainStr));
	}else{
		alert('The example is not complete')
	}
	

}

numberClick();












































// // // !Создание случайного примера
// document.querySelector(".reset").addEventListener("click", createExample);
// let arrLength = 0;
// let randomnumber = 0;
// let numbersArr = [];
// let operatorsArr = [];
// const possible = "+-*/";
// let taskArr = [];
// let exampleStr = '';
// function randomNumbers() {
// 	min = 3;
// 	max = 10;
// 	min = Math.ceil(min);
// 	max = Math.floor(max);
// 	arrLength = Math.floor(Math.random() * (max - min)) + min;
// 	while(numbersArr.length < arrLength){
// 		randomnumber = Math.round(Math.random()*100) + 1;
// 		if(numbersArr.indexOf(randomnumber) > -1) continue;
// 		numbersArr[numbersArr.length] = randomnumber;
// 	}
// }
// function randomOperators() {
// 	for (let i = 0; i < arrLength - 1; i++){
// 		operatorsArr.push(possible.charAt(Math.fround(Math.random() * possible.length)));
// 	}
// }
// function concatArrays(){
// 	for (let i = 0; i = numbersArr.length + operatorsArr.length; i++){
// 		if(numbersArr.length != 0){
// 			taskArr.push(numbersArr[0]);
// 			numbersArr.shift();
// 		}
// 		if(operatorsArr.length != 0){
// 			taskArr.push(operatorsArr[0]);
// 			operatorsArr.shift();
// 		}
// 	}
// 	exampleStr = taskArr.join('')
// 	console.log(exampleStr);
// }
// function brackets(){

// }
// function createExample(){
// 	taskArr = [];
// 	randomNumbers();
// 	randomOperators();
// 	concatArrays();
// 	// prioritise();
// }

// function prioritise(){

// 	while (taskArr.includes("*")) {
		
// 		a = taskArr[taskArr.indexOf("*") - 1];
// 		b = taskArr[taskArr.indexOf("*") + 1];
		
// 		result = taskArr[taskArr.indexOf("*") - 1] = (a.toFixed(3) * b.toFixed(3));

// 		taskArr[taskArr.indexOf("*") - 1] = result;
		
// 		taskArr.splice((taskArr.indexOf("*") + 1), 1);
// 		taskArr.splice((taskArr.indexOf("*")), 1);
// 	}

// 	while (taskArr.includes("/")) {
		
// 		a = taskArr[taskArr.indexOf("/") - 1];
// 		b = taskArr[taskArr.indexOf("/") + 1];
		
// 		result = a = (a.toFixed(3) / b.toFixed(3));

// 		taskArr[taskArr.indexOf("/") - 1] = result;
		
// 		taskArr.splice((taskArr.indexOf("/") + 1), 1);
// 		taskArr.splice((taskArr.indexOf("/")), 1);
	
// 	}
	
// 	console.log(taskArr);

// }

