import {rentData }from './data/rentData.js';
// console.log(rentData)

// const LocationAskingBtn = document.getElementById("show-advanced-cal");

document.addEventListener("DOMContentLoaded", ()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess);
    }else{
        console.log("Your browser not support");
    }
});

function onSuccess(position){
    console.log(position)
    let {latitude, longitude} = position.coords;
    fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=ff2c7248d9d240f68395f68f36f2c1f3`)
    .then(response => response.json()).then(response =>{
        // console.log(response)
        let allDetails = response.features[0].properties;
        // console.log(allDetails);
        let {city, state, country} = allDetails;
        console.log(`${state}, ${city}, ${country}`)

        rentData.forEach((item)=>{
            if(item.state === state && item.city=== city){
                const monthlyIncomeInput = document.getElementById("monthly-income")
                const monthlyIncomeSlider = document.getElementById("monthly-income-slider")

                monthlyIncomeInput.value=item.average_rent
                monthlyIncomeSlider.value=item.average_rent
            }
        })
       
    }).catch((err)=>{
       console.log(err)
    });
}

