/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import HomeContext from "../../contexts/home-context/HomeProvider";
import queryString from "query-string";

import "./MainAppBarLg.scss";

import logo from "../../logo.png";
import { getFromAPI } from "../../api/apis";

const MainAppBarLg = ({ className }) => {
  const navigate = useNavigate();

  const { setSearchText, searchText } = useContext(HomeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      navigate(`/result?search=${searchText}`);
    }
  };

  const { search } = useLocation();
  const values = queryString.parse(search);
  const { setRespons, setLoadingRes } = useContext(HomeContext);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoadingRes(true);
        const res = await getFromAPI(
          `search?part=snippet&q=${values?.search}&type=video&key=AIzaSyDjdXalf2C36lOAYTGLhgBghJut-SEm3ZY`
        );
        // console.log(res);
        setLoadingRes(false);
        if (res.status === 200) {
          setRespons(res.data.items);
        } else setRespons([]);
      } catch (error) {
        setLoadingRes(false);
      }
    };
    getData();
  }, [search]);

  useEffect(() => {
    if (values?.search) setSearchText(values?.search);
  }, []);

  return (
    <div className={className}>
      <div className="custom-container">
        <div className="nav-content-wrapper">
          <Link to="/" className="logo">
            <img src={logo} alt="log" />
          </Link>
          <form onSubmit={handleSubmit}>
            <div className="search-box">
              <input
                type="text"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              />
              <div className="btn-div">
                <button type="submit" className="search-btn">
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainAppBarLg;
