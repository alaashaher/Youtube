import React from "react";

import "./YoutubeCard.scss";
const YoutubeCard = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <img
        src={item.snippet.thumbnails.medium.url}
        alt="Avatar"
        style={{
          width: `${item.snippet.thumbnails.medium.width}px`,
          height: `${item.snippet.thumbnails.medium.height}px`,
        }}
      />
      <div className="container">
        <h4>
          <b>{item.snippet.title}</b>
        </h4>
        <div className="desc">{item.snippet.channelTitle}</div>
        <p>{item.snippet.description}</p>
      </div>
    </div>
  );
};

export default YoutubeCard;
