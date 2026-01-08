function ThumbnailContainer({ photo, setCurrentIndex }) {
  if (!photo) return null;

  return (
    <>
      <div className="thumbnail-container">
        {(photo || []).slice(1, 6).map((img, index) => (
          <img
            className={`thumbnail-img`}
            key={index}
            src={img.url}
            alt={img.alt}
            onClick={() => setCurrentIndex(index + 1)}
          />
        ))}
      </div>
    </>
  );
}

export default ThumbnailContainer;
