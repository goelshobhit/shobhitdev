import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjWO9bPrYzUHnneY3nMNY0aL9dpJVGRpc",
  authDomain: "shobhitdev-782b8.firebaseapp.com",
  projectId: "shobhitdev-782b8",
  storageBucket: "shobhitdev-782b8.appspot.com",
  messagingSenderId: "374767910597",
  appId: "1:374767910597:web:099d995c5201175f273aac",
  measurementId: "G-C9E0DT5LES"
};

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
