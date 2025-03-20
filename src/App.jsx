import { useState } from "react";
import "./App.css";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?auto=format&fit=crop&w=800&h=400",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, SetLoading] = useState(true);

  const goToSlide = () => {
    setCurrentIndex((preIndex) =>
      preIndex === images.length - 1 ? 0 : preIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((preIndex) =>
      preIndex === 0 ? images.length - 1 : preIndex - 1
    );
  };

  const goToNext = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {loading ? (
          <div className="loading-placeholder">Loading amazing images...</div>
        ) : (
          <>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Slide ${index + 1}`}
                className={`carousel-image ${
                  index === currentIndex ? "active" : ""
                }`}
              />
            ))}
          </>
        )}
        <button onClick={goToPrevious} className="carousel-button prev">
          &lt;
        </button>
        <button onClick={goToNext} className="carousel-button next">
          &gt;
        </button>
      </div>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToNext(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
