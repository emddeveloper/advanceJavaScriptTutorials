//let and const
//arrow function
/*
function myage(){
    console.log('28')
}
myage()

var myage1 = function(){
    return 29
}
console.log(myage1());

let myage2 = () => {
    return 30
}

console.log(myage2());

let myage3 =()=> 31;
console.log(myage3());

let myage4 =(a,b)=> a+b;
console.log(myage4(20,12));

let myage5 = a => a;
console.log(myage5(33));

setTimeout(function(){console.log('34')},1000);

setTimeout(()=>console.log('35'),1000);

// Try edit message
function b(){
console.log(x);
}

function a(){
var x=2;
console.log(x);
b();
}

var x=1;
console.log(x);
a();*/

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

//for loop

for(let i=0;i<companies.length;i++){
    console.log(companies[i]);
}



  
 