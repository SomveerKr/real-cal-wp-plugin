
// Get the input elements by their id
let monthlyIncome = document.getElementById("monthly-income");
let mortgagePayment = document.getElementById("mortgage-payment");
let propertyTaxes = document.getElementById("property-taxes");
let propertyInsurance = document.getElementById("property-insurance");
let propertyManagementFees = document.getElementById("property-management-fees");
let maintenanceCosts = document.getElementById("maintenance-costs");
let otherExpenses = document.getElementById("other-expenses");

let inputs = document.querySelectorAll(".cashflow-inputs input"); // Get all the input elements



// Declare variables to store the input values by taking average values in usa
let monthlyIncomeValue=1372, 
  mortgagePaymentValue= 2317, 
  propertyTaxesValue = 224, 
  propertyInsuranceValue = 152, 
  propertyManagementFeesValue= 10, 
  maintenanceCostsValue=320, 
  otherExpensesValue=412;


// Variable to store the cash flow, gross income,total expenses
let grossCashFlow;
let netCashFlow;
let cashFlow;
let grossIncome =monthlyIncomeValue;
let totalExpenses;

// Calculate the total expenses by adding all the expense values
totalExpenses = Math.round(mortgagePaymentValue + propertyTaxesValue + propertyInsuranceValue + ((grossIncome*propertyManagementFeesValue) /100) + maintenanceCostsValue + otherExpensesValue);

// Calculate the cash flow by subtracting the total expenses from the gross income
cashFlow = grossIncome - totalExpenses;

// Get the doughnut chart canvas element
let ctx = document.getElementById("chart-cashflow").getContext("2d");
  

  // Create a data object with the values for the chart
let data = {
  labels: ["Monthly Cash Flow", "Monthly Income", "Monthly Expenses"],
  datasets: [
    {
      label: "Cash Flow Analysis",
      data: [ cashFlow, grossIncome, totalExpenses] , // Use the variables from the previous code
      backgroundColor: ["#4CAF50", "#2196F3", "#F44336"], // Set different colors for each segment
      hoverOffset: 4 // Set a slight offset on hover
    }
  ]
};

// Create a new doughnut chart instance
let doughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: "top", // Display the legend at the top
        labels: {
          // This more specific font property overrides the global property
          font: {
              size: 14
          }
      }
      },
      title: {
        display: true, // Display the title //COLOR rgb(102,102,102)
        text: "Real Estate Cash Flow Analysis", // Set the title text
        font:{
          size:"18"
        }
      }
    }
  }
});


doughnutChart.resize(370, 370);

inputs.forEach( (input) => {
  // Loop through each input element & Add an input event listener to each element
  input.addEventListener("input", () => {
    monthlyIncomeValue = parseInt((monthlyIncome.value).replace(/,/g, ""));
    // console.log(monthlyIncomeValue);
    mortgagePaymentValue = parseInt((mortgagePayment.value).replace(/,/g, ""));
    // console.log(mortgagePaymentValue);
    propertyTaxesValue = parseInt((propertyTaxes.value).replace(/,/g, ""));
    // console.log(propertyTaxesValue);
    propertyInsuranceValue = parseInt((propertyInsurance.value).replace(/,/g, ""));
    // console.log(propertyInsuranceValue);
    propertyManagementFeesValue = (parseFloat((propertyManagementFees.value).replace(/,/g, ""))) ;
    console.log(propertyManagementFeesValue);
    maintenanceCostsValue = parseInt((maintenanceCosts.value).replace(/,/g, ""));
    // console.log(maintenanceCostsValue);
    otherExpensesValue = parseInt((otherExpenses.value).replace(/,/g, ""));
    // console.log(otherExpensesValue);


  // Calculate the gross income by adding the monthly income value
  grossIncome = monthlyIncomeValue;
    const propertyManagementFeesValueInNumber=(grossIncome*propertyManagementFeesValue) /100
    console.log(propertyManagementFeesValueInNumber)
  // Calculate the total expenses by adding all the expense values
  totalExpenses = Math.round(mortgagePaymentValue + propertyTaxesValue + propertyInsuranceValue + propertyManagementFeesValueInNumber + maintenanceCostsValue + otherExpensesValue);

  // Calculate the cash flow by subtracting the total expenses from the gross income
  cashFlow = grossIncome - totalExpenses;

  // console.log(cashFlow); 
  
    data.datasets[0].data = [cashFlow, grossIncome, totalExpenses ];
    doughnutChart.update();
 

  
    displayOutputValuesInDetails(grossIncome, totalExpenses, cashFlow);
    formatAllRentDetailDivsWithComma();
  });  
 
});


 // FOR DISPLAYING THE OUTPUT IN DETAILS
const displayOutputValuesInDetails = (grossIncome, totalExpenses, cashFlow) => {
 
  const monthlyIncomeDiv =document.querySelector("#monthlyIncomeDiv span");
  const monthlyExpensesDiv =document.querySelector("#monthlyExpensesDiv span");
  const monthlyCashflowDiv =document.querySelector("#monthlyCashflowDiv span");
  const yearlyCashflowDiv =document.querySelector("#yearlyCashflowDiv span");
  if (cashFlow === undefined){
    monthlyIncomeDiv.innerHTML = 30000;
    monthlyExpensesDiv.innerHTML = 21000;
    monthlyCashflowDiv.innerHTML = 9000;
    yearlyCashflowDiv.innerHTML = 9000 * 12;
  } else {
    monthlyIncomeDiv.innerHTML = grossIncome ;
    monthlyExpensesDiv.innerHTML = totalExpenses ;
    monthlyCashflowDiv.innerHTML = cashFlow ;
    yearlyCashflowDiv.innerHTML = (cashFlow * 12);
  }
  
}
displayOutputValuesInDetails()
let allRentDetailDivs = document.querySelectorAll (".rent-details-value span");
const formatAllRentDetailDivsWithComma= () => {
  for (let i = 0; i < allRentDetailDivs.length; i++) {
              // Get the value.
              var rentDetailDivValue = allRentDetailDivs[i].innerText;
              // console.log(rentDetailDivValue)
              rentDetailDivValue = rentDetailDivValue.replace(/,/g, "");
              rentDetailDivValue = rentDetailDivValue ? parseInt(rentDetailDivValue) : 0;
        
              allRentDetailDivs[i].innerText = (rentDetailDivValue === 0) ? "" : rentDetailDivValue.toLocaleString("en-US");
  } 
};

formatAllRentDetailDivsWithComma();

// Get the elements by their ids
var chart = document.getElementById("chart-cashflow");
var details = document.getElementById("details-cashflow");
var overviewBtn = document.getElementById("show-overview-btn");
var detailsBtn = document.getElementById("show-details-btn");

// Hide the details div by default
details.style.display = "none";

// Add an event listener to the overview button
overviewBtn.addEventListener("click", function() {
  // Show the chart and hide the details

  chart.style.display = "block";
  
  details.style.display = "none";
  // Add the over-chart-clicked class to the overview button and remove it from the details button
  overviewBtn.classList.add("over-chart-clicked");
  detailsBtn.classList.remove("over-chart-clicked");
  // Remove the over-chart-unclicked class from the overview button and add it to the details button
  overviewBtn.classList.remove("over-chart-unclicked");
  detailsBtn.classList.add("over-chart-unclicked");
});

// Add an event listener to the details button
detailsBtn.addEventListener("click", function() {
  // Hide the chart and show the details
  chart.style.display = "none";
  details.style.display = "block";
  // Add the over-chart-clicked class to the details button and remove it from the overview button
  detailsBtn.classList.add("over-chart-clicked");
  overviewBtn.classList.remove("over-chart-clicked");
  // Remove the over-chart-unclicked class from the details button and add it to the overview button
  detailsBtn.classList.remove("over-chart-unclicked");
  overviewBtn.classList.add("over-chart-unclicked");
});




