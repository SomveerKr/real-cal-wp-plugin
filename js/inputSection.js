
let allCashflowInputs = document.querySelectorAll (".cashflow-inputs input[type='text']");

const formatAllCashFlowInputsWithComma= () => {
  for (let i = 0; i < allCashflowInputs.length; i++) {
          // Get the value.
          var inputValue = allCashflowInputs[i].value;
    
          inputValue = inputValue.replace(/,/g, "");
          // console.log(inputValue)
          inputValue = inputValue ? (inputValue.includes(".") ? parseFloat(inputValue) : parseInt(inputValue)) : 0;
          // console.log(inputValue)
    
          allCashflowInputs[i].value = (inputValue === 0) ? "" : inputValue.toLocaleString("en-US");
  } 

  let pmf = document.getElementById ("property-management-fees"); // get the input element by id
  pmf.value = pmf.value + " %"; // append % to the value
  // let pt = document.getElementById ("property-taxes"); // get the input element by id
  // pt.value = pt.value + " %"; // append % to the value
}



formatAllCashFlowInputsWithComma()


function updateInputFromSlider(inputId, sliderId) {
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    input.value = slider.value;
    formatAllCashFlowInputsWithComma()
  }
  
  function updateSliderFromInput(inputId, sliderId) {
    const input = document.getElementById(inputId);
    const slider = document.getElementById(sliderId);
    slider.value = input.value;
    formatAllCashFlowInputsWithComma()
  }
  
  document.getElementById("monthly-income-slider").addEventListener("input", function () {
    updateInputFromSlider("monthly-income", "monthly-income-slider");
  });
  
  document.getElementById("mortgage-payment-slider").addEventListener("input", function () {
    updateInputFromSlider("mortgage-payment", "mortgage-payment-slider");
  });
  
  document.getElementById("property-taxes-slider").addEventListener("input", function () {
    updateInputFromSlider("property-taxes", "property-taxes-slider");
  });
  
  document.getElementById("property-insurance-slider").addEventListener("input", function () {
    updateInputFromSlider("property-insurance", "property-insurance-slider");
  });
  
  document.getElementById("property-management-fees-slider").addEventListener("input", function () {
    updateInputFromSlider("property-management-fees", "property-management-fees-slider");
  });
  
  document.getElementById("maintenance-costs-slider").addEventListener("input", function () {
    updateInputFromSlider("maintenance-costs", "maintenance-costs-slider");
  });
  
  document.getElementById("other-expenses-slider").addEventListener("input", function () {
    updateInputFromSlider("other-expenses", "other-expenses-slider");
  });
  
  document.getElementById("monthly-income").addEventListener("input", function () {
    updateSliderFromInput("monthly-income", "monthly-income-slider");
  });
  
  document.getElementById("mortgage-payment").addEventListener("input", function () {
    updateSliderFromInput("mortgage-payment", "mortgage-payment-slider");
  });
  
  document.getElementById("property-taxes").addEventListener("input", function () {
    updateSliderFromInput("property-taxes", "property-taxes-slider");
  });
  
  document.getElementById("property-insurance").addEventListener("input", function () {
    updateSliderFromInput("property-insurance", "property-insurance-slider");
  });
  
  document.getElementById("property-management-fees").addEventListener("input", function () {
    updateSliderFromInput("property-management-fees", "property-management-fees-slider");
  });
  
  document.getElementById("maintenance-costs").addEventListener("input", function () {
    updateSliderFromInput("maintenance-costs", "maintenance-costs-slider");
  });
  
  document.getElementById("other-expenses").addEventListener("input", function () {
    updateSliderFromInput("other-expenses", "other-expenses-slider");
  });
  

