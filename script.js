// //Get all the countries from the Asia continent /region using the Filter function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload = function(){
    var data = request.response
    var result = JSON.parse(data)
     var res= result.filter((ele)=>( ele.region==="Asia"))  
  var res1= res.map((ele)=>((ele).name.common))
     console.log(res1)
 }

 //Get all the countries with a population of less than 2 lakhs using Filter function
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data =request.response;
var result = JSON.parse(data);
    var res= result.filter((ele)=>( ele.population<200000))
    var res1= res.map((ele)=>((ele).name.common))
    console.log(res1);
}

//Print the following details name, capital, flag using forEach function
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send()
 request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var res = result.forEach((ele)=>{console.log(`${ele.name.common} ${ele.capital} ${ele.flag}`)})
    }

//Print the total population of countries using reduce function
var request= new XMLHttpRequest();
request.open ( "GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload =function(){
    var data=request.response;
    var result = JSON.parse(data);
    var res= result.reduce((acc,ele)=>acc+ele.population,0)
    console.log(res);
}

// Print the country which uses US Dollars as currency.

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function()  {
    let data = JSON.parse(request.response)
    let result = data.filter((ele) => (ele.currencies !== undefined))
    let res1 = result.filter((data) =>  {
    for (let key in data.currencies) {
        if(data.currencies[key].name === "United States dollar"){
      return data
      }
    }
    })
    
    console.log(res1.length, res1[0].currencies)
    console.log(res1.map((ele)=>ele.name.common))
}
