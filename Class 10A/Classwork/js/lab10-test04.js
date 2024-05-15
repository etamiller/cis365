document.addEventListener("DOMContentLoaded", function() {

   const countryAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/countries.php';
   const cityAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/cities.php';
   const continentAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/continents.php';
   const userAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/users.php';
   const photoAPI = 'https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php';
   const imageURL = 'https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/';   
   
   const loader1 = document.querySelector("#loader1");
   const loader2 = document.querySelector("#loader2");
   const button = document.querySelector("#fetchButton");
   const main = document.querySelector("#main");
   const filters = document.querySelector("#filter");
   const selectCountry = document.querySelector("#countries");
   const selectCity = document.querySelector("#cities");
   const selectContinents = document.querySelector("#continents");
   const selectUser = document.querySelector("#users");
   
   filters.style.display = "none";
   main.style.display = "none";
   loader1.style.display = "none";
   loader2.style.display = "none";

   //second parameter is function that should happen on click
   button.addEventListener('click',displayFilters)
});

async function displayFilters (){
   button.style.display = "none";
   // main.style.display = "none";
   loader1.style.display = "block";
   
}