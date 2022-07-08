import React, { useState } from "react";
import "./ProductList.css";

import { Delete, DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../../data";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState(productRows);

  const handledelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "product",
      headerName: " Product ",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="Listproduct">
            <img className="ListproductImg" src={params.row.img} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "price",
      headerName: "price",

      width: 200,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <Delete
              className="productListDelete"
              onClick={() => handledelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="ProductList">
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid
          disableSelectionOnClick
          rows={data}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default ProductList;
