import "./App.css";
import Index from "./compoments";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmlosxFQNKWceg9iKV3jumYb6k8Z3PdkY",
  authDomain: "weatherapp-84c4a.firebaseapp.com",
  projectId: "weatherapp-84c4a",
  storageBucket: "weatherapp-84c4a.appspot.com",
  messagingSenderId: "434434509257",
  appId: "1:434434509257:web:c37b535fd0773ab9400018",
  measurementId: "G-J9VBM18WXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgb(240,242,240)",
      }}
    >
      <Index />
    </div>
  );
}

export default App;
