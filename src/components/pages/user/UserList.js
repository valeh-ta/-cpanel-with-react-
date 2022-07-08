import React, { useState } from "react";
import "./userlist.css";
import { Delete, DeleteOutline } from "@material-ui/icons";
import { DataGrid } from "@mui/x-data-grid";
import { UserRows } from "../../../data";
import { Link } from "react-router-dom";

function UserList() {
  const [data, setData] = useState(UserRows);

  const handledelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "UserName",
      headerName: " UserName ",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="ListUser">
            <img className="ListUserImg" src={params.row.avatar} alt="avatar" />
            {params.row.UserName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",

      width: 200,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/users/${params.row.id}`}>
              <button className="UserListEdit">Edit</button>
            </Link>
            <Delete
              className="UserListDelete"
              onClick={() => handledelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
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
  );
}

export default UserList;
