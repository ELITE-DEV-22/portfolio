import React, { useEffect, useState } from "react";
import "./timeline.css";

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const timeline = document.getElementById("timeline");
      const timelinePosition = timeline.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the timeline is in view
      if (timelinePosition < windowHeight) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); // Remove listener after it's visible
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container py-16" id="timeline">
      <div className="timeline-line"></div>

      <div className={`timeline-point ${isVisible ? 'fade-in' : ''}`}>
        <div className="dot"></div>
        <div className="year font-bold mb-2">2020</div>
        <div className="grade text-sm mt-5">Grade 10</div>
        <div className="school text-sm">Canossa High School</div>
      </div>

      <div className={`timeline-point ${isVisible ? 'fade-in' : ''}`}>
        <div className="dot"></div>
        <div className="year font-bold mb-2">2022</div>
        <div className="grade text-sm mt-5">Grade 12</div>
        <div className="school text-sm">Vartak College</div>
      </div>

      <div className={`timeline-point ${isVisible ? 'fade-in' : ''}`}>
        <div className="dot"></div>
        <div className="year font-bold mb-2">2024</div>
        <div className="grade text-sm mt-5">Bachelor’s Degree</div>
        <div className="school text-sm">Fr. Conceicao Rodrigues College of Engineering</div>
      </div>
    </div>
  );
};

export default Timeline;
