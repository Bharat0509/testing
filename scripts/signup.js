const firebaseConfig = {
    apiKey: "AIzaSyD1uY5W2KsUQImeyGmxwxWHuL3EDWK7uRc",
    authDomain: "nexttodo-23937.firebaseapp.com",
    projectId: "nexttodo-23937",
    storageBucket: "nexttodo-23937.appspot.com",
    messagingSenderId: "460543472622",
    appId: "1:460543472622:web:133346398d77c1125b94ff",
    measurementId: "G-1Y8XMEWTYC",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.querySelector(".sign_up-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    alert("Submitted");
    // Get values
    var email = getInputVal("email");
    var password = getInputVal("password");
    var confirmPassword = getInputVal("confirmPassword");
    // if (password != confirmPassword) return
    console.log(email, password);
    console.log("Now Function called");
    saveUser(email, password);
    document.querySelector(".sign_up-form").reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save User to firebase
async function saveUser(email, password) {
    console.log("In Now Function called");
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            location.href = "/";
        })
        .catch((error) => {
            alert(error.message);
        });
}
