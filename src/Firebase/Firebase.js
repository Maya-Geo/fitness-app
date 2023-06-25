// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq3S9ZPId32-yzxBjSDyM3VANz1K9xBLI",
  authDomain: "fitness-app-dadd1.firebaseapp.com",
  projectId: "fitness-app-dadd1",
  storageBucket: "fitness-app-dadd1.appspot.com",
  messagingSenderId: "189594941368",
  appId: "1:189594941368:web:22274ff9fd64467c91414d"
};


// Initialize Firebase
let app;

    app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export{auth}
export {app}

export default firebase;

