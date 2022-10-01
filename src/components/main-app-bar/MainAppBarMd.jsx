import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeContext from "../../contexts/home-context/HomeProvider";

import logo from "../../favicon_48x48.png";

import "./MainAppBarMd.scss";

const MainAppBarMd = ({ className }) => {
  const navigate = useNavigate();

  const { setSearchText, searchText } = useContext(HomeContext);
  const [searchInput, setsearchInput] = useState(false);
  let textInput = React.createRef();

  return (
    <div className={className}>
      <div className="custom-container">
        <div className="nav-content-wrapper">
          <div className="nav-lang-wrapper">
            <Link to="/" className="logo">
              <img src={logo} alt="log" />
            </Link>
          </div>
          <div className="search-box">
            {searchInput ? (
              <div className="input-div">
                <input
                  type="text"
                  ref={textInput}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setSearchText(e.target.value);
                      navigate(`/result/search/${searchText}`, {
                        state: { id: searchText },
                      });
                    }
                  }}
                />
                <button
                  onClick={() => {
                    setsearchInput(false);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMid meet"
                    focusable="false"
                    className="style-scope yt-icon"
                    style={{
                      pointerEvents: "none",
                      display: "block",
                      width: "20px",
                      height: "20px",
                      // stroke: "#fff",
                    }}
                  >
                    <g class="style-scope yt-icon">
                      <path
                        d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
                        className="style-scope yt-icon"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            ) : (
              <div></div>
            )}

            <div className="btn-div">
              <button
                className="search-btn"
                onClick={() => {
                  setsearchInput(true);
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  className="style-scope yt-icon"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    stroke: "#fff",
                  }}
                >
                  <g className="style-scope yt-icon">
                    <path
                      d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
                      className="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          {/* <Logo className="main-app-bar-logo" /> */}
        </div>
      </div>
    </div>
  );
};

export default MainAppBarMd;
