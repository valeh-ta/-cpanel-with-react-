import React from "react";
import "./widget.css";
import maryam from "../../img/2.jpg";
function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"w-Lg-button " + type}>{type}</button>;
  };

  return (
    <div className="Widget-Lg">
      <h3 className="w-Lg-title">Lates Transactions</h3>
      <table className="w-Lg-table">
        <tr className="w-Lg-tr" key="">
          <th className="w-Lg-th">Customer</th>
          <th className="w-Lg-th">Date</th>
          <th className="w-Lg-th">Amount</th>
          <th className="w-Lg-th">Status</th>
        </tr>
        <tr className="w-Lg-tr" key="">
          <td className="w-Lg-user">
            <img src={maryam} alt="Customer" className="w-Lg-img" />
            <span className="w-Lg-name">valeh ta </span>
          </td>
          <td className="w-Lg-date">2 Apr 2022</td>
          <td className="w-Lg-Amount">$150.00</td>
          <td className="w-Lg-Status">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="w-Lg-tr" key="">
          <td className="w-Lg-user">
            <img src={maryam} alt="Customer" className="w-Lg-img" />
            <span className="w-Lg-name">valeh ta </span>
          </td>
          <td className="w-Lg-date">2 Apr 2022</td>
          <td className="w-Lg-Amount">$150.00</td>
          <td className="w-Lg-Status">
            <Button type={"pending"} />
          </td>
        </tr>
        <tr className="w-Lg-tr" key="">
          <td className="w-Lg-user">
            <img src={maryam} alt="Customer" className="w-Lg-img" />
            <span className="w-Lg-name">valeh ta </span>
          </td>
          <td className="w-Lg-date">2 Apr 2022</td>
          <td className="w-Lg-Amount">$150.00</td>
          <td className="w-Lg-Status">
            <Button type={"Approved"} />
          </td>
        </tr>
        <tr className="w-Lg-tr" key="">
          <td className="w-Lg-user">
            <img src={maryam} alt="Customer" className="w-Lg-img" />
            <span className="w-Lg-name">valeh ta </span>
          </td>
          <td className="w-Lg-date">2 Apr 2022</td>
          <td className="w-Lg-Amount">$150.00</td>
          <td className="w-Lg-Status">
            <Button type={"Declined"} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLg;
