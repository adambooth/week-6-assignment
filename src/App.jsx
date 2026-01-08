import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainImgContainer from "./components/MainImgContainer";
import FrogAPI from "./components/FrogAPI";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [UnsplashPhoto, setUnsplashPhoto] = useState(null);
  const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  const fetchPhoto = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${key}`
    );
    const data = await response.json();
    setUnsplashPhoto(data);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.unsplash.com/photos/random`, {
        headers: {
          Authorization: `Client-ID ${key}`,
        },
      });
      const data = await response.json();
      setUnsplashPhoto(data);
    }

    getData();
  }, []);

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
        <div className="unsplash-container">
          <h1>Why not try generate a random Photo?</h1>
          <button className="generate-photo-btn" onClick={fetchPhoto}>
            Click Me!
          </button>
          {UnsplashPhoto ? (
            <img
              className="generated-img"
              src={UnsplashPhoto.urls.regular}
              alt={UnsplashPhoto.alt_description}
            />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
