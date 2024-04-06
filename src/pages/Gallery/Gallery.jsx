import React, { useState } from "react";
import "./Gallery.css";

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
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
    setTempImgSrc("");
  };
  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    setTempImgSrc(data[nextIndex].imgSrc);
    setCurrentIndex(nextIndex);
  };
  const previousImage = () => {
    const previousIndex = (currentIndex - 1 + data.length) % data.length;
    setTempImgSrc(data[previousIndex].imgSrc);
    setCurrentIndex(previousIndex);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: "20px 0",
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          color: "#b90e31",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "18px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          lineHeight: "1.3em",
        }}
      >
        Photo Gallery
      </h1>
      <div className={model ? "model open" : "model"}>
        <button className="close-button" onClick={closeModel}>
          &#10006; {/* Unicode for "times" symbol */}
        </button>
        <button className="next-button" onClick={nextImage}>
          &gt;
        </button>
        <button className="prev-button" onClick={previousImage}>
          &lt;
        </button>

        <img src={tempImgSrc} className="fullscreen-img" />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="Pictures"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
