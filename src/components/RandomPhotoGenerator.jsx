function RandomPhotoGenerator({ UnsplashPhoto, fetchPhoto }) {
  return (
    <div className="unsplash-container">
      <h1>Why not try generate a random Photo?</h1>
      <button className="generate-photo-btn" onClick={fetchPhoto}>
        Click Me!
      </button>
      <div className="search-container">
        <h1>Or Search For One?</h1>
      </div>
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
  );
}

export default RandomPhotoGenerator;
