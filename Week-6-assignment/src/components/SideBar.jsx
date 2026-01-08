function SideBar({ photo, setCurrentIndex }) {
  if (!photo) return null;

  return (
    <>
      <div className="sidebar-container">
        <h2>Our Frog Images</h2>
        <div className="carousel">
          {(photo || []).slice(1, 6).map((img, index) => (
            <img
              className={`card`}
              key={index}
              src={img.url}
              alt={img.alt}
              onClick={() => setCurrentIndex(index + 1)}
            />
          ))}
          {(photo || []).slice(1, 6).map((img, index) => (
            <img
              className={`card`}
              key={index}
              src={img.url}
              alt={img.alt}
              onClick={() => setCurrentIndex(index + 1)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
