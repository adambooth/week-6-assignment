function SideBar({ photo, setCurrentIndex }) {
  if (!photo) return null;

  return (
    <>
      <div className="sidebar-container">
        <h2>Our Frog Images</h2>
        <div className="carousel">
          {(photo || []).slice(0, 6).map((img, index) => (
            <img
              className={`card`}
              key={index}
              src={img.url}
              alt={img.alt}
              onClick={() => setCurrentIndex(index)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentIndex(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SideBar;
