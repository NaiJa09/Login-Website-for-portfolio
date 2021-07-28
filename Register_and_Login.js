// DOCUMENT.QUERYSELECTOR SHORTCUT
function el(name, all){
	if(all){
		return document.querySelectorAll(name);
	} else {
		return document.querySelector(name);
	}
};


function sum(a, b){
	return a + b;

}; 

console.log(sum(2,5));

// ADD EVENT LISTENER CLICK FUNCTION 

function click(){
	document.queryselector(".test").innerHRML = 'hello';
};


// USER ARRAY
var user = [];

// PASS VARIABLE
var pass = [];

// LENGTH OF BOTH ARRAYS
var user_length = user.length;

var pass_length = pass.length;

// LOCAL STORAGE SHORTCUT
var LS = localStorage;

// SET DATA FUNCTION
function setD(key, data){
	LS.setItem(key, JSON.stringify(data));
};

// 

// TEST
console.log('hello');

var arr = ["Zero","One","Two"];

function setI(key, data){
	LS.setItem("0", "Zero");
};

function sum(a, b){
	return a + b;

}; 

console.log(sum(2,5));


