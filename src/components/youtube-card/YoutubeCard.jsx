import React, { useEffect, useState } from "react";

import "./YoutubeCard.scss";
const YoutubeCard = ({ item }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  // console.log(windowSize.innerWidth);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <div
      className="card"
      style={{
        gridTemplateColumns:
          windowSize.innerWidth < 500
            ? `${item.snippet.thumbnails.default.width}px auto`
            : `${item.snippet.thumbnails.medium.width}px auto`,
      }}
    >
      <img
        src={
          windowSize.innerWidth < 500
            ? item.snippet.thumbnails.default.url
            : item.snippet.thumbnails.medium.url
        }
        alt="Avatar"
        style={{
          width:
            windowSize.innerWidth < 500
              ? `${item.snippet.thumbnails.default.width}px auto`
              : `${item.snippet.thumbnails.medium.width}px auto`,
          height:
            windowSize.innerWidth < 500
              ? `${item.snippet.thumbnails.default.height}px auto`
              : `${item.snippet.thumbnails.medium.height}px auto`,
        }}
      />
      <div className="container">
        <h4>
          <b>{item.snippet.title}</b>
        </h4>
        <div className="desc">{item.snippet.channelTitle}</div>
        <p className="vedio-desc">{item.snippet.description}</p>
      </div>
    </div>
  );
};

export default YoutubeCard;
