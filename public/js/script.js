// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1BrdgrprS26eutIJeblUEjN6qutm4MQs",
    authDomain: "code-brewers-959b8.firebaseapp.com",
    projectId: "code-brewers-959b8",
    storageBucket: "code-brewers-959b8.appspot.com",
    messagingSenderId: "99887190296",
    appId: "1:99887190296:web:f7a408978054e577684e6d"
  };
  
  
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const Auth = firebase.auth();
  
  
  function register() { 
    email = document.getElementById('Email-field').value;
    password = document.getElementById('password-field');

    Auth.createUserWithEmailAndPassword(email,password).then(()=>{

    }).catch((err)=>{
        console.log(err);
    })
   }
  
  export const provider = new GoogleAuthProvider();