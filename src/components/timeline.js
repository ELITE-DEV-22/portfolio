import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./timeline.css";

const data = [
  { dateLabel: "Grade 10, 2020", title: "Canossa High School, Vasai" },
  { dateLabel: "Grade 12, 2022", title: "Vartak College, Vasai" },
  { dateLabel: "BE ECS", title: "2022-Current" },
];

const HorizontalTimeline = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      grabCursor: true,
      navigation: {
        nextEl: ".next-slide",
        prevEl: ".prev-slide",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div id="app" className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="swiper-container">
            <div className="swiper-control"></div>
            <div className="swiper-wrapper timeline">
              {data.map((item, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="timestamp">
                    <span className="date">{item.dateLabel}</span>
                  </div>
                  <div className="status">
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Add Pagination */}
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
