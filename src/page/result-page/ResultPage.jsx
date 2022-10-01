import React, { useContext } from "react";
import HomeContext from "../../contexts/home-context/HomeProvider";
import YoutubeCard from "../../components/youtube-card/YoutubeCard";
import Loading from "../../components/loading/Loading";

const ResultPage = () => {
  const { respons, loadingRes } = useContext(HomeContext);

  const renderResultCard = () => {
    if (loadingRes) {
      return (
        <div
          className="empty-data"
          style={{ margin: "auto", width: "max-content" }}
        >
          <Loading />
        </div>
      );
    } else if (respons?.length === 0) {
      return <h1>No data found!!!</h1>;
    } else if (respons?.length > 0)
      return respons.map((item, index) => (
        <YoutubeCard key={index} item={item} />
      ));
  };

  return (
    <div className="home-page">
      <div className="custom-container">
        <div className="info-div">
          <div
            className="result-count"
            style={{
              marginTop: 32,
            }}
          >
            About {respons?.length} Filtered Result
          </div>
        </div>
        {renderResultCard()}
      </div>
    </div>
  );
};

export default ResultPage;
