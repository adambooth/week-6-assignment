import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ThumbnailContainer from "./components/ThumbnailContainer";
import MainImgContainer from "./components/MainImgContainer";
import FrogAPI from "./components/FrogAPI";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  //state
  // -- variable to store api image data
  // -- variable to store current image

  //effects
  // -- fetch data from the api
  // -- once its fetched put it in state

  //functions
  // -- when a user clicks an image(update state)
  // -- when a user presses a button(Tab, Enter)

  const [photo, setPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="app-container">
        <NavBar />
        <FrogAPI setPhoto={setPhoto} />
        <div className="main-container">
          <div className="main-img-container">
            <SideBar
              photo={photo}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
            <MainImgContainer photo={photo} currentIndex={currentIndex} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
