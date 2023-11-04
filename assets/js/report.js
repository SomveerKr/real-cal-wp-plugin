// Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getStorage, ref, getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-storage.js";
import { getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDN6ghLoCDFif00noRxp87lHVRuD1OQJc",
    authDomain: "realcal-398c1.firebaseapp.com",
    projectId: "realcal-398c1",
    storageBucket: "realcal-398c1.appspot.com",
    messagingSenderId: "909058691300",
    appId: "1:909058691300:web:b543faa1d0e77e4c181cf1"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// console.log(firebase)

// Get the elements from the HTML
var emailInput = document.getElementById("email-input");
var getReportButton = document.getElementById("get-report-button");


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(firebase);
// console.log(storage)
const db = getFirestore(firebase);
// console.log(db)


// Initialize Cloud Storage and get a reference to the service
// const storage = firebase.storage();
// Add a click listener to the button
getReportButton.addEventListener("click", function() {
  // Get the email value from the input
  var email = emailInput.value;
  // Validate the email format
  if (email && validateEmail(email)) {
    // Save the email to the database
    addDoc(collection(db, "userEmails"), {
      email:email
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id)
      })
      .catch((error) => {
        console.error(error)
      })
    

    // Get a reference to the file in storage
    // const fileRef  = ref(storage, 'us-real-estate-report.pdf');
    getDownloadURL(ref(storage, 'us-real-estate-report.pdf'))
    .then((url) => {

const downloadBtn = document.getElementById('for-dowloading-files');
const reportEmailInput= document.querySelector(".get-report input");
// Create a new anchor element and set its href and download attributes
const downloadLink = document.createElement('a');
downloadLink.href = url; // url is the variable that holds the download link
downloadLink.setAttribute = "download"; // this will prompt the browser to download the file
downloadLink.target="_blank"
// Append the anchor element as a child of the download button
downloadBtn.appendChild(downloadLink);
  // Trigger a click on the anchor element
downloadLink.click();
    // Remove the anchor element from the download button
downloadBtn.removeChild(downloadLink);
reportEmailInput.value="";

    })
    .catch((error) => {
      console.error(error)
    });


  } else {
    // Show an alert if the email is invalid
    alert("Please enter a valid email address.");
  }
});

// A function to validate the email format using a regular expression
function validateEmail(email) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}