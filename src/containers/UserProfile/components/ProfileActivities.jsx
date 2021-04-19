import React, { Component } from "react";
import BasicTable from "./BasicTable";
import DataTable from "react-data-table-component";
import CustomDropdown from "./CustomDropdown";

const ProfileActivities = () => {
  const data = [
    {
      id: 1,
      username: "Andrei",
      email: "example@email.com",
      dataadag: "01.04.2021",
    },
    {
      id: 1,
      username: "Radu",
      email: "anotherexample@email.com",
      dataadag: "02.04.2021",
    },
  ];

  const ExpandableComponent = ({ data }) => <CustomDropdown />;

  const columns = [
    {
      name: "User",
      selector: "username",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: true,
    },
    {
      name: "Data Adaugarii",
      selector: "dataadag",
      sortable: true,
      right: true,
    },
  ];

  return (
    <DataTable
      title="De aici puteti seta permisiunile bla bla bla"
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={<ExpandableComponent />}
    />
  );
};

{
  /* <BasicTable />; */
}

export default ProfileActivities;
