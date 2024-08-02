import React, { useState, useEffect } from "react";
import { MdFullscreen } from "react-icons/md";
import styles from "./Slider.module.sass";

function Slider({ sliderContent }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setCurrentSlide(prevSlide =>
          prevSlide === sliderContent.length - 1 ? 0 : prevSlide + 1
        );
      }, 2000);
    }
    return () => clearInterval(slideInterval);
  }, [isPlaying, sliderContent.length]);

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === sliderContent.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? sliderContent.length - 1 : prevSlide - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <h1 className={styles.sliderTitle}>
        {sliderContent[currentSlide].title}
      </h1>
      <div className={styles.sliderContainer} style={{ position: "relative" }}>
        <img
          className={styles.sliderImg}
          src={sliderContent[currentSlide].img}
          alt={sliderContent[currentSlide].title}
        />

        <div className={styles.sliderNavigation}>
          <button className={styles.prevSlide} onClick={prevSlide}>
            {"<"}
          </button>
          <button className={styles.playPauseBtn} onClick={toggleAutoPlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button className={styles.nextSlide} onClick={nextSlide}>
            {">"}
          </button>
          <button className={styles.fullScreenBtn} onClick={toggleFullScreen}>
            <MdFullscreen />
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
