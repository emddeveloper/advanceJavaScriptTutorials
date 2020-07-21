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
    {name: "Company One", category: "Finance", start: 1981, end: 2003, revenue :1000},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008,  revenue :1002},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007,  revenue :1003},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010,  revenue :1004},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014,  revenue :1005},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010,  revenue :1006},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996,  revenue :1007},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016,  revenue :1008},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989,  revenue :1000}
];

//for loop

// for(let i=0;i<companies.length;i++){
//     console.log(companies[i]);
// }


//forEach
//Old method ES5
// companies.forEach(function(company){
//     console.log(company)
// })
//ES6 arrow function
// companies.forEach((company)=>{
//     console.log(company)
// })
//ES6 sorthand advance 
//companies.forEach(company => console.log(company))

//Filter in array
//Old method to do filtering 
//print company category Retail
// var retailCompany = [];
// for(let i=0;i<companies.length;i++){
//     if(companies[i].category ==="Retail"){
//         retailCompany.push(companies[i])
//     }
// }
// console.log(retailCompany)

//Filtyer with ES6
// let retailCompany = companies.filter(company => company.category ==="Retail");
// console.log(retailCompany)

//Filter only 80's company
// let EightiesCom =companies.filter(company => (company.start>=1980 && company.end<1990));
// console.log(EightiesCom)
//MAP function
//make an array of company names only

// let companyNames = companies.map((company)=>{
//     return company.name;
// });
//Advance ES6
// let companyNames = companies.map( company => company.name);
// console.log(companyNames)
//Print companies name with start year
//let compName = companies.map(company => `${company['name']} - ${company['start']}`);
//let compName = companies.map(company => company.name+'-'+company.start);
//console.log(compName)
//Company revenue *10 
// var testCom = companies
// .map(company => company.revenue * 10)
// console.log(testCom)
//Sort function
//sort the company as per stary date assesnding order
// const sortComp = companies.sort((c1,c2) => (c1.start > c2.start) ? 1 : -1);
// console.log(sortComp)

  
 