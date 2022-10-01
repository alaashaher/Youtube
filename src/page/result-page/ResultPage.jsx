import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import HomeContext from "../../contexts/home-context/HomeProvider";
import { getFromAPI } from "../../api/apis";
import YoutubeCard from "../../components/youtube-card/YoutubeCard";
import Loading from "../../components/loading/Loading";

const ResultPage = () => {
  const location = useParams();
  const { respons, setRespons } = useContext(HomeContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getFromAPI(
          `search?part=snippet&q=${location.id}&type=video&key=AIzaSyAcg31XJ2RDXTYDXQF-FmG8I6cTKDMvo2Y`
        );
        // console.log(res);
        if (res.status === 200) {
          setRespons(res.data.items);
        } else setRespons([]);
      } catch (error) {}
    };
    getData();
  }, [setRespons, location.id]);

  const renderResultCard = () => {
    if (!respons || respons?.length === 0) {
      return (
        <div
          className="empty-data"
          style={{ margin: "auto", width: "max-content" }}
        >
          <Loading />
        </div>
      );
    }
    return respons.map((item, index) => (
      <YoutubeCard key={index} item={item} />
    ));
  };

  return (
    <div className="home-page">
      <div className="custom-container">
        <div className="info-div">
          <div className="result-count">
            About {respons?.length} Filtered Result
          </div>
        </div>
        {renderResultCard()}
      </div>
    </div>
  );
};

export default ResultPage;
