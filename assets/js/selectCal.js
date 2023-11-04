// FOR SELECTING B/W ADV. AND BASIC CAL. ___________________________________________

const inputSliders = document.querySelectorAll(".input-slider");
console.log(inputSliders)
const showBasicCal = document.getElementById("show-basic-cal");
const showAdvancedCal = document.getElementById("show-advanced-cal");
const changeCal = document.getElementById("change-cal");

showBasicCal.addEventListener("click", ()=>{
  showBasicCal.classList.add("sel-cal-clicked");
  showBasicCal.classList.remove("sel-cal-unclicked");
  showAdvancedCal.classList.remove("sel-cal-clicked");
  showAdvancedCal.classList.add("sel-cal-unclicked");

// basicCal.style.display="flex";
// advancedCal.style.display="none";
changeCal.classList.add("basic-cal");
changeCal.classList.remove("advanced-cal");
console.log(inputSliders)
//Using foreach because input sliders are in nodesList not in array
inputSliders.forEach((inputSlider) => {
  inputSlider.style.display="none";
})

})
showAdvancedCal.addEventListener("click", ()=>{
  showAdvancedCal.classList.add("sel-cal-clicked");
  showAdvancedCal.classList.remove("sel-cal-unclicked");
  showBasicCal.classList.add("sel-cal-unclicked");
  showBasicCal.classList.remove("sel-cal-clicked");

  // basicCal.style.display="none";
  // advancedCal.style.display="flex";

  changeCal.classList.add("advanced-cal");
changeCal.classList.remove("basic-cal");
  inputSliders.forEach((inputSlider) => {
    inputSlider.style.display="block";
  });

})