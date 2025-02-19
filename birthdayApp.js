import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js"
import { getDatabase,
         ref,
         push } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://birthday-637a8-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "birthdays")

const birthdayInputField = document.getElementById("birthday-input")
const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", function() {
    push(referenceInDB, birthdayInputField.value)
    //console.log(birthdayInputField.value)
    submitButton.textContent = birthdayInputField.value
    birthdayInputField.value = ""
    
})