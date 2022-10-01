import React from "react";

import MainAppBarLg from "./MainAppBarLg";
import MainAppBarMd from "./MainAppBarMd";

const MianAppBar = () => {
  return (
    <>
      <MainAppBarLg className={`main-app-bar main-app-bar-lg`} />

      <MainAppBarMd className={`main-app-bar main-app-bar-md`} />
    </>
  );
};

export default MianAppBar;
