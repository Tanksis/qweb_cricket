import AboutSection from "../../components/AboutSection/AboutSection";
import "./Gallery.css";
import React from "react";
import Img1 from "./Photos/img1.jpg";
import Img2 from "./Photos/img2.jpg";
import Img3 from "./Photos/img3.jpeg";
import Img4 from "./Photos/img4.jpeg";
import Img5 from "./Photos/img5.jpeg";
import Img6 from "./Photos/img6.jpeg";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 4,
      imgSrc: Img4,
    },
    {
      id: 5,
      imgSrc: Img5,
    },
    {
      id: 6,
      imgSrc: Img6,
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Gallery</h1>
    </>
  );

  return (
    <div className="about-sections">
      <AboutSection title={title} content={content} />
    </div>
  );
  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="Pictures" key={index}>
              <img src={p.imgSrc} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
