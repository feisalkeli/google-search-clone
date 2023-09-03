import React from "react";
import { Outlet } from "react-router-dom";

const Videos = () => {
  return (
    <div>
      videos
      <Outlet />
    </div>
  );
};

export default Videos;
