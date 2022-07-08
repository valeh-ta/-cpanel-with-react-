import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.css";

function FeaturedInfo() {
  return (
    <div className="Fe">
      <div className="F-item">
        <span className="F-title">Revenue</span>
        <div className="F-mony-container">
          <span className="Fmoney">$ 2,485</span>
          <span className="F-money-rate">
            -11.4 <ArrowDownward className="F-Icon negative" />
          </span>
        </div>
        <span className="F-sub">compared to last month</span>
      </div>

      <div className="F-item">
        <span className="F-title">Revenue</span>
        <div className="F-mony-container">
          <span className="Fmoney">$ 2,485</span>
          <span className="F-money-rate">
            -11.4 <ArrowUpward className="F-Icon" />
          </span>
        </div>
        <span className="F-sub">compared to last month</span>
      </div>

      <div className="F-item">
        <span className="F-title">Revenue</span>
        <div className="F-mony-container">
          <span className="Fmoney">$ 2,485</span>
          <span className="F-money-rate">
            -11.4 <ArrowDownward className="F-Icon negative" />
          </span>
        </div>
        <span className="F-sub">compared to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
