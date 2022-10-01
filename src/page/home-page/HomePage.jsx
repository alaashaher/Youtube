import React, { useContext, useEffect } from "react";
import HomeContext from "../../contexts/home-context/HomeProvider";
import { getFromAPI } from "../../api/apis";
import YoutubeCard from "../../components/youtube-card/YoutubeCard";
import Loading from "../../components/loading/Loading";

const HomePage = () => {
  const { respons, setRespons, searchText } = useContext(HomeContext);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getFromAPI(
          `search?part=snippet&q=${searchText}&type=video&key=AIzaSyAcg31XJ2RDXTYDXQF-FmG8I6cTKDMvo2Y`
        );
        // console.log(res);
        if (res.status === 200) {
          setRespons(res.data.items);
        } else setRespons([]);
      } catch (error) {}
    };
    getData();
  }, [setRespons, searchText]);

  const renderResultCard = () => {
    if (!respons || respons?.length === 0) {
      return (
        <div
          className="empty-data"
          style={{ margin: "auto", width: "max-content" }}
        >
         <Loading/>
        </div>
      );
    }
    return respons.map((item, index) => (
      <YoutubeCard key={index} item={item} />
    ));
  };

  return (
    <div className="home-page">
      <div className="custom-container">{renderResultCard()}</div>
    </div>
  );
};

export default HomePage;
