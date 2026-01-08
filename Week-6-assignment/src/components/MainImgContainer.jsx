function MainImgContainer({ photo, currentIndex }) {
  if (!photo || !photo[currentIndex]) return null;
  return (
    <>
      <div className="main-img-container">
        <img
          className="main-img"
          src={photo[currentIndex].url}
          alt="Random Frog"
        />
      </div>
    </>
  );
}

export default MainImgContainer;
