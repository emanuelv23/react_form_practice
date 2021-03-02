import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
        apiKey: "AIzaSyB5xowXG9GmjNBOGs5bogA62_DN2Drvn4E",
        authDomain: "react-form-practice.firebaseapp.com",
        projectId: "react-form-practice",
        storageBucket: "react-form-practice.appspot.com",
        messagingSenderId: "771378189862",
        appId: "1:771378189862:web:5b25bd52758792cec378e7"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Database object for database operations
const db = firebase.firestore()
// Colecciones usadas en el proyecto
const colecciones = {
        empleados: "empleados"
};
// Se exporta firebase inicializado con las configuraciones pasadas
// por parametro.
export {firebase, db, colecciones}