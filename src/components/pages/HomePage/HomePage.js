import React from "react";
import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featurInfo/FeaturedInfo";
import { UserData } from "../../../data";
import WidgetSm from "../../widget/WidgetSm";
import WidgetLg from "../../widget/WidgetLg";
import "./homepage.css";
function HomePage() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={UserData} dataKey="User" grid />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default HomePage;
